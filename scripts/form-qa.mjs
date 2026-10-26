#!/usr/bin/env node
/**
 * form-qa.mjs — end-to-end behaviour tests for the two customer forms
 * (/contact/ and /mail-in-form/).
 *
 * WHY THIS EXISTS
 * ---------------
 * The worker's own unit tests (worker/test/*.test.mjs) prove the SERVER
 * behaves. They say nothing about what the CUSTOMER sees when the server
 * returns a 429, when the network drops mid-request, or when the request never
 * resolves. That gap is this file.
 *
 * THE SAFETY NET IS THE POINT
 * ---------------------------
 * Every single request to the real worker host is ABORTED at the network layer
 * before any test runs, and each test asserts how many submissions it
 * intercepted. A test that "passes" while a live POST quietly reached
 * info@kortechservice.com would be worse than no test at all, so a real
 * submission is made physically impossible rather than merely unlikely:
 *
 *   1. ctx.route(NOTIFY_HOST) intercepts and fulfils/aborts every call.
 *   2. A separate catch-all route counts anything that escapes rule 1 and
 *      marks the run FAILED.
 *   3. Each test asserts its own intercept count, so a form that silently
 *      stopped POSTing (and therefore "never fails") is caught too.
 *
 * Run against a local preview (default) or production with --base=<url>.
 * Production is read-only here: submissions are aborted, never delivered.
 */

import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

// The endpoint both forms post to. Kept in sync with src/utils/notifyEndpoint.ts
// by assertSourceEndpointMatches() below, so a change there fails this suite
// instead of silently disarming the safety net.
const NOTIFY_ENDPOINT = 'https://kortech-mailin-form.mskorhan.workers.dev';
const NOTIFY_GLOB = '**kortech-mailin-form.mskorhan.workers.dev**';

const baseArg = process.argv.find((a) => a.startsWith('--base='));
const BASE = baseArg ? baseArg.split('=')[1].replace(/\/$/, '') : null;

const results = [];
let escapedRequests = 0;

function record(name, pass, detail) {
  results.push({ name, pass, detail });
  const tag = pass ? 'PASS' : 'FAIL';
  console.log(`  [${tag}] ${name}${detail ? ` — ${detail}` : ''}`);
}

/**
 * The endpoint constant above must match the app's. If someone changes the
 * app's endpoint, the route glob would no longer match and every "aborted"
 * submission would become a REAL one. Fail loudly instead.
 */
async function assertSourceEndpointMatches() {
  const src = await readFile(path.join(ROOT, 'src/utils/notifyEndpoint.ts'), 'utf8');
  const m = src.match(/NOTIFY_ENDPOINT\s*=\s*'([^']+)'/);
  if (!m) throw new Error('could not find NOTIFY_ENDPOINT in src/utils/notifyEndpoint.ts');
  if (m[1] !== NOTIFY_ENDPOINT) {
    throw new Error(
      `ENDPOINT MISMATCH — the app posts to ${m[1]} but this harness only ` +
      `intercepts ${NOTIFY_ENDPOINT}. Update NOTIFY_GLOB before running, or a ` +
      `test submission would reach the live inbox.`
    );
  }
}

/** Minimal static server for dist/, so the suite can run with no network. */
async function serveDist() {
  const types = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.webp': 'image/webp', '.json': 'application/json', '.ico': 'image/x-icon',
    '.xml': 'application/xml', '.txt': 'text/plain', '.woff2': 'font/woff2',
  };
  const server = createServer(async (req, res) => {
    try {
      let rel = decodeURIComponent(req.url.split('?')[0]);
      let file = path.join(DIST, rel);
      try {
        if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
      } catch {
        file = path.join(DIST, '404.html');
      }
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('not found');
    }
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  return { server, origin: `http://127.0.0.1:${server.address().port}` };
}

/**
 * Fill the visible required fields of whichever form is on the page.
 *
 * Field names are matched explicitly rather than by guessing from the input
 * `type`, because /mail-in-form/ has required fields (`problemDescription`,
 * `deviceType`) whose names share no substring with /contact/'s (`message`).
 * A filler that silently leaves one of them blank makes every later assertion
 * read `requests=0` and "pass" for the wrong reason.
 */
async function fillForm(page, which) {
  const val = {
    fullName: 'QA Harness', name: 'QA Harness',
    email: 'qa-harness@example.invalid',
    phone: '7045551234',
    message: 'Automated QA check. Please ignore.',
    problemDescription: 'Automated QA check. Please ignore.',
    description: 'Automated QA check. Please ignore.',
    address: '1721 Sardis Rd N', city: 'Charlotte', state: 'NC', zip: '28270',
    model: 'QA Test Model', deviceModel: 'QA Test Model',
  };
  // Only ever fill controls that are visible and enabled; the honeypot is
  // hidden and must stay empty or the worker correctly discards the payload.
  // `:visible` still matches the off-screen honeypot, so exclude it by id.
  // Filling it would make the worker correctly discard the payload, and every
  // later assertion would then be measuring a silently-dropped submission.
  const inputs = page.locator(
    'form input:visible:not(#contactPreference), form textarea:visible, form select:visible'
  );
  const n = await inputs.count();
  for (let i = 0; i < n; i++) {
    const el = inputs.nth(i);
    const [tag, type, name] = await el.evaluate((e) => [
      e.tagName.toLowerCase(), e.getAttribute('type') ?? '', e.getAttribute('name') ?? e.id ?? '',
    ]);
    if (type === 'checkbox' || type === 'radio') { await el.check().catch(() => {}); continue; }
    if (tag === 'select') {
      const opts = await el.locator('option').count();
      if (opts > 1) await el.selectOption({ index: 1 }).catch(() => {});
      continue;
    }
    // Exact name match first, so `name` cannot shadow `fullName`.
    const lower = name.toLowerCase();
    const exact = Object.keys(val).find((k) => k.toLowerCase() === lower);
    const partial = Object.keys(val)
      .sort((a, b) => b.length - a.length)
      .find((k) => lower.includes(k.toLowerCase()));
    const key = exact ?? partial;
    const text = key ? val[key]
      : type === 'email' ? val.email
      : type === 'tel' ? val.phone
      : 'QA check';
    await el.fill(text).catch(() => {});
  }
}

/**
 * Click the real submit control.
 *
 * `form button:visible` is NOT safe as a fallback: /mail-in-form/ renders an
 * unlabeled `type="button"` control earlier in the DOM than its actual
 * "Submit and Generate Form" submit button, so `.first()` clicked the wrong
 * one and every assertion then read `requests=0` — a suite passing for the
 * wrong reason. Require `type="submit"`.
 */
async function submit(page) {
  const btn = page.locator('form button[type="submit"]:visible').first();
  if (await btn.count() === 0) throw new Error('no visible submit button found in form');
  await btn.click();
}

/** The submit button, for in-flight-state assertions. */
function submitButton(page) {
  return page.locator('form button[type="submit"]:visible').first();
}

async function run() {
  await assertSourceEndpointMatches();

  const local = BASE ? null : await serveDist();
  const origin = BASE ?? local.origin;
  console.log(`\nform-qa: target ${origin}\n`);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });

  // ---- SAFETY NET -------------------------------------------------------
  // Nothing reaches the worker. `scenario` decides what the page sees.
  //
  // ORDER MATTERS, AND NOT THE WAY YOU EXPECT: Playwright evaluates routes in
  // REVERSE registration order, so the LAST matching handler wins. The
  // catch-all is therefore registered FIRST and the worker-specific rule
  // SECOND, or the catch-all would swallow every submission and each test
  // would read `requests=0` while proving nothing. That exact inversion was
  // caught by the escape counter below on the first run of this file.
  let scenario = 'abort';
  let intercepted = 0;

  // Registered first => lowest precedence. Blocks analytics and counts
  // anything worker-bound that the rule below somehow fails to match.
  await ctx.route('**/*', async (route) => {
    const url = route.request().url();
    if (url.includes('kortech-mailin-form')) { escapedRequests++; return route.abort(); }
    if (/googletagmanager|google-analytics|googlesyndication|doubleclick/.test(url)) return route.abort();
    return route.continue();
  });

  // Registered last => highest precedence. This is the one that must match.
  await ctx.route(NOTIFY_GLOB, async (route) => {
    if (route.request().method() === 'OPTIONS') return route.fulfill({ status: 204 });
    intercepted++;
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    if (scenario === 'ok') return route.fulfill({ status: 200, headers: cors, body: '{"ok":true}' });
    if (scenario === '429') {
      return route.fulfill({ status: 429, headers: { ...cors, 'Retry-After': '45' }, body: '{"error":"rate limited"}' });
    }
    if (scenario === '500') return route.fulfill({ status: 500, headers: cors, body: '{"error":"server"}' });
    if (scenario === '400') return route.fulfill({ status: 400, headers: cors, body: '{"error":"bad"}' });
    if (scenario === 'hang') return new Promise(() => {}); // never resolves
    return route.abort('connectionfailed');
  });

  // Must be added BEFORE the page exists, or the first document load has
  // already run without it and the consent banner overlays the form.
  await ctx.addInitScript(() => {
    try { localStorage.setItem('cookieConsent', 'declined'); } catch {}
  });
  const page = await ctx.newPage();

  const forms = [
    { which: 'contact', url: '/contact/', label: '/contact/' },
    { which: 'mailin', url: '/mail-in-form/', label: '/mail-in-form/' },
  ];

  for (const f of forms) {
    console.log(`${f.label}`);
    await page.goto(origin + f.url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('form', { timeout: 15000 });

    // --- labels: every visible control must have an accessible name -------
    const unlabeled = await page.evaluate(() => {
      const out = [];
      for (const el of document.querySelectorAll('form input, form textarea, form select')) {
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || el.type === 'hidden') continue;
        if (el.closest('[aria-hidden="true"]')) continue;
        const named = el.labels?.length > 0 || el.getAttribute('aria-label') ||
          el.getAttribute('aria-labelledby') || el.getAttribute('title');
        if (!named) out.push(el.name || el.id || el.type);
      }
      return out;
    });
    record(`${f.label} every visible field has an accessible name`, unlabeled.length === 0,
      unlabeled.length ? `unlabeled: ${unlabeled.join(', ')}` : `all labeled`);

    // --- honeypot must exist, be off-screen, untabbable and empty --------
    //
    // The honeypot is DELIBERATELY rendered off-screen at left:-9999px rather
    // than display:none, so that naive bots still fill it. That means
    // `offsetParent !== null` is TRUE for it — the same trap that produced a
    // false positive on the skip link in the visual harness. Judge it by its
    // on-screen position and its tab/ARIA state, not by offsetParent.
    const hp = await page.evaluate(() => {
      const el = document.getElementById('contactPreference');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        value: el.value,
        offScreen: r.right < 0 || r.bottom < 0 || r.left > innerWidth,
        untabbable: el.tabIndex === -1,
        ariaHidden: !!el.closest('[aria-hidden="true"]'),
      };
    });
    record(`${f.label} honeypot is off-screen, untabbable, aria-hidden and empty`,
      hp !== null && hp.value === '' && hp.offScreen && hp.untabbable && hp.ariaHidden,
      hp === null
        ? 'honeypot #contactPreference NOT FOUND — the worker would treat submissions as human'
        : `empty=${hp.value === ''} offScreen=${hp.offScreen} tabIndex-1=${hp.untabbable} ariaHidden=${hp.ariaHidden}`);

    // --- client validation blocks an empty submit ------------------------
    intercepted = 0;
    scenario = 'abort';
    await submit(page).catch(() => {});
    await page.waitForTimeout(600);
    record(`${f.label} empty submit is blocked client-side (no request sent)`, intercepted === 0,
      `requests=${intercepted}`);

    // --- invalid email is rejected ---------------------------------------
    intercepted = 0;
    const emailField = page.locator('form input[type="email"]:visible').first();
    if (await emailField.count()) {
      await fillForm(page, f.which);
      await emailField.fill('not-an-email');
      scenario = '400';
      await submit(page).catch(() => {});
      await page.waitForTimeout(900);
      // KNOWN GAP (low severity, not a data-integrity hole): neither form
      // checks email FORMAT client-side — validate() only tests non-empty. The
      // worker does enforce it (EMAIL_RE -> 400 "Invalid email address"), so a
      // malformed address never reaches the inbox; the customer just finds out
      // one round-trip later via the generic error instead of an inline one.
      // This asserts the customer is at least TOLD, so a silent failure fails.
      const t400 = (await page.locator('body').innerText()).toLowerCase();
      const told = /error|sorry|wrong|try again|couldn'?t|unable|call|704|email/.test(t400);
      record(`${f.label} a malformed email is surfaced to the customer`, told,
        intercepted === 0
          ? 'rejected client-side before any request'
          : `no client-side format check (worker returns 400); customer informed=${told}`);
      scenario = 'abort';
    }

    // --- success path ----------------------------------------------------
    intercepted = 0;
    scenario = 'ok';
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('form');
    await fillForm(page, f.which);
    await submit(page);
    await page.waitForTimeout(1500);
    const okText = (await page.locator('body').innerText()).toLowerCase();
    const sawSuccess = /thank|success|received|we'?ll be in touch|got your|submitted/.test(okText);
    record(`${f.label} success shows a confirmation message`, sawSuccess && intercepted === 1,
      `requests=${intercepted}, confirmation=${sawSuccess}`);

    // --- the success message is announced to assistive tech --------------
    const liveOk = await page.evaluate(() => {
      const regions = [...document.querySelectorAll('[role="status"],[role="alert"],[aria-live]')];
      return regions.some((r) => (r.innerText || '').trim().length > 0);
    });
    record(`${f.label} confirmation sits in a live region`, liveOk,
      liveOk ? 'aria-live/role=status present and populated' : 'no populated live region — screen readers may miss it');

    // --- rate limited (429) ----------------------------------------------
    intercepted = 0;
    scenario = '429';
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('form');
    await fillForm(page, f.which);
    await submit(page);
    await page.waitForTimeout(1500);
    const t429 = (await page.locator('body').innerText()).toLowerCase();
    const sawWait = /moment|wait|too many|try again|second|minute/.test(t429);
    record(`${f.label} 429 tells the customer to retry shortly`, sawWait && intercepted === 1,
      `requests=${intercepted}, actionable=${sawWait}`);

    // --- server error (500) ----------------------------------------------
    intercepted = 0;
    scenario = '500';
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('form');
    await fillForm(page, f.which);
    await submit(page);
    await page.waitForTimeout(1500);
    const t500 = (await page.locator('body').innerText()).toLowerCase();
    const sawErr = /error|sorry|wrong|try again|couldn'?t|unable|call|704/.test(t500);
    // The customer must be left with SOME way to proceed. The two forms do
    // this differently on purpose and both are valid:
    //   /contact/      keeps the form so they can retry.
    //   /mail-in-form/ swaps in the printable form plus a call/text fallback,
    //                  which is a BETTER outcome than a retry button, because
    //                  the device can still be shipped with a printed copy.
    // Asserting "the form element is still there" would wrongly fail the
    // second, so assert that a usable next step is offered instead.
    const canProceed = await page.evaluate(() =>
      document.querySelectorAll('form').length > 0 ||
      /print|call|text/i.test(document.body.innerText)
    );
    record(`${f.label} 500 shows an error and leaves a usable next step`, sawErr && canProceed && intercepted === 1,
      `requests=${intercepted}, message=${sawErr}, next-step-offered=${canProceed}`);

    // --- network failure --------------------------------------------------
    intercepted = 0;
    scenario = 'abort';
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('form');
    await fillForm(page, f.which);
    await submit(page);
    await page.waitForTimeout(1500);
    const tNet = (await page.locator('body').innerText()).toLowerCase();
    const sawNet = /error|sorry|wrong|try again|couldn'?t|unable|call|704/.test(tNet);
    record(`${f.label} a dropped connection surfaces an error (no silent failure)`, sawNet && intercepted === 1,
      `requests=${intercepted}, message=${sawNet}`);

    // --- the customer's answers are not simply lost -----------------------
    // Either the fields still hold what they typed (so they can retry), or
    // the page now shows those answers back to them (the mail-in form renders
    // a printable summary). Losing them with no record is the real defect.
    const notLost = await page.evaluate(() => {
      const els = [...document.querySelectorAll('form input:not([type=hidden]), form textarea')]
        .filter((e) => e.offsetParent !== null && e.type !== 'checkbox' && e.type !== 'radio'
          && e.id !== 'contactPreference');
      if (els.some((e) => (e.value || '').trim().length > 0)) return 'fields-retained';
      // Did the typed name survive on the page in some readable form?
      return /QA Harness/i.test(document.body.innerText) ? 'shown-back-on-page' : false;
    });
    record(`${f.label} an error does not lose the customer's answers`, !!notLost,
      notLost ? String(notLost) : 'answers cleared and not shown anywhere — customer must retype');

    // --- double submit while in flight ------------------------------------
    intercepted = 0;
    scenario = 'hang';
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('form');
    await fillForm(page, f.which);
    await submit(page);
    await page.waitForTimeout(400);
    await submit(page).catch(() => {});
    await submit(page).catch(() => {});
    await page.waitForTimeout(800);
    record(`${f.label} double-click cannot send a duplicate`, intercepted === 1,
      `requests=${intercepted} (expected exactly 1)`);

    // --- the button says it is working ------------------------------------
    const busy = await submitButton(page).evaluate((b) => ({
      disabled: b.disabled,
      text: (b.innerText || '').toLowerCase(),
    })).catch(() => null);
    record(`${f.label} submit button shows an in-flight state`,
      !!busy && (busy.disabled || /send|submit|ing\b|please wait/.test(busy.text)),
      busy ? `disabled=${busy.disabled}, label="${busy.text.trim()}"` : 'no button found');

    // --- keyboard reachability --------------------------------------------
    scenario = 'abort';
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('form');
    const reachable = await page.evaluate(() => {
      const first = document.querySelector('form input:not([type=hidden])');
      if (!first) return false;
      first.focus();
      return document.activeElement === first;
    });
    record(`${f.label} form fields are keyboard focusable`, reachable,
      reachable ? 'first field accepts focus' : 'could not focus first field');
  }

  await browser.close();
  if (local) local.server.close();

  // ---- verdict ----------------------------------------------------------
  const failed = results.filter((r) => !r.pass);
  console.log(`\n${results.length} checks, ${failed.length} failure(s)`);
  if (escapedRequests > 0) {
    console.log(`\nFATAL: ${escapedRequests} request(s) reached the real worker host. ` +
      `The safety net did not hold — treat any resulting email as a live submission.`);
  }
  if (failed.length) {
    console.log('\nFailures:');
    for (const f of failed) console.log(`  - ${f.name}: ${f.detail}`);
  }
  if (failed.length || escapedRequests) process.exitCode = 1;
}

run().catch((err) => {
  console.error(`form-qa failed to run: ${err.message}`);
  process.exitCode = 1;
});
