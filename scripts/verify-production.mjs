#!/usr/bin/env node
// Post-deploy verification of the live server's routing behaviour.
//
// The build-time gates (validate-seo, validate-routing, check-dist-internal-
// links) assert on generated output. They cannot test status codes, redirect
// chains or ErrorDocument handling, because there is no Apache in CI. This
// script covers exactly that gap and is meant to be run against production
// AFTER a deploy - and, per the September 2026 audit, BEFORE restarting any
// Search Console "Validate Fix", so validation never runs against unfixed
// behaviour (that is what burned the 9/5 cycle).
//
// Usage: node scripts/verify-production.mjs [origin]
import process from 'process';

const ORIGIN = (process.argv[2] || 'https://www.kortechservice.com').replace(/\/$/, '');
const CANON = 'https://www.kortechservice.com';

const results = [];
const record = (ok, name, detail) => results.push({ ok, name, detail });

async function head(url) {
  const res = await fetch(url, { method: 'HEAD', redirect: 'manual' });
  return { status: res.status, location: res.headers.get('location'), headers: res.headers };
}

async function get(url) {
  const res = await fetch(url, { redirect: 'manual' });
  const body = res.status >= 200 && res.status < 400 ? await res.text() : await res.text().catch(() => '');
  return { status: res.status, location: res.headers.get('location'), body, headers: res.headers };
}

// Follow redirects manually so we can count hops.
async function chain(url, max = 6) {
  const hops = [];
  let current = url;
  for (let i = 0; i < max; i++) {
    const res = await fetch(current, { method: 'HEAD', redirect: 'manual' });
    hops.push({ url: current, status: res.status });
    const loc = res.headers.get('location');
    if (res.status >= 300 && res.status < 400 && loc) {
      current = new URL(loc, current).toString();
      continue;
    }
    return { hops, final: current, finalStatus: res.status };
  }
  return { hops, final: current, finalStatus: null, tooMany: true };
}

async function checkRealPageIs200() {
  for (const p of ['/', '/services/', '/data-recovery/', '/blog/', '/charlotte-computer-repair/']) {
    const { status } = await get(`${ORIGIN}${p}`);
    record(status === 200, `real page 200: ${p}`, `got ${status}`);
  }
}

async function checkRealBlogSlugsAre200() {
  for (const p of [
    '/blog/how-to-fix-broken-ps5-hdmi-port/',
    '/blog/ipad-screen-repair-cost-guide/',
    '/blog/small-business-logo-design-checklist/',
  ]) {
    const { status } = await get(`${ORIGIN}${p}`);
    record(status === 200, `real blog slug 200: ${p}`, `got ${status}`);
  }
}

// THE headline regression: any fake blog slug used to return 200.
async function checkFakeUrlsAre404() {
  const fakes = [
    '/blog/this-slug-does-not-exist/',
    '/blog/aaaa-fake-post/',
    '/blog/../blog/nope/',
    '/definitely-not-real/',
    '/08419492435.shtml',
    '/shop/',
    '/gaming-console-repair/',
  ];
  for (const p of fakes) {
    const { status, body } = await get(`${ORIGIN}${p}`);
    record(status === 404, `fake URL 404: ${p}`, `got ${status}`);
    if (body) {
      record(!/rel="canonical"/.test(body), `fake URL has no canonical: ${p}`, 'body carries a rel=canonical tag');
      record(
        /name="robots"[^>]*content="noindex/.test(body),
        `fake URL is noindex: ${p}`,
        'body does not declare noindex'
      );
    }
    // HEAD must agree with GET.
    const h = await head(`${ORIGIN}${p}`);
    record(h.status === 404, `fake URL 404 on HEAD: ${p}`, `got ${h.status}`);
  }
}

// The 404 body must no longer be the homepage.
async function check404NotHomepage() {
  const home = await get(`${ORIGIN}/`);
  const notFound = await get(`${ORIGIN}/definitely-not-real-xyz/`);
  record(
    home.body !== notFound.body,
    '404 body differs from homepage',
    'the 404 response is byte-for-byte identical to the homepage'
  );
  record(
    /Page Not Found/.test(notFound.body),
    '404 body contains Not Found content',
    'expected the NotFound copy in the 404 body'
  );
}

// Canonical forms: non-canonical variants redirect, in as few hops as possible.
async function checkCanonicalRedirects() {
  const cases = [
    { from: 'http://kortechservice.com/', to: `${CANON}/` },
    { from: 'https://kortechservice.com/', to: `${CANON}/` },
    { from: 'http://www.kortechservice.com/', to: `${CANON}/` },
    { from: 'https://www.kortechservice.com/services', to: `${CANON}/services/` },
    { from: 'https://kortechservice.com/services', to: `${CANON}/services/` },
    { from: 'https://kortechservice.com/laptop-screen-repair', to: `${CANON}/laptop-screen-repair/` },
    { from: 'https://www.kortechservice.com/about-us', to: `${CANON}/about/` },
    { from: 'https://www.kortechservice.com/contact-us', to: `${CANON}/contact/` },
    { from: 'https://www.kortechservice.com/it-support', to: `${CANON}/business-it-support/` },
  ];
  for (const { from, to } of cases) {
    const { hops, final, finalStatus } = await chain(from);
    const redirectHops = hops.filter((h) => h.status >= 300 && h.status < 400).length;
    record(final === to, `redirect target: ${from}`, `landed on ${final} (expected ${to})`);
    record(finalStatus === 200, `redirect lands on 200: ${from}`, `final status ${finalStatus}`);
    record(redirectHops <= 2, `redirect hops <= 2: ${from}`, `took ${redirectHops} redirect hops`);
    for (const h of hops) {
      if (h.status >= 300 && h.status < 400) {
        record(h.status === 301, `redirect is permanent: ${h.url}`, `got ${h.status}, expected 301`);
      }
    }
  }
}

// The duplicate host must not serve an indexable copy any more.
async function checkStagingHost() {
  const host = 'https://kortechservice.pinevillecomputers.com/';
  let reachable = true;
  let outcome;
  try {
    outcome = await chain(host);
  } catch (err) {
    reachable = false;
    record(true, 'staging host not resolvable', `fetch failed: ${err.message} (acceptable outcome)`);
  }
  if (!reachable) return;

  const landedOnCanonical = outcome.final.startsWith(`${CANON}/`);
  if (landedOnCanonical) {
    record(true, 'staging host 301s to canonical', `landed on ${outcome.final}`);
    return;
  }
  // Not redirected - then it must at least be non-indexable.
  const res = await get(host);
  const xRobots = res.headers.get('x-robots-tag') || '';
  const noindexHeader = /noindex/i.test(xRobots);
  const noindexMeta = /name="robots"[^>]*content="[^"]*noindex/i.test(res.body || '');
  record(
    noindexHeader || noindexMeta,
    'staging host is non-indexable',
    `still serves ${res.status} with no redirect and no noindex (final: ${outcome.final})`
  );
}

// Files that must NOT get a trailing slash appended or otherwise break.
async function checkCrawlerControlFiles() {
  const files = [
    { path: '/robots.txt', must: /Sitemap:\s*https:\/\/www\.kortechservice\.com\/sitemap\.xml/ },
    { path: '/sitemap.xml', must: /<loc>https:\/\/www\.kortechservice\.com\// },
    { path: '/404.html', must: /Page Not Found/ },
  ];
  for (const { path: p, must } of files) {
    const { status, body } = await get(`${ORIGIN}${p}`);
    // 404.html fetched directly returns 200; that is fine and expected.
    record(status === 200, `control file 200: ${p}`, `got ${status}`);
    record(must.test(body || ''), `control file content: ${p}`, 'unexpected body');
  }
  // IndexNow key file - the deploy's ping verifies this is reachable and
  // correct before submitting, so a slash-append here breaks deploys.
  const key = '/7ba2ed8bc5364146aa46932994c8aeee.txt';
  const { status, body } = await get(`${ORIGIN}${key}`);
  record(status === 200, `IndexNow key 200: ${key}`, `got ${status}`);
  record(
    (body || '').trim() === '7ba2ed8bc5364146aa46932994c8aeee',
    'IndexNow key content matches filename',
    `got "${(body || '').trim().slice(0, 40)}"`
  );
}

// Sitemap must list only canonical URLs and match the live page count.
async function checkSitemap() {
  const { body } = await get(`${ORIGIN}/sitemap.xml`);
  const locs = [...(body || '').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  record(locs.length > 0, 'sitemap has URLs', 'no <loc> entries found');
  const bad = locs.filter((l) => !l.startsWith(`${CANON}/`) || !l.endsWith('/'));
  record(bad.length === 0, 'sitemap URLs all canonical', `non-canonical: ${bad.slice(0, 5).join(', ')}`);
  const staging = locs.filter((l) => l.includes('pinevillecomputers.com'));
  record(staging.length === 0, 'sitemap free of staging host', `found ${staging.length}`);
}

// FAQ answers must be present as ordinary text for AI extractors.
async function checkFaqExtractable() {
  const { body } = await get(`${ORIGIN}/virus-malware-removal/`);
  record(
    !/id="faq-answer-\d+"[^>]*\shidden(?:=|[\s>])/.test(body || ''),
    'FAQ answers not hidden',
    'a FAQ answer still carries the hidden attribute'
  );
  const text = (body || '')
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  record(/malware removal costs/i.test(text), 'FAQ answer text extractable', 'answer text not found in stripped text');
}

// No self-serving review markup in live structured data.
async function checkNoSelfServingRatings() {
  for (const p of ['/', '/monroe-computer-repair/', '/charlotte-computer-repair/']) {
    const { body } = await get(`${ORIGIN}${p}`);
    const blocks = [...(body || '').matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    const hasRating = blocks.some((b) => /"aggregateRating"/.test(b[1]));
    record(!hasRating, `no aggregateRating in schema: ${p}`, 'page still publishes aggregateRating');
  }
}

async function main() {
  console.log(`Verifying production routing at ${ORIGIN}\n`);
  const steps = [
    ['real pages', checkRealPageIs200],
    ['real blog slugs', checkRealBlogSlugsAre200],
    ['fake URLs 404', checkFakeUrlsAre404],
    ['404 body', check404NotHomepage],
    ['canonical redirects', checkCanonicalRedirects],
    ['staging host', checkStagingHost],
    ['crawler control files', checkCrawlerControlFiles],
    ['sitemap', checkSitemap],
    ['FAQ extraction', checkFaqExtractable],
    ['review markup', checkNoSelfServingRatings],
  ];
  for (const [label, fn] of steps) {
    try {
      await fn();
    } catch (err) {
      record(false, `${label} (threw)`, err.message);
    }
  }

  const failed = results.filter((r) => !r.ok);
  for (const r of results) {
    console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.ok ? '' : ` — ${r.detail}`}`);
  }
  console.log(`\n${results.length - failed.length}/${results.length} checks passed.`);
  if (failed.length > 0) {
    console.error(`\n${failed.length} production check(s) FAILED. Do not restart Search Console validation yet.`);
    process.exit(1);
  }
  console.log('\nProduction routing verified. Safe to restart Search Console "Validate Fix".');
}

main();
