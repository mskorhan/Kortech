# SEO / GEO Audit — kortechservice.com
**Date:** 2026-09-14 · **Property:** `sc-domain:kortechservice.com` · **Repo:** main @ 9feda36 (PR #18 merged)

Scope: Google Search Console (messages, indexing, performance, links), live-server behavior,
and the prerendered `dist/` output. No files were changed.

---

## Executive summary

The build-time SEO discipline here is genuinely strong — `validate-seo.mjs` and
`check-dist-internal-links.mjs` pass on all 57 pages, manual actions and security are clean,
NAP data is consistent, and the sitemap is correct. Nothing in this report contradicts that work.

The problems are all **server-side and off-site** — the layer the build gates cannot see:

| # | Issue | Severity | Evidence |
|---|---|---|---|
| 1 | `/blog/*` returns **HTTP 200** for any fake slug | **P1** | live curl |
| 2 | Staging host is a crawlable duplicate of the whole site | **P1** | live curl |
| 3 | 404s serve the homepage body (canonical + `index,follow`) | P2 | live curl |
| 4 | 92 FAQ answers `hidden` → invisible to AI extractors | P2 (GEO) | dist grep |
| 5 | 8 of 10 city pages are near-identical templates | P2 | dist analysis |
| 6 | `aggregateRating` on 11 pages, 0 `Review` nodes | P2 | dist grep |
| 7 | `sitemap.xml` / `robots.txt` cached 1 month | P3 | .htaccess:89 |

### The headline numbers
- **Indexed 67 / Not indexed 515** — for a site with only **57 real URLs**
- **48.5K impressions → 102 clicks (0.2% CTR), average position 12.8** (page 2)
- The homepage takes **43,423 of 48,500 impressions (90%)** and 95 of 102 clicks
- GSC lists **90 ranking URLs** for those 57 pages — heavy duplication

Read together: demand is real and healthy (`computer repair near me` = 243 impressions).
You are not failing to be seen; you are being seen at position ~12.8, just below where
clicks happen. Almost every issue below either splits ranking signals across duplicate
URL forms or spends crawl budget on URLs that should not exist.

---

## P1 — `/blog/*` returns HTTP 200 for any nonexistent slug

**Verified live:**

```
https://www.kortechservice.com/blog/this-slug-does-not-exist/   -> 200
https://www.kortechservice.com/blog/aaaa-fake-post/             -> 200
https://www.kortechservice.com/definitely-not-real/             -> 404  (correct)
```

**Cause:** `public/.htaccess:37` whitelists `blog(/[^/]+)?`, so *any* `/blog/<anything>/`
matches the known-routes condition, skips the `R=404` at line 39, and falls through to
line 44 → `index.html` at **200**.

That whitelist is generated. `scripts/generate-sitemap.mjs:151`:

```js
segments.add(first === 'blog' ? 'blog(/[^/]+)?' : first);
```

The generator has every real blog slug in `routes.mjs` and deliberately collapses them
into a wildcard. Emitting the 18 actual slugs closes the hole at the source.

**Why this is the top item:** it is an unbounded space of URLs that all return 200 with
homepage markup and `index, follow`. Non-JS crawlers — Bing, ClaudeBot, GPTBot, Applebot,
all present in the access log — never run the React Router swap to NotFound, so they see
a valid 200 homepage. Every other route on the site 404s correctly; only `blog` is open.

---

## P2 — 404 responses serve the full homepage body

Distinct from #1: here the **status is correct (404)**, but the body is wrong.

```
curl https://www.kortechservice.com/nonexistent-test-abc/
  -> 404, 78,624 bytes — BYTE-FOR-BYTE IDENTICAL to the homepage
```

That body carries `<link rel="canonical" href="https://www.kortechservice.com/">`
and `<meta name="robots" content="index, follow, ...">`.

**Cause:** `.htaccess:153` `ErrorDocument 404 /index.html`, and `prerender.mjs` overwrites
`dist/index.html` with the prerendered Home page.

Because the status really is 404 and the canonical consolidates onto `/`, Google handles
this acceptably — which is why this sits at P2, below the blog wildcard. It does, however,
explain the GSC buckets "Alternate page with proper canonical tag" (83) and
"Duplicate without user-selected canonical" (129), and it is why legacy junk URLs
(`/1231542420.shtml`, `/8808242423.shtml`) show at **position 1–2** — Google is treating
them as the homepage.

**Fix:** serve a distinct 404 document with `noindex` and no homepage canonical.

---

## P1 — Staging host is a crawlable duplicate

`kortechservice.pinevillecomputers.com` is live, not a dead vhost:

```
https://kortechservice.pinevillecomputers.com/
  -> 301 -> https://www.kortechservice.pinevillecomputers.com/  -> 200
  -> no X-Robots-Tag header
  -> /robots.txt returns 200 with "Allow: /"
```

The www rule at `.htaccess:11-12` is host-agnostic, so it canonicalizes **deeper into the
staging host** rather than onto the real domain. `public/robots.txt` is one file served for
every vhost with no host check, and the prerendered pages carry no noindex.

**Important caveat:** this host is a subdomain of `pinevillecomputers.com`, a *different*
registrable domain, so it is **not covered** by the `sc-domain:kortechservice.com` property.
None of the 515/67 figures above reflect it. Its footprint is invisible in the data I have —
I verified it is *reachable and unblocked*, not that Google has indexed it.

**Fix:** host-specific 301 to `www.kortechservice.com`, or `X-Robots-Tag: noindex` scoped
to that vhost.

---

## GSC messages (14 total, 13 unread)

10 of 14 are page-indexing. The three most recent (Sep 6, 2026):

- ✅ "Page indexing issues successfully fixed"
- ❌ **"Some fixes failed"** — issue: **`Page with redirect`**
- ❌ **"Some fixes failed"** — issue: **`Soft 404`**

Both validations started 8/22 and **failed 9/5**. Others: 4× "We're validating your fixes"
(Aug 22–24), 3× "New reasons prevent pages from being indexed" (Jul 18, Aug 16, Aug 23),
1× unparsable structured data (Jul 7, now resolved — 0 current), 1× 40-clicks milestone
(Aug 3), 2× general onboarding.

### Full not-indexed breakdown (515)

| Reason | Source | Validation | Pages |
|---|---|---|---|
| Crawled — currently not indexed | Google | Not started | 249 |
| Duplicate without user-selected canonical | Website | Started | 129 |
| Alternate page with proper canonical tag | Website | Not started | 83 |
| Page with redirect | Website | **FAILED 9/5** | 34 |
| Not found (404) | Website | Not started | 9 |
| Discovered — currently not indexed | Google | Not started | 7 |
| Soft 404 | Website | **FAILED 9/5** | 2 |
| Blocked due to other 4xx | Website | Not started | 1 |
| Blocked due to unauthorized request (401) | Website | Not started | 1 |

### Why "Page with redirect" (34) failed

The redirects themselves are **correct** — I tested them; each is a single-hop 301 to a 200:

```
/services            -> 301 -> /services/           OK
kortechservice.com/  -> 301 -> www                  OK
http://www...        -> 301 -> https www            OK
```

One exception is a **2-hop chain**: `kortechservice.com/laptop-screen-repair` → www (no slash)
→ then slash. The non-www rule does not add the trailing slash, so it lands on a URL that must
redirect again. That URL is one of the two Soft 404s.

These URLs *should* redirect — the validation fails because Google keeps re-discovering the
variants (34 and climbing since 7/25). The **GSC Links report** shows why: Google still holds
non-canonical forms as internal link targets — `/contact` (46),
`kortechservice.com/smartphone-screen-repair-charlotte` (43, non-www), `/blog` (41) alongside
`/blog/` (42), `/locations` (22). These are historical crawl records — your build gate proves
current output is clean — but they keep the variants alive. External links are only 77 total
(reddit 25, yellowpages 13, superpages 11, yp 10, mapquest 3), so directory citations are
**not** the driver.

---

## Duplicate URL forms splitting ranking signals

GSC ranks 90 URLs for 57 pages. Same page, multiple forms, signals split:

| Page | competing forms (impressions) |
|---|---|
| data-recovery | non-www **353** vs www+slash 270 |
| services | non-www 211 vs 257 |
| laptop-screen-repair | non-www 126 vs www-no-slash 53 vs 244 |
| printer-router-repair | non-www **370** vs 24 |
| smartphone-screen-repair-charlotte | non-www **360** vs 199 |
| pricing | non-www 157 vs 82 |
| contact | 207 vs 66 |
| locations | 74 vs **418** |

High-visibility, zero-click pages worth attention:
`/charlotte-computer-repair/` **1,013 impressions, 0 clicks** (pos 44.4) ·
`/it-support` **840, 0** (a legacy path that only exists as a redirect) ·
`/locations/` 418, 0.

Legacy URLs from a prior site still ranking: `/17980153555.shtml`, `/1231542420.shtml`
(pos 1.0), `/8808242423.shtml` (pos 2.0), `/shop/`, `/gaming-console-repair/`,
`/computer-repair/` (48 impressions, pos 12.7).

---

## GEO (AI answer engines)

### 92 FAQ answers are hidden from text extraction

`src/components/FAQSection.tsx:84` renders `hidden={openIndex !== index}` with the accordion
closed by default. In `dist`: **92 `id="faq-answer-N" hidden` divs across 18 pages, 0 visible.**

Google indexes collapsed content fine, so this is not an indexing bug — it is specifically a
**GEO** bug. AI extractors and readability pipelines (`innerText`, Trafilatura, most LLM
crawlers) drop `[hidden]` subtrees.

Worth flagging plainly: the PR #16 commit states FAQ answers "are no longer conditionally
mounted… all Q&A text now exists in the prerendered HTML at initial load." That is literally
true — the text is in the HTML — but every answer carries `hidden`, so extractors still drop it.
**The stated goal was not achieved.** Combined with your own note that Google discontinued FAQ
rich results in May 2026, the FAQ markup currently returns nothing to either channel.

The 11 location pages use a different render path with FAQs **not** hidden — those are fine.
Fix is one line: default `openIndex` to `0`, or use `<details>`/CSS collapse.

Affected pages: `/appliance-electronics-repair/`, `/business-it-support/`, `/custom-gaming-pc/`,
`/data-recovery/`, `/graphic-design/`, `/laptop-screen-repair/`, `/nintendo-switch-repair/`,
`/pcb-micro-soldering/`, `/printer-router-repair/`, `/ps5-hdmi-repair/`, `/remote-assistance/`,
`/smart-tv-repair/`, `/smartphone-screen-repair-charlotte/`, `/ssd-upgrades/`,
`/tablet-ipad-repair/`, `/virus-malware-removal/`, `/water-damage-repair/`, `/xbox-hdmi-repair/`.

### Other GEO gaps
- No `<article>` or `<time datetime>` on any of the 18 blog posts — the primary signals
  extractors use to find article boundaries and dates.
- `mainEntityOfPage` missing on all 18 BlogPostings; `author` is a bare Organization with no
  `url`/`@id` (weak E-E-A-T).
- `datePublished === dateModified` on 18/18, with 13 posts dated Jan–Feb 2025 and titles
  advertising "2025" on a site now in 2026 — stale freshness signals.

---

## Structured data

Healthy: 57/57 valid JSON-LD, **zero parse errors**, BreadcrumbList on all 57 with correct
positions, 30 Service nodes complete, 87/87 images have alt text, GSC reports
Breadcrumbs 21 valid / 0 invalid and Review snippets 7 valid / 0 invalid.

**`aggregateRating` on 11 pages with 0 `Review` nodes** — homepage + all 10 city pages carry
`4.8 / 112`, and `grep '"@type":"Review"'` over dist returns **0**.

One correction worth stating clearly: the rating is **not fabricated**. `src/data/reviews.json`
holds real Google data (updated 2026-08-01, rating 4.8, totalReviews 112) plus 5 full reviews
with author/text/timestamp, fetched by `scripts/fetch-google-reviews.mjs`. Review text already
renders on 3 pages (home, contact, locations) via `FiveStarReviews.tsx` — it simply is not marked
up as `Review` schema.

So the fix is to **emit Review nodes from data you already have**, not to remove
`aggregateRating`. The sharper risk is the 10 city pages, which carry the rating with no review
content on the page at all.

Other schema notes: no `@id` on any node (Organization + 3 LocalBusiness read as 4 unrelated
entities); homepage uses non-standard `serviceArea` with bare strings where `/locations/`
correctly uses `areaServed` + `City` objects; homepage LocalBusiness lacks `priceRange`/`areaServed`.

---

## Location pages — 8 of 10 are doorway-page risk

Measured on rendered `dist/` HTML with city names and ZIPs normalized:

| Page | city-unique content blocks |
|---|---|
| Charlotte | 16/30 (53%) — genuinely differentiated |
| Matthews | 12/32 (38%) — genuinely differentiated |
| Indian Trail / Mint Hill | 3/32 (9%) |
| Pineville, Ballantyne, Waxhaw, Weddington, Stallings | 2/29 (7%) |
| **Monroe** | **1/29 (3%)** |

8-gram Jaccard across the outer-ring eight: **87–92%** (Monroe vs Stallings 91.6%). All eight
run ~570–580 words and 350–351 source lines — one template with the city swapped. Monroe's only
unique sentence is a single clause about highway access.

Charlotte and Matthews carry real landmarks (SouthPark Mall, Uptown, Matthews Community Center)
and unique FAQs, and are **not** at risk.

This is the most likely driver of **"Crawled — currently not indexed" (249 pages)**: Google
crawled them and declined to index on quality grounds. It also matches
`/charlotte-computer-repair/` pulling 1,013 impressions at position 44 with zero clicks.

---

## NAP consistency — clean

No inconsistencies found, and everything matches `LOCAL_CITATIONS.md`:

- **Phone:** `704-246-7642` (264 occurrences) is the main line; `980-888-5300` (80) is a
  deliberate, separately documented SMS line, always labeled "Text/Mobile" on `sms:` hrefs.
- **Address:** `1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270` — uniform across all 30+
  occurrences and every JSON-LD `streetAddress`/`postalCode`.
- **Hours:** Mon–Fri 9:00–18:00, Sat 11:00–16:00, Sun closed — semantically identical
  everywhere including all JSON-LD. Only cosmetic string variation.
- **Name:** `KorTech Service` 250×; the single `Kortech Service` is inside verbatim customer
  review text — correct to leave alone.
- `(123) 456-7890` / `123 Main St` are form input placeholders only, not rendered NAP.

---

## Also worth fixing

- **`sitemap.xml` and `robots.txt` inherit a 1-month cache.** `.htaccess:89` sets
  `ExpiresDefault "access plus 1 month"` with no `ExpiresByType` for `application/xml` or
  `text/plain`. Directly delays sitemap discovery. Same stale-content family as PR #17.
- **Conflicting HTML cache directives:** `ExpiresByType text/html "access plus 1 day"` (line 90)
  vs `Cache-Control "public, max-age=3600"` on `\.html$` (line 118).
- **`/about-us` and `/contact-us` 404** with real on-site referers in the access log —
  add 301s alongside the existing legacy redirects at `.htaccess:22-23`.
- **CLS risk:** 77 of 87 `<img>` tags lack width/height; the navbar logo (LCP candidate on all
  57 pages) has no dimensions, no `loading`, no `decoding`, and no preload. `LazyImage.tsx` and
  `ImageOptimizer.tsx` already support this and are imported nowhere.
- **19 blog hero images hotlinked from images.pexels.com.**
- **8 city titles and 7 descriptions** are identical apart from the city name; separator is
  inconsistent (`|` vs `•`). Lengths are otherwise good — 52/57 descriptions in the ideal band.
- **Heading skips on 23 of 57 pages** (H1→H3 from hero sections) — accessibility, not ranking.
- **`Order Allow,Deny`** (line 144) is Apache 2.2 syntax — latent 500 on a server upgrade.
- **`public/_redirects`** (`/* /index.html 200`) is inert on Apache but is the exact inverse of
  the soft-404 fix — a latent site-wide regression if you ever move to Netlify/Cloudflare.

**Not actionable:** Core Web Vitals shows **no field data** (mobile and desktop) — insufficient
traffic for CrUX, not a defect.

**Log caveat:** the two `.gz` access logs are byte-identical (one dataset, 2026-08-21) and
**predate** the Aug-31 preload fix `447c49d`. The `/assets/js/index.js` 404s in them are the
already-fixed PR #17 bug. Pull a fresh log to confirm current state.

---

## Recommended order

1. **Close the `/blog/*` 200 hole** — emit real slugs in `generate-sitemap.mjs:151` instead of the wildcard.
2. **Deindex or 301 the pinevillecomputers.com host.**
3. **Give 404s their own document** with `noindex` and no homepage canonical.
4. **Unhide the FAQ answers** (one line, unlocks 92 answers across 18 pages for AI engines).
5. **Rewrite or consolidate the 8 thin city pages** — likely the largest ranking lever, given 249 crawled-not-indexed.
6. Emit `Review` nodes from `reviews.json`; add `@id` cross-references.
7. Short cache TTLs for `sitemap.xml` / `robots.txt`; reconcile the HTML cache conflict.
8. Collapse the non-www→slash redirect chain; add `/about-us` + `/contact-us` 301s.
9. Image dimensions via the existing unused components; self-host blog heroes.
