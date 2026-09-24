# GSC opportunity set — awaiting Semrush enrichment

Built 2026-09-16. This is the **GSC-only half** of the master opportunity list
the brief asks for. Volume, KD, CPC, Semrush position, competitor, competitor
URL and SERP feature columns are **absent, not blank** — Semrush MCP is still
unauthenticated and those figures are never estimated. When the Semrush exports
land (see `semrush-manual-export-guide.md`), they join onto this table on the
keyword field and this becomes the master list.

Source window: ≈2026-06-16 → 2026-09-11, pulled 2026-09-14. **The window
predates the PR #20 and PR #21 deploys**, so every row describes the pre-fix
site. Nothing here has had time to recrawl.

Columns filled from evidence: intent, cluster, local relevance, lead potential,
recommended action, priority, status. Columns requiring Semrush are omitted.

---

## Status definitions

- **DO NOW** — evidence is sufficient and the change does not touch anything
  deployed in the last 72 hours.
- **MONITOR** — real opportunity, but the page was just changed; measuring is
  the correct next action, not editing.
- **LATER** — genuine but needs Semrush enrichment or new assets first.
- **IGNORE** — vanity impressions, measurement artifact, or no lead value.

## Current DO NOW count: 0

Not a placeholder. Every candidate that clears the evidence bar targets a page
PR #20 or PR #21 modified within the last 48 hours, which makes MONITOR the
correct status under the brief's own "allow recrawl/re-ranking time" rule.
Rewriting them now would destroy attribution for work already shipped.

---

## Cluster A — Matthews local commercial (highest value, MONITOR)

| keyword | impr | clicks | CTR | pos | intent | lead potential | action | status |
|---|---|---|---|---|---|---|---|---|
| computer repair matthews north carolina | 329 | 0 | 0% | 8.1 | local commercial | high | none — phrasing family is non-clickable | MONITOR |
| computer repair matthews nc | 30 | 2 | 6.7% | 10.7 | local commercial | high | measure page switch | MONITOR |
| matthews computer technician | 30 | 0 | 0% | 8.8 | local commercial | high | measure page switch | MONITOR |
| matthews laptop repair | 26 | 0 | 0% | 14.0 | local commercial | high | measure page switch | MONITOR |
| matthews computer repair | 22 | 0 | 0% | 14.5 | local commercial | high | measure page switch | MONITOR |
| matthews pc repair | 13 | 0 | 0% | 13.2 | local commercial | high | measure page switch | MONITOR |

**Cluster total: 450 impressions, 2 clicks.** The defect is page selection, not
snippets: Google served the homepage (780 impressions for "matthews" queries)
over `/matthews-computer-repair/` (2 impressions). PR #21 addressed this with
service→location internal links and entity `@id` unification. **The measurement
that decides the next action is the homepage-vs-Matthews-page impression split.**
Do not touch the Matthews page until that split is re-read with post-deploy data.

## Cluster B — console repair, striking distance (MONITOR)

| keyword | impr | clicks | pos | intent | target URL | lead potential | status |
|---|---|---|---|---|---|---|---|
| ps5 repair near me | 28 | 0 | 16.0 | local commercial | /services/ps5-hdmi-repair | high | MONITOR |
| nintendo switch repair near me | 8 | 0 | 19.9 | local commercial | /services/nintendo-switch-repair | high | MONITOR |
| xbox repair near me | 5 | 0 | 11.0 | local commercial | /services/xbox-hdmi-repair | high | MONITOR |
| ps5 controller repair near me | 5 | 0 | 13.2 | local commercial | /services/ps5-hdmi-repair | medium | MONITOR |
| xbox hdmi port repair near me | 57 | 0 | 85.8 | local commercial | /services/xbox-hdmi-repair | high | LATER |

All four striking-distance rows point at pages that received ServiceAreaLinks
**and** direct-answer sections in PR #21 (verified: ServiceAreaLinks is present
on exactly DataRecovery, LaptopScreenRepair, NintendoSwitchRepair,
PCBMicroSoldering, PS5HDMIRepair, XboxHDMIRepair). There is no coverage gap to
fill. `xbox hdmi port repair near me` at position 85.8 is not striking distance
despite the impressions — it needs authority, not on-page work.

## Cluster C — board-level / microsoldering (the differentiation bet, LATER)

| keyword | impr | clicks | CTR | pos | intent | status |
|---|---|---|---|---|---|---|
| micro soldering near me | 1 | 1 | 100% | 1.0 | local commercial | LATER |
| external hard drive fix near me | 2 | 1 | 50% | 1.0 | local commercial | LATER |
| motherboard repair | 59 | 0 | 0% | 1.3 | ambiguous/national | IGNORE (artifact) |
| graphics card repair | 97 | 0 | 0% | 1.2 | ambiguous/national | IGNORE (artifact) |

This is the brief's stated top differentiation opportunity and the data supports
the *thesis* while being far too thin to act on: the two converting rows are
1–2 impression samples. The national-looking rows at position 1.2–1.3 with zero
clicks are GSC position-averaging artifacts, not real #1 rankings.

**This cluster is the strongest argument for getting Semrush connected.** Whether
"microsoldering near me" / "pcb repair" / "logic board repair" carry real
Charlotte-area volume is precisely the question GSC cannot answer — the site
barely surfaces for them, so there are no impressions to read. Volume + KD here
decides whether this becomes the primary content investment.

## Cluster D — "near me" core, already converting (PROTECT)

| keyword | impr | clicks | CTR | pos | status |
|---|---|---|---|---|---|
| computer repair near me | 243 | 5 | 2.1% | 13.0 | MONITOR |
| laptop repair near me | 61 | 4 | 6.6% | 8.5 | MONITOR |
| pc repair near me | 46 | 1 | 2.2% | 7.5 | MONITOR |
| repair computer near me | 83 | 0 | 0% | 17.7 | MONITOR |
| macbook repair near me | 10 | 1 | 10% | 13.8 | MONITOR |
| phone repair near me | 10 | 1 | 10% | 15.3 | MONITOR |

The "near me" family is the only non-brand family with meaningful CTR (1.46%
across 271 queries). Positions 7.5–17.7 mean movement here has the largest
realistic click upside in the dataset. Needs KD to prioritise — hence LATER for
action, MONITOR for measurement.

## Cluster E — IGNORE

| family / keyword | impr | clicks | reason |
|---|---|---|---|
| "north carolina" spelled out (23 queries) | 1,439 | 0 | Non-clickable family. 0 clicks across 1,439 impressions, overwhelmingly desktop. Per owner direction 2026-09-16: low priority / monitor, not a growth target. No call-attribution evidence either way. |
| laptop repair | 727 | 0 | Position-averaging artifact (pos 2.6, national broad match) |
| computer support service | 51 | 0 | Artifact (pos 1.0) |
| computer consultant | 14 | 0 | Artifact (pos 1.0) |
| deep bucket (100 queries, pos 30+) | 3,895 | ~0 | No realistic click path; where desktop impression inflation lives |

---

## What this set says about next actions

1. **Nothing on the site should change this pass.** Clusters A, B and D all
   point at pages modified 2026-09-14. Cluster C is too thin to act on without
   volume data. Cluster E is excluded by definition.
2. **The gating measurement is the Matthews page-split re-read**, which needs
   GSC data from after 2026-09-14 — realistically a pull in early-to-mid October
   given recrawl plus GSC's 2–3 day reporting lag.
3. **The gating data import is Semrush organic positions**, which is what makes
   Cluster C decidable and Cluster D prioritisable.

Until one of those two arrives, additional analysis would be re-reading the same
9,675 impressions.
