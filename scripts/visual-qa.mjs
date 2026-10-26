#!/usr/bin/env node
/**
 * visual-qa.mjs - responsive / navigation / accessibility QA over the built site.
 *
 * WHY THIS EXISTS
 * ---------------
 * `npm run build` passing proves the HTML is well-formed and the content guards
 * are satisfied. It proves NOTHING about layout. The navigation bug that
 * prompted this harness (a nav whose natural width exceeded its container by
 * 148px, crushing "Mail-In Repair Form" to 72px and spilling the CTAs past the
 * viewport) shipped through a green build. So this checks rendered GEOMETRY.
 *
 * WHAT IT CHECKS, per page per width
 *   1. horizontal overflow (documentElement.scrollWidth > clientWidth), and
 *      names the offending elements rather than just reporting a number
 *   2. exactly ONE of {desktop nav, hamburger} is visible - never zero
 *      (widths 1024-1279 previously rendered NEITHER), never both
 *   3. every header item sits inside the header's box
 *   4. no nav label has wrapped (height > 1.5x its line-height)
 *   5. the Mail-In Repair Form link is present, inside the header, and has a
 *      sane width for its text
 *   6. open dropdowns stay inside the viewport
 *   7. touch targets >= 24x24 CSS px (WCAG 2.2 AA, 2.5.8 - note 44px is AAA)
 *
 * USAGE
 *   npm run test:visual                 # against dist/ via a local preview
 *   npm run test:visual -- --base=https://www.kortechservice.com
 *   npm run test:visual -- --quick      # key pages only
 *   npm run test:visual -- --shots      # also write screenshots
 *
 * DETERMINISM
 *   - cookie consent is pre-set to DECLINED (never "accept") so the banner
 *     does not cover content and no analytics loads
 *   - analytics hosts are blocked at the network layer. This matters: a sweep
 *     of 58 pages x N widths against PRODUCTION would otherwise inject
 *     hundreds of bogus pageviews into GA4.
 *   - prefers-reduced-motion is forced, so animations cannot race screenshots
 */
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Serve dist/ ourselves when no --base was given.
 *
 * This used to require a separately-started preview server on port 4319. That
 * is an invisible prerequisite: CI ran the sweep with nothing listening and
 * got ERR_CONNECTION_REFUSED, which looks identical to "the site is broken".
 * Serving dist/ in-process makes the default mode self-contained, so the
 * command cannot pass or fail for reasons unrelated to the pages.
 */
async function serveDist(distDir) {
  const types = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json',
    '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain',
    '.woff': 'font/woff', '.woff2': 'font/woff2', '.avif': 'image/avif',
  };
  const server = createServer(async (req, res) => {
    try {
      const rel = decodeURIComponent((req.url || '/').split('?')[0]);
      let file = path.join(distDir, rel);
      try {
        if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
      } catch {
        file = path.join(distDir, '404.html');
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

const args = process.argv.slice(2);
const arg = (name, dflt) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split('=').slice(1).join('=') : dflt;
};
const has = (name) => args.includes(`--${name}`);

// An explicit --base targets a running site (e.g. production). With no
// --base we serve dist/ in-process and point BASE at that, so the default
// mode needs no external server. Assigned once in run(), before first use.
const EXPLICIT_BASE = arg('base', null);
let BASE = EXPLICIT_BASE ? EXPLICIT_BASE.replace(/\/$/, '') : '';
const QUICK = has('quick');
const SHOTS = has('shots');
const SHOT_DIR = arg('shot-dir', 'visual-qa-shots');

// The `nav:` breakpoint from tailwind.config.js. Kept here as a literal on
// purpose: if someone changes one and not the other, these tests fail, which
// is exactly the regression that caused the dead zone.
const NAV_BP = 1180;

// --quick is what CI runs on every PR, so it MUST include the nav breakpoint
// and its neighbours. Without them the 1024-1279px no-navigation dead zone
// (the worst defect PR #36 found) could reappear and a PR would still pass:
// 1024 alone was inside that dead zone and 1280 alone was outside it, so
// neither width would have caught it. 1024 is kept because it was the old
// broken boundary, and 1179/1180/1181 pin the switch itself.
const WIDTHS = QUICK
  ? [375, 768, 1024, NAV_BP - 1, NAV_BP, NAV_BP + 1, 1280, 1440]
  : [
      320, 375, 390, 430, 768, 820,
      910, 960, // == 1366@150%, 1920@200%
      1024, 1092, // == 1366@125%
      NAV_BP - 1, NAV_BP, NAV_BP + 1, // the switch itself
      1280, 1300, 1340, 1366, 1400, 1440, 1536, 1920,
    ];

// Browser zoom shrinks the CSS viewport: a 1920px window at 150% is 1280 CSS px.
// So testing these widths IS testing those zoom levels; stated plainly rather
// than claiming a separate zoom test.
const ZOOM_EQUIVALENTS = {
  1536: '1920 @ 125%',
  1280: '1920 @ 150% / 1600 @ 125%',
  960: '1920 @ 200%',
  1092: '1366 @ 125%',
  910: '1366 @ 150%',
};

const QUICK_PAGES = [
  '/', '/services/', '/laptop-screen-repair/', '/macbook-repair/',
  '/locations/', '/charlotte-computer-repair/', '/contact/',
  '/mail-in-form/', '/terms/', '/blog/', '/about/',
];

async function getSitemapPaths() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return locs.map((u) => {
    try {
      return new URL(u).pathname;
    } catch {
      return u;
    }
  });
}

/** Everything measured inside the page, in one pass. */
const PROBE = ({ navBp }) => {
  const docEl = document.documentElement;
  const clientW = docEl.clientWidth;

  // Horizontal overflow is defined as "the user can actually scroll sideways",
  // NOT scrollWidth > clientWidth. Those differ: the root's scrollWidth can
  // include the vertical scrollbar gutter, which reported a phantom 27px
  // overflow on /contact/ @768 where nothing was out of place and the page
  // could not be scrolled right at all. Scroll it and look.
  // `html { scroll-behavior: smooth }` makes scrollTo ANIMATE, so reading
  // scrollX immediately after returns the pre-animation value. Force an
  // instant scroll for the probe, then restore.
  const canScrollRight = (() => {
    const prev = docEl.style.scrollBehavior;
    docEl.style.scrollBehavior = 'auto';
    const before = window.scrollX;
    window.scrollTo(99999, window.scrollY);
    const moved = window.scrollX > 0;
    window.scrollTo(before, window.scrollY);
    docEl.style.scrollBehavior = prev;
    return moved;
  })();

  const out = {
    scrollW: docEl.scrollWidth,
    clientW,
    canScrollRight,
    overflow: canScrollRight,
    offenders: [],
    nav: null,
    targets: [],
  };

  // --- who actually sticks out past the right edge?
  // Skip anything inside a clipping/scrolling ancestor - its overflow is
  // contained by design and is not a page-level defect.
  const clipped = (el) => {
    for (let p = el.parentElement; p; p = p.parentElement) {
      const s = getComputedStyle(p);
      if (/hidden|auto|scroll|clip/.test(s.overflowX)) return true;
    }
    return false;
  };
  // Deliberately off-screen content is not a layout defect: visually-hidden
  // skip links (left:-9999px) and sr-only clips are standard a11y patterns,
  // and they park far to the LEFT, which never creates rightward scroll.
  const intentionallyOffscreen = (el) => {
    const r = el.getBoundingClientRect();
    if (r.right < 0) return true;
    const s = getComputedStyle(el);
    if (s.clipPath === 'inset(50%)' || s.clip === 'rect(0px, 0px, 0px, 0px)') return true;
    return (r.width <= 1 && r.height <= 1);
  };
  if (out.overflow) {
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      // Only RIGHTWARD spill creates horizontal scroll in an LTR document.
      if (r.right <= clientW + 1) continue;
      if (clipped(el) || intentionallyOffscreen(el)) continue;
      out.offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: String(el.className || '').slice(0, 80),
        text: (el.textContent || '').trim().slice(0, 40),
        left: Math.round(r.left),
        right: Math.round(r.right),
        w: Math.round(r.width),
      });
      if (out.offenders.length >= 8) break;
    }
    // keep only the outermost offenders - children inherit the parent's spill
    out.offenders = out.offenders.filter(
      (o, i, all) => !all.some((p, j) => j !== i && p.right >= o.right && p.w > o.w)
    );
  }

  // --- navigation
  const navEl = document.querySelector('nav');
  if (navEl) {
    const navRect = navEl.getBoundingClientRect();
    const vis = (el) => {
      if (!el) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };
    // desktop list = the flex row holding the nav links; hamburger = the
    // button with aria-controls="mobile-menu"
    const burger = navEl.querySelector('button[aria-controls="mobile-menu"]');
    const links = [...navEl.querySelectorAll('a, button')];
    const mailEl = links.find((a) => /mail-in repair form/i.test(a.textContent || ''));
    const desktopWrap = mailEl ? mailEl.parentElement : null;

    // "Wrapped" = the TEXT occupies more than one line box. Measuring the
    // element's height against line-height gives false positives, because
    // padding and flex alignment inflate the box (a 36px-tall button holding
    // one 20px line is normal). So count the text node's own client rects
    // instead - that is the number of lines the text actually renders on.
    const lineCount = (el) => {
      const node = [...el.childNodes].find(
        (n) => n.nodeType === 3 && n.textContent.trim()
      ) || [...el.querySelectorAll('span')]
        .map((s) => [...s.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim()))
        .find(Boolean);
      if (!node) return 1;
      const range = document.createRange();
      range.selectNodeContents(node);
      const rects = [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0);
      return Math.max(1, rects.length);
    };

    const itemBox = (el) => {
      const r = el.getBoundingClientRect();
      return {
        text: (el.textContent || '').trim().slice(0, 28),
        x: Math.round(r.x), right: Math.round(r.right),
        w: Math.round(r.width), h: Math.round(r.height),
        lines: lineCount(el),
        wrapped: lineCount(el) > 1,
        outsideNav: r.right > navRect.right + 1 || r.left < navRect.left - 1,
        outsideViewport: r.right > clientW + 1 || r.left < -1,
      };
    };

    const visibleItems = links.filter(vis).map(itemBox);
    out.nav = {
      navRect: { x: Math.round(navRect.x), right: Math.round(navRect.right), h: Math.round(navRect.height) },
      desktopVisible: vis(desktopWrap),
      burgerVisible: vis(burger),
      expectDesktop: clientW >= navBp,
      mail: mailEl && vis(mailEl) ? itemBox(mailEl) : (mailEl ? { hiddenButPresent: true } : null),
      mailPresentInDom: !!mailEl,
      items: visibleItems,
      wrappedItems: visibleItems.filter((i) => i.wrapped),
      itemsOutsideNav: visibleItems.filter((i) => i.outsideNav),
      itemsOutsideViewport: visibleItems.filter((i) => i.outsideViewport),
    };

    // --- touch targets (WCAG 2.2 AA 2.5.8 = 24x24)
    for (const el of links) {
      if (!vis(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 24 || r.height < 24) {
        out.targets.push({
          text: (el.textContent || '').trim().slice(0, 24),
          w: Math.round(r.width), h: Math.round(r.height),
        });
      }
    }
  }
  return out;
};

async function run() {
  // Start the built-in server first: every BASE consumer below runs after this.
  const local = EXPLICIT_BASE ? null : await serveDist(path.resolve(ROOT_DIR, 'dist'));
  if (local) BASE = local.origin;

  const paths = QUICK ? QUICK_PAGES : await getSitemapPaths();
  console.log(`visual-qa: ${paths.length} page(s) x ${WIDTHS.length} width(s) against ${BASE}\n`);
  if (SHOTS) mkdirSync(SHOT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    reducedMotion: 'reduce',
    deviceScaleFactor: 1,
  });

  // Never let a QA sweep pollute analytics - especially against production.
  await ctx.route(/googletagmanager\.com|google-analytics\.com|doubleclick\.net|googlesyndication\.com/,
    (r) => r.abort());

  // Decline consent so the banner never covers content. Never "accept" - that
  // would grant analytics_storage and load gtag. Key and value are the exact
  // ones src/utils/consent.ts reads (STORAGE_KEY = 'cookieConsent', a plain
  // string, not JSON).
  await ctx.addInitScript(() => {
    try {
      localStorage.setItem('cookieConsent', 'declined');
    } catch { /* private mode */ }
  });

  const page = await ctx.newPage();
  const failures = [];
  const seenOffenders = new Map();
  let checks = 0;

  for (const p of paths) {
    for (const w of WIDTHS) {
      await page.setViewportSize({ width: w, height: 900 });
      const url = `${BASE}${p}`;
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      if (!resp || resp.status() >= 400) {
        failures.push({ p, w, kind: 'http', detail: `status ${resp ? resp.status() : 'none'}` });
        continue;
      }
      await page.waitForTimeout(90); // let layout settle
      const r = await page.evaluate(PROBE, { navBp: NAV_BP });
      checks++;

      if (r.overflow) {
        const detail = r.offenders.length
          ? r.offenders.map((o) => `${o.tag}.${o.cls.split(' ')[0]}("${o.text}") right=${o.right}`).join(' | ')
          : '(no un-clipped offender found)';
        failures.push({ p, w, kind: 'overflow', detail: `${r.scrollW} > ${r.clientW} :: ${detail}` });
        for (const o of r.offenders) {
          const k = `${o.tag}.${o.cls.slice(0, 40)}`;
          seenOffenders.set(k, (seenOffenders.get(k) || 0) + 1);
        }
      }

      const n = r.nav;
      if (!n) {
        failures.push({ p, w, kind: 'nav-missing', detail: 'no <nav>' });
        continue;
      }
      if (!n.desktopVisible && !n.burgerVisible) {
        failures.push({ p, w, kind: 'nav-dead-zone', detail: 'NEITHER desktop nav nor hamburger is visible' });
      }
      if (n.desktopVisible && n.burgerVisible) {
        failures.push({ p, w, kind: 'nav-both', detail: 'desktop nav AND hamburger both visible' });
      }
      if (n.expectDesktop && !n.desktopVisible) {
        failures.push({ p, w, kind: 'nav-breakpoint', detail: `>=${NAV_BP}px but desktop nav hidden` });
      }
      if (!n.expectDesktop && n.desktopVisible) {
        failures.push({ p, w, kind: 'nav-breakpoint', detail: `<${NAV_BP}px but desktop nav shown` });
      }
      if (!n.mailPresentInDom) {
        failures.push({ p, w, kind: 'mail-link-missing', detail: 'Mail-In Repair Form not in DOM' });
      }
      if (n.mail && !n.mail.hiddenButPresent) {
        if (n.mail.outsideNav || n.mail.outsideViewport) {
          failures.push({ p, w, kind: 'mail-link-outside',
            detail: `right=${n.mail.right} navRight=${n.navRect.right} clientW=${r.clientW}` });
        }
        if (n.mail.wrapped) {
          failures.push({ p, w, kind: 'mail-link-wrapped', detail: `h=${n.mail.h} w=${n.mail.w}` });
        }
        if (n.mail.w < 120) {
          failures.push({ p, w, kind: 'mail-link-crushed',
            detail: `w=${n.mail.w}px - label needs ~158px` });
        }
      }
      for (const it of n.wrappedItems) {
        failures.push({ p, w, kind: 'nav-item-wrapped', detail: `"${it.text}" h=${it.h} w=${it.w}` });
      }
      for (const it of n.itemsOutsideViewport) {
        failures.push({ p, w, kind: 'nav-item-outside', detail: `"${it.text}" right=${it.right} > ${r.clientW}` });
      }
      for (const t of r.targets) {
        failures.push({ p, w, kind: 'touch-target', detail: `"${t.text}" ${t.w}x${t.h} < 24x24` });
      }

      if (SHOTS && (p === '/' || p === '/services/' || p === '/mail-in-form/')) {
        await page.screenshot({
          path: path.join(SHOT_DIR, `${p.replace(/\W+/g, '_') || 'home'}-${w}.png`),
        });
      }
    }
  }

  // --- interaction tests (dropdowns, mobile menu, keyboard) on the homepage
  const interaction = [];
  const inter = async (label, fn) => {
    try {
      const msg = await fn();
      interaction.push({ label, ok: !msg, detail: msg || 'ok' });
    } catch (e) {
      interaction.push({ label, ok: false, detail: String(e.message || e).slice(0, 160) });
    }
  };

  await inter('desktop: Services dropdown opens inside viewport', async () => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.click('button[aria-controls="desktop-services-menu"]');
    const box = await page.locator('#desktop-services-menu').boundingBox();
    if (!box) return 'menu has no box after click';
    const cw = await page.evaluate(() => document.documentElement.clientWidth);
    if (box.x < 0 || box.x + box.width > cw + 1) return `x=${box.x} w=${box.width} vw=${cw}`;
    const exp = await page.getAttribute('button[aria-controls="desktop-services-menu"]', 'aria-expanded');
    if (exp !== 'true') return `aria-expanded=${exp}`;
    return null;
  });

  await inter('desktop: Locations dropdown inside viewport', async () => {
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.click('button[aria-controls="desktop-locations-menu"]');
    const box = await page.locator('#desktop-locations-menu').boundingBox();
    if (!box) return 'no box';
    const cw = await page.evaluate(() => document.documentElement.clientWidth);
    if (box.x < 0 || box.x + box.width > cw + 1) return `x=${box.x} w=${box.width} vw=${cw}`;
    return null;
  });

  await inter('desktop: Escape closes dropdown + restores focus', async () => {
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.click('button[aria-controls="desktop-services-menu"]');
    await page.keyboard.press('Escape');
    const exp = await page.getAttribute('button[aria-controls="desktop-services-menu"]', 'aria-expanded');
    if (exp !== 'false') return `aria-expanded=${exp} after Escape`;
    const focused = await page.evaluate(() =>
      document.activeElement?.getAttribute('aria-controls') || document.activeElement?.tagName);
    if (focused !== 'desktop-services-menu') return `focus went to ${focused}`;
    return null;
  });

  await inter('mobile: hamburger opens and closes the panel', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.click('button[aria-controls="mobile-menu"]');
    if (!(await page.locator('#mobile-menu').isVisible())) return 'panel not visible after open';
    const exp = await page.getAttribute('button[aria-controls="mobile-menu"]', 'aria-expanded');
    if (exp !== 'true') return `aria-expanded=${exp}`;
    await page.keyboard.press('Escape');
    if (await page.locator('#mobile-menu').isVisible()) return 'panel still visible after Escape';
    return null;
  });

  await inter('mobile: menu contains the Mail-In Repair Form link', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.click('button[aria-controls="mobile-menu"]');
    const n = await page.locator('#mobile-menu').getByText(/Mail-In Repair Form/i).count();
    await page.keyboard.press('Escape');
    return n > 0 ? null : 'not found in mobile menu';
  });

  await inter('resize while menu open does not lock the page', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.click('button[aria-controls="mobile-menu"]');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(120);
    const st = await page.evaluate(() => ({
      overflow: getComputedStyle(document.body).overflow,
      inert: !!document.querySelector('[inert]'),
    }));
    if (st.overflow === 'hidden') return 'body still overflow:hidden after resize';
    if (st.inert) return 'siblings still inert after resize';
    return null;
  });

  await inter('keyboard: Tab reaches the Mail-In Repair Form link', async () => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    for (let i = 0; i < 40; i++) {
      await page.keyboard.press('Tab');
      const t = await page.evaluate(() => (document.activeElement?.textContent || '').trim());
      if (/mail-in repair form/i.test(t)) return null;
    }
    return 'not reached within 40 tabs';
  });

  await inter('keyboard: focus is visible on nav items', async () => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const ring = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      const s = getComputedStyle(el);
      return { outline: s.outlineStyle, width: s.outlineWidth, shadow: s.boxShadow };
    });
    if (!ring) return 'no active element';
    const visible = (ring.outline !== 'none' && parseFloat(ring.width) > 0)
      || (ring.shadow && ring.shadow !== 'none');
    return visible ? null : `no visible focus indicator (${JSON.stringify(ring)})`;
  });

  await inter('mail-in form: fields and submit are inside the viewport (390px)', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE}/mail-in-form/`, { waitUntil: 'domcontentloaded' });
    const bad = await page.evaluate(() => {
      const cw = document.documentElement.clientWidth;
      const out = [];
      for (const el of document.querySelectorAll('input, select, textarea, button[type="submit"], form button')) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        // The honeypot field is parked far off-screen ON PURPOSE (anti-spam);
        // it is not a visible control and creates no rightward scroll.
        if (r.right < 0) continue;
        if (r.right > cw + 1 || r.left < -1) {
          out.push(`${el.tagName}${el.name ? `[${el.name}]` : ''} right=${Math.round(r.right)}/${cw}`);
        }
      }
      return out;
    });
    return bad.length ? bad.slice(0, 4).join(' | ') : null;
  });

  await inter('mail-in form: every field has an accessible label', async () => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`${BASE}/mail-in-form/`, { waitUntil: 'domcontentloaded' });
    const unlabeled = await page.evaluate(() => {
      const out = [];
      for (const el of document.querySelectorAll('input, select, textarea')) {
        if (el.type === 'hidden') continue;
        const id = el.id;
        const has = (id && document.querySelector(`label[for="${CSS.escape(id)}"]`))
          || el.closest('label')
          || el.getAttribute('aria-label')
          || el.getAttribute('aria-labelledby');
        if (!has) out.push(el.name || el.id || el.type);
      }
      return out;
    });
    return unlabeled.length ? `unlabeled: ${unlabeled.slice(0, 6).join(', ')}` : null;
  });

  await browser.close();
  if (local) local.server.close();

  // ---------------------------------------------------------------- report
  const byKind = failures.reduce((m, f) => ((m[f.kind] = (m[f.kind] || 0) + 1), m), {});
  console.log(`geometry checks run: ${checks}`);
  console.log(`failures: ${failures.length}\n`);
  if (failures.length) {
    console.log('--- by kind ---');
    for (const [k, v] of Object.entries(byKind).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${k.padEnd(22)} ${v}`);
    }
    if (seenOffenders.size) {
      console.log('\n--- most frequent overflow offenders ---');
      for (const [k, v] of [...seenOffenders].sort((a, b) => b[1] - a[1]).slice(0, 10)) {
        console.log(`  ${String(v).padStart(4)}x  ${k}`);
      }
    }
    console.log('\n--- first 40 ---');
    for (const f of failures.slice(0, 40)) {
      console.log(`  [${f.kind}] ${f.p} @${f.w}px :: ${f.detail}`);
    }
  }

  console.log('\n--- interaction / a11y ---');
  for (const i of interaction) {
    console.log(`  ${i.ok ? 'PASS' : 'FAIL'}  ${i.label}${i.ok ? '' : ` :: ${i.detail}`}`);
  }

  console.log('\n--- zoom equivalence (CSS px tested == window @ zoom) ---');
  for (const [w, note] of Object.entries(ZOOM_EQUIVALENTS)) {
    const covered = WIDTHS.includes(Number(w));
    console.log(`  ${w}px ${covered ? '(tested)   ' : '(not in set)'} == ${note}`);
  }

  const interFails = interaction.filter((i) => !i.ok).length;
  writeFileSync('visual-qa-report.json',
    JSON.stringify({ base: BASE, widths: WIDTHS, checks, failures, interaction }, null, 2));
  console.log(`\nreport: visual-qa-report.json`);
  console.log(`RESULT: ${failures.length === 0 && interFails === 0 ? 'PASS' : 'FAIL'}`);
  process.exit(failures.length === 0 && interFails === 0 ? 0 : 1);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
