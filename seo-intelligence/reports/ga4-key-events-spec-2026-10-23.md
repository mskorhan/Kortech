# GA4 key-event configuration spec — prepared, NOT applied (2026-10-23)

Per owner decision **A5 — APPROVED FOR PREPARATION ONLY**: prepare `phone_call` and `text_message`
as key events, but verify event definitions, deduplication and actual tracking behaviour first, and
clearly distinguish clicks from confirmed calls or leads.

**Nothing in the Google Analytics account has been modified.** This is the spec to apply after
approval.

---

## 1. Verification performed

Tested against a **production build** (`vite preview`, not the dev server — React StrictMode
double-invokes effects in dev and would have faked duplicate events).

Method: set `localStorage.cookieConsent = 'accepted'`, loaded `/macbook-repair/`, then clicked every
`tel:`/`sms:` link on the page one at a time and diffed `window.dataLayer` after each click.

| link (`data-track-source`) | href | events fired | event name | `source` param |
|---|---|---|---|---|
| `navbar_desktop` | tel: | **1** | `phone_call` | `navbar_desktop` |
| `navbar_desktop` | sms: | **1** | `text_message` | `navbar_desktop` |
| `service_macbook_hero` | tel: | **1** | `phone_call` | `service_macbook_hero` |
| `service_macbook_hero` | sms: | **1** | `text_message` | `service_macbook_hero` |
| `service_macbook_mailin` | tel: | **1** | `phone_call` | `service_macbook_mailin` |
| `service_cta` | tel: | **1** | `phone_call` | `service_cta` |
| `service_cta` | sms: | **1** | `text_message` | `service_cta` |

**Result: exactly one event per click. No duplication.** Also confirmed:

- **No double-firing path exists.** `grep` over `src/**/*.tsx` finds **zero** component-level
  `onClick` handlers calling `trackPhoneCall`/`trackTextMessage`. The only path is the single
  document-level delegated listener (`analytics.ts:62`), initialised once from `App.tsx:120`.
- **No untracked links.** Every `tel:`/`sms:` link on the page carries `data-track-source`.
- **Consent gating works.** `trackEvent` checks `hasAnalyticsConsent()`; with consent absent or
  declined, nothing is sent. `dataLayer` showed `analytics_storage: denied` by default, then
  `consent update → granted` after acceptance.

### One latent defect found (not a live data problem)

`App.tsx:118-121` registers the listener in a `useEffect` with **no cleanup function**:

```js
React.useEffect(() => {
  initConsentMode();
  initDelegatedContactTracking();
}, []);
```

`initDelegatedContactTracking` calls `addEventListener` and never returns a remover. Under
StrictMode this mounts twice in **development**, attaching two listeners and double-counting every
click. Production builds do not double-invoke, which is why live GA4 data is unaffected and why the
production-build test above shows 1 event per click.

It is still worth fixing, because it makes the dev environment lie about event counts. The fix is to
have `initDelegatedContactTracking` return its own teardown and for the effect to return it.
**Not included in PR #24** — it is unrelated to this batch and the owner asked for no unrelated
changes.

---

## 2. Configuration to apply (after approval)

### Mark as key events — GA4 Admin → Events → Key events

| event | mark as key event | rationale |
|---|---|---|
| `phone_call` | **Yes** | Highest-intent measurable action on the site. |
| `text_message` | **Yes** | Same intent class; texting is actively offered. |
| `generate_lead` | already a conversion | Form-based service request. |
| `form_submit` | **Yes** | Mail-in and contact form submissions. |
| `form_submit_failed` | **NO — never** | Diagnostic only. Marking a *failure* as a key event would inflate conversions with broken submissions. |

### Register as custom dimensions — Admin → Custom definitions

Both parameters are already sent on every event but are **not currently registered**, so they are
invisible in reports. Without these, you can see *that* someone tapped call, but not from where.

| parameter | scope | dimension name | why |
|---|---|---|---|
| `source` | Event | Contact Source | Attributes the tap to a page/placement (`service_macbook_mailin`, `navbar_desktop`, …). This is what tells you whether the new Mac page converts. |
| `event_label` | Event | Contact Type | "Phone Call" / "Text Message". |

Registration is not retroactive — data only appears from the day it is created forward.

---

## 3. How to read these numbers (important)

State these caveats alongside any reporting built on these key events:

1. **A key event here is a tap on a link, not a completed call.** `phone_call` fires when someone
   activates a `tel:` link. It does not know whether the call connected, how long it lasted, or
   whether anyone answered. It is *intent*, not an outcome, and not a confirmed lead.
2. **Desktop taps often go nowhere.** On a desktop browser with no handler registered, a `tel:`
   click frequently does nothing at all while still firing the event. Given the 10/08 and 10/22
   finding that ~75% of impressions are a desktop anomaly, expect desktop `phone_call` counts to
   overstate real call intent. Segment by device before drawing conclusions.
3. **Consent-denied traffic is invisible.** Analytics is gated on `cookieConsent === 'accepted'`;
   every visitor who declines or never answers is absent. Counts are a floor, not a total.
4. **20 UTM-tagged `tel:`/`sms:` links exist elsewhere on the site** that GA4 cannot attribute from
   the URL (reported previously, deliberately not fixed). The `source` dimension above is the
   reliable attribution path, not UTM.
5. **Internal links carrying UTM parameters corrupt source attribution.** Google's own GA4 guidance
   is not to tag internal links: a UTM on an internal link starts a new session and reassigns its
   source. A visitor who arrives from organic search and then clicks a UTM-tagged internal CTA has
   the resulting `form_submit` credited to that UTM (e.g. `site / contact`) instead of to search,
   which hides the very thing you are trying to measure.

   I removed the UTM from the new mail-in CTA on `/macbook-repair/` for this reason. **The existing
   internal UTM links still have the problem** — `Contact.tsx:512`
   (`/mail-in-form/?utm_source=site&utm_medium=contact&utm_campaign=mailin_cta`) and the ~20
   UTM-tagged `tel:`/`sms:` links reported previously. Cleaning those up is a small, separate change
   that would measurably improve attribution; it is **not** in PR #24 (unrelated change).
6. **These counts are not comparable to a call log.** Do not reconcile them against phone records;
   they measure different things.
