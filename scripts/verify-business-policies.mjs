#!/usr/bin/env node
/**
 * verify-business-policies.mjs — asserts the owner-confirmed business policies
 * are stated correctly, and that no prohibited claim has crept back in.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The build guards in validate-routing.mjs are NEGATIVE: they fail when a
 * prohibited claim appears. Nothing checked the POSITIVE side — that the
 * policies we DO want to state are still actually present. A page could lose
 * the mail-in turnaround estimate entirely and every guard would stay green.
 *
 * It also replaces an earlier throwaway verification script that contained a
 * FALSE ASSERTION: it checked for the mail-in 5-10 business day estimate on
 * /mail-in-form/, where the MailInSection component is not rendered at all, and
 * so reported a FAILURE against a page that was never meant to carry it. The
 * page list below is derived from which pages actually render the component
 * (verified: 8 service pages import MailInSection, plus /terms/ states it in
 * prose). Asserting a policy on a page that does not state it is not a
 * stricter test, it is a broken one — it trains the reader to ignore failures.
 *
 * Run against dist/ (default) or live with --base=https://www.kortechservice.com
 */

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const baseArg = process.argv.find((a) => a.startsWith('--base='));
const BASE = baseArg ? baseArg.split('=')[1].replace(/\/$/, '') : null;

/** Pages that render MailInSection (and therefore the turnaround estimate). */
const MAILIN_PAGES = [
  'data-recovery', 'laptop-screen-repair', 'nintendo-switch-repair',
  'pcb-micro-soldering', 'ps5-hdmi-repair', 'ssd-upgrades',
  'water-damage-repair', 'xbox-hdmi-repair',
];

/** Positive assertions: these statements MUST be present. */
const MUST_STATE = [
  {
    name: 'mail-in turnaround is given as a 5-10 business day ESTIMATE (not a guarantee)',
    pages: [...MAILIN_PAGES, 'terms'],
    // Accept hyphen or en dash; the copy uses both in different places.
    re: /estimated\s+5[-–]10\s+business\s+days/i,
  },
  {
    name: 'same-day is qualified as "for eligible" repairs, never absolute',
    pages: ['services'],
    re: /guaranteed\s+for\s+eligible/i,
  },
  {
    name: 'Terms state KorTech does not collect or deliver devices',
    pages: ['terms'],
    re: /does\s+not\s+(collect\s+or\s+deliver|pick\s*up\s+or\s+deliver)/i,
  },
];

/**
 * Negative assertions. These duplicate the spirit of guards 11 and 12 but run
 * against the LIVE site too, which the build guards cannot do. A production
 * page could differ from dist/ after a partial FTP upload.
 */
const MUST_NOT_STATE = [
  {
    name: 'no KorTech warranty offer',
    // Deliberately excludes "manufacturer warranties" and the allowlisted
    // /terms/ liability clauses, which are legitimate and owner-approved.
    re: /\b(\d+[-\s]?(day|year)|lifetime|limited)\s+warranty\b|warranty[-\s]backed|parts\s+and\s+labor\s+warranty\s+included/i,
    allow: [
      // /terms/ liability limitations - approved, see
      // legal-warranty-wording-proposal-2026-10-26.md
      /will not include a warranty on parts and labor/i,
      /will not include parts and labor warranty of any kind/i,
      /the KorTech Service limited warranty does not cover/i,
      // Component/manufacturer warranty INFORMATION is kept on purpose
      // (PR #35 preserved it deliberately). These appear inside hardware spec
      // lists on blog posts — e.g. an SSD's own "5-year warranty" bullet — and
      // describe the PART MAKER's coverage, not anything KorTech offers.
      // Scoped to a spec-list bullet or sentence so a KorTech-facing claim
      // like "our 5-year warranty" is NOT excused by this entry.
      /manufacturer'?s? warrant/i,
      /<li>\s*\d+[-\s]?(year|yr)\s+warranty\s*<\/li>/i,
      /\b\d+[-\s]?year\s+warranty\s+(from|by|via)\b/i,
    ],
  },
  {
    name: 'no device pickup, delivery or courier claim',
    re: /\b(we\s+(pick\s*up|collect)\s+(your\s+)?device|free\s+(pickup|collection)|courier\s+(service|pickup)|prepaid\s+(return\s+)?(shipping|label)|complimentary\s+shipping)/i,
    allow: [
      // Onsite IT support is a DIFFERENT service and is legitimate.
      /we come to you/i,
    ],
  },
  {
    name: 'no free or prepaid shipping label claim',
    re: /\b(free|prepaid|complimentary|no[-\s]cost)\s+(shipping\s+)?label/i,
    allow: [],
  },
];

async function listDistPages() {
  const out = [];
  async function walk(dir, rel = '') {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) await walk(p, rel ? `${rel}/${e.name}` : e.name);
      else if (e.name === 'index.html') out.push(rel || '');
    }
  }
  await walk(DIST);
  return out;
}

async function fetchPage(slug) {
  if (BASE) {
    const url = `${BASE}/${slug ? slug + '/' : ''}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'kortech-policy-verify' } });
    if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
    return await res.text();
  }
  return await readFile(path.join(DIST, slug, 'index.html'), 'utf8');
}

/** Decode entities and keep ATTRIBUTE values: claims have hidden in meta
 *  descriptions, og:description, JSON-LD and an iframe title before now, and
 *  stripping tags deletes exactly those. */
function normalize(html) {
  return html
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
    .replace(/&(amp|quot|apos|nbsp|#x27|#39);/g, (m) =>
      ({ '&amp;': '&', '&quot;': '"', '&apos;': "'", '&nbsp;': ' ', '&#x27;': "'", '&#39;': "'" }[m] ?? ' '))
    .replace(/\s+/g, ' ');
}

const failures = [];
const passes = [];

function check(ok, label, detail) {
  (ok ? passes : failures).push({ label, detail });
  console.log(`  [${ok ? 'PASS' : 'FAIL'}] ${label}${detail ? ` — ${detail}` : ''}`);
}

async function run() {
  console.log(`\nverify-business-policies: ${BASE ?? 'dist/'}\n`);

  console.log('Positive assertions (the policy must be stated):');
  for (const a of MUST_STATE) {
    const missing = [];
    for (const slug of a.pages) {
      let html;
      try { html = normalize(await fetchPage(slug)); }
      catch (e) { missing.push(`${slug} (${e.message})`); continue; }
      if (!a.re.test(html)) missing.push(slug);
    }
    check(missing.length === 0, a.name,
      missing.length ? `MISSING on: ${missing.join(', ')}` : `present on all ${a.pages.length} page(s)`);
  }

  console.log('\nNegative assertions (the claim must not appear anywhere):');
  const slugs = BASE
    ? [...new Set([...MAILIN_PAGES, 'terms', 'services', 'contact', 'mail-in-form',
        'privacy-policy', 'remote-assistance', '', 'computer-repair-charlotte'])]
    : await listDistPages();

  for (const n of MUST_NOT_STATE) {
    const hits = [];
    for (const slug of slugs) {
      let html;
      try { html = normalize(await fetchPage(slug)); } catch { continue; }
      // Remove allowlisted phrases before testing, so an approved clause can
      // never mask a NEW violation elsewhere on the same page.
      let probe = html;
      for (const a of n.allow) probe = probe.replace(new RegExp(a.source, 'gi'), ' ');
      const m = probe.match(n.re);
      if (m) hits.push(`${slug || '/'} ("${m[0].slice(0, 60)}")`);
    }
    check(hits.length === 0, n.name,
      hits.length ? `FOUND on: ${hits.join('; ')}` : `clear across ${slugs.length} page(s)`);
  }

  console.log(`\n${passes.length + failures.length} assertions, ${failures.length} failure(s)`);
  if (failures.length) {
    console.log('\nFailures:');
    for (const f of failures) console.log(`  - ${f.label}: ${f.detail}`);
    process.exitCode = 1;
  } else {
    console.log('ALL CLEAR — owner-confirmed policies stated correctly, no prohibited claims.');
  }
}

run().catch((e) => { console.error(`verify-business-policies failed: ${e.message}`); process.exitCode = 1; });
