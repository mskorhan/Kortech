# Implementation batch — Mac repair architecture + confirmed fixes (2026-10-23)

Prepared on branch `seo/mac-repair-and-fixes-2026-10`, branched from `main` @ `db50fe4`.

**NOT merged, NOT deployed, NO indexing requests submitted, NO Google account setting changed.**
The deploy workflow triggers only on push to `main`, so this branch is inert until you merge it.

The October 22 checkpoint decision was **PROPOSE NEXT SEO/GEO/AEO BATCH**. This is that batch, built
and tested. Everything below is reversible by reverting the branch.

---

## 0. Approvals you need to give (ordered by what blocks the most)

| # | approval | why it is yours |
|---|---|---|
| **A1** | ✅ **APPROVED 2026-10-23** — sitemap 57 → 58 and one `.htaccess` whitelist entry, limited to the Mac repair page. All existing redirects, canonicals and routing protections preserved. | Both are inside `routingFreeze`. The freeze exists because of the 9/14 GSC validation recrawl; 10/22 found those validations closed "Failed" only on non-canonical variants, not live defects. I judged the freeze's purpose met, but the call is yours. **If you decline, the whole Mac page defers** — everything else in this batch stands on its own. |
| **A2** | ⏳ **REVIEW REQUIRED.** 235 raw matches / 52 files → **193 KorTech self-claims** (41 generic education, 1 false positive) → **8 distinct claims** → **6 questions**. See `claims-dedup-2026-10-23.md`. | I edited none of them. One answer per question settles a whole cluster. **Does not block #24** — the PR adds no claims from any cluster. |
| **A3** | ✅ **RESOLVED 2026-10-23 — disclaimer REMOVED.** The owner directed that the page neither claim nor deny Apple authorization, affiliation or endorsement. The FAQ, the disclosure section and the word "Independent" in the meta description are all gone. Naming the Apple models repaired is retained as accurate. | A `validate-routing` guard now **forbids** authorization/affiliation/endorsement language on this page (it previously required a disclaimer); negative-tested in both directions. |
| **A4** | ✅ **CONFIRMED 2026-10-23 — mail-in covers EVERY repair category**, Macs, Mac logic-board and board-level micro-soldering included. The page now advertises it with a CTA to `/mail-in-form/`. | Shipping cost, postage responsibility, prepaid labels, insurance, return-shipping terms and any transit/repair duration are **excluded** per the owner and appear nowhere on the page. |
| **A5** | ⏳ **APPROVED FOR PREPARATION ONLY.** Config spec to be verified (event definitions, deduplication, real tracking behaviour) before any GA4 change. | External account; **nothing in GA4 modified**. These are *click intent*, not confirmed calls or leads — see §8. |
| **A6** | ⏳ **REVIEW SEPARATELY.** Do not merge a stale 119 when GBP shows 121; prove the updater can refresh the published count and keep one source of truth. GBP service updates prepared without saving. | PR #19 is open, mergeable, and not mine. GBP changes are external. |

---

## 1. Recommended Mac repair architecture — **one page, not five**

**Decision: build `/macbook-repair/` only. Do not build `/mac-repair/`, `/imac-repair/`,
`/mac-mini-repair/` or `/mac-studio-repair/`.**

The brief asked me to evaluate five pages and not to publish all five automatically. The evidence
settles it decisively.

I queried both raw GSC exports directly (1,393 query rows across two 28-day windows):

| model term | impressions, current 28d (9/23–10/20) | prior 28d (8/26–9/22) |
|---|---|---|
| macbook (all variants) | **116** | 15 |
| mac / apple (non-MacBook) | 9 | 6 |
| **imac** | **0** | **0** |
| **mac mini** | **0** | **0** |
| **mac studio** | **0** | **0** |

iMac, Mac mini and Mac Studio drew **zero impressions between them in both windows**. There is no
measurable search demand to split out. Four dedicated pages would be four thin pages competing with
each other and with the hub — the exact doorway-page pattern removed in the 9/14 batch (8 pages).
They are covered as **sections and schema entries** on the one page instead, so the capability is
stated and crawlable without minting URLs demand does not support.

This also keeps the sitemap change to **+1 URL rather than +5**, which matters given `routingFreeze`.

**Revisit trigger:** if any of iMac / Mac mini / Mac Studio reaches a sustained ~20+ impressions per
28 days with the hub ranking for it, that model has earned its own page. Re-check at the next
checkpoint.

### Why MacBook demand is real and worth capturing

- "macbook repair": **75 impressions, position 3.72, 0 clicks**
- all macbook queries: **118 impressions, position 4.9, 0 clicks**, ~all absorbed by the homepage
- growth: mac-ish impressions went **21 → 131** between the two windows
- GBP corroborates: macbook pro repair 81 + macbook repair 43 searches (May–Oct)
- `/macbook-repair/`, `/mac-repair/`, `/apple-repair/` all returned **404**

A top-5 average position with zero clicks across 118 impressions is a presentation mismatch: the
searcher wants "MacBook repair" and gets a generic shop homepage. The ranking already exists. This is
capturing visibility you already have, not building new visibility — the cheapest kind of win available.

---

## 2. Content plan (as built)

Sections on `/macbook-repair/`, all original, none copied from any competitor:

1. **Hero** — models covered, board-level capability, call/text, diagnostic disclosure.
2. **Mail in your Mac from anywhere** — owner-confirmed 2026-10-23: mail-in covers every repair
   category, Mac logic-board and board-level work included. CTA to `/mail-in-form/`. Carries no
   shipping cost, postage, label, insurance, return-shipping or duration terms (all excluded).
3. **What we repair** — the 7 confirmed capabilities + the model-variance caveat.
4. **Common Mac symptoms** — no-power/charging, display, liquid, logic-board, storage/data, ports.
   Each explains what the symptom usually indicates and which need board-level work.
5. **Why the data on a modern Mac depends on the board** — the one genuinely technical section,
   sourced to Apple (§5).
6. **How a Mac repair works here** — the customer-facing process only.
7. **Mac repair questions** — 9 Q&As as plain crawlable HTML, deliberately **not** FAQPage JSON-LD.
8. **Related repairs** + service-area links.

**Repair-vs-replacement** is handled as a question that hands you the information and leaves the
decision to the customer, including the point that replacing the machine does not recover its data.

**On "diagnostic processes":** `neverFabricate` forbids publishing diagnostic *procedures*, so the
page describes only what the customer experiences — intake, diagnostic, quote, repair, warranty — and
contains no bench procedures, tools or measurements.

**Model-scope honesty:** the page states explicitly that Macs do **not** all support the same repairs,
that storage and memory are soldered on many current models, and that specifics are confirmed per
model at diagnostic. No upgrade is promised.

---

## 3. Keyword → page targeting matrix

| query (28d impressions, position) | target page | status |
|---|---|---|
| macbook repair (75, 3.72) | `/macbook-repair/` | **new** |
| macbook pro repair (12, 1.0) | `/macbook-repair/` | new |
| macbook repair near me (8, 10.75) | `/macbook-repair/` | new |
| macbook water damage repair (6, 11.0) | `/macbook-repair/` (links to `/water-damage-repair/`) | new |
| mac repair (5, 1.0) | `/macbook-repair/` | new |
| macbook data recovery (4, 6.0) | `/macbook-repair/` (links to `/data-recovery/`) | new |
| macbook screen repair (4, 16.0) | `/macbook-repair/` (links to `/laptop-screen-repair/`) | new |
| macbook repairs / repair macbook pro / mac repair near me | `/macbook-repair/` | new |
| macbook repair charlotte nc (1, 21.0) | `/macbook-repair/` | new |
| apple authorized service provider (1, 3.0) | `/macbook-repair/` — answered **"No"** | deliberate |
| apple watch / homepod / used macbook / sell my macbook | **none** — not offered, not targeted | deliberate |

**Anti-cannibalisation.** The page targets *MacBook/Mac* intent, which no existing page claims. The
homepage keeps general "computer repair" intent; `/laptop-screen-repair/` keeps brand-agnostic laptop
screen intent. The Mac page links out to the four overlapping pages rather than duplicating them.

---

## 4. Titles, descriptions, structured data

- **Title:** `Mac & MacBook Repair Charlotte NC | KorTech Service` (unique)
- **Description:** `Mac and MacBook repair in Charlotte, NC. MacBook Air & Pro, iMac, Mac mini, Mac Studio, logic-board diagnostics and board-level repair. Drop off or mail in. Call 704-246-7642.` (unique)
- **Canonical:** `https://www.kortechservice.com/macbook-repair/` (self, trailing slash)
- **H1:** one, `Mac & MacBook Repair Charlotte NC`. 7 H2s, correct nesting.
- **Robots:** `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`

**JSON-LD emitted (verified from prerendered output):**
- `BreadcrumbList` — via the existing `SEOHead` mechanism, no new machinery.
- `Service` — provider `@id` `.../#organization` (the one site entity), Charlotte address,
  `hasOfferCatalog` listing all 7 capabilities, offer = the confirmed diagnostic terms.

**Verified absent:** `aggregateRating`, `Review`, **`FAQPage`**, `HowTo`, `speakable`. Fully compliant
with `schemaPolicy`.

---

## 5. GEO / AEO

The 10/22 finding that "AI repeats unconfirmed claims about KorTech" traced back to KorTech's own copy
and FAQ JSON-LD. The correct GEO fix is therefore **accuracy at the source**, which is §6 — not new
markup. Nothing here promises AI citations or rankings, and no FAQ rich-result benefit is assumed
(they were retired May 2026).

What this page contributes:

- **Accurate identity.** It states plainly that KorTech is **not** an Apple Authorized Service Provider
  and not affiliated with Apple. This is both the honest answer to a query the site already surfaces
  for, and a guard against an AI system inferring an authorisation that does not exist.
- **Genuine technical expertise, sourced.** The storage section rests on Apple Platform Security,
  *"The Secure Enclave"*: **"if the internal SSD storage is physically moved from one device to
  another, the files are inaccessible."** The page cites and links the source. **Quote verified
  character-for-character against the live Apple page (curl, 2026-10-23), not from memory or a
  summary**; the same page confirms Secure Enclaves are present in "All Mac computers with Apple
  silicon" and "All Intel-based Mac computers that contain the Apple T2 Security Chip", which is the
  model scope the page states. This is the one
  substantive technical claim and it is the only one I sourced externally — everything else is either
  owner-confirmed or already in the project record. It also explains *why* board-level repair matters
  on Macs, tying real expertise to a real capability.
- **Clear specialisation.** Board-level/component-level work is stated as the differentiator, with the
  honest caveat that it is not right for every fault.
- **Consistency.** The capability list matches what is proposed for GBP in §7.

---

## 6. The claim sweep — **needs your answers, nothing edited**

The 10/22 audit listed claims on 7 pages. A full sweep found the problem is **much wider: 235 matches
across 52 files**, of which **56 are also emitted as FAQPage JSON-LD** — the markup Google and AI
assistants actually read, which is precisely why those claims come back out of AI systems. I changed
none of them.

➡ **Deduplicated to 193 KorTech self-claims → 8 distinct claims → 6 owner questions in
`seo-intelligence/reports/claims-dedup-2026-10-23.md`.** Exact wording, file and line for every one of the 235 is in
`claims-inventory-2026-10-23.md`**, grouped by claim type with a TRUE/FALSE/PARTLY column and the
JSON-LD ones flagged. That document is the one to work through; this table is just the summary.

| claim type | total | of which FAQ JSON-LD |
|---|---|---|
| same-day | 106 | 19 |
| turnaround (explicit day/hour ranges) | 48 | 18 |
| pickup and delivery | 42 | 11 |
| walk-in | 17 | 4 |
| certified | 8 | 1 |
| clean room | 7 | 1 |
| drive-time / landmark | 4 | 1 |
| radius / mileage | 2 | 0 |
| parts stocking | 1 | 1 |

Highlights by location (full detail in the inventory):

| claim | where | count |
|---|---|---|
| "pickup and delivery" | **10 location pages** + TermsConditions | ~49 |
| "same-day" / "Same Day Available" | Services hub, Home, most service + location pages | widespread |
| turnaround figures ("1-2 days", "1-3 Days", "2-5 Days", "3-7 Days") | `Services.tsx` (14 cards), service pages | widespread |
| "within 2-4 hours" | `ITSupport.tsx:31` (copy **and** FAQ JSON-LD) | 1 |
| also "2-4 hours" | `TabletIPadRepair.tsx:22`, `VirusMalwareRemoval.tsx:23` | 2 |
| "our technicians are **certified**" | `ITSupport.tsx:35` (copy **and** FAQ JSON-LD) | 1 |
| "Walk-in service available" / "Walk-ins are welcome" | `Contact.tsx`, `Home.tsx`, `DataRecovery.tsx`, `LaptopScreenRepair.tsx` | ~8 |
| "Service area: 30-mile radius" | `Locations.tsx:407` | 1 |
| "within 30 miles of Charlotte" | `TermsConditions.tsx:203` | 1 |
| "minutes from" downtown Matthews / landmarks | `Matthews.tsx`, `Charlotte.tsx` | 6 |
| "We stock parts for common models" | `LaptopScreenRepair.tsx` | 1 |

**Two corrections to the 10/22 audit, from reading the source:**

1. **"Cleanroom" is not a KorTech capability claim.** All occurrences are in blog posts
   (`DataRecoveryCharlotte2025.tsx`, `SignsHardDriveFailingDataRecoveryTips.tsx`) and are **generic
   industry education** — "Do they have proper clean room facilities if needed?" — not assertions
   that KorTech operates one. Lower urgency than the audit implied, though the data-recovery service
   page copy should still be checked against what you actually do.
2. **`LaptopScreenRepair.tsx` carries claims the audit's B2 list missed entirely** — "1-2 business
   days", "same-day service is often possible", "Walk-ins are welcome", "We stock parts", "all major
   brands". It was also the template I would naturally have cloned for the Mac page. I did not.

**Please answer TRUE / FALSE / PARTLY per row.** Where PARTLY, give the accurate wording. I will not
invent replacement figures. Recommended replacements where something is false are the claims already
confirmed: the $75–$150 diagnostic waived with hardware repair, the 14-day parts-only warranty, and
"all work done in our Charlotte shop on Sardis Rd N".

---

## 7. Google Business Profile proposal — **prepared only, nothing saved**

I did not open, edit or save anything in GBP this session.

| action | recommendation |
|---|---|
| **Services banner** ("changed based on feedback from Google users") | **Review personally, first.** Still unreviewed. Google has altered how your business is described. |
| **Add: Gaming Console Repair** | Yes — PS5/Xbox/Switch pages are live. Highest value of the gaps. |
| **Add: Data Recovery/Backup, Mobile Phone Repair, Remote Assistance, Wireless Networking** | Yes, all four have live service pages. |
| **Mac capability** | Now confirmed. GBP publishes "Mac & Pc Repairs"; consider a custom service for board-level/micro-soldering (no suggested category matches). Custom services are auto-rejected if they contain prices, URLs or phone numbers. |
| **Do NOT add** "Pickup And Delivery", "Same day repair", "Same day service" | Unconfirmed — see §6. |
| **Review existing service "Same Day Service Available"** | Same question. |
| Primary category | **Do not change.** 10/22 ruled out category, review count and keyword gap as the console local-pack cause; the cause is unresolved and changing primary category affects every query. |
| Booking link, review reply, review-request link | Owner actions. |

Do not keyword-stuff the business name. Do not create a Matthews or any other location — Charlotte is
the only one.

---

## 8. GA4 / conversion measurement

**Already correct, do not "fix":** `phone_call` and `text_message` fire via one delegated listener
(`initDelegatedContactTracking`). Verified: exactly one call site (`App.tsx:120`), inside a
`React.useEffect` with an empty dependency array, and no other file calls `trackPhoneCall` or
`trackTextMessage` directly — so there is no double-firing. Consent Mode v2 defaults to denied and
`trackEvent` drops events without consent; that undercount is **by design** and must not be weakened.

**Partially investigated — NOT ruled out.** I read the Worker and both form handlers. Routing is
correct (`formType: 'contact'` to the contact validator, else mail-in) and `ALLOWED_ORIGIN` is
`https://www.kortechservice.com`, matching the canonical host. A live OPTIONS preflight returns **200**
with correct CORS headers, so the Worker is deployed and reachable.

**What I could NOT verify, and you should treat as an open question:** the Worker returns **502** when
the Resend API call fails. An expired `RESEND_API_KEY`, or an unverified `mail.kortechservice.com`
sender domain in Resend, would make *every* submission fail into the browser's catch block — which
would look exactly like "nobody submitted". Confirming that needs the deployed secret and the Resend
dashboard, which I did not access, and a real POST would have emailed you a fake enquiry. **So: source
config is consistent; the deployed secret and Resend sender domain are unverified.** The new
`form_submit_failed` event is what will settle this.

**Changed here:** both forms now fire a diagnostic-only `form_submit_failed` on the failure path. This
is what finally distinguishes "nobody submitted" from "submissions are failing".

**Recommendations:**

1. Mark **`phone_call`** and **`text_message`** as key events (your approval, A5). Not backfilled, so
   the sooner the better.
2. **Do NOT mark `form_submit_failed` as a key event.** It is a failure, not a lead — counting it
   would inflate conversions. Monitor it only.
3. Keep `form_submit` (success-only) as the confirmed-lead event; it already fires only after a 200.
4. Retire the three dead `ads_conversion_*` key events showing "No stream data detected".
5. **Separate clicks from leads in reporting.** A `tel:` click is *intent*, not a confirmed call — it
   cannot tell you whether the call connected. `form_submit` is a confirmed submission. Report them as
   different things; GBP's own 197 calls / 321 direction requests remain the better call-volume proxy.
6. **`form_submit` cannot currently tell the contact form from the mail-in form.** Both fire the same
   event name, distinguished only by the `event_label` parameter (`contact_page_form` vs
   `mail_in_repair_form`). GA4 does **not** surface a custom parameter in reports until it is
   registered as an event-scoped custom dimension — an Admin change needing your approval. Without
   that, marking `form_submit` as a key event gives you a single undifferentiated lead count. Same
   applies to the `source` parameter on `phone_call`/`text_message`, which is what would tell you
   *which page* produced the call. **Recommend registering `event_label` and `source` as custom
   dimensions** at the same time as A5.
7. **There is no quote form, and none is proposed.** The brief lists "quote requests" as a conversion
   to measure. The site has exactly two forms — contact and mail-in. Quote requests arrive as phone
   calls, texts, or the contact form, so they are covered by those events rather than needing one of
   their own. Flagging it so the absence is a decision, not an oversight.
8. **No link was added from the `/services/` hub.** The brief asked for links from the hub "where
   justified". The hub's service cards are not links — they are presentational cards carrying a
   `turnaround` value, and adding a Mac card would require inventing a turnaround figure I cannot
   confirm. The crawlable nav (PR #23) already puts the Mac page at depth 1 from every page including
   the hub, so the hub adds no crawl value. Revisit once §6 is answered.

---

## 9. Test results — all run, all passing

Baseline captured **before** any change (clean: type-check, lint, build 57/57) so nothing is misattributed.

| check | before | after |
|---|---|---|
| `npm run type-check` | pass | **pass** |
| `npm run lint` | pass | **pass** |
| `npm run build` (sitemap→vite→prerender→3 validators) | pass | **pass** |
| `validate-seo` | 57 pages | **58 pages, all pass** |
| `validate-routing` | OK | **OK + 2 new checks** |
| `check-dist-internal-links` | 55 paths / 57 files | **56 paths / 58 files** |
| `verify-production.mjs` against **live production** | **92/92** | unchanged — branch is not deployed |

**On `verify-production.mjs`:** it is a fixed suite of **92 checks** that does not scale with page
count, so a correct post-deploy result is **92/92**, not a higher number. Run against `vite preview`
it reports 62/92, but **all 30 failures are 404-architecture checks that require `.htaccess`**, which
the vite preview server does not execute — they are an artifact of the local harness, not defects.
Live production was confirmed at 92/92 today.

**Page-level verification** (from prerendered output and a Playwright run against `vite preview` —
never production):

- title/description unique; canonical self-referencing with trailing slash; exactly **one H1**
- JSON-LD parses; types = `BreadcrumbList`, `Service`; **no FAQPage / aggregateRating / Review**
- **zero** matches for every unverified-claim pattern; "authorized service provider" appears 3×, all
  three being the denial
- linked from **59 pages** (nav = depth 1, matching PR #23); present in sitemap; `lastmod` 2026-10-23
- **no console errors**, **no horizontal scroll at 390px**, **no images missing alt**

**Mail-in form, both branches, endpoint intercepted** (nothing reached the real worker):

| endpoint | heading shown | print path |
|---|---|---|
| 200 | "Form Completed Successfully!" | kept |
| 500 | **"We couldn't send your form automatically"** | kept |

**Negative tests — each new guard proven to fail when it should:**

| planted defect | result |
|---|---|
| `aggregateRating` in JSON-LD | **FAIL** (passed silently before this batch) |
| `FAQPage` on the Mac page | **FAIL** |
| a "same-day" claim on the Mac page | **FAIL** |
| an Apple authorization *denial* on the Mac page | **FAIL** |
| an Apple authorization/certification *claim* on the Mac page | **FAIL** |

---

## 9b. Additional findings — reported, deliberately NOT fixed in this batch

Three things surfaced during verification that are real but out of scope here. None is caused by this
batch; fixing them belongs in a separate change with its own testing.

1. **Horizontal overflow at the 1280–1310px viewport band (pre-existing).** At 1280px wide the
   document scrollWidth is **1310px**, so a horizontal scrollbar appears and the header's
   "Text 980-888-5300" button is clipped. The widest element is the navbar's `hidden xl:flex` CTA
   block. **Measured identically on the homepage, on the new Mac page, and on the untouched
   `/laptop-screen-repair/`** — so it is a pre-existing navbar layout issue at that specific band, not
   something this batch introduced. No horizontal overflow at 390px (phone) on any page tested.
   Worth fixing; not here, because touching the navbar affects all 58 pages.

2. **UTM query strings on `tel:` and `sms:` links — 20 occurrences across 6 files**
   (`CTAButtons.tsx`, `Home.tsx`, `Contact.tsx`, `About.tsx`, `Charlotte.tsx`, `Matthews.tsx`), e.g.
   `tel:704-246-7642?utm_source=site&utm_medium=services&utm_campaign=phone_cta`. UTM parameters do
   nothing on a `tel:`/`sms:` URI — GA4 never sees them, since the click is tracked by the delegated
   listener, not by a page load. The `data-track-source` attribute is what actually carries the
   source. **Untested risk:** some dialers may mishandle the query string. I have not tested this on a
   real handset and am not calling it a defect. **Recommend: test one on your phone.** If dialing is
   unaffected it is merely dead weight; if it isn't, it is breaking call CTAs.

3. **The `cleanroom` finding in the 10/22 audit is milder than stated** — see §6. All 7 occurrences
   are generic industry education inside blog posts, not assertions that KorTech operates one.

---

## 10. Exact files changed

18 files, +657 / −25. New page is 456 lines of that.

```
 LOCAL_CITATIONS.md                        |   8 +-   BBB claim corrected
 public/.htaccess                          |   2 +-   whitelist entry (routingFreeze)
 public/sitemap.xml                        |  20 +-   58 URLs, lastmod restamped
 scripts/generate-sitemap.mjs              |   1 +    lastmod source mapping
 scripts/routes.mjs                        |   1 +    route registration
 scripts/validate-routing.mjs              | 102 +-   vacuous guards fixed + 2 new checks
 src/App.tsx                               |   2 +    lazy import + Route
 src/components/Navbar.tsx                 |   1 +    crawlable nav entry
 src/pages/Contact.tsx                     |   3 +-   failure diagnostic event
 src/pages/Home.tsx                        |  12 +-   Mac card links to the new page
 src/pages/MailInForm.tsx                  |  38 +-   false-success fix
 src/pages/services/MacBookRepair.tsx      | 456 +    NEW PAGE
 src/pages/services/DataRecovery.tsx       |   6 +    internal link
 src/pages/services/LaptopScreenRepair.tsx |   5 +    internal link
 src/pages/services/PCBMicroSoldering.tsx  |   6 +    internal link
 src/pages/services/WaterDamageRepair.tsx  |   6 +    internal link
 src/utils/analytics.ts                    |  12 +    trackFormSubmissionFailure
 src/utils/linkChecker.ts                  |   1 +    known route
```

Commits on `seo/mac-repair-and-fixes-2026-10`:

```
45d041b Restamp sitemap lastmod for the edited pages
093cd93 Repair three vacuous schema guards and add two new ones
cee6395 Stop the mail-in form reporting success when the send fails
d8d910c Link the Mac page from the homepage and four related service pages
c8c30c3 Add a Mac and MacBook repair page
```

**Deliberately NOT done:** no merge, no deploy, no indexing request, no sitemap submit, no GSC
validation retry, no GBP edit, no GA4 setting, no form POSTed to the live worker, no review replied
to, no redirect/canonical/404 change beyond the one whitelist entry.

**No claim text edited.** An earlier draft of this batch reworded the homepage Mac card description
from "with same-day service" to "including Mac logic-board work". That was a claim edit on the page
that receives nearly every click, and claim wording is owner-approval work — so it was **reverted** in
`a7a4cec`. The original wording stands and is logged in the claim inventory for your decision.

---

## 11. Review count — the audit's A1 was treating a symptom

The audit proposed hardcoding 112 → 121 and recommended "make it a single constant". **It already is
one** — `src/data/reviews.json`, consumed by `FiveStarReviews.tsx`, refreshed monthly by
`.github/workflows/update-reviews.yml` via the Places API.

The real cause: the workflow **runs and succeeds** (Sept 1, Oct 1 both green) and opens
**PR #19 — which has sat open and unmerged since 2026-09-01.** The Oct 1 run updated that same branch
to **119**. Production still serves 112 (curl-verified today) purely because the PR was never merged.

**Recommendation: merge PR #19** rather than hardcoding a number into this branch. That fixes the
count *and* restores the refresh loop. Hardcoding would have created a second source of truth and
guaranteed the drift recurs. I did not merge it — it is not my branch and merging deploys to production.

Note the audit's "121" came from the GBP panel on 10/22; PR #19 carries 119 from the Oct 1 API pull.
The next monthly run will close that gap on its own once the loop is unblocked.

---

## 12. Deployment and rollback plan

**Deploy** (after A1–A4 are answered):
1. Merge PR #19 first, independently — it is unrelated and low-risk.
2. Open the PR from `seo/mac-repair-and-fixes-2026-10`; `pr-checks.yml` runs on the PR.
3. On merge to `main`, `deploy.yml` builds and FTP-syncs `dist/`. **Merging is deploying** — there is
   no separate gate.
4. Post-deploy: curl `/macbook-repair/` for 200 + self-canonical; re-run `verify-production.mjs`
   (**92/92, confirmed against live production today**; the suite is a fixed 92 checks and does not
   scale per page, so expect **92/92** again, not a higher number); confirm the sitemap serves 58 URLs; re-extract
   JSON-LD; check no new GSC Page-indexing reasons appear.
5. **Indexing request: only `/macbook-repair/` and only with your authorisation.** Do not request
   unchanged pages. The Indexing API stays off-limits (JobPosting/BroadcastEvent only).

**Rollback:** `git revert` the merge commit and push to `main`; the deploy workflow restores the
previous `dist/`. The sitemap returns to 57 URLs and the `.htaccess` entry disappears with it. No
database, no migration, no external state — the whole batch is reversible in one commit. Individual
commits can be reverted independently; only `c8c30c3` touches `routingFreeze`.

**Risk:** the one real risk is A1 (sitemap/whitelist). Everything else is additive or a defect fix.
If you want to be maximally conservative, revert `c8c30c3` + `d8d910c` + `45d041b` and keep the form
fix, the validator repair and the BBB correction, which touch no routing at all.

---

## 13. Next checkpoint (proposed 2026-11-19, unchanged)

Add to the existing agenda:
1. Did "macbook repair" impressions move from the homepage to `/macbook-repair/`? Did clicks appear
   where there were 0 of 118?
2. Did any iMac / Mac mini / Mac Studio demand materialise (the page-split revisit trigger)?
3. **First checkpoint able to report calls and texts as key events**, if A5 is approved.
4. Any `form_submit_failed` events? That answers the 28-day zero-`form_submit` question outright.
5. Re-run the full fixed-coordinate local-pack protocol that 10/22 deferred.
