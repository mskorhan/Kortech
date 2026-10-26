# Proposed changes to warranty-related legal wording — FOR OWNER APPROVAL

**Status: PROPOSAL ONLY. NOTHING HAS BEEN CHANGED.**

Five warranty references remain on `/terms/` and three on `/privacy-policy/`.
They were deliberately left in place by PR #35 because they concern **legal
liability**, not marketing. This document sets out exact proposed wording so
you (with counsel) can decide. **No edit will be made without your approval.**

I am not a lawyer and this is not legal advice. Each item below states what the
clause currently does, what the problem is, and options — not a recommendation
dressed as a fact.

---

## Background

As of 2026-10-26 KorTech provides **no voluntary repair or service warranty**.
PR #35 removed every advertised warranty claim (168 instances across 20 pages).
The clauses below survived because **removing an exclusion is not the same as
removing a promise** — deleting them could *widen* liability rather than narrow
it.

---

## ITEM 1 — the obsolete cross-reference (the one that actually needs a decision)

**Location:** `/terms/`, signed acknowledgment block.

**Current wording, verbatim:**

> I understand that the KorTech Service limited warranty does not cover
> accidental damage like a cracked screen or any physical damage done to the
> device once the repair has been completed.

**Problem:** this excludes damage from *"the KorTech Service limited
warranty"* — a warranty that **no longer exists**. The sentence now references
a thing with no definition anywhere on the site. A customer could read it as
implying a warranty still exists (because why exclude damage from nothing?),
which is the opposite of the confirmed policy.

**Option A — delete the sentence entirely.**
Cleanest. Risk: if any pre-2026-10-26 repair is still within its 14-day window,
the published exclusion for those repairs disappears from the site.

**Option B — restate without implying a warranty:**

> I understand that KorTech Service is not responsible for accidental damage,
> such as a cracked screen, or any other physical damage that occurs to the
> device after a repair has been completed.

Keeps the limitation, drops the dangling reference. **This is the option I
would put to counsel first**, but it is a liability limitation and the exact
words matter.

**Option C — leave as-is** until all pre-change warranty windows have closed
(14 days from the last repair performed under the old terms), then revisit.

---

## ITEM 2 — customer-supplied parts

**Current wording, verbatim:**

> I understand repairs made by KorTech Service with customer provided parts
> instead of KorTech Service parts will not include a warranty on parts and
> labor.

**Assessment:** this is a **liability limitation**, and it remains literally
true — there is no warranty in this case, and there is no warranty in any case.
**Proposed action: NO CHANGE.** Removing it would remove a protection and gain
nothing. Flagged only because it contains the word "warranty".

---

## ITEM 3 — water-damaged devices

**Current wording, verbatim:**

> I understand that water damaged devices either before or after being repaired
> will not include parts and labor warranty of any kind.

**Assessment:** same as Item 2 — a limitation, still true.
**Proposed action: NO CHANGE.**

---

## ITEM 4 — voided manufacturer warranties

**Current wording, verbatim:**

> I understand that repairs or technical support performed by KorTech Service
> may void manufacturer warranties, especially in the case of Apple device
> repairs. KorTech Service and its affiliates do not assume any liability or
> warranty in the event that the manufacturer warranties are voided but may, at
> its sole discretion, use the devices insurance claim in the event that this
> will be more cost-effective than repairing the device.

**Assessment:** this concerns a **third party's** (the manufacturer's) warranty
and disclaims KorTech liability for voiding it. Accurate, useful consumer
disclosure, and unrelated to KorTech offering a warranty.
**Proposed action: NO CHANGE.**

*Separate observation, not a warranty issue:* the phrase "may, at its sole
discretion, use the devices insurance claim" is unclear — it does not say whose
insurance, or what "use" means. Worth a plain-language rewrite at some point.
Not proposed here.

---

## ITEM 5 — Privacy Policy references (3)

**Locations and verbatim wording:**

1. *"Maintaining service records and warranty information"* (data uses)
2. *"Parts suppliers for warranty claims"* (third-party sharing)
3. *"**Service records:** 7 years for warranty and legal purposes"* (retention)

**Assessment:** these describe **data processing**, not an offer of coverage.
Items 1 and 3 are arguably still accurate — service records are retained, and
**manufacturer/supplier** warranty matters are a real reason to keep them.

Item 2 is the weakest: *"Parts suppliers for warranty claims"* could describe
KorTech claiming against **its own suppliers** when a part fails (which still
happens and is accurate), or could be misread as KorTech administering a
customer warranty.

**Option A — leave all three.** Defensible as written.
**Option B — clarify Item 2 only:**

> Parts suppliers, where a component we purchased is defective and we claim
> against the supplier's own warranty

**Caution:** a privacy policy is a legal disclosure of actual practice. It
should be changed only if it **misdescribes what KorTech actually does with the
data** — not for tidiness. If retention genuinely is 7 years, saying so is
correct regardless of the warranty policy.

---

## What is NOT proposed

- **No "no warranties, express or implied" disclaimer.** Implied warranties
  under state law do not disappear because a site is silent, and drafting an
  enforceable disclaimer is a lawyer's job, not a content edit.
- **No "as-is" language.**
- **No change to arbitration, governing law, the abandonment clause, payment
  terms, or any other acknowledgment.**

## Open question only you can answer

**Repairs completed before 2026-10-26** were performed under published 14-day
terms and may still carry that coverage until those windows close. How to
honour them — and whether the site should say anything about it — is your
decision.

---

## Summary

| item | location | proposed |
|---|---|---|
| 1. obsolete "the KorTech Service limited warranty" | /terms/ | **DECISION NEEDED** (A, B or C) |
| 2. customer-supplied parts | /terms/ | no change |
| 3. water damage | /terms/ | no change |
| 4. voided manufacturer warranties | /terms/ | no change |
| 5. privacy data lines (3) | /privacy-policy/ | no change, or clarify #2 |

**Only Item 1 genuinely needs a decision.** The rest are flagged for
completeness because they contain the word "warranty".

Guard 12 allowlists all five `/terms/` phrases by exact text, so they pass the
build as written — **and any new warranty wording on `/terms/` still fails.**
If you approve a change, the allowlist entry must be updated to match.

*Prepared 2026-10-26. Related: `business-policy-content-rules.md` §2.*
