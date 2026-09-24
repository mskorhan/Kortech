# Competitor research + master opportunity list — 2026-09-23

Semrush is **permanently unavailable** (no account). Volume, KD, CPC, Authority
Score, backlink counts and AI-visibility scores therefore do not appear in this
document and are not estimated. Those columns are **removed from the schema**,
not carried as "awaiting import."

Evidence used: GSC (`data/gsc/gsc-summary-2026-09-14.md`, ground truth), live
WebSearch/WebFetch of competitor pages, and the current KorTech source.

## Methodology limit — read before using the competitor section

WebSearch here is **US-national and not geolocated to Charlotte**. It does not
reproduce a local pack or a "near me" SERP. So:

- The competitor set below is an **organic/national-visibility** view, not the
  local competitive set.
- "Who outranks us for `computer repair near me` in Charlotte" is **not
  measurable** with the tools available. Do not infer it from these results.
- People Also Ask blocks are **not observable** — WebSearch returns titles and
  URLs only. No PAA data appears in this document.

---

## 1. Competitors

### Local board-level competitors (the ones that matter)

| domain | why it matters |
|---|---|
| charlottetechrepair.com (also wesavedata.com → 301) | Direct board-level competitor. Deepest PS5 content found. |
| reapersrepairs.com | Console HDMI / microsoldering, Charlotte-targeted |
| queencitytechsolution.com | Explicit microsoldering page, Charlotte + Mt. Gilead |

### National chains
cellphonerepair.com (CPR), nerdstogo.com, geeksonsite.com — competing for
commercial intent with far greater domain authority.

### Directories / informational — NOT business competitors
yelp.com, thumbtack.com, expertise.com, homeadvisor.com, microcenter.com.
They occupy SERP real estate but are not repair businesses. Per the brief, they
are not treated as direct competitors.

### The key competitive finding

`charlottetechrepair.com/playstation-repair` publishes, and KorTech does not:

- **Named failure modes as headings**: HDMI Black Screen, Overheating & Loud
  Fan, Won't Power On, Disc Drive Issues, Liquid Metal Service, Torn Fan
  Connector.
- **Specific mechanism detail** — e.g. HDMI: "the socket's pins collapse or
  delaminate from the board under repeated plug-cycling"; disc drive: "board-
  paired — requires an authorisation handshake with the console's SoC"; torn fan
  ribbon connector named as the most common DIY-repair casualty.
- Prices, turnaround, warranty (KorTech cannot match these without the owner
  supplying real figures — **do not invent them**).

KorTech's PS5 page by comparison has generic headings ("No Display/Black
Screen", "Loose Connection", "Signal Issues") plus one strong PR #21
direct-answer section. **The gap is named failure modes with real mechanism
detail** — exactly the "original expertise" the brief prioritises for GEO, and
exactly what AI engines quote.

**Scope correction 2026-09-24:** the right response is NOT to mirror the
competitor's heading list. `/ps5-hdmi-repair/` is an HDMI-intent page, and
importing their no-power / overheating / disc-drive headings would dilute it.
What shipped instead is depth *within* HDMI intent — differential diagnosis of
the no-picture symptom. Their disc-drive claim is also model-dependent and was
not reproduced; see the Addendum.

---

## 2. Master opportunity list

Ranked by qualified-lead potential. Schema per the brief, minus Semrush columns.

| keyword/question | class | cluster | intent | impr | clicks | CTR | pos | KorTech URL | competitor | local | lead | action | priority | status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| printer repair near me | SEO | peripherals | local comm. | 29 | 0 | 0% | 15.3 | /services/printer-router-repair | — | high | med | add ServiceAreaLinks | P1 | DO NOW |
| computer store near me | SEO | general | local comm. | 18 | 0 | 0% | 15.6 | / | — | high | med | monitor | P3 | MONITOR |
| electronics repair near me | SEO | general | local comm. | 11 | 0 | 0% | 5.8 | /services/appliance-electronics-repair | — | high | med | add ServiceAreaLinks | P1 | DO NOW |
| phone repair near me | SEO | mobile | local comm. | 10 | 1 | 10% | 15.3 | /services/smartphone-repair | — | high | med | add ServiceAreaLinks | P1 | DO NOW |
| macbook repair near me | SEO | apple | local comm. | 10 | 1 | 10% | 13.8 | no dedicated page | — | high | high | LATER — needs page decision | P2 | LATER |
| ipad repair near me | SEO | tablet | local comm. | 6 | 1 | 16.7% | 22.8 | /services/tablet-ipad-repair | — | high | med | add ServiceAreaLinks | P1 | DO NOW |
| ps5 repair near me | SEO | console | local comm. | 28 | 0 | 0% | 16.0 | /services/ps5-hdmi-repair | charlottetechrepair | high | high | failure-mode depth | P1 | DO NOW |
| PS5 no-picture diagnosis (cable/input, cracked solder joints, fault behind port, not reaching output) | GEO/AEO | console | troubleshoot | — | — | — | — | /services/ps5-hdmi-repair | charlottetechrepair | med | high | **SHIPPED PR #22** | P1 | DONE |
| nintendo switch repair near me | SEO | console | local comm. | 8 | 0 | 0% | 19.9 | /services/nintendo-switch-repair | — | high | high | monitor (PR#21) | P2 | MONITOR |
| xbox repair near me | SEO | console | local comm. | 5 | 0 | 0% | 11.0 | /services/xbox-hdmi-repair | — | high | high | monitor (PR#21) | P2 | MONITOR |
| micro soldering near me | SEO/GEO | board-level | local comm. | 1 | 1 | 100% | 1.0 | /services/pcb-micro-soldering | queencitytech, reapers | high | high | monitor (PR#21) | P2 | MONITOR |
| external hard drive fix near me | SEO | data recovery | local comm. | 2 | 1 | 50% | 1.0 | /services/data-recovery | — | high | high | monitor (PR#21) | P2 | MONITOR |
| matthews cluster (6 queries) | SEO | local | local comm. | 450 | 2 | 0.4% | 8–15 | /matthews-computer-repair/ | — | high | high | **do not touch** — re-read split | P1 | MONITOR |
| computer repair near me | SEO | general | local comm. | 243 | 5 | 2.1% | 13.0 | / | all | high | high | monitor | P2 | MONITOR |
| "north carolina" family (23q) | — | — | — | 1,439 | 0 | 0% | 45.7 | — | — | low | low | none | — | IGNORE |
| laptop repair / graphics card repair / motherboard repair / computer consultant | — | — | national | 897 | 0 | 0% | 1.0–2.6 | — | — | low | low | none — position artifact | — | IGNORE |

### Why the DO NOW set is safe

PR #20/#21 modified every service page, but for the 12 pages **without**
ServiceAreaLinks the change was a **single-line `@id` schema insertion** —
verified by diff. No title, meta, heading or body content changed on them. Their
snippets are unchanged since before PR #20, so there is **no recrawl clock to
reset and no attribution to destroy**. The freeze argument applies only to the
10 location pages and the 6 pages that got real content edits.

### Explicitly excluded

- **Matthews** — untouched pending the page-split re-read.
- **Location pages** — untouched.
- **The 6 PR #21 service pages** — only PS5 gets *additive* failure-mode
  content, which is new material, not a rewrite of what shipped.
- Prices, turnaround times, warranty terms — competitors publish them; KorTech
  will not until the owner supplies real figures.

---

## 3. AEO / GEO opportunities (no PAA data available)

Derived from competitor headings and GSC query language, not from PAA.

| question | intent | target URL | format | status |
|---|---|---|---|---|
| Why does my PS5 have no picture? | troubleshooting | ps5-hdmi-repair | HDMI-path differential diagnosis | **SHIPPED PR #22** |
| Why won't my PS5 turn on? | troubleshooting | future article, NOT the HDMI page | — | LATER (see Addendum) |
| Why is my PS5 loud / overheating? | troubleshooting | future article, NOT the HDMI page | — | LATER (see Addendum) |
| Why won't my PS5 read discs? | troubleshooting | none — model-specific accuracy required | — | IGNORE (see Addendum) |
| What causes a PS5 HDMI port to fail? | troubleshooting | ps5-hdmi-repair | **already shipped PR #21** | DONE |
| Can a clicking hard drive be recovered? | diagnostic | data-recovery | **already shipped PR #21** | DONE |
| Is a cracked laptop screen worth repairing? | repair-vs-replace | laptop-screen-repair | **already shipped PR #21** | DONE |

## 4. Still owner-dependent

- **Fresh GSC pull** for the Matthews re-read (9 days post-deploy). The 9/14
  data came from an authenticated browser session; there is no GSC API here.
- **Real prices / turnaround / warranty** if KorTech wants to match competitor
  transparency. Not invented.
- **Original media** (microscope shots of HDMI damage, corrosion, board work).
  Competitors lean on stock; real bench photos would be a genuine differentiator
  and cannot be generated.


---

# Addendum 2026-09-24 — PS5 scope correction + deferred topics

## Why the PS5 section was rewritten before merge

The first PR #22 draft added four named failure modes to `/ps5-hdmi-repair/`:
no-power, overheating/liquid metal, disc-drive pairing and torn ribbon
connectors. Two problems, both correctly caught in review:

1. **Scope drift.** That broadened an HDMI-specific landing page into general
   PS5 repair. The page's primary intent is HDMI / no-video / HDMI-path repair,
   and diluting it works against the page rather than for it. Mirroring a
   competitor's heading structure is not a reason to change our own.

2. **A factual error.** The claim that the PS5 disc drive is "paired to the
   console it shipped in" is **not true across the model scope**. The PS5 Pro
   and the 30th Anniversary edition ship with no disc drive at all, and the
   Slim's detachable drive pairs on first attachment rather than being fixed to
   a console from the factory. Stated as a blanket fact it would have been wrong
   for several current models.

The replacement section, **"When a PS5 has no picture but the HDMI port is not
the cause"**, covers only faults that genuinely present as the HDMI symptom:
cable/input/TV, cracked solder joints on an intact-looking port, a fault behind
the port in the video path, and a console not completing startup. Every claim
holds across all PS5 hardware generations. No prices, turnaround times,
warranties or success rates appear.

## Deferred PS5 topics — classified, not discarded

| topic | classification | justification bar before acting |
|---|---|---|
| PS5 no power / won't turn on | future supporting article | needs GSC or live-search demand of its own; do NOT add to the HDMI page |
| PS5 overheating / loud fan / thermal service | future supporting article | same; thermal-paste and liquid-metal claims must be qualified per model |
| PS5 disc drive not reading | **ignore for now** | pairing behaviour varies by model (Pro/30th have no drive; Slim drive is detachable). Requires model-specific accuracy we would have to verify first |
| PS5 board-level repair generally | existing-page opportunity | `/services/pcb-micro-soldering/` already covers board-level work |
| DIY connector damage (fan/Wi-Fi ribbon) | future supporting article | genuine KorTech expertise, but it is a repair-intake topic, not an HDMI-intent topic |
| General "PS5 repair Charlotte" page | **future new-page candidate** | only if `ps5 repair near me` (28 impr, pos 16.0) sustains demand AND a general page would not cannibalise `/ps5-hdmi-repair/` |

None of these are created now. Each needs independent evidence first.

## Fresh GSC baseline 2026-09-24 — what changed in this table

See `data/gsc/gsc-summary-2026-09-24.md` for the full pull. Relevant updates:

- **Matthews page: 2 → 42 impressions.** First evidence PR #21's internal
  linking is associating the page with Matthews queries. Homepage still takes
  819 of 864, so page selection has NOT switched. Status stays MONITOR; do not
  touch the page.
- `phone repair near me` 10 → 14 impressions, still 1 click. `ipad repair near
  me` steady at 6 impr / 1 click. Both are PR #22 targets; their
  ServiceAreaLinks additions ship in this PR and get measured next pull.
- **New:** `computer repair charlotte nc` 115 impr / **2 clicks**. A converting
  local-commercial query pointing at `/charlotte-computer-repair/`. Worth
  watching as a second location-page test. Status MONITOR.
- **New:** Android cluster (`android screen repair` 63 impr,
  `android phone screen repair` 19, `android phone repair` 16) — all 0 clicks,
  no dedicated page. Status LATER; note only, insufficient evidence to act.
- Device split unchanged in character: mobile 73 clicks / 4,219 impr (1.73%),
  desktop 38 / 48,728 (0.08%). The desktop-artifact reading holds.
