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

// react-helmet-async emits `<script data-rh="true" type="application/ld+json">`,
// so a pattern anchored on `<script type=` matches nothing in the prerendered
// output. Keep this attribute-order-agnostic: an earlier strict version made
// the aggregateRating, Review and JSON-LD-parse guards below silently vacuous.
// Regex objects with /g carry lastIndex, so build a fresh one per use.
const JSON_LD_RE = () => /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;


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
    for (const m of html.matchAll(JSON_LD_RE())) {
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
    for (const m of html.matchAll(JSON_LD_RE())) {
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
    for (const m of html.matchAll(JSON_LD_RE())) {
      try {
        JSON.parse(m[1]);
      } catch (err) {
        fail('json-ld', `dist/${rel} has unparseable JSON-LD: ${err.message}`);
      }
    }
  }
}


// --- 7. no NEW FAQPage markup ----------------------------------------------
// config.json schemaPolicy: Google retired FAQ rich results in May 2026.
// Existing FAQPage JSON-LD is kept as semantic markup for other consumers,
// but no page may ADD it. This pins the set of pages allowed to emit it, so a
// new page picking up <FAQSection> (which emits FAQPage) fails the build.
const FAQPAGE_ALLOWLIST = new Set([
  'appliance-electronics-repair', 'ballantyne-computer-repair', 'business-it-support',
  'charlotte-computer-repair', 'custom-gaming-pc', 'data-recovery', 'graphic-design',
  'indian-trail-computer-repair', 'laptop-screen-repair', 'matthews-computer-repair',
  'mint-hill-computer-repair', 'monroe-computer-repair', 'nintendo-switch-repair',
  'pcb-micro-soldering', 'pineville-computer-repair', 'printer-router-repair',
  'ps5-hdmi-repair', 'remote-assistance', 'services', 'smart-tv-repair',
  'smartphone-screen-repair-charlotte', 'ssd-upgrades', 'stallings-computer-repair',
  'tablet-ipad-repair', 'virus-malware-removal', 'water-damage-repair',
  'waxhaw-computer-repair', 'weddington-computer-repair', 'xbox-hdmi-repair',
]);

function routeKeyFor(file) {
  const rel = path.relative(DIST, file).split(path.sep).join('/');
  return rel === 'index.html' ? '' : rel.replace(/\/index\.html$/, '');
}

function checkNoNewFaqPage() {
  for (const file of walkIndexHtml(DIST)) {
    const html = readFileSync(file, 'utf8');
    const key = routeKeyFor(file);
    for (const m of html.matchAll(JSON_LD_RE())) {
      if (/"@type"\s*:\s*"FAQPage"/.test(m[1]) && !FAQPAGE_ALLOWLIST.has(key)) {
        fail(
          'faq-schema',
          `dist/${key || 'index'} emits FAQPage JSON-LD but is not on the allowlist - ` +
            'schemaPolicy forbids adding new FAQPage markup (did a new page use <FAQSection>?)'
        );
      }
    }
  }
}

// --- 9. no promise that we email the customer a copy of their form --------
// worker/src/index.ts makes exactly one Resend call, with to: NOTIFY_TO_EMAIL
// (the owner) and the customer address only as reply_to. Nothing is sent to the
// customer, so any page that promises an emailed copy is making a claim the
// implementation does not support. The real mechanism is the printable copy the
// form renders after submit. If a customer-copy email is ever implemented, drop
// this guard in the same change that ships it - not before.
const CUSTOMER_EMAIL_PROMISE_PATTERNS = [
  /\bwill be emailed to you\b/i,
  /\bemailed to you\b/i,
  /\bwe(?:'ll| will) email you\b/i,
  /\bconfirmation email\b/i,
  /\byou will receive an email\b/i,
  /\bsent to your email\b/i,
];

function checkNoCustomerEmailPromise() {
  for (const file of walkIndexHtml(DIST)) {
    const text = readFileSync(file, 'utf8').replace(/<[^>]+>/g, ' ');
    for (const re of CUSTOMER_EMAIL_PROMISE_PATTERNS) {
      if (re.test(text)) {
        fail(
          'customer-email-promise',
          `${path.relative(DIST, file)} promises the customer an emailed copy (matched ${re}) - ` +
            'the worker emails only the owner; the published mechanism is the printable copy'
        );
      }
    }
  }
}

// --- 8. the Mac page must stay free of unconfirmed claims ------------------
// Every claim on /macbook-repair/ is limited to what the owner confirmed on
// 2026-10-23 plus the already-approved diagnostic/warranty/address facts. This
// is a pattern guard, not proof of truth: it catches the known-unconfirmed
// phrasings, it cannot verify a claim it has no pattern for. The
// phrases below are unconfirmed as of the 2026-10-22 owner-confirmation table
// and must not reappear - the page is built as the clean reference example.
const UNVERIFIED_CLAIM_PATTERNS = [
  [/\bbusiness days?\b/i, 'turnaround time'],
  [/\bsame[- ]day\b/i, 'same-day availability'],
  [/\bwalk[- ]?ins?\b/i, 'walk-in availability'],
  [/\bcertified\b/i, 'certification'],
  [/\bclean[- ]?room\b/i, 'cleanroom'],
  [/\bpickup and delivery\b/i, 'pickup and delivery'],
  [/\bminutes from\b/i, 'drive-time/landmark'],
  [/\bwe stock\b/i, 'parts stocking'],
  [/\bmile radius\b/i, 'service radius'],
];

function checkMacPageClaims() {
  const file = path.join(DIST, 'macbook-repair', 'index.html');
  if (!existsSync(file)) {
    fail('mac-page', 'dist/macbook-repair/index.html is missing');
    return;
  }
  const html = readFileSync(file, 'utf8');
  const text = html.replace(/<[^>]+>/g, ' ');
  for (const [re, label] of UNVERIFIED_CLAIM_PATTERNS) {
    if (re.test(text)) {
      fail(
        'mac-page-claims',
        `dist/macbook-repair/ contains an unconfirmed ${label} claim (matched ${re}) - ` +
          'see seo-intelligence/reports/owner-confirmation-table-2026-10-22.md'
      );
    }
  }
  // Apple authorization: per the owner (2026-10-23) the page must neither
  // claim nor deny Apple Authorized Service Provider status, affiliation or
  // endorsement. Naming the Apple models repaired is accurate and allowed;
  // any authorization or relationship language is not. This guard replaces an
  // earlier one that REQUIRED an independence disclaimer.
  for (const [re, label] of [
    [/authorized service provider/i, 'Apple authorization status'],
    [/\bauthorized (?:apple|service|repair)\b/i, 'Apple authorization status'],
    [/\b(?:not )?affiliated with apple\b/i, 'Apple affiliation'],
    [/\bapple[- ]certified\b/i, 'Apple certification'],
    [/\bapple[- ]endorsed\b/i, 'Apple endorsement'],
  ]) {
    if (re.test(text)) {
      fail(
        'mac-page-claims',
        `dist/macbook-repair/ mentions ${label} (matched ${re}) - the owner asked that this page ` +
          'neither claim nor deny Apple authorization, affiliation or endorsement'
      );
    }
  }
}

// --- 10. no misleading absolute same-day / turnaround promises ------------
// Owner-confirmed policy (2026-10-25):
//   - same-day repairs ARE guaranteed, but only for ELIGIBLE services, and
//     eligibility is confirmed by KorTech. So "same-day" is allowed; an
//     ALL/EVERY/ANY-shaped same-day promise is not, and neither is a same-day
//     claim attached to mail-in.
//   - mail-in turnaround is an ESTIMATE of 5-10 business days. A guaranteed
//     completion date, or a guaranteed shipping/delivery date, is not allowed.
// This is a pattern guard: it catches the absolute phrasings we know to be
// wrong, it cannot confirm that a hedged claim is true.
//
// Customer review text is EXCLUDED. reviews.json is refreshed by a monthly bot
// (update-reviews.yml); a customer writing "fixed it same day, guaranteed!"
// must not fail that PR. The exclusion is done by removing the exact review
// strings, not by matching markup, so it survives restyling of the review card.
// Sentences containing a negator are skipped before the patterns run. The
// correct wording is itself full of same-day and turnaround vocabulary -
// "Same-day service does not apply to mail-in repairs", "estimates, not
// guaranteed completion dates", "that is an estimate rather than a guaranteed
// completion date" - and a proximity match would flag exactly the sentences
// the policy requires. Only an AFFIRMATIVE promise may fail.
const PROMISE_NEGATORS =
  /\b(?:not|never|no longer|does not|doesn't|do not|don't|cannot|can't|excluded|separate|rather than|estimate|estimates|estimated|may vary|without)\b/i;

const ABSOLUTE_PROMISE_PATTERNS = [
  // same-day promised for all/every/any repair or device
  [/\b(?:all|every|any)\s+(?:of\s+our\s+)?(?:repairs?|devices?|services?)\b[^.]{0,30}\bsame[- ]day\b/i,
   'same-day claimed for all/every/any repair'],
  [/\bsame[- ]day\s+(?:service\s+|repairs?\s+)?(?:on|for)\s+(?:all|every|any)\b/i,
   'same-day claimed for all/every/any'],

  // a guaranteed completion / shipping / delivery DATE - never allowed
  [/\bguarantee(?:d|s)?\b[^.]{0,30}\b(?:completion|delivery|shipping)\s+dates?\b/i,
   'guaranteed completion/shipping date'],

  // same-day tied affirmatively to mail-in, either order.
  // A LINKING WORD is required between the two terms. Stripped markup collapses
  // unrelated UI labels into one pseudo-sentence (button text has no full stop),
  // e.g. "Start a mail-in repair  Call 704-246-7642  Same-Day SSD Installation
  // Available" - a link beside a banner, not a claim. Demanding a verb or
  // preposition keeps the real claim shapes and drops the adjacent labels.
  [/\b(?:mail[- ]in|mailed[- ]in)\b[^.]{0,40}\b(?:is|are|get|gets|receive|receives|qualify|qualifies|eligible|completed|finished|done|turned around|available)\b[^.]{0,30}\bsame[- ]day\b/i,
   'same-day applied to mail-in'],
  [/\bsame[- ]day\b[^.]{0,40}\b(?:for|on|to|applies|apply|includes|including|covers|available)\b[^.]{0,30}\b(?:mail[- ]in|mailed[- ]in)\b/i,
   'same-day applied to mail-in'],

  // the 5-10 business day ESTIMATE restated as a guarantee
  [/\bguaranteed\b[^.]{0,40}\b5-10\s+business days\b/i,
   'the 5-10 business day estimate stated as a guarantee'],
  [/\b5-10\s+business days\b[^.]{0,30}\bguaranteed\b/i,
   'the 5-10 business day estimate stated as a guarantee'],
];

function reviewTextSnippets() {
  // The strings the review component renders, so they can be removed before
  // scanning. Mirrors FiveStarReviews.tsx: text over 200 chars is truncated.
  const file = path.join(ROOT, 'src', 'data', 'reviews.json');
  if (!existsSync(file)) return [];
  try {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    const out = [];
    for (const r of data.fiveStarReviews || []) {
      if (typeof r.text !== 'string') continue;
      out.push(r.text);
      if (r.text.length > 200) out.push(r.text.substring(0, 200));
    }
    return out;
  } catch {
    return [];
  }
}

function checkNoAbsolutePromises() {
  const snippets = reviewTextSnippets();
  for (const file of walkIndexHtml(DIST)) {
    let text = readFileSync(file, 'utf8').replace(/<[^>]+>/g, ' ');
    // Drop customer review prose before matching (see note above).
    for (const s of snippets) {
      if (s.length < 12) continue;
      text = text.split(s).join(' ');
    }
    // Sentence-scoped so a negator in one sentence cannot excuse a promise in
    // the next, and so a promise cannot hide behind a neighbouring disclaimer.
    const sentences = text.split(/(?<=[.!?])\s+/);
    for (const [re, label] of ABSOLUTE_PROMISE_PATTERNS) {
      const hit = sentences.find((s) => re.test(s) && !PROMISE_NEGATORS.test(s));
      if (hit) {
        fail(
          'absolute-promise',
          `${path.relative(DIST, file)} makes a misleading absolute promise - ${label} ` +
            `(matched ${re}). Same-day is guaranteed for ELIGIBLE services only; mail-in ` +
            `turnaround is an ESTIMATE of 5-10 business days and never a guarantee.`
        );
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
  checkNoNewFaqPage();
  checkMacPageClaims();
  checkNoCustomerEmailPromise();
  checkNoAbsolutePromises();

  if (failures.length > 0) {
    console.error('validate-routing: FAILED\n');
    for (const f of failures) console.error(`  ${f}`);
    console.error(`\n${failures.length} routing/SEO regression(s) detected.`);
    process.exit(1);
  }
  console.log(
    'validate-routing: OK - known-routes literal and complete, 404 document distinct and noindex, ' +
      'canonical URLs clean, no staging host, FAQ answers extractable, no self-serving review markup, ' +
      'no new FAQPage markup, Mac page free of the listed claim patterns, ' +
      'no promise of a customer-emailed form copy, '  +
      'no misleading absolute same-day or turnaround promise.'
  );
}

main();
