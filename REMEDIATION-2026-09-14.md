Remediation of the confirmed findings in the 2026-09-14 Search Console audit
(`SEO-GEO-AUDIT-2026-09-14.md`, added here for the record).

**GSC baseline:** 67 indexed / 515 not indexed against 57 real URLs. 48.5K
impressions, 102 clicks (0.2% CTR), average position 12.8. Both "Soft 404" and
"Page with redirect" fix-validations failed on 9/5.

## P1 — `/blog/*` returned HTTP 200 for any slug

`generate-sitemap.mjs` collapsed all 18 blog routes into the wildcard
`blog(/[^/]+)?` when generating the `.htaccess` known-routes whitelist, so any
`/blog/<anything>/` matched the whitelist, skipped the `R=404` rule and fell
through to `index.html` at **200** — an unbounded soft-404 surface serving
homepage markup with `index, follow` to crawlers that do not run JS. Every other
route 404'd correctly; only `blog` was open.

The generator now emits each route's full literal path and throws if a route
is not a plain lowercase slug. `validate-routing.mjs` fails the build if a
wildcard ever reappears.

## P1 — Staging host served a crawlable duplicate

`kortechservice.pinevillecomputers.com` returned 200 with no `X-Robots-Tag` and
`robots.txt` `Allow: /`, and the host-agnostic www rule canonicalised it
*deeper into itself*. Added an exact-host 301 ahead of the HTTPS/www blocks so
either scheme and either host form reaches the canonical URL in one hop,
preserving the path.

It is a subdomain of a different registrable domain, so it is **not** covered by
the `sc-domain:kortechservice.com` property — its footprint never appeared in
the figures above. Post-deploy verification will confirm whether this docroot
actually controls that host; if not, it needs a Bluehost-side fix and this
PR documents that rather than faking one.

## P2 — 404s served the homepage body

`ErrorDocument 404 /index.html` meant every 404 returned a body byte-for-byte
identical to the homepage, carrying the homepage's `rel=canonical` and
`index, follow`. `prerender.mjs` now writes `dist/404.html` from the NotFound
route and `ErrorDocument` points there. Written as `404.html` (not
`404/index.html`) so it stays outside the `dist/**/index.html` set the existing
gates walk, since it is intentionally canonical-less. The capture asserts the
NotFound heading, `noindex`, and absence of a canonical before writing, so a
preview-server error page cannot ship as the production 404.

`SEOHead` no longer derives `og:url` from the pathname when `noindex` is set —
otherwise the prerendered 404 would mint a canonical-looking URL for whatever
junk path was requested.

## GEO — 92 FAQ answers were invisible to AI extractors

`FAQSection` collapsed answers with the `hidden` attribute, so all 92 answers
across 18 pages were dropped by AI answer engines and readability extractors,
which skip `[hidden]` subtrees. Replaced with a grid-rows collapse.

Note PR #16 claimed this was already fixed: the text *was* in the HTML, but
every answer carried `hidden`, so extraction still failed.

A first attempt using `grid-rows-[1fr]` for the open state silently broke the
accordion — a plain `fr` track in a content-height grid computes to `0px`, so
panels never opened. No build gate caught it (`validate-routing` asserts
extractability, true in both the working and broken states). Found by measuring
rendered height in a browser at 390x844 and fixed with `minmax(0,1fr)`.
Verified: closed = 0px with no `hidden` and `innerText` still returning the
answer; open = 68px visible; `aria-expanded` correct through open/close/reopen.

## Review schema

Removed `aggregateRating` from our own LocalBusiness/Organization schema on all
11 pages (home + 10 city pages). The 4.8/112 figures are Google's, and
republishing a rating about ourselves in our own structured data is
self-serving review markup. **No `Review` nodes were added.** The visible
Google rating and review text stay on the page with attribution.

GSC's "Review snippets: 7 valid" will drop to 0 — that is the intended
outcome, not a regression to fix later.

## Service-area duplication

The audit measured 8 of 10 city pages at **87-92%** 8-gram similarity — the
doorway-page pattern, and the likely reason 249 pages sit in "Crawled —
currently not indexed". Re-measured on rendered output with city names and ZIPs
normalised (so the comparison is structural, not token-level):

| | before | after |
|---|---|---|
| mean similarity across the 8 | ~87-92% | **12.2%** |
| highest single pair | 91.6% | **14.4%** |

The residue is shared navbar/footer chrome. Charlotte and Matthews were already
differentiated and are untouched.

All 10 titles and descriptions are now unique (previously 8 titles and 7
descriptions were identical but for the city name); every title is under 60
chars and every description lands in 120-160.

Differentiation uses only verifiable facts — directional geography relative to
1721 Sardis Rd N, incorporation/county status, and drop-off vs pickup. **No**
mileages, drive times, response times, neighbourhood names, landmarks, customer
counts or local testimonials were invented. Removed "Serving &lt;City&gt;, NC Since
1998" and "for over 25 years" from all 8 (the business dates to 1998, but that
does not establish a 25-year presence in each service area — Charlotte keeps it,
the shop is physically there), a "just minutes from Mint Hill" drive-time
claim, and "Highly rated by &lt;City&gt; customers", which implied city-specific
reviews. Several customer-mix claims that appeared during drafting were
rewritten as capability statements.

New inline address/hours mentions match `LOCAL_CITATIONS.md` exactly, so NAP
consistency — a verified strength in the audit — is preserved.

## Regression protection

`scripts/validate-routing.mjs` runs in the build and fails on: a wildcard or
missing entry in the known-routes whitelist; a 404 document that is missing,
canonical-bearing, indexable or homepage-identical; non-canonical or
staging-host URLs in sitemap/canonical/og:url/JSON-LD; FAQ answers carrying
`hidden` or `aria-hidden`; `aggregateRating`/`Review` in our own schema; and
unparseable JSON-LD. Verified it fails on both original bugs and passes when
they are restored.

`scripts/verify-production.mjs` (`npm run verify-production`) is the post-deploy
counterpart, covering what needs a real server: fake blog slugs and legacy
`.shtml` paths 404ing on **GET and HEAD**, the 404 body differing from the
homepage, single-hop canonical redirects landing on 200, the staging host,
sitemap/robots/404.html/IndexNow-key reachability, FAQ extractability, and
absence of `aggregateRating`.

Against **current** production it reports **60/92 with 32 failures**, each
matching a confirmed audit finding — that is the baseline this PR clears. It
must pass before any GSC "Validate Fix" is restarted; validating against
unfixed behaviour is what burned the 9/5 cycle.

## Also

`/about-us` and `/contact-us` 301 to their real pages (both 404'd with real
on-site referers); `sitemap.xml`, `robots.txt` and `text/plain` get 1-hour
cache TTLs instead of inheriting `ExpiresDefault`'s 1 month; the html
Expires/Cache-Control conflict is reconciled; the file-deny block gains an
Apache 2.4 `Require all denied` branch; homepage LocalBusiness uses `areaServed`
with City objects instead of a non-standard `serviceArea` string array and
gains `priceRange`; `public/_redirects` no longer says `/* /index.html 200` —
the exact inverse of this fix, which would silently reintroduce the soft-404
bug on a move to Netlify/Cloudflare.

Query-string URLs (`/?sz=357714`) are deliberately left alone: `%{REQUEST_URI}`
excludes the query string, so they already serve 200 with a correct
self-referencing canonical (which is why GSC filed them as "Alternate page with
proper canonical"). A stripping rule would break `utm_*`, `gclid` and GA4
attribution.

## Open question for the owner

One differentiator was left out because only you can confirm it: whether
walk-ins without an appointment are fine at the Charlotte shop. If they are,
that is a genuine Stallings/Pineville angle worth adding back.

## Verification

type-check, lint, full build (57/57 prerendered + `dist/404.html`),
validate-seo, validate-routing, check-dist-internal-links all pass. 30 JSON-LD
blocks across the location pages parse with no errors. Zero FAQ answers carry
`hidden`; zero pages publish `aggregateRating`. Accordion behaviour confirmed
in-browser at 390x844.

No changes to CSP, GA4/Consent Mode, Maps, IndexNow, Mail-In logic, or
pricing/warranty policy. No Google Ads work.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01W92uU6WxJpmgztRmc4LN9V
