# Maintenance Kit

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stages:** 6–7

---

## Purpose

The Maintenance Kit covers everything that happens **after the last line of code is merged** and before — and long after — your product is in users' hands. It transforms "I built a thing" into "I run a product."

Most developers stop at the build phase. The Maintenance Kit ensures your project doesn't just ship — it succeeds.

The two stages in this kit:

| Stage | Name | When | Focus |
|---|---|---|---|
| **Stage 6** | Launch Preparation | Before public release | Compliance, beta testing, store submission, go-to-market |
| **Stage 7** | Post-Launch Operations | After public release | Monitoring, feedback, iteration, sustainability |

---

## Who Uses This Kit

| Role | Primary Files |
|---|---|
| **Developer** | beta-test-plan, monitoring-setup, iteration-workflow, retrospective |
| **QA Engineer** | beta-test-plan, compliance-final, GATE-05-release |
| **Product Manager / Owner** | go-to-market, feedback-collection, GATE-06-launch, GATE-07-continue |
| **Legal / Compliance** | compliance-final, GATE-05-release |
| **Marketing** | go-to-market, app-store-submission |

---

## Kit Structure

```
maintenance-kit/
│
├── README.md                          ← You are here
│
├── launch-prep/                       ← Stage 6: Before public release
│   ├── beta-test-plan.md              — Beta program design and execution
│   ├── app-store-submission.md        — Store listing, screenshots, review prep
│   ├── go-to-market.md                — Marketing launch plan and timeline
│   └── compliance-final.md            — Final compliance verification before launch
│
├── post-launch/                       ← Stage 7: After public release
│   ├── monitoring-setup.md            — Error tracking, analytics, alerting
│   ├── feedback-collection.md         — User feedback pipelines and issue triage
│   ├── iteration-workflow.md          — Feature request → planning → build mini-cycle
│   └── retrospective.md              — Project retrospective template
│
└── gates/                             ← Human approval checkpoints
    ├── GATE-05-release.md             — Pre-release approval (human decision)
    ├── GATE-06-launch.md              — Launch readiness (all streams green)
    └── GATE-07-continue.md            — Quarterly continue / sunset decision
```

---

## Stage 6: Launch Preparation

Completing Stage 5 (Verify) doesn't mean you're ready to launch. Stage 6 is a structured pre-launch process:

```
Step 1: FINAL COMPLIANCE VERIFICATION
  Follow: launch-prep/compliance-final.md
  Who:    Legal, QA, Developer
  Output: Compliance cleared ✅

Step 2: BETA TEST PROGRAM
  Follow: launch-prep/beta-test-plan.md
  Who:    Developer, QA, Beta testers (real users)
  Output: Bugs resolved, beta feedback incorporated ✅

Step 3: APP STORE SUBMISSION PREPARATION
  Follow: launch-prep/app-store-submission.md
  Who:    Developer, PM, Marketing
  Output: Store listing complete, app submitted ✅

Step 4: GO-TO-MARKET PREPARATION
  Follow: launch-prep/go-to-market.md
  Who:    PM, Marketing
  Output: Launch plan ready, channels prepared ✅

► HUMAN GATE 5: Pre-Release Approval
  All four above must be ✅ before passing Gate 5.

► HUMAN GATE 6: Launch Readiness (Enterprise only)
  All work streams (Code, Content, Legal) confirmed green.
```

---

## Stage 7: Post-Launch Operations

After launch, the product enters a continuous operational cycle:

```
      ┌─────────────────────────────────────────────┐
      │           Post-Launch Operations Cycle       │
      │                                              │
      │  Monitor ──► Collect Feedback ──► Triage     │
      │     │                              │          │
      │     └─── Detect Issues ────────►  │          │
      │                                   ↓          │
      │                            Prioritise        │
      │                               │              │
      │                               ↓              │
      │                         Plan Mini-Cycle      │
      │                               │              │
      │                               ↓              │
      │                      Build + Ship Update     │
      │                               │              │
      │                               └──────────────┘
      │
      ► HUMAN GATE 7: Quarterly Continue / Sunset
```

Ongoing tasks:
- **Monitoring** (`monitoring-setup.md`): Error tracking, performance metrics, analytics
- **Feedback** (`feedback-collection.md`): App reviews, support tickets, usage data
- **Iteration** (`iteration-workflow.md`): Mini-cycles to ship improvements
- **Retrospective** (`retrospective.md`): Capture lessons at major milestones

---

## Launch Readiness Overview

Before triggering Human Gate 5, verify this summary table:

| Area | Owner | Status | Notes |
|---|---|---|---|
| Code: All milestones complete | Developer | ⬜ | |
| Code: All Gate 4 acceptances done | Developer | ⬜ | |
| Content: All copy finalized | Content Writer | ⬜ | |
| Content: All assets delivered | Illustrator | ⬜ | |
| Audio: All recordings delivered | Voice Actor | ⬜ | |
| Legal: Privacy Policy live | Legal | ⬜ | |
| Legal: Compliance cleared | Legal | ⬜ | |
| QA: Beta test complete | QA | ⬜ | |
| Marketing: Store listing ready | PM/Marketing | ⬜ | |
| Marketing: Go-to-market plan ready | PM/Marketing | ⬜ | |
| Technical: App submitted to store | Developer | ⬜ | |
| Technical: Analytics/monitoring configured | Developer | ⬜ | |

**Pass condition:** All rows ✅ Green → proceed to Gate 5.

---

## Tier Guidelines

| Phase | Lite | Standard | Enterprise |
|---|---|---|---|
| **Beta test** | Friends only / 5-10 testers | 20-100 testers (TestFlight/Play) | 100+ formal beta program |
| **Compliance** | Quick checklist | Full review | Legal counsel + sign-off |
| **App store** | Basic listing | Complete listing + screenshots | ASO optimized + localized |
| **Go-to-market** | Social post | Multi-channel launch plan | PR + coordinated launch |
| **Monitoring** | Crashlytics only | Analytics + crash + performance | Full APM + on-call alerts |
| **Feedback cycle** | Ad hoc | Monthly review | Weekly triage + sprint cycle |
| **Gate 6** | Skip | Optional | Required |
| **Gate 7** | Skip | Optional | Required (quarterly) |

---

> **Next step:** Start with `launch-prep/compliance-final.md` to verify all compliance requirements are met before moving to beta testing.
