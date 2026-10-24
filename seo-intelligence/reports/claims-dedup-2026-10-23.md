# Claim inventory, deduplicated by underlying business claim (2026-10-23)

Per owner decision **A2 — REVIEW REQUIRED**: do not approve or rewrite the inventory wholesale;
categorize by distinct underlying business claim, deduplicate repeated occurrences, prioritise
misleading claims in visible content and FAQ JSON-LD, and present the smallest possible set of
questions.

**Nothing in this pass edited any claim text.** Row-level backing with exact wording, file and line
stays in `claims-inventory-2026-10-23.md`.

---

## 1. Reconciliation of the raw count

The raw regex sweep returns **235 matches across 52 files, 56 inside a `faqs` array** (reproducible:
`claiminv.py`). That figure is correct and is what the inventory file, the PR body and report §6 all
state. Report §0 previously said "220" — that was a stale typo and has been corrected to 235.

Raw matches are not claims. Sorting every row by reading the text:

| bucket | rows | what it is |
|---|---|---|
| **KorTech claims about itself** | **194** | the only rows that need an owner answer |
| Generic industry education | 41 | blog/how-to copy about the trade in general, not about KorTech |
| **total** | **235** | |

Those 194 self-claims collapse to **9 distinct business claims**, which resolve into **7 questions**
below. One answer per question settles an entire cluster.

> **Count caveat.** The scanner skips any line containing `//`, `className` or `aria-`, so **235 is a
> minimum**, not a ceiling. The nine claim types below are the right set to decide on, but a later
> fix pass must re-scan without that filter before claiming every occurrence has been found.

### Correction to the 10/22 audit, confirmed in this pass

- **"Cleanroom" is not a KorTech claim at all.** All 7 matches are generic education ("Do they have
  proper clean room facilities if needed?", "Clean room recovery: $1,000-$2,500" as an industry price
  band). None asserts KorTech operates one. The audit overstated this.
- **"Certified" is 2 real claims, not 8.** Six matches are generic ("Use original or certified
  chargers", "Are their technicians certified?" as buyer advice).

---

## 2. The questions

Ordered by commercial exposure. Q1 and Q2 cover 135 of the 193 self-claims.

### Q1 — Same-day service · 93 occurrences, 19 in FAQ JSON-LD · **highest exposure**

The most widespread claim on the site: homepage (5), 31 service-page, 21 location-page, 32 blog
instances. Representative live wording:

- `Home.tsx:106` — "Expert repair for all computer brands with **same-day service**"
- `Home.tsx:468` — "transparent pricing and **same-day turnaround** … with **walk-in availability**"
- `Services.tsx` / location pages — "**Same-day service** is available for many common computer
  issues at our Charlotte location, **depending on parts availability**"

Note the site is already inconsistent: some instances are unqualified ("with same-day service"),
others are hedged ("available for many common issues, depending on parts availability").

**Question:** is same-day service something you can offer for *some* repairs, subject to parts and
workload — or not reliably at all?
- ☐ **TRUE, qualified** → I standardise every instance on the hedged form already published
  ("available for many common issues, depending on parts and workload") and remove the unqualified
  ones. No new facts invented.
- ☐ **FALSE** → I remove the claim everywhere and replace it with the confirmed diagnostic/quote
  facts.

### Q2 — Pickup and delivery · 42 occurrences, 11 in FAQ JSON-LD

**All 42 sit on location pages** (Indian Trail, Weddington, Matthews, etc.), e.g. "Yes, we offer
pickup and delivery services throughout Charlotte for your convenience."

This is also a Google Business Profile suggested service that is currently **not** enabled on the
profile — so the site advertises it while GBP does not.

**Question:** do you collect and return devices?
- ☐ TRUE → keep, and this should be added to GBP (separate approval).
- ☐ FALSE → remove from all 11 location pages; mail-in (now confirmed) covers the remote case.
- ☐ PARTLY → tell me the real condition (e.g. business clients only, within X miles) and I will use
  your wording.

### Q3 — Turnaround ranges · 33 occurrences, 18 in FAQ JSON-LD

Not 33 separate claims. Each service page publishes **one consistent range**, so this is ~14
service/range pairs:

| service | published turnaround |
|---|---|
| Smartphone repair, printer/router | 1-2 hours |
| Virus/malware removal, tablet & iPad, IT support | 2-4 hours |
| Laptop screen repair, SSD upgrades | 1-2 business days |
| PS5 / Xbox / Nintendo Switch HDMI | 1-3 business days |
| Water damage, Smart TV | 2-5 business days |
| PCB micro-soldering, appliance/electronics | 3-7 business days |
| Custom gaming PC, graphic design | 3-5 business days |
| Data recovery | 1-3 days simple, 5-10 business days complex |
| **Mail-in (already published)** | **5-10 business days** |

**Question:** are these ranges accurate as typical, non-guaranteed estimates? A single yes keeps all
33. If any individual row is wrong, name just that service and the correct range.

> Relevant to the new page: `MailInForm.tsx:421` and `TermsConditions.tsx` **already publish**
> "Turnaround: 5-10 business days" and "Return Shipping: fee applies if a paid return shipping label
> isn't attached" for mail-in. I deliberately put **no** turnaround or shipping terms on
> `/macbook-repair/` because you excluded them. If those existing published terms are accurate, say
> so and I can reuse them on the Mac page — that is a conversion improvement, not a new claim.

### Q4 — Walk-in availability · 17 occurrences, 4 in FAQ JSON-LD

Homepage (1) and 12 service pages: "Walk-in welcome", "Walk-in diagnostics", "walk-in service
available".

**Question:** can a customer arrive without an appointment and be seen? ☐ TRUE ☐ FALSE ☐ PARTLY

### Q5 — Technician certification · 2 occurrences, 1 in FAQ JSON-LD

- `ITSupport.tsx:35` **[FAQ JSON-LD]** — "our technicians **are certified** to support both Windows
  PCs and Mac systems"
- `Recycling.tsx:510-515` — "We partner with **certified** recycling facilities", "Partnership with
  **R2 and e-Stewards certified** facilities"

These are the only two certification claims about KorTech, and both name something specific and
checkable. R2 and e-Stewards are real, auditable programmes.

**Question (a):** which certification do the technicians hold, and who holds it? If there is no
specific credential, I remove the word.
**Question (b):** is the recycling partner actually R2 or e-Stewards certified? If you cannot name
the facility, I drop the programme names and keep the neutral "we partner with recycling facilities".

### Q7 — Parts stocking · 1 occurrence, **in FAQ JSON-LD**

- `LaptopScreenRepair.tsx:30` **[FAQ JSON-LD]** — "Yes, we repair all major laptop brands at our
  Charlotte shop including Dell, HP, Lenovo, ASUS, Acer, MSI, Apple MacBook, and more. **We stock
  parts for common models.**"

Only one occurrence, but it is published as structured data, and it sets an expectation that drives
the same-day question above: stocked parts are what make a fast repair possible.

**Question:** do you hold stock for common models? ☐ TRUE ☐ FALSE ☐ PARTLY (e.g. common screens
only). If false, the sentence is removed and the rest of the answer stands unchanged.

### Q6 — Location geography · 6 occurrences, 1 in FAQ JSON-LD

Drive-time/landmark phrasing (4) plus service radius/mileage (2) on location pages, e.g. "Indian
Trail sits south-east of our shop along the US-74 corridor, so it is the furthest of our…".

**Question:** are the stated drive times and service radius accurate? ☐ TRUE ☐ FALSE ☐ PARTLY
(lowest commercial priority — few impressions, no clicks.)

---

## 3. What is NOT being asked

- **41 generic-education rows** — no question. Blog copy about the industry, not about KorTech. Left
  exactly as is.
- **The homepage Mac card** (`Home.tsx:106`, "…with same-day service"). Covered by Q1; I reverted my
  own earlier rewording of it and will not touch it until Q1 is answered. PR #24 links this card to
  `/macbook-repair/`, a page that deliberately makes no same-day promise — worth knowing, but it is
  not a defect introduced by this PR.
- **PR #24 adds no claims from any of these clusters.** `validate-routing` enforces that with a
  negative-tested guard. So A2 does **not** block merging #24.

## 4. Scope note

Answering Q1-Q6 authorises **removal or standardisation on wording you supply**. It does not
authorise me to invent replacement figures. Where a claim is false, the replacements are facts
already in the record: the $75-$150 diagnostic waived with hardware repair, the 14-day parts-only
warranty, the Charlotte shop address, and now owner-confirmed mail-in availability.
