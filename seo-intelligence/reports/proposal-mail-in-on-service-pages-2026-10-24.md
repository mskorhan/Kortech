# PR proposal — add accurate mail-in repair information to existing service pages

**Status: PROPOSAL ONLY. Nothing implemented, nothing merged. Needs owner approval.**
**Branch:** `seo/mail-in-on-service-pages-2026-10` (created off `main` @ `2374faa`, post-deploy)
**Prepared:** 2026-10-24, after the PR #19 + PR #24 release

---

## 1. The gap

Owner decision **A4 (confirmed 2026-10-23)**: mail-in covers **every repair category
KorTech offers**, Mac logic-board and board-level micro-soldering included.

Current state of the 19 service pages:

| pages mentioning `/mail-in-form/` | count |
|---|---|
| `MacBookRepair.tsx` (shipped in PR #24) | 1 |
| **every other service page** | **0** |

So a confirmed, differentiating business capability — nationwide mail-in — is
advertised on exactly one of 19 service pages. Visitors landing on
`/data-recovery/`, `/pcb-micro-soldering/`, `/ps5-hdmi-repair/` etc. from search
have no way to learn they do not need to be local.

The `/terms/` page already states "Mail-in repair services are available
nationwide," so the fact is **already published** — it is simply not surfaced
where the buying decision happens.

## 2. Scope

Add one short, consistent mail-in section + CTA to the service pages, reusing the
exact pattern already shipped and verified on `/macbook-repair/`.

**Proposed pages (phase 1 — 8 highest-intent, mail-safe categories):**

| page | why it fits mail-in |
|---|---|
| `/data-recovery/` | device ships readily; already a nationwide-demand service |
| `/pcb-micro-soldering/` | board-level work, destination-shop service by nature |
| `/laptop-screen-repair/` | laptops ship routinely |
| `/water-damage-repair/` | board-level overlap with the Mac page |
| `/ssd-upgrades/` | small, ships easily |
| `/ps5-hdmi-repair/` | console ships routinely |
| `/xbox-hdmi-repair/` | console ships routinely |
| `/nintendo-switch-repair/` | small, ships easily |

**Deliberately excluded from phase 1:**

- `/smart-tv-repair/`, `/appliance-electronics-repair/` — large/awkward to ship;
  advertising mail-in here could create a bad customer experience even though A4
  technically covers them. Worth an explicit owner call.
- `/remote-assistance/`, `/business-it-support/`, `/graphic-design/` — no physical
  device to mail.
- `/custom-gaming-pc/`, `/printer-router-repair/`, `/smartphone-screen-repair-charlotte/`,
  `/tablet-ipad-repair/`, `/virus-malware-removal/` — defer to phase 2 pending the
  phase-1 result.

## 3. Copy (claim-safe)

Reuses only facts that are **already confirmed or already published**:

> ### Mail in your device
>
> You do not have to be local. We accept mail-in repairs for every repair category
> we offer.
>
> Start with the mail-in repair form. It collects your contact details, the model
> and a description of the fault, so your device is identified and expected when it
> arrives. The same process applies: $75–$150 for the diagnostic, waived when you
> go ahead with a hardware repair, and a quote before any repair work starts.

Plus the proven two-button CTA row: **"Start a mail-in repair"** → `/mail-in-form/`,
and the call/text button with a page-specific `data-track-source`.

### Claim safety — what this copy must NOT contain

| excluded | why |
|---|---|
| **any turnaround figure** ("5-10 business days", "1-3 days", "same day") | Turnaround claims are inside the **open A2 question set** (`owner-confirmation-table-2026-10-22.md` §A). They remain unconfirmed and must stay out until the owner answers. |
| who pays shipping, prepaid labels, insurance, packaging | Explicitly excluded per A4. |
| transit duration or delivery estimates | Same. |
| any Apple authorization/affiliation language | Per A3; guarded by `validate-routing`. |

The `$75–$150 diagnostic waived with hardware repair` figure is safe — it is
already published on `/terms/`, `/mail-in-form/` and `/macbook-repair/`, and is
listed as confirmed in the project record.

## 4. Why this should help

- **Conversion:** surfaces a confirmed capability at the decision point on 8 pages
  instead of 1. Mail-in lifts the serviceable market beyond drive distance.
- **GEO/AEO:** "can I mail in my X for repair" is a direct answerable question; the
  copy is extractable and consistent with `/terms/`.
- **Internal linking:** adds 8 contextual internal links to `/mail-in-form/`, a
  conversion page currently reachable mainly via nav and `/terms/`.
- **Consistency:** removes the oddity where only the newest page advertises a
  service that applies to all of them.

## 5. Risk and verification plan

**Risk: low.** Additive copy only. No routing, canonical, sitemap or schema change.
No new page, so `routingFreeze` is untouched and the sitemap stays at 58 URLs.

Before requesting merge:

- `npm run type-check`, `npm run lint`, `npm run build` (all validators)
- `validate-seo` must stay **58 pages**
- `check-dist-internal-links` must stay **0 problems**
- Confirm no turnaround string enters any edited page
- Re-run the live 58-URL capture and diff: only the 8 edited pages may change,
  and only in body copy — no canonical/title/description/robots/h1 change
- 375px check on two edited pages

## 6. Also worth folding in (owner's call)

**`/recycling/` is not crawler-reachable.** Found during this release's link
validation. It is in the sitemap and prerendered, but every nav entry to it is a
`<button onClick>`, not an `<a href>`, so it has **no incoming internal link** in
rendered HTML. Pre-existing, not caused by PR #24.

Fix is small (render the nav item as an `<a href="/recycling/">`), but it touches
`Navbar.tsx`, which renders on all 58 pages — so it wants its own build diff and
should be **its own PR**, not bundled into the copy change above.

## 7. Explicitly NOT in this proposal

- The **seven business-claim questions** (A2) — separate follow-up task per the
  owner's instruction.
- Any **GA4 key-event** change (A5) — frozen.
- Any **Google Business Profile** service edit — frozen.
- Any new page or sitemap change.
