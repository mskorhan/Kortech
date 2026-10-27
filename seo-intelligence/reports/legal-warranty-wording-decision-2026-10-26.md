# Warranty wording on /terms/ — exact text for owner approval

**Status: PROPOSAL ONLY. NOTHING HAS BEEN CHANGED.** No legal wording was
edited, and none will be without your approval.

I am not a lawyer and this is not legal advice. This supersedes
`legal-warranty-wording-proposal-2026-10-26.md`, which **under-reported the
problem**: it cleared Items 2 and 3 as "no change needed". That was wrong, and
the reason is set out below.

---

## The correction that matters

My earlier proposal said only Item 1 needed a decision, because Items 2 and 3
are "literally true". **Literal truth was the wrong test.**

All three sentences share one defect. Each one carves an *exception* out of a
warranty:

| clause | what it excludes coverage for | what a customer infers |
|---|---|---|
| 1 | accidental damage after repair | …so other damage *is* covered |
| 2 | repairs using **customer-supplied** parts | …so repairs with **KorTech** parts *are* covered |
| 3 | **water-damaged** devices | …so **dry** devices *are* covered |

An exception implies a rule. Stating "X is not covered" tells the reader that
something **is** covered — which is the opposite of the confirmed policy that
KorTech offers no warranty at all. Item 1 is the most glaring because it names
a defined term that no longer exists anywhere on the site, but **2 and 3 create
the same false impression**, and a customer relying on that impression is
exactly the dispute this cleanup is meant to prevent.

So the decision below is a **single decision about one paragraph group**, not
three unrelated ones.

---

## The exact current text

Three sentences, in two adjacent `<p>` blocks, in the signed acknowledgment
block of `src/pages/TermsConditions.tsx` (lines 397–398 and 402):

> I understand repairs made by KorTech Service with customer provided parts
> instead of KorTech Service parts will not include a warranty on parts and
> labor.
> I understand that water damaged devices either before or after being repaired
> will not include parts and labor warranty of any kind.

> I understand that the KorTech Service limited warranty does not cover
> accidental damage like a cracked screen or any physical damage done to the
> device once the repair has been completed.

---

## OPTION 1 — state the policy once, then keep the limitations (recommended)

Replace all three sentences with the following. It **keeps every protection**
in the originals, drops the three implications, and says the policy plainly
once instead of three times by implication.

> I understand that KorTech Service does not provide its own warranty on parts
> or labor, and that any warranty on a part is provided by that part's
> manufacturer rather than by KorTech Service.
>
> I understand that this includes, without limitation, repairs made with parts
> I supply rather than parts supplied by KorTech Service, and devices that have
> water damage either before or after the repair.
>
> I understand that KorTech Service is not responsible for accidental damage,
> such as a cracked screen, or any other physical damage that occurs to the
> device after a repair has been completed.

**Why "its own":** the site still carries genuine **manufacturer** warranty
information (5-year SSD, 10-year PSU) and the manufacturer-warranty clause at
L389. A flat "no warranty on parts or labor is included with any repair" would
contradict both. Scoping the sentence to KorTech's **own** warranty states the
policy without denying a manufacturer's coverage that really does exist.

**Why this shape:** the first sentence is the general rule, so the second
cannot imply a carve-out — "this includes, without limitation" reads as
examples of the rule, not exceptions to a warranty. The third keeps the
post-repair damage limitation, which is a real protection and is independent of
whether a warranty exists.

**Nothing is given up.** Every limitation in the original survives: no parts
and labor coverage, customer-supplied parts, water damage, post-repair physical
damage.

**Trade-off to weigh with counsel:** this states the no-warranty position
affirmatively rather than leaving it unstated. Your standing policy has been
*silence* on warranties — not adding disclaimers. This is a signed
acknowledgment rather than marketing copy, which is the one place an
affirmative statement is normal; but it is a change of posture and it is your
call. **Implied warranties under North Carolina law are not disclaimed by this
wording and may not be disclaimable at all** — which is precisely why I have
drafted nothing resembling "no warranties, express or implied".

---

## OPTION 2 — minimal edit: fix only the dangling reference

Leave Items 2 and 3 untouched and change only the third sentence:

> I understand that KorTech Service is not responsible for accidental damage,
> such as a cracked screen, or any other physical damage that occurs to the
> device after a repair has been completed.

**Effect:** removes the reference to a warranty that does not exist. **Does not
fix** the implication created by the customer-parts and water-damage sentences.
Lower risk, smaller benefit; the main defect survives.

---

## OPTION 3 — delete all three sentences

**Not recommended.** Removing an exclusion is not the same as removing a
promise: deleting these could *widen* liability rather than narrow it, and it
discards the post-repair damage limitation for nothing.

---

## OPTION 4 — change nothing until 2026-11-09

Repairs completed before 2026-10-26 were performed under the published 14-day
terms. **The last of those windows closes on 2026-11-09** (14 days from
2026-10-26). Option 4 leaves the text as-is until then, so the published
exclusions still apply to repairs that may still be covered, and revisits after
that date.

**This is counsel's call, not a protective delay, and the two directions
conflict:** changing the website does not alter what past customers already
signed, so waiting protects nothing for them — while every *new* customer
before 2026-11-09 signs wording that implies coverage exists. Your instruction
said no *new* voluntary warranties, which reads as intending to honour
commitments already made; how that balances against continuing to publish a
misleading implication is a legal judgement, not a content one.

---

## Two things to decide alongside the text

**1. The paper form must match.** This is a *signed acknowledgment*. If
customers sign a printed or in-store version, editing the website changes the
website only. A customer who signed the old wording signed the old wording.
Whatever you approve here should be applied to the paper/in-store form at the
same time, or the two will disagree — which is worse than either version alone.
**I cannot see the paper form from here and have not assumed anything about it.**

**2. The "Last updated" date.** `/terms/` currently reads *"Last updated:
January 2025"* (line 447). If any of the above is approved, that date should
change in the same edit. Leaving a stale date on amended terms is its own
problem.

---

## Also reviewed, no change proposed

**Manufacturer warranties (line 389)** — concerns a **third party's** warranty
and disclaims KorTech liability for voiding it. Accurate, useful consumer
disclosure, unrelated to KorTech offering a warranty. **No change.**

**The insurance-claim phrase, in the same sentence** — *"may, at its sole
discretion, use the devices insurance claim in the event that this will be more
cost-effective than repairing the device."*

This is genuinely unclear and I am **not** proposing wording, because I would
have to invent a practice to do it. It does not say **whose** insurance, or
what "use" means. If it means filing a claim against the **customer's** policy,
that needs the customer's informed consent and is a bigger issue than tidy
language. **Question for you: what actually happens here?** Once I know, I can
draft options; until then, drafting would be guessing.

**Privacy Policy (3 references)** — these describe **data processing**, not an
offer of coverage: service records retained 7 years, supplier warranty claims,
warranty information in service records. All remain accurate descriptions of
real practice. A privacy policy should change only when it **misdescribes what
you actually do**, not for tidiness. **No change.**

---

## If you approve a change

Required in the same PR, or the build will fail:

1. The guard-12 allowlist in `scripts/validate-routing.mjs` allowlists all five
   current `/terms/` phrases **by exact text**. New wording will not match and
   **the build will fail until the allowlist is updated** — by design, so that
   new warranty language cannot land unnoticed.
2. `npm run verify-policies` asserts the same clauses. Its allowlist needs the
   same update.
3. The "Last updated" date on line 447.

Tell me which option and I will prepare the PR. **I will not touch this
wording until you do.**

---

## Summary

| item | location | proposed |
|---|---|---|
| 1. obsolete "the KorTech Service limited warranty" | /terms/ L402 | **DECISION NEEDED** |
| 2. customer-supplied parts | /terms/ L397 | **DECISION NEEDED** — same defect, was wrongly cleared |
| 3. water damage | /terms/ L398 | **DECISION NEEDED** — same defect, was wrongly cleared |
| 4. manufacturer warranties | /terms/ L389 | no change |
| 4b. insurance-claim phrase | /terms/ L389 | **question for you**, no wording proposed |
| 5. privacy data lines (3) | /privacy-policy/ | no change |
| paper/in-store form | offline | **must match whatever is approved** |
| "Last updated: January 2025" | /terms/ L447 | update with any approved change |

**My recommendation: Option 1, applied after 2026-11-09** (Option 4's date),
with the paper form updated at the same time — unless you tell me no repairs
performed under the old terms are still outstanding, in which case Option 1 can
go ahead now.

> ⚠️ **This repository is PUBLIC**, so this liability analysis is publicly
> readable. Say the word and I will move it out of the repo.

*Prepared 2026-10-26. Supersedes `legal-warranty-wording-proposal-2026-10-26.md`.
Related: `business-policy-content-rules.md` §2.*
