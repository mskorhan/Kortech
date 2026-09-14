#!/usr/bin/env node
// Regression guard for the routing/canonical/GEO bugs fixed in the
// September 2026 remediation pass. Everything here asserts on generated
// output, not on live HTTP - there is no Apache in CI, so the real redirect
// and status-code matrix runs post-deploy (scripts/verify-production.mjs).
//
// Each check maps to a confirmed Search Console finding:
//   1. /blog/<anything>/ resolved 200 via a wildcard in the known-routes list
//   2. 404s served the homepage body, canonical and all
//   3. non-canonical URL forms leaked into sitemap/canonical/og:url
//   4. the duplicate pinevillecomputers.com host
//   5. FAQ answers carried `hidden`, so AI extractors dropped them
//   6. self-serving aggregateRating in our own LocalBusiness schema
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes } from './routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const CANONICAL_ORIGIN = 'https://www.kortechservice.com';
const STAGING_HOST = 'kortechservice.pinevillecomputers.com';

const failures = [];
const fail = (check, detail) => failures.push(`${check}: ${detail}`);

function walkIndexHtml(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walkIndexHtml(full));
    else if (entry === 'index.html') out.push(full);
  }
  return out;
}

// --- 1. known-routes whitelist must be literal, complete, wildcard-free ----
function checkKnownRoutes() {
  const htaccess = readFileSync(path.join(ROOT, 'public', '.htaccess'), 'utf8');
  const match = htaccess.match(
    /# BEGIN generated known-routes[^\n]*\n(RewriteCond %\{REQUEST_URI\} !\^\/\(([^\n]*)\)\/\?\$)\n# END generated known-routes/
  );
  if (!match) {
    fail('known-routes', 'could not find the generated known-routes block in public/.htaccess');
    return;
  }

  const alternation = match[2];
  const listed = new Set(alternation.split('|'));

  // A wildcard here is what let /blog/<any-fake-slug>/ match the whitelist,
  // skip the R=404 rule and fall through to index.html at HTTP 200.
  for (const meta of ['[^/]+', '.*', '.+', '(', ')', '?', '*', '+']) {
    if (alternation.includes(meta)) {
      fail('known-routes', `contains regex metacharacter "${meta}" - it must be a literal alternation of full route paths`);
      return;
    }
  }

  for (const { path: route } of routes) {
    if (route === '/') continue;
    const clean = route.replace(/^\//, '');
    if (!listed.has(clean)) fail('known-routes', `route "${route}" is missing from the whitelist`);
  }
  for (const entry of listed) {
    if (!routes.some((r) => r.path.replace(/^\//, '') === entry)) {
      fail('known-routes', `whitelist entry "${entry}" does not correspond to any route in routes.mjs`);
    }
  }

  // Every blog route must be listed by its full path.
  const blogRoutes = routes.filter((r) => r.path.startsWith('/blog/'));
  if (blogRoutes.length === 0) fail('known-routes', 'expected blog routes in routes.mjs but found none');
  for (const { path: route } of blogRoutes) {
    if (!listed.has(route.replace(/^\//, ''))) {
      fail('known-routes', `blog route "${route}" must be whitelisted by its full slug, not a wildcard`);
    }
  }
}

// --- 2. the 404 document must not impersonate the homepage ----------------
function check404Document() {
  const p = path.join(DIST, '404.html');
  if (!existsSync(p)) {
    fail('404-document', 'dist/404.html does not exist - ErrorDocument would fall back to homepage markup');
    return;
  }
  const html = readFileSync(p, 'utf8');

  if (/rel="canonical"/.test(html)) {
    fail('404-document', 'contains a rel=canonical tag; a 404 must not claim to be a canonical URL');
  }
  if (!/name="robots"[^>]*content="noindex/.test(html)) {
    fail('404-document', 'missing a noindex robots directive');
  }
  if (/name="robots"[^>]*content="index/.test(html)) {
    fail('404-document', 'declares index,follow - this is what made junk URLs indexable as the homepage');
  }
  if (!/Page Not Found/.test(html)) {
    fail('404-document', 'does not contain the Not Found content - did the prerender capture the wrong page?');
  }

  // The specific regression: byte-identical to the homepage.
  const home = path.join(DIST, 'index.html');
  if (existsSync(home) && readFileSync(home, 'utf8') === html) {
    fail('404-document', 'is byte-for-byte identical to the homepage');
  }
  // og:url must not be minted from whatever arbitrary path was requested.
  const og = html.match(/property="og:url"[^>]*content="([^"]+)"/);
  if (og && og[1] !== `${CANONICAL_ORIGIN}/`) {
    fail('404-document', `og:url is "${og[1]}"; a noindex 404 must not mint a page-specific URL`);
  }
}

// --- 3/4. no non-canonical or staging URLs in crawler-facing output -------
function checkCanonicalUrls() {
  const sitemap = readFileSync(path.join(ROOT, 'public', 'sitemap.xml'), 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (locs.length !== routes.length) {
    fail('sitemap', `has ${locs.length} URLs but routes.mjs declares ${routes.length}`);
  }
  for (const loc of locs) {
    if (!loc.startsWith(`${CANONICAL_ORIGIN}/`)) fail('sitemap', `non-canonical origin: ${loc}`);
    if (!loc.endsWith('/')) fail('sitemap', `missing trailing slash: ${loc}`);
    if (loc.includes(STAGING_HOST)) fail('sitemap', `references the staging host: ${loc}`);
  }

  // The staging host must never appear in a crawler-facing position.
  for (const file of walkIndexHtml(DIST)) {
    const html = readFileSync(file, 'utf8');
    const rel = path.relative(DIST, file);
    if (!html.includes(STAGING_HOST)) continue;
    for (const re of [
      /rel="canonical"[^>]*href="([^"]*)"/g,
      /property="og:url"[^>]*content="([^"]*)"/g,
      /<loc>([^<]*)<\/loc>/g,
    ]) {
      for (const m of html.matchAll(re)) {
        if (m[1].includes(STAGING_HOST)) fail('staging-host', `dist/${rel} emits ${m[1]}`);
      }
    }
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      if (m[1].includes(STAGING_HOST)) fail('staging-host', `dist/${rel} references the staging host in JSON-LD`);
    }
  }
}

// --- 5. FAQ answers must be extractable ------------------------------------
function checkFaqExtractable() {
  let hiddenCount = 0;
  const offenders = new Set();
  for (const file of walkIndexHtml(DIST)) {
    const html = readFileSync(file, 'utf8');
    const matches = html.match(/id="faq-answer-\d+"[^>]*\shidden(?:=|[\s>])/g);
    if (matches) {
      hiddenCount += matches.length;
      offenders.add(path.relative(DIST, file));
    }
    // aria-hidden on the panel defeats extraction the same way `hidden` does.
    if (/id="faq-answer-\d+"[^>]*aria-hidden="true"/.test(html)) {
      fail('faq-extractable', `dist/${path.relative(DIST, file)} marks a FAQ answer aria-hidden`);
    }
  }
  if (hiddenCount > 0) {
    fail(
      'faq-extractable',
      `${hiddenCount} FAQ answer(s) across ${offenders.size} page(s) carry the hidden attribute; ` +
        'AI answer engines and readability extractors drop [hidden] subtrees'
    );
  }
}

// --- 6. no self-serving review markup --------------------------------------
function checkNoSelfServingRatings() {
  for (const file of walkIndexHtml(DIST)) {
    const html = readFileSync(file, 'utf8');
    const rel = path.relative(DIST, file);
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      if (/"aggregateRating"/.test(m[1])) {
        fail('review-markup', `dist/${rel} publishes aggregateRating in its own structured data`);
      }
      if (/"@type"\s*:\s*"Review"/.test(m[1])) {
        fail('review-markup', `dist/${rel} publishes Review nodes in its own structured data`);
      }
    }
  }
}

// --- JSON-LD must parse ----------------------------------------------------
function checkJsonLdParses() {
  for (const file of walkIndexHtml(DIST)) {
    const rel = path.relative(DIST, file);
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(m[1]);
      } catch (err) {
        fail('json-ld', `dist/${rel} has unparseable JSON-LD: ${err.message}`);
      }
    }
  }
}

function main() {
  if (!existsSync(DIST)) {
    console.error('validate-routing: dist/ not found - run the build first.');
    process.exit(1);
  }
  checkKnownRoutes();
  check404Document();
  checkCanonicalUrls();
  checkFaqExtractable();
  checkNoSelfServingRatings();
  checkJsonLdParses();

  if (failures.length > 0) {
    console.error('validate-routing: FAILED\n');
    for (const f of failures) console.error(`  ${f}`);
    console.error(`\n${failures.length} routing/SEO regression(s) detected.`);
    process.exit(1);
  }
  console.log(
    'validate-routing: OK - known-routes literal and complete, 404 document distinct and noindex, ' +
      'canonical URLs clean, no staging host, FAQ answers extractable, no self-serving review markup.'
  );
}

main();
