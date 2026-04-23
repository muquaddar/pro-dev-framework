# GATE-05: Pre-Release Approval

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 6 → 7 Transition
> 
> **Gate Type:** Human Decision — Cannot be auto-advanced

---

## What This Gate Is

Gate 5 is the **final checkpoint before the product is released to the public**. It is the moment where a human being — with full awareness of all streams (code, content, legal, QA) — explicitly decides: **"This product is ready to leave beta."**

No automation can make this decision. The PM or product owner must read this document, verify the checklist, and provide a written sign-off before the app is submitted to the app store or set to public.

Passing Gate 5 triggers:
- App store submission (or production activation for web)
- Go-to-market activation
- Monitoring stack set to production alert levels

---

## Prerequisite Conditions

All of the following must be true before Gate 5 review can even begin:

| Prerequisite | Evidence Required |
|---|---|
| All build milestones complete (Gate 4 passed) | `docs/progress.md` — all milestones marked complete |
| Beta test program completed and signed off | `maintenance-kit/launch-prep/beta-test-plan.md` — beta sign-off section filled |
| Compliance final sign-off completed | `maintenance-kit/launch-prep/compliance-final.md` — all required items ✅ |
| App store listing complete (all metadata, screenshots) | `maintenance-kit/launch-prep/app-store-submission.md` — pre-submission checklist ✅ |
| Monitoring configured and tested | `maintenance-kit/post-launch/monitoring-setup.md` — setup checklist complete |
| Content freeze confirmed — all copy and assets final | `docs/content-pipeline.md` — all Stream 1-4 rows ✅ Final |
| Go-to-market plan ready | `maintenance-kit/launch-prep/go-to-market.md` — timeline through Day 0 ready |

---

## Gate 5 Review Checklist

The gate reviewer must verify each item in all four domains:

### Domain A: Code & Quality

```
[REQUIRED]  [ ] Zero open P0 bugs
[REQUIRED]  [ ] Zero open P1 bugs (or explicit PM decision to ship with known P1 + mitigation)
[REQUIRED]  [ ] Crash-free rate ≥ 99% over the last 3 days of beta
[REQUIRED]  [ ] App passes manual smoke test on minimum supported device/OS
[REQUIRED]  [ ] Core user flow tested end-to-end on a fresh install (no dev tools, no debug data)
[REQUIRED]  [ ] All milestone acceptance criteria met (verified against progress.md)
[REQUIRED]  [ ] No debug code, test credentials, or development feature flags active in release build
[REQUIRED]  [ ] App passes all store technical requirements (iOS: no private APIs; Android: target API level ≥ minimum)

[RECOMMENDED] [ ] Performance baselines met (cold start < 2s, no ANRs)
[RECOMMENDED] [ ] Code reviewed by at least one peer for main features
```

### Domain B: Content & Assets

```
[REQUIRED]  [ ] All UI copy finalized and integrated — no placeholder text in release build
[REQUIRED]  [ ] All illustrations, icons, and backgrounds integrated and rendering correctly
[REQUIRED]  [ ] All audio files integrated and playing at correct triggers
[REQUIRED]  [ ] App store listing text finalized (title, subtitle, description, keywords)
[REQUIRED]  [ ] App store screenshots match the actual current app UI
[REQUIRED]  [ ] App icon correct and rendering properly on all target devices
[REQUIRED]  [ ] Content freeze date confirmed — no copy or asset changes pending

[RECOMMENDED] [ ] App store preview video ready and submitted (if applicable)
[RECOMMENDED] [ ] Localization verified (if multi-locale launch)
```

### Domain C: Legal & Compliance

```
[REQUIRED]  [ ] Privacy Policy is live at a permanent, publicly accessible URL
[REQUIRED]  [ ] Privacy Policy accurately reflects ALL data collected (including third-party SDKs)
[REQUIRED]  [ ] App store privacy labels completed (iOS Nutrition Labels / Android Data Safety)
[REQUIRED]  [ ] Terms & Conditions accessible from within the app or store listing
[REQUIRED]  [ ] COPPA compliance confirmed and documented (if children's product)
[REQUIRED]  [ ] GDPR compliance confirmed (if EU market)
[REQUIRED]  [ ] Accessibility: minimum contrast ratios verified, touch targets pass
[REQUIRED]  [ ] All third-party assets licensed for commercial use
[REQUIRED]  [ ] All third-party SDKs disclosed in Privacy Policy
[REQUIRED]  [ ] Compliance-final.md sign-off complete (all required parties signed)
```

### Domain D: Operations Readiness

```
[REQUIRED]  [ ] Crash reporting active in production (Crashlytics / Sentry)
[REQUIRED]  [ ] Analytics tracking confirmed in production build (not just simulator)
[REQUIRED]  [ ] Alert channel configured (Slack or email) for crash notifications
[REQUIRED]  [ ] Support email address functional and auto-responder active
[REQUIRED]  [ ] Team on standby for launch day — someone monitoring alerts for the first 24 hours
[REQUIRED]  [ ] Hotfix process defined (who owns a P0 release? What's the turnaround target?)

[RECOMMENDED] [ ] Backend uptime monitoring active (if applicable)
[RECOMMENDED] [ ] Store review monitoring configured
[RECOMMENDED] [ ] Go-to-market plan activated (social posts scheduled, PR sent)
```

---

## Gate Decision

The gate reviewer must make one of three decisions:

**PASS:** All [REQUIRED] items satisfied → proceed to app submission and launch.

**CONDITIONAL PASS:** Minor [REQUIRED] gaps remain but are explicitly accepted risks → proceed with named owner and resolution deadline for each gap.

**HOLD:** One or more [REQUIRED] items cannot be waived → do not submit. Resolve and re-review.

---

## Sign-Off Record

```
GATE 5 — PRE-RELEASE APPROVAL

Project:        [Project Name]
Version:        [x.x.x] (Build [N])
Platform(s):    [iOS / Android / Web]
Review date:    [YYYY-MM-DD]
Reviewer (PM):  [Name]

DOMAIN RESULTS:
  A — Code & Quality:         ✅ Pass / ❌ Fail / Conditional (exceptions below)
  B — Content & Assets:       ✅ Pass / ❌ Fail / Conditional
  C — Legal & Compliance:     ✅ Pass / ❌ Fail / Conditional
  D — Operations Readiness:   ✅ Pass / ❌ Fail / Conditional

EXCEPTIONS (for Conditional Pass only):
  [ ] [Exception: item not met] — Accepted risk because: [reason]
                                    — Owner: [Name]  — Resolved by: [Date]
  [ ] [Exception] — [reason] — Owner: [Name] — Resolved by: [Date]

DECISION:
  [ ] ✅ PASS — Gate 5 approved. App submission authorized.
  [ ] ⚡ CONDITIONAL PASS — Authorized subject to exceptions above.
  [ ] 🔴 HOLD — Gate 5 not cleared. Reasons: [List blocking items]

SIGNATURES:
  PM / Product Owner:  _________________________ Date: __________
  Lead Developer:      _________________________ Date: __________
  Legal (Enterprise):  _________________________ Date: __________

NEXT STEP (upon passing):
  → Submit app to App Store / Google Play
  → Activate go-to-market plan
  → Set launch date and notify team
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Gate required** | Strongly recommended | Required | Required |
| **Domains reviewed** | A + C (minimum) | A + B + C + D | All four + stakeholder sign-off |
| **Reviewers** | Developer only | Developer + PM | PM + Legal + Dev + Design |
| **Conditional pass allowed** | Yes, self-authorized | Yes, with logged exceptions | No — all required items must pass |
| **Post-gate hold period** | None | None | 24-hour review window after sign-off |
