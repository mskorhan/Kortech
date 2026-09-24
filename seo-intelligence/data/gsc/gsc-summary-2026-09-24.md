# GSC dataset — pulled 2026-09-24 (post-PR#20/#21 baseline)

Property `sc-domain:kortechservice.com`, Search type Web, **last 3 months**
(≈2026-06-26 → 2026-09-21). Last GSC data refresh: 6.5 hours before pull.
Same property, search type, window length and UI methodology as the
2026-09-14 pull, so the two are directly comparable.

**Read with care.** PR #20 and PR #21 deployed 2026-09-14. This window is a
rolling 3 months that mostly *predates* the deploy — only ~7 of ~87 days are
post-deploy. Changes below are therefore **directional, not conclusive**, and
the trailing window dilutes any post-deploy effect. Do not treat any movement
here as a settled outcome.

## Totals

| metric | 2026-09-14 | 2026-09-24 | change |
|---|---|---|---|
| Impressions | 49,000 | 53,000 | +4,000 |
| Clicks | 103 | 113 | +10 |
| Average CTR | 0.2% | 0.2% | flat |
| Average position | 12.8 | 12.7 | ~flat |

## Device split

| device | clicks | impressions | CTR | prior clicks/impr |
|---|---|---|---|---|
| **Mobile** | **73** | 4,219 | **1.73%** | 66 / 3,896 (1.69%) |
| Desktop | 38 | 48,728 | 0.08% | 35 / 45,075 (0.08%) |
| Tablet | 2 | 73 | 2.74% | 2 / 68 (2.94%) |

The desktop-artifact reading from 9/14 **holds**. Desktop is still ~92% of
impressions at 0.08% CTR; mobile still produces 65% of clicks. Mobile CTR ticked
up slightly (1.69% → 1.73%). No change in interpretation.

## Matthews cluster — THE headline measurement

Queries containing "matthews", broken down by page:

| page | 9/14 impr | 9/14 clicks | 9/24 impr | 9/24 clicks |
|---|---|---|---|---|
| homepage | 780 | 2 | 819 | 2 |
| **/matthews-computer-repair/** | **2** | **0** | **42** | **0** |
| /locations/ | 14 | 0 | 14 | 0 |
| /contact | 11 | 0 | 11 | 0 |
| /about | 8 | 0 | 8 | 0 |
| /data-recovery/ | — | — | 3 | 0 |
| /locations (no slash) | — | — | 2 | 0 |
| /contact/ | — | — | 2 | 0 |
| /charlotte-computer-repair/ | — | — | 1 | 0 |

Cluster totals: **864 impressions / 2 clicks / avg position 17.5**
(was 450 / 2 / positions 8–15).

**The Matthews page went from 2 to 42 impressions — a 21× increase.** Two
service/location pages (`/data-recovery/`, `/charlotte-computer-repair/`) now
also surface for Matthews queries, which they did not before. That is the
specific association PR #21's ServiceAreaLinks was built to create, and it is
the first evidence the mechanism works.

**Caveats that matter:**
- 42 impressions against the homepage's 819 is still a ~19:1 split. Google has
  **not** switched primary page selection. The defect is not resolved.
- Still **0 clicks** on the Matthews page.
- Average cluster position went 8–15 → 17.5, i.e. *worse*, while impressions
  nearly doubled (450 → 864). That is the expected shape when a page starts
  surfacing for more, deeper queries — more coverage at lower average rank —
  not necessarily a ranking loss.
- The cluster grew from 6 queries to **21**, including new device-specific
  phrasings: ipad repair matthews north carolina (247), cracked screen repair
  matthews north carolina (34), iphone repair matthews north carolina (31),
  cell phone repair matthews north carolina (30).
- Most of the growth is in the **"north carolina" spelled-out family**, which
  the 9/14 analysis established as non-clickable (0 clicks across 1,439 impr).
  The 9/24 cluster shows the same shape: `computer repair matthews nc` = 32 impr
  / **2 clicks**; `computer repair matthews north carolina` = 354 impr / 0
  clicks. Impression growth concentrated in the non-clickable family is **not**
  a lead-generation win.

Verdict: **encouraging directional signal on page association, no click
outcome yet, do not touch the Matthews page.** Re-measure in mid-to-late
October when the trailing window is fully post-deploy.

## "near me" family

| metric | 9/14 | 9/24 |
|---|---|---|
| queries | 271 | **330** |
| impressions | 1,709 | **1,880** |
| clicks | 25 | **27** |
| CTR | 1.46% | 1.4% |
| avg position | 19.6 | 33.2 |

Still the only non-brand family converting at a meaningful rate.

### Tracked "near me" queries

| query | 9/14 impr/clicks | 9/24 impr/clicks | note |
|---|---|---|---|
| computer repair near me | 243 / 5 | 265 / 5 | stable |
| laptop repair near me | 61 / 4 | 64 / 4 | stable |
| pc repair near me | 46 / 1 | 47 / 1 | stable |
| **phone repair near me** | 10 / 1 | **14 / 1** | PR #22 target |
| macbook repair near me | 10 / 1 | 10 / 1 | no dedicated page |
| computer shops near me | — | 7 / 1 | new converter |
| electronics store near me | 6 / 1 | 6 / 1 | stable |
| **ipad repair near me** | 6 / 1 | **6 / 1** | PR #22 target |
| tech stores near me | — | 4 / 1 | new converter |
| iphone repair near me | 4 / 1 | 4 / 1 | stable |

Note: `printer repair near me` and `electronics repair near me` (the other two
PR #22 targets) did not appear in the top-10 converter rows this pull; they sat
at 29 and 11 impressions with 0 clicks on 9/14 and were not re-read
individually. Their ServiceAreaLinks additions ship in PR #22 and should be
measured next pull.

## Other movement since 9/14

- `computer repair charlotte nc`: **115 impressions / 2 clicks** — a converting
  local-commercial query that was not in the 9/14 top rows. Points at
  `/charlotte-computer-repair/`. Worth watching as a second location-page test
  alongside Matthews.
- `kortech service` brand: 167 impr / 27 clicks (was 145 / 25). Brand demand
  growing slightly.
- `android screen repair` 63 impr / 0 clicks, `android phone screen repair` 19,
  `android phone repair` 16 — an Android cluster with no dedicated page.
  Untested demand; note only, no action.

## Provenance

Pulled from the GSC Performance UI via the owner's authenticated browser
session, 3-month window, Web search type. Query-dimension row cap 1,000 applies.
No API key or service account used; nothing credential-bearing is stored here.
