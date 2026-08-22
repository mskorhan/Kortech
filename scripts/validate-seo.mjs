#!/usr/bin/env node
// Post-prerender check: walks every dist/**/index.html and fails the build
// if any page has more or fewer than one of the critical singleton SEO tags
// (title, canonical, description, OG/Twitter title+description+image, robots).
// Catches the class of bug where a static tag in index.html and a
// react-helmet-async-rendered tag both end up in the prerendered output.
import { readFileSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Node 20 (CI) predates fs.globSync (added in Node 22) - walk manually.
function findIndexHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...findIndexHtmlFiles(full));
    } else if (entry === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

const CHECKS = [
  { label: 'title', re: /<title[\s>]/g },
  { label: 'canonical', re: /<link[^>]*rel="canonical"/g },
  { label: 'meta description', re: /<meta[^>]*name="description"/g },
  { label: 'og:title', re: /<meta[^>]*property="og:title"/g },
  { label: 'og:description', re: /<meta[^>]*property="og:description"/g },
  { label: 'og:url', re: /<meta[^>]*property="og:url"/g },
  { label: 'og:image', re: /<meta[^>]*property="og:image"(?!:)/g },
  { label: 'twitter:title', re: /<meta[^>]*name="twitter:title"/g },
  { label: 'twitter:description', re: /<meta[^>]*name="twitter:description"/g },
  { label: 'twitter:image', re: /<meta[^>]*name="twitter:image"/g },
  { label: 'robots', re: /<meta[^>]*name="robots"/g },
];

function countMatches(html, re) {
  return (html.match(re) || []).length;
}

function extractOne(html, re) {
  const match = html.match(re);
  return match ? match[0] : null;
}

// The server only serves 200 at the trailing-slash form of every route, so
// canonical/sitemap/og:url must all agree on that form - a canonical (or
// sitemap entry) pointing at the non-slash URL is self-defeating, since that
// URL just redirects away from itself.
function checkUrlConsistency(files) {
  const sitemapXml = readFileSync(SITEMAP_PATH, 'utf8');
  const sitemapUrls = new Set(
    [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  );

  let failures = 0;

  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const relPath = path.relative(DIST, file);
    const problems = [];

    const canonicalHref = extractOne(html, /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/);
    const ogUrlContent = extractOne(html, /<meta[^>]*property="og:url"[^>]*content="([^"]+)"/);

    if (canonicalHref) {
      const canonical = canonicalHref.match(/href="([^"]+)"/)[1];
      if (!canonical.endsWith('/')) {
        problems.push(`canonical missing trailing slash: ${canonical}`);
      }
      if (!sitemapUrls.has(canonical)) {
        problems.push(`canonical not present in sitemap.xml: ${canonical}`);
      }
      if (ogUrlContent) {
        const ogUrl = ogUrlContent.match(/content="([^"]+)"/)[1];
        if (ogUrl !== canonical) {
          problems.push(`og:url (${ogUrl}) does not match canonical (${canonical})`);
        }
      }
    }

    if (problems.length > 0) {
      failures++;
      console.error(`FAIL dist/${relPath}: ${problems.join(', ')}`);
    }
  }

  return failures;
}

function main() {
  const files = findIndexHtmlFiles(DIST);
  if (files.length === 0) {
    console.error('validate-seo: no dist/**/index.html files found - did the build run?');
    process.exit(1);
  }

  let failures = 0;

  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const relPath = path.relative(DIST, file);
    const problems = [];

    for (const { label, re } of CHECKS) {
      const count = countMatches(html, re);
      if (count !== 1) {
        problems.push(`${label}=${count}`);
      }
    }

    if (problems.length > 0) {
      failures++;
      console.error(`FAIL dist/${relPath}: ${problems.join(', ')}`);
    }
  }

  failures += checkUrlConsistency(files);

  if (failures > 0) {
    console.error(`\nvalidate-seo: ${failures} page(s) have SEO tag or URL-consistency problems.`);
    process.exit(1);
  }

  console.log(`validate-seo: ${files.length} page(s) checked, all have exactly one of each critical SEO tag and consistent canonical/sitemap/og:url values.`);
}

main();
