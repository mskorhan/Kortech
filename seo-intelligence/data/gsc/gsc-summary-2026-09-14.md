# GSC dataset — pulled 2026-09-14

Property `sc-domain:kortechservice.com`, Search type Web, **last 3 months**
(≈2026-06-16 → 2026-09-11). Last GSC data refresh: 10.5 hours before pull.

## Totals
| metric | value |
|---|---|
| Impressions | 49,000 (48,975 across device rows) |
| Clicks | 103 |
| Average CTR | 0.2% |
| Average position | 12.8 |
| Distinct queries returned | 1,000 (GSC row cap) |
| Queries with ≥10 impressions | 153 |
| Long tail (<10 impressions) | 844 queries / 2,054 impressions |

## Device split — the most important single cut

| device | clicks | impressions | CTR |
|---|---|---|---|
| **Mobile** | **66** | **3,896** | **1.69%** |
| **Desktop** | **35** | **45,075** | **0.08%** |
| Tablet | 2 | 68 | 2.94% |

Desktop carries **92% of all impressions and produces almost no clicks**. Mobile
is 8% of impressions and produces 64% of clicks. The headline "0.2% CTR" is
essentially a desktop artifact; the channel that actually generates calls and
texts converts at 1.7%.

Implication: sitewide CTR is not one problem. Mobile CTR is unremarkable for
local service search. The desktop number is the anomaly and is consistent with
broad, non-local informational impressions (see the position-30+ bucket below)
rather than with a snippet-quality problem.

## Search Appearance
Only **1 row, 2 impressions**. Effectively none of the 49K impressions come
from a special result type, so these are ordinary blue-link impressions and the
zero-CTR readings below are real, not rich-result artifacts.

## Position buckets (queries with ≥10 impressions)

| bucket | queries | impressions |
|---|---|---|
| Striking distance (pos 4–20) | 25 | 1,295 |
| **Page 1 (pos ≤10) with ZERO clicks** | **11** | **1,364** |
| Mid (pos 21–30) | 21 | 1,412 |
| Deep (pos 30+) | 100 | 3,895 |
| Any clicks at all | 9 | 699 |

100 of the 153 meaningful queries sit past position 30. That bucket is where
the desktop impression inflation lives — visibility with no realistic click
path. It is not worth optimising snippets for.

## Page-1 queries returning ZERO clicks (1,364 impressions)

| query | impressions | position |
|---|---|---|
| laptop repair | 727 | 2.6 |
| computer repair matthews north carolina | 329 | 8.1 |
| graphics card repair | 97 | 1.2 |
| motherboard repair | 59 | 1.3 |
| computer support service | 51 | 1.0 |
| matthews computer technician | 30 | 8.8 |
| nc computer tech | 26 | 3.7 |
| computer consultant | 14 | 1.0 |
| electronics repair near me | 11 | 5.8 |
| computer support and services | 10 | 4.0 |
| pc repair | 10 | 8.1 |

CAUTION on the position 1.0–1.3 rows (`computer support service`,
`computer consultant`, `graphics card repair`, `motherboard repair`): a true
position-1 blue link does not return 0% CTR at this impression volume. GSC
averages position across every appearance, so a handful of very low-volume
impressions at position 1 can coexist with the bulk sitting far lower, and
`laptop repair` at 727 impressions / position 2.6 / 0 clicks is the same shape.
These are almost certainly broad-match national queries where the site surfaces
rarely and shallowly. **Do not treat them as "we rank #1 and nobody clicks".**
They are not snippet-quality problems and rewriting titles for them would be
optimising against a measurement artifact.

## Striking distance (pos 4–20, ≥10 impressions)

| query | impressions | position | CTR | clicks |
|---|---|---|---|---|
| computer repair matthews north carolina | 329 | 8.1 | 0% | 0 |
| computer repair near me | 243 | 13.0 | 2.1% | 5 |
| kortech service | 145 | 5.4 | 17.2% | 25 |
| repair computer near me | 83 | 17.7 | 0% | 0 |
| laptop repair near me | 61 | 8.5 | 6.6% | 4 |
| pc repair near me | 46 | 7.5 | 2.2% | 1 |
| computer service | 39 | 16.3 | 0% | 0 |
| computer repair service | 38 | 10.6 | 0% | 0 |
| computer repair matthews nc | 30 | 10.7 | 6.7% | 2 |
| matthews computer technician | 30 | 8.8 | 0% | 0 |
| printer repair near me | 29 | 15.3 | 0% | 0 |
| ps5 repair near me | 28 | 16.0 | 0% | 0 |
| pc repair services | 26 | 13.8 | 0% | 0 |
| matthews laptop repair | 26 | 14.0 | 0% | 0 |
| matthews computer repair | 22 | 14.5 | 0% | 0 |
| computer store near me | 18 | 15.6 | 0% | 0 |
| computer repair monroe nc | 16 | 11.9 | 0% | 0 |
| matthews pc repair | 13 | 13.2 | 0% | 0 |

## The Matthews cluster — the clearest real opportunity

| query | impressions | position |
|---|---|---|
| computer repair matthews north carolina | 329 | 8.1 |
| computer repair matthews nc | 30 | 10.7 |
| matthews computer technician | 30 | 8.8 |
| matthews laptop repair | 26 | 14.0 |
| matthews computer repair | 22 | 14.5 |
| matthews pc repair | 13 | 13.2 |
| **cluster total** | **450** | **8–15** |

450 impressions of explicit local commercial intent, all on or near page 1,
returning **2 clicks total**. The shop is on Sardis Rd N directly adjacent to
Matthews, so this is genuinely servable demand — not a query we rank for by
accident. This is the single highest-value target in the dataset.

Note the phrasing split: Google is sending "matthews **north carolina**"
(329 impressions) far more than "matthews **nc**" (30). The page title uses
neither form prominently.

## Brand vs non-brand
`kortech service` (145i, 25 clicks) + `kortech` (45i, 3 clicks) = **28 of 103
clicks from brand**. Non-brand search produces ~75 clicks against ~48,800
impressions. Brand demand is small but converts at 17%; the growth headroom is
entirely non-brand local commercial.

## Data provenance
Pulled from the GSC Performance UI via authenticated browser session, 3-month
window, Web search type. Row cap 1,000 applies to the query dimension. No API
key or service account used, so nothing credential-bearing is stored here.
