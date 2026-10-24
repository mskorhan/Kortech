# Release verification — PR #24 + PR #19
**Date:** 2026-10-24 · **Verifier:** pre-merge independent review
**Combined tree tested:** `verify/combined-preview` = PR #24 (`seo/mac-repair-and-fixes-2026-10` @ 1801f5f) + PR #19 (`automation/update-reviews`)

---

## 1. Why link validation reports "56 / 58" — NOT a failure

`check-dist-internal-links` prints:

```
Checked 56 distinct internal path(s) across 58 prerendered file(s).
check-dist-internal-links: every internal link in the prerendered output is
a trailing-slash path with a matching page.
```

**These are two different quantities, not a 56-out-of-58 score.** 56 = distinct
internal paths linked; 58 = prerendered HTML files crawled. The script exits 0
with **zero** problem links. Reproduced on a clean build of the combined tree.

The "56/58" phrasing traces to `batch-mac-repair-2026-10-23.md` line 313, a
before/after table cell reading `56 paths / 58 files`.

### The two pages that account for 58 − 56

| # | Page | Why it is not in the 56 | Broken? |
|---|------|------------------------|---------|
| 1 | `/` (homepage) | Checker does `if (href === '/') continue;` by design — the root is not a trailing-slash path it can resolve to `dist//index.html`. It IS prerendered and IS linked sitewide. | No |
| 2 | `/recycling/` | Reachable only via `<button onClick={() => handleNavigation('/recycling/')}>` in `Navbar.tsx`, not an `<a href>`. The checker only reads `href=`. | No — but see below |

**Genuine broken links found: 0.** Nothing to fix for merge.

### Real (pre-existing) finding: `/recycling/` is not crawler-reachable

`/recycling/` is in the sitemap and prerendered, but every nav entry to it is a
`<button onClick>`. Search engines do not execute those, so the page has **no
incoming internal link** in rendered HTML — it relies on the sitemap alone.

- Pre-existing on `main`; **not** introduced by PR #24 (which changed `Navbar.tsx`
  by +1 line only).
- `Navbar.tsx` uses this `<button>` pattern for 16 routes; most are *also* linked
  from body content or the footer, so only `/recycling/` is actually orphaned.
- **Not fixed in this release:** the navbar renders on all 58 pages; changing it
  re-renders every page and belongs in its own PR with its own build diff.
  Logged for the follow-up batch.

---

## 2–3. Combined build, conflicts, CI

| Check | Result |
|---|---|
| Merge conflicts PR #24 ↔ PR #19 | **None.** Disjoint file sets — PR #19 touches only `src/data/reviews.json`; PR #24 does not. Clean `ort` merge. |
| `npm run type-check` | pass |
| `npm run lint` | pass |
| `npm run build` (sitemap → vite → prerender → 3 validators) | pass |
| `validate-seo` | 58 pages, all pass |
| `validate-routing` | OK — all guards pass |
| `check-dist-internal-links` | 56 paths / 58 files, 0 problems |
| Sitemap | 58 `<loc>`, includes `/macbook-repair/` |
| PR #24 required `build` check on GitHub | **pass** |

## 4. Mail-in terms consistency — CONSISTENT

| Term | Mail-in form | Terms page | Mac page |
|---|---|---|---|
| Diagnostic fee | $75–$150, waived w/ HARDWARE repair | $75–$150, waived w/ HARDWARE repair | $75–$150, same wording |
| Return shipping | Fee if no prepaid label attached | Fee if no prepaid label attached | — |
| Turnaround | 5–10 business days | 5–10 business days **from receipt** | *deliberately absent* |
| Shipping damage | Not responsible | Not responsible | — |
| Post-diagnostic | We call to discuss | Call after diagnostics; diagnostics begin within 48h | "A quote, before any work" |

No contradiction and nothing misleading. The Mac page omits turnaround entirely
because it is unconfirmed — the conservative choice.

Minor wording note (not a blocker): the printable form says "5-10 business days"
without the "from when we receive the device" qualifier the Terms page carries.
Same number, slightly weaker framing on the print-out.

## 5. Apple affiliation / certification — NONE

11 total matches for `apple|AASP|Genius|authoriz|certif|official|genuine|OEM|partner`
in rendered `dist/macbook-repair/index.html`; all benign:
- 4 × `apple-touch-icon` / `apple-mobile-web-app-*` boilerplate meta
- 7 × factual, cited references to Apple **silicon/T2 hardware behaviour**, sourced
  to Apple Platform Security (`support.apple.com/guide/security/...`)

No authorization, affiliation, certification, endorsement or `brand: Apple` claim.
JSON-LD = `BreadcrumbList` + `Service` only; no `aggregateRating` anywhere.

### Guard mutation-tested (not trusted blind)

This repo has shipped vacuous guards before (093cd93), so the guard was tested by
planting claims into `dist/` and re-running `validate-routing.mjs`:

| Planted text | exit | blocked |
|---|---|---|
| `Apple Authorized Service Provider` | 1 | yes |
| `Apple-certified technicians` | 1 | yes |
| `we are not affiliated with Apple` | 1 | yes (denials barred too, per A3) |
| `Apple-endorsed repair` | 1 | yes |
| `certified repair` | 1 | yes |
| *(clean page restored)* | 0 | — |

The guard is real and CI-blocking.

## Security / a11y / tracking

- No secrets in the diff; no `dangerouslySetInnerHTML`, no `eval`.
- All 8 external links on the Mac page: `rel="noopener noreferrer"`.
- Mail-in device **password is stripped** from the notification payload.
- Error state has `role="alert"`; success heading adapts to real outcome.
- `form_submit_failed` sends only `formType` — no PII; commented "do NOT mark as
  a GA4 key event" (respects the GA4 freeze).
- Mac page: exactly one `h1`, clean h2/h3 outline, no missing `alt`.

## Review count

`reviews.json` after merge: `totalReviews: 121`, `rating: 4.8`. No count is
hardcoded anywhere — all displays read the JSON. Only stale reference is a code
**comment** in `Home.tsx:76` ("4.8/112"), not customer-facing.

## Known blocker (merge mechanics, not code)

PR #19 is `mergeStateStatus: BLOCKED`. Author is `app/github-actions`: commits
pushed with `GITHUB_TOKEN` do not trigger `pull_request` workflows, so the
required `build` check never reports and can never pass on its own.

Ruleset `protect-main` (active): PR required, 0 approvals, required check `build`,
`require_extra_approval_for_unattributed_changes: true`. Admin bypass exists but
**must not be used** per the release instruction.

Legitimate fix: re-trigger CI as a human author (close/reopen, or push an
attributed empty commit to the branch) so `build` runs and reports.

Systemic: `update-reviews.yml` uses `GITHUB_TOKEN`, so **every** future reviews PR
will block identically. Needs a PAT/GitHub App token — separate change.

---

## Owner decisions A1–A6 (re-checked at merge time)

| # | state | blocks this release? |
|---|---|---|
| A1 | ✅ approved — sitemap 57→58 + one `.htaccess` whitelist entry | no |
| A2 | ⏳ review required — 7 claim questions | **no** — report states "Does not block #24; the PR adds no claims from any cluster". Deferred to follow-up per instruction. |
| A3 | ✅ resolved — Apple disclaimer removed, guard inverted | no |
| A4 | ✅ confirmed — mail-in covers every category | no |
| A5 | ⏳ preparation only — nothing changed in GA4 | no — GA4 freeze respected |
| A6 | ✅ demonstrated — PR #19 carries live 121 | no |

## Mobile UX + behavioural test (375×812, combined build via vite preview)

**`/macbook-repair/`** — `innerWidth` 375, `scrollWidth` 360, **no horizontal overflow**.
The only >375px boxes are two decorative blurred circles inside an `overflow-hidden`
hero; they do not create scroll. Mail-in CTA present. One h1.

**`/mail-in-form/` failure path** — `window.fetch` patched to reject, so the request
never left the browser and **no real lead was sent**:

| assertion | result |
|---|---|
| requests attempted | 1 (`kortech-mailin-form.mskorhan.workers.dev`), blocked locally |
| falsely claims success | **no** |
| truthful error shown | yes — "We couldn't send your form to us automatically…" |
| `role="alert"` on error | yes (announced to screen readers) |
| print path still offered | yes |
| horizontal overflow | none (360 ≤ 375) |

This is the behavioural confirmation of commit cee6395, not just a code read.

## Conversion tracking on the new page

7 `tel:`/`sms:` CTAs in `dist/macbook-repair/index.html`, **all 7** carrying
`data-track-source`, with page-specific values (`service_macbook_hero`) so the
delegated GA4 listener attributes clicks to this page. No GA4 settings touched.

## Live pre-deploy baseline (captured 2026-10-24, before any merge)

- **57** sitemap URLs: **all HTTP 200**, **all self-canonical**, **0 noindex**
- Live review count on `/`: **112**
- `/macbook-repair/`: **404** (expected — not yet deployed)
- Full per-URL snapshot (status/canonical/title/description/robots/og:url/h1/JSON-LD types)
  saved for post-deploy diffing.

Post-deploy expectation: 58 URLs; only differences should be the new Mac page,
the internal-link additions on Home + 4 service pages, 112→121, and lastmods.

## Deploy mechanics (confirmed from `.github/workflows/deploy.yml`)

`push` to `main` → build → **FTP deploy to Bluehost** → `indexnow-ping.mjs`.
There is **no `concurrency` group**, so two merges must not deploy concurrently —
merge #19, wait for its run to finish, then merge #24.

IndexNow submits the whole sitemap URL list to **Bing**, automatically, on each
deploy. That is pre-existing automation and is *not* the Google Search Console
request; GSC indexing is requested manually for `/macbook-repair/` only.

---

# POST-DEPLOY VERIFICATION (2026-10-24)

## Merges

| PR | merge commit | merged | method |
|---|---|---|---|
| #19 reviews 112→121 | `90cbf43` | 14:44:34Z | `--merge` (standard) |
| #24 Mac repair batch | `2374faa` | 14:49:45Z | `--merge` (standard) |

`main` now at **2374faa**. Both deploys (`40103856565`, `40104236598`) completed
**success**. No `--admin`, no force-push, no bypassed check, no protection disabled.

### How PR #19's blocker was cleared (legitimately)

Root cause: PR #19's author is `app/github-actions`. Commits pushed with
`GITHUB_TOKEN` do **not** trigger `pull_request` workflows, so the required
`build` check had *never run* — the PR could never satisfy the ruleset on its own.

Fix: closed and reopened the PR as `mskorhan`. `reopened` is in the default
`pull_request` activity types, so CI ran, `build` passed in 1m56s, and
`mergeStateStatus` went `BLOCKED` → `CLEAN`. The bot's commit was untouched.

Deploys were serialized (watched #19's run to completion before merging #24)
because `deploy.yml` has no `concurrency` group and two FTP syncs could race.

## Live verification — all 58 sitemap URLs

Measured with cache-busting + `no-cache` (an initial run hit a stale cached
sitemap returning 57; re-run against fresh copies gave 58).

| check | result |
|---|---|
| live sitemap `<loc>` count | **58** (incl. `/macbook-repair/`) |
| HTTP 200 | **58 / 58** |
| self-canonical | **58 / 58** |
| `noindex` | **0** |
| missing canonical | **0** |
| sitemap set diff vs pre-deploy | **+1** (`/macbook-repair/`), **−0** |
| pre-existing pages with any SEO field change | **0 / 57** |

Fields diffed per URL: status, canonical, title, description, robots, og:url, h1,
JSON-LD `@type` set. **No SEO regression.**

## URL variants (validates the new `.htaccess` whitelist entry)

| request | result |
|---|---|
| `https://www/macbook-repair/` | **200** |
| `https://www/macbook-repair` (no slash) | 301 → canonical |
| `http://www/macbook-repair/` | 301 → canonical |
| `https://kortechservice.com/macbook-repair/` (non-www) | 301 → canonical |
| `/no-such-page-xyz/` | **404** (whitelist did not over-open routing) |

Single hop each, no redirect chains.

## Live Mac page

- canonical `https://www.kortechservice.com/macbook-repair/`, `index, follow`
- 1 × h1, 28 h3s, 11,324 chars of body text, React hydrated
- mail-in CTA → `/mail-in-form/` present
- 7 CTAs with `data-track-source`; 4 `tel:` links
- JSON-LD: BreadcrumbList + Service + LocalBusiness; **no `aggregateRating`**
- **Apple claims: all absent** — `authorized service provider`, `apple-certified`,
  `apple certified`, `affiliated with apple`, `apple-endorsed`, `aasp`
- no `same-day` / `turnaround` / `business day` claim
- 375px: `scrollWidth` 360 ≤ 375, **no horizontal overflow**

## Internal links to the new page (live)

`/` · `/data-recovery/` · `/laptop-screen-repair/` · `/pcb-micro-soldering/` ·
`/water-damage-repair/` — **5/5 live and linking**.

## Assets

All 9 hashed assets on the new page return **200** with a browser UA
(79KB CSS, 19.6KB `MacBookRepair-B9XxwHvH.js`, 140KB vendor, …).

⚠️ Testing note: the host's mod_security returns **406 to Python `urllib`'s
default UA**. That is a client-fingerprint artifact, not a production defect —
browser and default-curl UAs both get 200. Do not mistake it for a PR #17-style
stale-asset regression in future checks.

## Review count

Live: **121** on `/` and `/about/` ("Based on 121+ verified customer reviews",
"4.8/5 Google • 121 reviews"). **Zero** stale `112` in rendered text.
Matches `src/data/reviews.json` (`totalReviews: 121`) at the deployed SHA.
