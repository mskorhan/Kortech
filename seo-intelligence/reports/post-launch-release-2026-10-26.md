# Post-launch quality, legal, conversion and SEO pass — 2026-10-26

Two PRs merged and deployed. **No legal wording, hosting, DNS, SSL, Cloudflare
or billing configuration was changed.** Everything legally sensitive is below
as proposed text awaiting approval.

| | |
|---|---|
| **PR #37** | automated QA in CI → `main` @ `fb2d1e0`, deploy `40414947363` success |
| **PR #38** | email validation, 2 live overflows, test rigour → `main` @ `ea8c503`, deploy `40422607168` success |
| rule suite | `pass`, **0 bypasses**, on both merges |

---

## 1. Legal wording needing your approval

Resolved. The owner approved the no-voluntary-warranty Terms wording on
2026-10-27; it was published the same day and verified in production.

The drafting notes and risk analysis that previously appeared in this section
were **removed from this repository** at the owner's request, because this
repository is public. They are retained privately outside the repo.

**Two items remain open and are tracked with the owner directly, not here:**
the physical in-store acknowledgment form (unverified against the published
wording) and the `/terms/` insurance-claim sentence (ambiguous; no wording
proposed).

---

## 2. Form delivery status — three distinct tiers

**Tier 1 — the worker accepts and Resend accepts: CONFIRMED (prior session).**
Two synthetic tests returned `200`, so `RESEND_API_KEY` is valid and Resend
accepted the mail. Deployed worker verified byte-identical to `main`.

**Tier 2 — Resend recorded "delivered": NOT CONFIRMED.** Requires the Resend
dashboard. **You need to check this**; I never handle the API key.

**Tier 3 — the message is in the inbox, not spam: CANNOT BE CONFIRMED HERE.**
`kortechservice.com` MX is `mail.kortechservice.com` — a **Bluehost** mailbox.
No mail connector in this session can read it, and none is configured. Also
note the prior release report states plainly: **"No test email was sent"** —
the authorized end-to-end delivery test is still outstanding.

**Deliverability DNS — all correct (read-only checks, real resolver):**

| record | value | verdict |
|---|---|---|
| DKIM `resend._domainkey.mail…` | 1024-bit RSA key published | ✓ |
| SPF `send.mail…` | `v=spf1 include:amazonses.com ~all` | ✓ |
| MX `send.mail…` | `feedback-smtp.us-east-1.amazonses.com` | ✓ |
| DMARC `_dmarc.kortechservice.com` | `v=DMARC1; p=none;` | present, **monitor-only** |

**Correcting myself:** I first reported "no SPF record" after querying
`mail.kortechservice.com`. That was the **wrong hostname** — Resend publishes
SPF and MX on the `send.` bounce subdomain. Domain authentication is complete.

`p=none` means DMARC reports but never quarantines. Moving to `quarantine` is a
**DNS change and your decision**; I have not touched DNS.

### Form behaviour: 26 checks, both forms, 0 failures (dist/ and live)

Validation, honeypot state, success / 429 / 500 / dropped-connection handling,
live-region announcement, double-submit, in-flight button, keyboard focus.

**No test submission can reach `info@`**: every request to the worker is
intercepted, a separate counter fails the run if one escapes, and the harness
aborts if the app's endpoint constant stops matching the intercept glob.

### One real defect found and fixed (PR #38)

Neither form validated email **format** — only non-empty. The worker rejected
it with 400, so nothing bad reached the inbox, but on `/mail-in-form/` the
customer saw only *"we couldn't send… print it and include it with your
device"*: **the lead was lost and the printed form carried the unusable
address.** Now rejected inline before any request, with `aria-invalid`.

---

## 3. SSL and security

**DNS unchanged. Hosting unchanged. Nothing enabled.**

**The Chrome error is still reproducible, and unchanged since the last
investigation:**

| hostname | certificate served | openssl hostname check |
|---|---|---|
| `kortechservice.com` | CN=kortechservice.pinevillecomputers.com | **0 (ok)** |
| `www.kortechservice.com` | same | **0 (ok)** |
| `mail.kortechservice.com` | same | **62 (hostname mismatch)** |
| `autodiscover.kortechservice.com` | same | 62 (mismatch) |
| `ftp.kortechservice.com` | CN=*.hostmonster.com | not covered |

The two **customer-facing** names validate correctly. The failures are on
`mail.`/`autodiscover.`/`ftp.`, which are **not in the certificate SANs**,
while HSTS `includeSubDomains` forces HTTPS and removes the click-through. So
this is a **mail-client and tooling problem, not a website problem** — no
customer reaching the site is affected.

**Bluehost request: prepared, NOT sent** —
`bluehost-ssl-support-request-2026-10-26.md`. Send it when you choose; it asks
for added AutoSSL coverage and a corrected common name, and **explicitly asks
them not to drop the legacy `pinevillecomputers` hostname.**

**Cloudflare Workers rate limiting: still NOT enabled, cost still UNVERIFIED.**
I re-checked today: Cloudflare's own rate-limit binding page states **no
price**, and the Workers pricing page **does not mention the binding at all**.
Nothing published says it costs extra; nothing published says it is free. I am
**not** upgrading that to "free". It is also blocked on `wrangler login`.
Unchanged recommendation: check your own plan and billing page first.

New, free monitoring instead: the weekly workflow validates the TLS hostname on
the apex and `www`, and warns 14 days before expiry (currently 21 Dec 2026).

---

## 4. SEO and conversion, ranked by evidence

### Already shipped since the Oct-22 plan — do not re-do

| item | status |
|---|---|
| A1 review count 112 → **121** | ✓ live |
| A3 duplicate `@id` on /contact/ | ✓ resolved (1 `@id`) |
| B1 **MacBook/Apple repair page** | ✓ live at `/macbook-repair/` |
| GA4 `form_submit` event | ✓ fires, consent-gated — **code side is done** |

### Ranked remaining opportunities

**P1 — Google Business Profile has auto-published service changes. Owner only.**
*Evidence:* the GBP audit recorded a standing banner — *"Services were changed
based on feedback from Google users or other sources."* Neither button was
pressed (read-only pass). Among Google's **suggested** services is
**"Pickup And Delivery"**, and a **published** service is literally named
**"Same Day Service Available"**.
*Why this is #1:* GBP is the highest-traffic surface for a local repair shop
and **sits outside every guard in this repo.** "Pickup And Delivery" directly
contradicts the confirmed policy. A claim there is as damaging as one on the
site and I cannot see or fix it.
*Effort:* minutes. *Risk:* low. **Do this first, personally.**

**P2 — Mark calls and texts as GA4 key events. Owner only, zero code.**
*Evidence:* `tel:`/`sms:` clicks are tracked and `form_submit` fires, but none
are marked **key events**, so GA4 reports no conversions for a business whose
leads are overwhelmingly phone calls. *Effort:* minutes in GA4 Admin.
*Risk:* none. **Highest measurement value per minute of work.**

**P3 — DMARC is `p=none`.** Reports only, never quarantines. Moving to
`quarantine` after reviewing reports reduces spoofing risk. *DNS change, your
decision.* Low effort, low-moderate risk — review reports first.

**P4 — Off-site listings may still advertise pickup/delivery and the
warranty.** Yelp, Bing Places, BBB, legacy Pineville Computers entries. Outside
every guard's reach. Owner-only, unchanged since 10/10.

**P5 — Send the Bluehost SSL request.** No customer impact; fixes mail-client
and tooling errors. Low effort.

**P6 — Micro-soldering has no matching GBP service category**, and it is
KorTech's deepest specialty. A custom service may be possible; the panel was
not exercised because that risks writing state.

### Deliberately NOT recommended

- **No new location pages, no keyword-stuffed content, no new claims.**
- **No content churn before the 2026-11-19 checkpoint** — more changes now
  muddy the measurement you have been building toward.
- **Nothing attributed to today's PRs in GSC/GA4**: they are hours old, and the
  data does not exist yet.

---

## 5. Code and testing improvements completed

| added | what it does |
|---|---|
| `npm run test:forms` / `:prod` | 26 form E2E checks, both forms |
| `npm run verify-policies` / `:prod` | positive **and** negative business-policy assertions |
| `npm run test:worker` | the worker's 34 request-validation tests |
| `test:visual:quick` | 8 widths **including the nav breakpoint**, ~18s |
| CI `behaviour` job | runs all of the above on every PR |
| `production-monitor.yml` | weekly: full 21-width live sweep, live policies, TLS |

**The false assertion is fixed.** An earlier throwaway script asserted the
mail-in 5–10 day estimate on `/mail-in-form/` — **a page that does not render
`MailInSection` at all** — and reported a failure against a page never meant to
carry it. The page list is now derived from the 8 pages that import the
component, plus `/terms/` in prose: **9 pages, verified in dist/ and live.**

### Every harness was validated against a deliberately broken build

| injected defect | caught by | `npm run build` |
|---|---|---|
| honeypot made visible | form suite, both forms | **passed** |
| in-flight guard removed | form suite (`requests=3`) | **passed** |
| error UI silenced | form suite (3 checks) | **passed** |
| live region removed | form suite | **passed** |
| `1-year warranty on parts and labor` added | policy script | **passed** |
| mail-in estimate removed | policy script | **passed** |
| nav breakpoint desynced 1180→1280 | visual `--quick` (22 failures) | **passed** |
| focus ring stripped | visual interaction test | **passed** |

`npm run build` passed in **every** mutated state. That is the gap these fill.

### Four of my own tests were wrong, and I fixed them

1. **Playwright matches the LAST registered route**, so my catch-all swallowed
   every submission and four assertions read `requests=0` while proving
   nothing. The escape counter caught it on run one.
2. **Four message assertions matched page chrome** — `/contact/` contains
   "704", "call", "email" and "couldn't" in static HTML. Now diffed against a
   pre-submit snapshot.
3. **`:focus-visible` does not match a programmatic `.focus()`**, and a
   stripped ring still reports `outline: solid 2px` with a **transparent**
   colour. Both now handled.
4. **The live policy sweep counted a 404 as a pass** — it used a hand-written
   list containing `computer-repair-charlotte` (404) and missing
   `/matthews-computer-repair/`, `/macbook-repair/` and every blog post. Now
   iterates the live sitemap (**58 pages**) and counts an unfetchable page as a
   **failure**.

### The monitor found two real production defects in its first run

| page | measured | cause | fix |
|---|---|---|---|
| `/terms/` | 336 > 320 | a 49-char unbreakable Apple support URL | `break-words` |
| `/pricing/` | 332 > 320 | `p-8` + fixed 64px icon crowding title and price | `p-6` below `sm`, `flex-shrink-0`, `min-w-0`, stacked row |

My first `/pricing/` fix added `whitespace-nowrap` and **broke 768px and
820px** instead; the full sweep caught that too.

---

## 6. Remaining owner decisions

1. ~~Approve the `/terms/` wording~~ — **done 2026-10-27**, published and
   verified in production.
2. **Answer the insurance-claim question** — whose policy, and what "use" means.
3. **Update the paper / in-store form** to match whatever is approved.
4. **Review the GBP services banner** — P1 above. Do not add "Pickup And
   Delivery".
5. **Mark calls/texts as GA4 key events.**
6. **Check the Resend dashboard** for Tier-2 delivery, and decide whether to
   authorize one end-to-end test email.
7. **Send the Bluehost SSL request** when you choose.
8. **Decide on Workers rate limiting** — cost still unverified; needs your plan
   page and `wrangler login`.
9. **Decide whether to make the `behaviour` CI job required** — that is a
   ruleset change, so I did not make it.
10. **Confirm whether this public repo should hold legal analysis.**

---

## 7. Prioritised 30-day plan

**Week 1 — owner actions, no code, highest value**
1. GBP services banner (P1).
2. GA4 key events for calls and texts (P2).
3. Resend dashboard check; decide on one authorized test email.
4. Confirm the in-store acknowledgment form matches the published wording.

**Week 2 — decisions landing**
5. Apply approved `/terms/` wording — **in one PR with the guard-12 and
   `verify-policies` allowlists and the "Last updated" date**, or the build
   fails by design.
6. Update the paper form to match.
7. Send the Bluehost SSL request.
8. Decide DMARC `p=quarantine` after reviewing reports.

**Week 3 — measurement, deliberately quiet on content**
9. Let the weekly monitor run; triage anything it reports.
10. Off-site listing cleanup (P4) — owner-only.
11. **No content churn.** Protect the 2026-11-19 checkpoint.

**Week 4 — the checkpoint**
12. **2026-11-19 checkpoint** with GA4 key events finally recording leads —
    the first cycle where "did enquiries go up" is answerable.
13. Then decide the next content batch **from that evidence**.
14. Optional: GBP custom service for micro-soldering (P6).

---

## What I did not do

- No legal text edited. No DNS, SSL, hosting, Cloudflare or billing change.
- No live form submissions; no customer-facing test emails.
- No `behaviour` job made required (ruleset = your decision).
- **No screen-reader (NVDA/JAWS) testing** — keyboard and accessibility-tree
  checks are what ran, and axe covers only part of WCAG. Zoom is covered by
  equivalent CSS widths (1920 @150% = 1280 CSS px), not a separate zoom
  harness.
- No claims about GSC/GA4 effects of today's changes; that data does not exist
  yet.

*Prepared 2026-10-26. `main` @ `ea8c503`.*
