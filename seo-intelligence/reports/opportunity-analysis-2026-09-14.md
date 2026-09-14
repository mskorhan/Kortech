# Opportunity analysis — 2026-09-14

Source: Google Search Console, `sc-domain:kortechservice.com`, Web, last 3 months
(≈2026-06-16 → 2026-09-11). No Semrush enrichment — MCP registered but not yet
authenticated, so **no volume, KD, intent or competitor figures appear anywhere
in this document.** Those columns are deliberately blank rather than estimated.

## Critical caveat on timing

This window **entirely predates the PR #20 remediation deployed 2026-09-14
17:52 UTC**. Every figure here describes the pre-fix site:

- the `ErrorDocument 404 /index.html` bug was still consolidating junk URLs onto
  the homepage, which inflates the homepage's impression share below;
- all 10 location pages had their titles, descriptions and body content
  rewritten hours ago and have **not been recrawled**.

Consequence for this pass: **do not re-touch the location titles/metas.** They
are new, in flight, and changing them again resets the recrawl clock and
destroys attribution for work already shipped. Re-measure in ~4 weeks.

---

## 1. The CTR headline is a desktop artifact, not a snippet problem

| device | clicks | impressions | CTR |
|---|---|---|---|
| **Mobile** | **66** | 3,896 | **1.69%** |
| Desktop | 35 | 45,075 | **0.08%** |
| Tablet | 2 | 68 | 2.94% |

Desktop is 92% of impressions and 0.08% CTR. Mobile is 8% of impressions and
produces 64% of clicks at a CTR that is unremarkable-to-healthy for local
service search. The sitewide "0.2% CTR" figure is the average of those two very
different things and should not be treated as one problem.

## 2. Query families — what is actually clickable

Computed over the 997 returned query rows (9,675 impressions; the remaining
~39K sits in the long tail GSC does not return).

| family | queries | impressions | clicks | CTR | avg position |
|---|---|---|---|---|---|
| **"near me"** | 271 | 1,709 | **25** | **1.46%** | 19.6 |
| brand ("kortech") | 2 | 190 | **28** | **14.74%** | 4.6 |
| "nc" abbreviated | 80 | 1,442 | 5 | 0.35% | 43.4 |
| **"north carolina" spelled out** | 23 | 1,439 | **0** | **0.00%** | 45.7 |
| everything else | 626 | 5,089 | 4 | 0.08% | 37.1 |

**The "north carolina" family returns zero clicks across 1,439 impressions.**
Compare directly within the same city:

| query | impressions | position | clicks | CTR |
|---|---|---|---|---|
| computer repair matthews **nc** | 30 | 10.7 | **2** | 6.7% |
| computer repair matthews **north carolina** | 329 | **8.1** | **0** | 0% |

The better-positioned, 11×-higher-impression form converts at zero while the
smaller abbreviated form converts at 6.7%. Same pattern across
"computer repair uptown north carolina" (240i), "ipad repair matthews north
carolina" (231i), "computer repair myers park north carolina" (208i) — all
service + place + the state spelled out, all 0 clicks, overwhelmingly desktop.

**Conclusion: treat the "north carolina" family as non-clickable impressions.**
Optimising titles or snippets against them would be optimising against a
measurement artifact. They are excluded from the action list below. Everything
retained has either real clicks or the "near me"/"nc" local phrasing that
demonstrably converts.

*Open question for the owner: does this match traffic you have seen before?
If this volume is familiar and has never produced calls, that confirms it.*

## 3. Matthews page targeting — the one unambiguous defect

Filtered to queries containing "matthews", broken down by page:

| page | impressions | clicks |
|---|---|---|
| **https://www.kortechservice.com/** | **780** | **2** |
| /locations/ | 14 | 0 |
| /contact | 11 | 0 |
| /about | 8 | 0 |
| **/matthews-computer-repair/** | **2** | **0** |

Google is serving the **homepage** for Matthews searches and effectively
ignoring the dedicated Matthews page, which receives 2 impressions total.

This holds regardless of the phrasing caveat above — the homepage is what
Google *chose*, and the abbreviated "matthews nc" form (which does convert)
is part of the same 780.

The shop sits on Sardis Rd N directly adjacent to Matthews, so this is real
servable demand, not accidental ranking. The Matthews page is also one of the
two location pages the audit found already well-differentiated.

**Fix: internal linking and on-page entity clarity only.** Service pages and the
Locations hub should point at `/matthews-computer-repair/` with descriptive
anchors. No canonical, redirect, sitemap or routing changes — the routing freeze
applies while GSC revalidates Soft 404 / Page-with-redirect.

## 4. "near me" queries that already convert — protect these

| query | impressions | position | clicks | CTR |
|---|---|---|---|---|
| computer repair near me | 243 | 13.0 | 5 | 2.1% |
| laptop repair near me | 61 | 8.5 | 4 | 6.6% |
| pc repair near me | 46 | 7.5 | 1 | 2.2% |
| macbook repair near me | 10 | 13.8 | 1 | 10% |
| phone repair near me | 10 | 15.3 | 1 | 10% |
| electronics store near me | 6 | 4.2 | 1 | 16.7% |
| ipad repair near me | 6 | 22.8 | 1 | 16.7% |
| iphone repair near me | 4 | 7.2 | 1 | 25% |
| laptop screen repair near me | 3 | 10.7 | 1 | 33.3% |
| laptop battery replacement near me | 2 | 5.5 | 1 | 50% |
| external hard drive fix near me | 2 | 1.0 | 1 | 50% |
| **micro soldering near me** | 1 | 1.0 | 1 | 100% |

`micro soldering near me` and `external hard drive fix near me` converting at
100%/50% is small-sample, but it points at KorTech's genuine board-level
specialism being a differentiated, low-competition entry point.

## 5. "near me" striking distance — zero clicks, position 4–25

Real local intent, servable services, no clicks yet:

| query | impressions | position |
|---|---|---|
| repair computer near me | 83 | 17.7 |
| printer repair near me | 29 | 15.3 |
| **ps5 repair near me** | 28 | 16.0 |
| computer store near me | 18 | 15.6 |
| electronics repair near me | 11 | 5.8 |
| it service near me | 9 | 23.3 |
| computer repair shop near me | 8 | 17.6 |
| **nintendo switch repair near me** | 8 | 19.9 |
| computer fix near me | 6 | 6.2 |
| computer repair shops near me | 6 | 6.2 |
| electronic repair near me | 5 | 10.8 |
| **xbox repair near me** | 5 | 11.0 |
| **ps5 controller repair near me** | 5 | 13.2 |

Console repair ("ps5 repair near me", "nintendo switch repair near me",
"xbox repair near me", "ps5 controller repair near me" = 46 impressions
combined, positions 11–20) maps directly onto pages that already exist.

## 6. Device/component queries — AEO targets

| query | impressions | position | clicks |
|---|---|---|---|
| graphics card repair | 97 | 1.2 | 0 |
| repair computer screen | 60 | 22.1 | 0 |
| motherboard repair | 59 | 1.3 | 0 |
| xbox hdmi port repair near me | 57 | 85.8 | 0 |

The position 1.0–1.3 rows (`graphics card repair`, `motherboard repair`,
`computer support service`, `computer consultant`) must be read carefully: a
genuine position-1 blue link does not return 0% CTR at these volumes. GSC
averages position across all appearances, so a few shallow impressions at
position 1 can coexist with the bulk ranking far lower. **These are not
"we rank #1 and nobody clicks" and are not snippet problems.**

They *are* useful as evidence of topical relevance — the site surfaces for
board-level component repair language, which supports AEO work on those
concepts.

## 7. Position distribution — where effort is wasted

Of 153 queries with ≥10 impressions:

| bucket | queries | impressions |
|---|---|---|
| striking distance (4–20) | 25 | 1,295 |
| page 1 (≤10) with zero clicks | 11 | 1,364 |
| mid (21–30) | 21 | 1,412 |
| **deep (30+)** | **100** | **3,895** |

100 of 153 meaningful queries sit past position 30 — visibility with no
realistic click path, and where most of the desktop impression inflation lives.
Not worth snippet work.

## 8. Blocked on Semrush

Not produced, because producing them without data would mean inventing them:

- keyword volume, KD, SERP intent labels
- real organic competitor identification (§6 of the brief)
- backlink/referring-domain gap and Authority Score (§7)
- AI Visibility prompts, citations, competitor AI share (§11)

Import paths are documented and ready in `seo-intelligence/data/semrush/` and
`seo-intelligence/data/ai-visibility/`.
