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
// 2026-10-23 plus the already-approved diagnostic and address facts. (The 14-day
// warranty was listed here until 2026-10-26, when the owner confirmed KorTech
// provides NO warranties - see guard 12.) This
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
  [/\bpickup and delivery\b/i, 'pickup and delivery (owner-confirmed 2026-10-26: NOT offered)'],
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
// "Same-day service does not apply to mail-in repairs", "that is an estimate
// rather than a guaranteed completion date" - and matching on proximity alone
// flagged exactly the sentences the policy requires.
//
// The list is deliberately NARROW: only words that negate the claim itself.
// An earlier version also listed "no", "without", "separate" and "estimate",
// which made the guard nearly inert - "Mail-in repairs are completed same-day,
// without extra fees" was skipped over an incidental "without".
const PROMISE_NEGATORS =
  /\b(?:not|never|does not|doesn't|do not|don't|cannot|can't|rather than)\b/i;

// Wording that correctly conditions a same-day claim. A same-day claim that
// carries none of these is an unqualified promise.
// "usually", "common" and the like are genuine hedges, so they count. "shops"
// and "providers" mark a sentence as being about OTHER businesses, which is not
// our claim to qualify. "evaluation"/"diagnostic"/"response" are a different
// promise from a same-day REPAIR and are governed by their own open questions
// (issue #26 Q10), not by this policy.
const ELIGIBILITY_QUALIFIERS =
  /\b(?:eligible|eligibility|select|many|some|most|available|availability|ask|contact|confirm|depend\w*|often|typically|usually|possible|may|qualify|qualifies|common|shops?|providers?|evaluation|diagnostics?|response|can be|could|would|worth|premium)\b/i;

const ABSOLUTE_PROMISE_PATTERNS = [
  // same-day promised for all/every/any repair or device
  [/\b(?:all|every|any)\s+(?:of\s+our\s+)?(?:repairs?|devices?|services?|brands?)\b[^.]{0,40}\bsame[- ]day\b/i,
   'same-day claimed for all/every/any repair'],
  [/\bsame[- ]day\b[^.]{0,40}\b(?:all|every|any)\s+(?:of\s+our\s+)?(?:repairs?|devices?|services?|brands?)\b/i,
   'same-day claimed for all/every/any repair'],
  [/\bsame[- ]day\s+(?:service\s+|repairs?\s+)?(?:on|for)\s+(?:all|every|any)\b/i,
   'same-day claimed for all/every/any'],

  // a guaranteed completion / shipping / delivery DATE - never allowed
  [/\bguarantee(?:d|s)?\b[^.]{0,30}\b(?:completion|delivery|shipping)\s+dates?\b/i,
   'guaranteed completion/shipping date'],

  // same-day tied affirmatively to mail-in, either order.
  // A LINKING WORD is required between the two terms: stripped markup collapses
  // unrelated button labels into one pseudo-sentence (button text has no full
  // stop), e.g. "Start a mail-in repair  Call 704-246-7642  Same-Day SSD
  // Installation Available" - a link beside a banner, not a claim.
  [/\b(?:mail[- ]in|mailed[- ]in)\b[^.]{0,40}\b(?:is|are|get|gets|receive|receives|qualify|qualifies|eligible|completed|finished|done|turned around|available)\b[^.]{0,30}\bsame[- ]day\b/i,
   'same-day applied to mail-in'],
  [/\bsame[- ]day\b[^.]{0,40}\b(?:for|on|to|applies|apply|includes|including|covers)\b[^.]{0,30}\b(?:mail[- ]in|mailed[- ]in)\b/i,
   'same-day applied to mail-in'],

  // the 5-10 business day ESTIMATE restated as a guarantee
  [/\bguaranteed\b[^.]{0,40}\b5-10\s+business days\b/i,
   'the 5-10 business day estimate stated as a guarantee'],
  [/\b5-10\s+business days\b[^.]{0,30}\bguaranteed\b/i,
   'the 5-10 business day estimate stated as a guarantee'],
];

// An unqualified same-day claim: the phrase appears with no eligibility
// wording anywhere in its sentence. This is the rule that catches the exact
// strings the claims PR removed - "for all computer brands with same-day
// service", a bare "same-day turnaround", "Same-day Mac & PC repair" - none of
// which name all/every/any and so match none of the patterns above.
const UNQUALIFIED_SAME_DAY =
  /\bsame[- ]day\b(?![- ]?(?:response))/i;

/**
 * Decode the handful of HTML entities the prerenderer emits, and normalise
 * whitespace. Both sides of the review comparison must go through this: the
 * page says `&amp;` where reviews.json says `&`, and without decoding, any
 * review containing an ampersand silently fails to be excluded. That is not
 * hypothetical - it is the bug this function exists to fix.
 */
function decodeForCompare(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Every substring of a customer review that can appear as page text, so it can
 * be removed before claim-scanning. reviews.json is refreshed by a monthly bot
 * (update-reviews.yml); a customer writing "fixed it same day, guaranteed!"
 * must NOT fail that PR.
 *
 * Components truncate review text at different lengths, so rather than track
 * each one, every prefix at a plausible cut length is emitted. Cheap, and it
 * cannot drift out of step with a component's styling.
 */
function reviewTextSnippets() {
  const file = path.join(ROOT, 'src', 'data', 'reviews.json');
  if (!existsSync(file)) return [];
  try {
    const data = JSON.parse(readFileSync(file, 'utf8'));
    const out = [];
    for (const r of data.fiveStarReviews || []) {
      if (typeof r.text !== 'string') continue;
      const full = decodeForCompare(r.text);
      out.push(full);
      for (const cut of [120, 150, 160, 180, 200, 220, 250, 280, 300]) {
        if (full.length > cut) out.push(full.slice(0, cut));
      }
    }
    // Longest first, so a full review is removed before its own prefixes.
    return out.sort((a, b) => b.length - a.length);
  } catch {
    return [];
  }
}

// Block-level tags that end a visible run of text. Replacing them with a
// sentence boundary before the markup is stripped keeps each bullet, badge,
// heading and button as its own unit - otherwise "Walk-in diagnostics .
// Same-day service . All repair types" flattens into one pseudo-sentence and
// three independent bullets look like a single compound claim.
const BLOCK_BOUNDARY =
  /<\/?(?:p|div|li|ul|ol|h[1-6]|br|td|th|tr|section|article|header|footer|button|a|span|strong|em|label|dt|dd|option)\b[^>]*>/gi;

function checkNoAbsolutePromises() {
  const snippets = reviewTextSnippets();
  for (const file of walkIndexHtml(DIST)) {
    let text = decodeForCompare(
      readFileSync(file, 'utf8')
        .replace(BLOCK_BOUNDARY, ' . ')
        .replace(/<[^>]+>/g, ' ')
    );
    // Drop customer review prose before matching. Both sides are already
    // entity-decoded and whitespace-normalised by decodeForCompare, which is
    // what makes this removal actually land.
    for (const s of snippets) {
      if (s.length < 12) continue;
      text = text.split(s).join(' ');
    }
    // Sentence-scoped so a negator in one sentence cannot excuse a promise in
    // the next, and so a promise cannot hide behind a neighbouring disclaimer.
    const sentences = text.split(/(?<=[.!?])\s+/);
    for (const s of sentences) {
      if (!UNQUALIFIED_SAME_DAY.test(s)) continue;
      // Badge and label markup splits into fragments too short to carry their
      // own qualifier - `<div>Same Day</div><div>Service</div>` yields
      // "Same Day ." - and judging those flags every styled label. A claim
      // needs a sentence to make it; the surrounding prose is judged instead.
      // The all/every/any and mail-in patterns still cover badge text, since
      // they match across the flattened page rather than per sentence.
      if (s.trim().split(/\s+/).length < 7) continue;
      if (PROMISE_NEGATORS.test(s)) continue;
      if (ELIGIBILITY_QUALIFIERS.test(s)) continue;
      // A question is not a claim. "Do you offer same-day service?" is a FAQ
      // heading; its ANSWER carries the promise and is checked on its own.
      if (/\?/.test(s) || /^\s*(?:do|does|can|is|are|will|how|what|when)/i.test(s)) continue;
      fail(
        'absolute-promise',
        `${path.relative(DIST, file)} makes an UNQUALIFIED same-day claim - ` +
          `"${s.trim().slice(0, 120)}". Same-day is guaranteed for ELIGIBLE services ` +
          `only, so a same-day claim must carry an eligibility qualifier ` +
          `(e.g. "on eligible repairs", "available for many issues", ` +
          `"contact us to confirm").`
      );
      break;
    }
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


// --- 11. no device pickup / delivery / courier claims ---------------------
// Owner-confirmed policy (2026-10-26): KorTech does NOT offer device pickup,
// delivery, local collection, courier collection or return delivery. Customers
// bring devices to the Charlotte shop, or ship them AT THEIR OWN EXPENSE.
// Nationwide mail-in remains available for all supported repair categories.
//
// This guard scans the RAW HTML with entities decoded, NOT tag-stripped text.
// Every other guard here strips tags, which deletes attribute values - and the
// 2026-10-26 audit found pickup claims inside meta descriptions, og:description
// and an iframe title attribute. Stripping tags would have missed all of them.
//
// What is deliberately ALLOWED, and must keep passing:
//   - the customer dropping a device off at, or collecting it from, the shop
//   - the customer arranging their OWN carrier pickup for a mail-in shipment
//     (/terms/ step: "schedule a pickup or find a drop-off location")
//   - the customer paying a return-shipping fee
//   - ONSITE IT SERVICE / technician visits ("we come to you" on
//     /remote-assistance/, "on-site" on /about/) - we travel to fix systems in
//     place; we do not transport customer devices. These are different claims.
// So the patterns below are deliberately specific. Do NOT add a bare
// /pickup/ or /courier/ pattern: it would flag the legitimate cases above.
const PICKUP_CLAIM_PATTERNS = [
  [/pickup[\s-]*(?:&|and|\/)[\s-]*(?:delivery|drop-?off|return)/i, 'pickup-and-delivery service'],
  // bare juxtaposition, no connector: 'computer repair pickup delivery service
  // available' was the live Matthews iframe title attribute on 2026-10-26.
  [/pickup\s+delivery/i, 'pickup delivery (no connector)'],
  [/(?:we|kortech)(?:'ll| will| can)?\s+(?:also\s+)?(?:pick\s*up|collect)\s+(?:your|the|several|a)\s+(?:device|machine|computer|laptop|desktop|workstation|equipment|household)/i, 'we collect your device'],
  [/(?:we|kortech)(?:'ll| will| can)?\s+deliver\s+(?:your|the)\s+(?:device|machine|computer|laptop)/i, 'we deliver your device'],
  [/courier\s+(?:pickup|collection)\s+service/i, 'courier collection service'],
  [/(?:free|complimentary|prepaid|pre-paid|no[\s-]cost)\s+(?:return\s+)?(?:shipping|shipping\s+label|label|postage)/i, 'free or prepaid shipping'],
  [/we\s+(?:provide|supply|send|issue|include)\s+(?:a\s+|the\s+)?(?:return\s+)?shipping\s+label/i, 'KorTech-provided shipping label'],
  [/local\s+(?:pickup|delivery|collection)\s+(?:service|available|option)/i, 'local pickup or delivery'],
  [/door[\s-]to[\s-]door/i, 'door-to-door service'],
  [/collected\s+and\s+returned/i, 'device collected and returned'],
  [/schedule\s+(?:a\s+)?pickup\s+of\s+your\s+device/i, 'scheduled device pickup'],
  [/(?:pickup|delivery)\s+service\s+(?:is\s+)?available\s+in/i, 'pickup/delivery available in an area'],
];

// The ONE sanctioned negation. /charlotte-computer-repair/ used to answer
// "Yes, we offer pickup and delivery", so an explicit "No" is published to
// correct anything that cached the old answer. It necessarily contains the
// words, so it is allowlisted by exact phrase.
const PICKUP_NEGATION_ALLOWLIST = [
  'Does KorTech pick up or deliver devices in Charlotte?',
  'KorTech does not collect or deliver devices',
  'KorTech does not pick up or deliver devices',
];

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Hex form too - the prerenderer emits &#x27; for an apostrophe, which
    // appears in the approved /terms/ "manufacturer's warranty" clause.
    .replace(/&#x27;/gi, "'")
    .replace(/&nbsp;/g, ' ');
}

function checkNoPickupDeliveryClaims() {
  for (const file of walkIndexHtml(DIST)) {
    // RAW html, entities decoded - attribute values included on purpose.
    let text = decodeEntities(readFileSync(file, 'utf8'));
    // Remove the sanctioned negation sentences before matching.
    for (const allowed of PICKUP_NEGATION_ALLOWLIST) {
      text = text.split(allowed).join(' ');
    }
    for (const [re, label] of PICKUP_CLAIM_PATTERNS) {
      const m = re.exec(text);
      if (m) {
        fail(
          'pickup-delivery-claim',
          `${path.relative(DIST, file)} claims ${label} (matched ${re} at "${m[0]}") - ` +
            'owner-confirmed 2026-10-26: KorTech does NOT pick up, collect or deliver ' +
            'devices. Customers drop off at the Charlotte shop or ship at their own ' +
            'expense. See seo-intelligence/reports/business-policy-content-rules.md'
        );
      }
    }
  }
}


// --- 12. no KorTech warranty claims --------------------------------------
// Owner-confirmed policy (2026-10-26): KorTech Service does NOT provide
// warranties. The 14-day limited parts warranty that this site advertised
// until 2026-10-26 does not exist and must never reappear - not as a 30/90
// day warranty, a one-year or lifetime warranty, a parts-and-labour warranty,
// "warranty protection", "warranty included", a satisfaction guarantee, a
// money-back guarantee, a no-fix-no-fee promise or a free re-repair period.
//
// Like guard 11 this scans RAW HTML with entities decoded, so meta
// descriptions, og: tags, JSON-LD and alt/title/aria-label attribute text are
// all covered. Tag-stripping would delete exactly those.
//
// WHAT MUST KEEP PASSING - the patterns are narrow on purpose:
//   - MANUFACTURER / THIRD-PARTY warranty INFORMATION. The blog buying guides
//     legitimately say a Samsung SSD has a "5-year warranty", a PSU a
//     "10-year warranty", that a device is "out of warranty", "under
//     warranty", or that DIY "voids warranty". That is consumer information
//     about OTHER companies, not a KorTech promise. So do NOT add a bare
//     /warranty/ or /\d+-year warranty/ pattern.
//   - The APPROVED SAME-DAY ELIGIBILITY GUARANTEE. Same-day repairs ARE
//     guaranteed for eligible services. So do NOT add a bare /guarantee/
//     pattern - it would also hit the Q3/Q10/Q11 "not guaranteed" negations,
//     which exist precisely to DENY a guarantee, and "Wi-Fi coverage".
//   - The Privacy Policy's data-processing lines (service records, parts
//     suppliers, retention periods).
//   - Four clauses in the /terms/ signed-acknowledgment block, which LIMIT
//     liability rather than promise coverage. They are allowlisted by exact
//     phrase below, so any NEW warranty text on /terms/ still fails.
const WARRANTY_CLAIM_PATTERNS = [
  [/\b\d+\s*-?\s*day\s+(?:limited\s+)?warrant/i, 'an N-day warranty'],
  [/\blimited\s+warrant(?:y|ies)\b/i, 'a limited warranty'],
  [/\b(?:one|1|two|2|three|3|five|5)\s*-?\s*year\s+warranty\s+on\s+(?:our|all|the|every|repairs|parts|labor|labour|work)/i, 'a multi-year warranty on our work'],
  [/\blifetime\s+warrant/i, 'a lifetime warranty'],
  [/\bwarranty\s+protection\b/i, 'warranty protection'],
  [/\bwarranty\s+included\b/i, 'warranty included'],
  [/\bwarranty-backed\b/i, 'warranty-backed repairs'],
  [/\bguaranteed\s+warranty\b/i, 'guaranteed warranty coverage'],
  [/\bparts\s*(?:&|and)\s*(?:labor|labour|workmanship)\s+warrant/i, 'a parts-and-labor warranty'],
  [/\bwarrant(?:y|ies)\s+on\s+(?:all\s+)?(?:parts|repairs|labor|labour|workmanship|our\s+work)/i, 'a warranty on parts/repairs/labor'],
  [/\b(?:we|kortech)\s+(?:provide|offer|include|give|honor)s?\s+[^.<]{0,40}\bwarrant/i, 'that KorTech provides a warranty'],
  [/\bcomes?\s+with\s+a\s+[^.<]{0,30}\bwarrant/i, 'that the work comes with a warranty'],
  [/\b(?:do|does)\s+(?:you|kortech)\s+(?:offer|provide|have)\b[^?<]{0,40}\bwarrant/i, 'a "do you offer a warranty" FAQ'],
  [/\bis\s+there\s+a\s+warranty\b/i, 'an "is there a warranty" FAQ'],
  [/\bwith\s+warranty\b/i, 'service "with warranty"'],
  [/\bsatisfaction\s+guarantee/i, 'a satisfaction guarantee'],
  [/\bmoney\s*-?\s*back\s+guarantee/i, 'a money-back guarantee'],
  [/\bno\s+fix\W{0,3}no\s+fee\b/i, 'a no-fix-no-fee promise'],
  [/\bfree\s+re-?repair/i, 'a free re-repair period'],
  [/\bstand\s+behind\s+(?:the\s+)?(?:parts|repairs|our\s+work)/i, 'that KorTech stands behind the parts/work'],
  [/\bservice\s+guarantees\b/i, 'service guarantees'],
];

// Clauses in the /terms/ signed-acknowledgment block. These state the
// no-voluntary-warranty policy and disclaim liability for a voided
// MANUFACTURER warranty, rather than promising coverage. They are matched and
// removed before scanning so the rest of /terms/ is still checked.
//
// Scoped to terms/index.html ONLY (see checkNoWarrantyClaims). The same
// sentence appearing on any other page is a warranty claim and must fail -
// the owner's policy is no warranty marketing anywhere else on the site.
//
// Owner-approved wording, published 2026-10-27. The three previous entries
// ("will not include a warranty on parts and labor", "will not include parts
// and labor warranty of any kind", "the KorTech Service limited warranty does
// not cover accidental damage") were DELETED, not kept alongside these, so
// that the old coverage-implying wording cannot silently return.
const WARRANTY_LEGAL_ALLOWLIST = [
  'may void manufacturer warranties, especially in the case of Apple device repairs',
  'do not assume any liability or warranty in the event that the manufacturer warranties are voided',
  'KorTech Service does not provide its own voluntary warranty on repairs, replacement parts, or labor.',
  "Certain devices or replacement parts may be covered by a manufacturer's warranty. Any such coverage is provided by the manufacturer, subject to its terms and conditions, and is not a warranty provided by KorTech Service.",
];

// The /terms/ page, relative to DIST, whose allowlist above applies.
const TERMS_INDEX = path.join('terms', 'index.html');

function checkNoWarrantyClaims() {
  for (const file of walkIndexHtml(DIST)) {
    let text = decodeEntities(readFileSync(file, 'utf8'));
    // Only /terms/ may carry the approved legal clauses. Every other page is
    // scanned with the FULL pattern set and no allowlist.
    if (path.relative(DIST, file) === TERMS_INDEX) {
      for (const allowed of WARRANTY_LEGAL_ALLOWLIST) {
        text = text.split(allowed).join(' ');
      }
    }
    for (const [re, label] of WARRANTY_CLAIM_PATTERNS) {
      const m = re.exec(text);
      if (m) {
        fail(
          'warranty-claim',
          `${path.relative(DIST, file)} advertises ${label} (matched ${re} at "${m[0]}") - ` +
            'owner-confirmed 2026-10-26: KorTech does NOT provide warranties. Do not ' +
            'replace it with another warranty, a satisfaction guarantee or a free-repair ' +
            'period. Manufacturer warranty INFORMATION is still allowed. ' +
            'See seo-intelligence/reports/business-policy-content-rules.md'
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
  checkNoPickupDeliveryClaims();
  checkNoWarrantyClaims();

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
      'no misleading absolute same-day or turnaround promise, ' +
      'no device pickup/delivery/courier claim, ' +
      'no KorTech warranty claim.'
  );
}

main();
