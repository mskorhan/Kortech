# KorTech Service — business-policy content rules

**Purpose:** this file is the standing reference for anyone, human or AI, writing
or editing customer-facing copy on this site. Every rule below is
**owner-confirmed**. A claim that contradicts one of these is a factual error
about the business, not a style preference.

Where a rule is enforced by an automated guard, the guard is named. Guards run
in `scripts/validate-routing.mjs` as part of `npm run build`, and **fail the
build**. A guard is a pattern matcher: it catches the known wordings, it cannot
verify a claim it has no pattern for. Do not treat a passing build as proof that
a new claim is true.

---

## 1. KorTech does NOT transport customer devices

**Confirmed 2026-10-26. Guard 11 (`pickup-delivery-claim`).**

KorTech does **not** offer:

- device pickup or collection from a customer's home or business
- delivery or return of a repaired device to a customer
- local courier or drop-off transportation service
- free, complimentary or prepaid shipping labels
- KorTech-issued shipping labels of any kind
- guaranteed delivery dates

**The two accurate options, and the only two:**

1. **Drop off in person** at the Charlotte shop, 1721 Sardis Rd N, Suite 7A,
   Charlotte, NC 28270. Mon–Fri 9AM–6PM, Sat 11AM–4PM. This is the preferred
   method.
2. **Ship the device** using a **paid shipping label, at the customer's own
   expense.** Nationwide mail-in covers **all supported repair categories**.

### Approved wording

> Customers are welcome to drop off their devices at our Charlotte repair shop.
> If you're unable to visit us in person, you can ship your device to KorTech
> using a paid shipping label.

On location pages, adapt this naturally — do not paste the same two sentences
onto every page, and do not keyword-stuff "drop-off" or "mail-in".

### Shipping cost wording

"Paid shipping label" **on its own reads as prepaid by KorTech.** Always pair it
with the payer:

- ✅ "ship it to us using a paid shipping label at your own expense"
- ✅ "shipping costs are the customer's responsibility"
- ❌ "we'll send you a label"
- ❌ "paid shipping label" with no payer stated
- ❌ anything implying shipping is included in the repair price

**The label purchasing/issuance process is not documented. Do not invent one.**
Link to `/mail-in-form/` rather than describing steps.

### What is NOT a violation — do not "fix" these

These were each checked on 2026-10-26 and are accurate:

| Wording | Why it is fine |
|---|---|
| `/terms/`: "Find a courier you'd like to use … schedule a pickup" | The **customer** arranges their **own** carrier for their own shipment. |
| `/terms/`, `/mail-in-form/`: return-shipping **fee applies** | The customer pays. Consistent with this policy. |
| "Drop off during opening hours and **collect** when it is done" | The **customer** collects at the shop. |
| `/services/` step 6, "Pickup & Support — Collect your repaired device" | The **customer** collecting at the shop. |
| `/remote-assistance/`: "**We come to you** for business and residential service" | **Onsite IT service.** We travel to fix systems in place. |
| `/about/`: "at our local shop and through **on-site** service" | Same — onsite IT, not device transport. |

**Onsite IT support and device transport are different services.** Never remove
or weaken onsite IT language because of this policy. Guard 11's patterns are
deliberately narrow for this reason — **do not add a bare `/pickup/` or
`/courier/` pattern**, which would flag every row in the table above.

### The one sanctioned negation

`/charlotte-computer-repair/` previously answered *"Yes, we offer pickup and
delivery services throughout Charlotte."* Because that answer may be cached by
search and AI engines, the page now carries an explicit correction:

> **Does KorTech pick up or deliver devices in Charlotte?**
> No. KorTech does not collect or deliver devices. …

That sentence necessarily contains the banned words, so it is **allowlisted by
exact phrase** in `PICKUP_NEGATION_ALLOWLIST`. If you reword it, update the
allowlist or the build will fail.

---

## 2. KorTech does NOT provide warranties

**Confirmed 2026-10-26. Guard 12 (`warranty-claim`).**

KorTech Service does **not** offer voluntary repair or service warranties.
Until 2026-10-26 this site advertised a **14-day limited parts warranty**
across 20 pages. **That warranty does not exist.** It was removed and must
never reappear.

**Never publish**, in any wording: a 30-day, 90-day, one-year or lifetime
warranty; a parts-and-labor or workmanship warranty; "warranty protection",
"warranty included", "warranty-backed", "guaranteed warranty coverage";
a satisfaction guarantee; a money-back guarantee; a no-fix-no-fee promise;
a free re-repair period; or "we stand behind the parts/our work".

**Do not replace a removed warranty claim with a softer one.** Remove the
claim, the FAQ, the badge or the section. If a sentence mixes a warranty claim
with accurate service information, keep the accurate part and drop the
warranty part.

**Do not add warranty disclaimers either.** No "no warranties, express or
implied", no "as-is". Drafting disclaimer language is the owner's decision with
their lawyer, not a content edit. Outside the owner-approved `/terms/` wording
below, the policy is **silence**, not a disclaimer.

### What is NOT a violation — do not "fix" these

| Wording | Why it is fine |
|---|---|
| Blog: "5-year warranty" (SSD), "10-year warranty" (PSU) | **Manufacturer/component** warranty information about other companies |
| "The manufacturer's warranty has expired", "out of warranty", "under warranty", "voids warranty" | Consumer information about a **third party's** warranty |
| "Extended warranties or protection plans often cover accidental damage" | Describes insurance/retail products, not KorTech |
| Privacy Policy: "service records and warranty information", "parts suppliers for warranty claims", "7 years for warranty and legal purposes" | **Data-processing disclosures**, not an offer of coverage. Flagged, not removed. |

So **never add a bare `/warranty/` or `/\d+-year warranty/` guard pattern** —
it would flag every row above.

### The `/terms/` warranty clauses — owner-approved, DO NOT EDIT

The `/terms/` **signed acknowledgment** block states the no-voluntary-warranty
policy in wording the owner approved and published on **2026-10-27**. Guard 12
allowlists it by exact sentence, **scoped to `terms/index.html` only**:

1. "…may void manufacturer warranties, especially in the case of Apple device
   repairs… do not assume any liability or warranty in the event that the
   manufacturer warranties are voided"
2. "KorTech Service does not provide its own voluntary warranty on repairs,
   replacement parts, or labor."
3. "Certain devices or replacement parts may be covered by a manufacturer's
   warranty… not a warranty provided by KorTech Service."

Three earlier clauses (a "KorTech Service limited warranty", and warranty
exceptions for customer-supplied parts and water damage) were **retired** on
2026-10-27 and removed from the allowlist. `verify-business-policies` asserts
them **absent site-wide** via `MUST_NOT_RETURN`, so they cannot return
unnoticed.

**Do not change this wording.** It is owner-approved legal language; any edit
needs the owner's approval first. The same sentences are a warranty claim on
**any other page** and guard 12 will fail them there — that scoping is
deliberate and verified by a negative control.

## 3. Turnaround and response times

**Guard 10 (`absolute-promise`).**

- **Same-day repair IS guaranteed — for ELIGIBLE services only**, and
  eligibility is confirmed by KorTech. Never present it as unconditional.
- **Mail-in turnaround is an ESTIMATE of 5–10 business days.** Never a
  guarantee. **Carrier transit is separate and excluded.** Mail-in does **not**
  qualify for same-day.
- **In-shop ranges** (1–2, 1–3, 2–5, 3–5, 3–7 business days, 2–4 weeks for
  branding) are **estimates dependent on diagnosis, current workload and parts
  availability** — never guaranteed completion dates. Confirmed 2026-10-26.
- Data recovery's in-shop cleanroom estimate is also 5–10 business days. It is a
  **different claim** from the mail-in estimate and the copy must keep saying so.
- **No fixed diagnostic-start deadline.** Reasonable efforts, during business
  hours. The old "within 48 hours" promise ran across weekends.
- **IT support response times are not guaranteed.** "We aim to respond
  promptly during business hours." No hour figures.

## 4. Apple

**Guard 8 (`mac-page-claims`).** `/macbook-repair/` must **neither claim nor
deny** Apple authorization, affiliation, certification or endorsement. Naming
the Apple models repaired is fine. No "Apple Authorized Service Provider", no
"not affiliated with Apple" disclaimer either.

## 5. Reviews and ratings

**Guard 5 (`self-serving-ratings`).** No `AggregateRating` or `Review` markup on
pages about our own business. The site's visible review count must match the
Google Business Profile; they have diverged before.

## 6. The form emails the owner, not the customer

**Guard 7 (`customer-email-promise`).** The mail-in worker notifies
`info@kortechservice.com`. It sends the customer **nothing**. Never promise a
confirmation email; the published mechanism is the printable copy.

## 7. Still unconfirmed — do not publish

Open items in Issue #26. Until the owner confirms, **omit** rather than guess:

- **Q4** walk-in availability as a general policy
- **Q6** service-area geography and drive-time/"minutes from" claims
- **Q7** parts stocking ("we stock…")

Also never add, without confirmation: certifications, service radii, technician
counts, or years of experience beyond the confirmed 1998 founding. **Warranty
terms are not merely unconfirmed — they are confirmed as NOT offered (section 2).**

---

## Where the single source of truth lives

Each page's **`faqs` array** feeds **both** the visible `FAQSection` **and** the
FAQPage JSON-LD. One edit updates both. **Never hand-write a separate JSON-LD
FAQ block** — that is how visible text and structured data drift apart and start
telling Google and AI assistants two different stories.

## Off-site listings are not covered by any guard

These guards only police this repository. **Google Business Profile, Bing
Places, Yelp, Apple Maps, Facebook and directory listings may still advertise
pickup or delivery**, and a build will never catch it. Those are the owner's to
review.

---

*Last updated 2026-10-26 (warranty policy added). Related: `dns-and-tls-investigation-2026-10-26.md`,
`owner-confirmation-table-2026-10-22.md`.*

---

## Running the visual / responsive QA harness

`npm run build` validates HTML and content claims. It validates **no layout at
all** — the navigation bug fixed on 2026-10-26 (a nav 148px wider than its
container, crushing "Mail-In Repair Form" to 72px) shipped through a green
build. `scripts/visual-qa.mjs` checks rendered **geometry**.

```bash
# 1. build, then serve the built output
npm run build
npx vite preview --port 4319 --strictPort

# 2. in another terminal
npm run test:visual              # all 58 pages x 21 widths (~1200 checks)
npm run test:visual -- --quick   # 11 key pages x 5 widths, for a fast loop
npm run test:visual -- --shots   # also write screenshots
npm run test:visual:prod         # against live production
```

Exit code is non-zero on any failure; details land in `visual-qa-report.json`.

**What it asserts, per page per width**

- no horizontal overflow — measured by *actually scrolling* the page, not by
  `scrollWidth > clientWidth`, which false-positives on the scrollbar gutter
- exactly ONE of {desktop nav, hamburger} is visible — never zero (1024–1279px
  previously rendered **neither**), never both
- every header item sits inside the header box and inside the viewport
- no nav label has wrapped (counts the text's own client rects)
- the Mail-In Repair Form link is present, inside the header, unwrapped, and at
  least 120px wide
- dropdowns open inside the viewport; Escape closes and restores focus
- the mobile menu opens/closes, contains the mail-in link, and does not leave
  the page scroll-locked when the viewport is widened past the breakpoint
- Tab reaches the mail-in link; focus indicators are visible
- mail-in form fields are in-viewport and every field has an accessible label
- touch targets ≥ 24×24 CSS px (WCAG 2.2 AA 2.5.8; 44px is AAA)

**It is kept out of the `build` chain on purpose** — it needs a running server.

**Zoom is covered by equivalent widths.** Browser zoom shrinks the CSS
viewport: 1920px @150% is 1280 CSS px. The width list includes 910, 960, 1092,
1280 and 1536 for exactly this reason, and the run prints the mapping.

**Determinism:** consent is pre-set to `declined` (never "accept"), analytics
hosts are blocked at the network layer so a sweep cannot inject pageviews into
GA4, and `prefers-reduced-motion` is forced.

**Validate the harness itself before trusting a pass.** Running it against the
pre-fix build produced 100 failures naming every real defect
(`mail-link-crushed w=72px`, `nav-dead-zone`, `nav-item-outside`). A harness
that only ever reports zero is a test that passes for the wrong reason.

### The `nav:` breakpoint

`tailwind.config.js` defines `nav: '1180px'` as the single source of truth for
the header's desktop/mobile switch. The desktop nav, the hamburger button and
the mobile panel **must all key off it**. They previously disagreed (`xl:flex`
vs `lg:hidden`), which is what produced the no-navigation dead zone.
`visual-qa.mjs` hard-codes 1180 so that changing one without the other fails.
