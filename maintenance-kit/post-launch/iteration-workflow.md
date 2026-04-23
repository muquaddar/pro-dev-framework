# Iteration Workflow

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 7 — Post-Launch Operations

---

## Overview

Post-launch iteration is not just "doing more work." It is a disciplined mini-cycle that takes incoming signals (feedback, bugs, analytics) and converts them into shipped improvements without losing product coherence or burning out the team.

The key principle: **small, frequent, intentional releases** beat large, infrequent, reactive ones.

---

## The Post-Launch Iteration Cycle

```
┌─────────────────────────────────────────────────────────────┐
│                  POST-LAUNCH ITERATION CYCLE                 │
│                                                             │
│   1. SIGNAL    →   2. TRIAGE   →   3. DECIDE   →   4. PLAN │
│      ↑                                                 │     │
│      └──────────────────── 5. BUILD & SHIP ←──────────┘     │
└─────────────────────────────────────────────────────────────┘

1. SIGNAL:  Feedback, crashes, analytics, reviews, support emails
2. TRIAGE:  Weekly 30-min session (see feedback-collection.md)
3. DECIDE:  What makes it into the next release?
4. PLAN:    Scope the release — write specs for P0/P1 items
5. BUILD:   Implement, test, release
```

---

## Part 1: Release Types

Define your release cadence before anything else. Three release types serve different needs:

| Release Type | Cadence | Scope | Trigger |
|---|---|---|---|
| **Hotfix** | As needed (< 48 hrs) | P0 crash or data loss only | P0 crash in production |
| **Patch** | Every 1-2 weeks | Bug fixes only, no new features | P1 bugs accumulated, or store review flags |
| **Feature Release** | Every 4-8 weeks | Mix of bug fixes + new features | Enough feature work ready + good bug baseline |

### Hotfix Protocol

```
A hotfix is ONLY for:
  - App crashes affecting >1% of users
  - Data loss or corruption
  - Security vulnerability
  - Store policy violation that risks takedown

Hotfix process (target: fix live within 48 hours):
  Hour 0:   P0 crash confirmed — alert team
  Hour 1:   Root cause identified
  Hour 2-4: Fix implemented and tested on actual device
  Hour 4-6: Build archived and uploaded to store
  Hour 6-8: Expedited review requested (Apple) or instant release (Android Internal)
  Hour 24-48: Fix approved and live
  
  Expedited Apple Review:
    1. Log in to App Store Connect
    2. Go to your app → Version page
    3. Click "Request Expedited Review" (hidden link at bottom of page)
    4. Describe the issue in 1-2 sentences
```

---

## Part 2: The Mini-Cycle (Patch / Feature Release)

For non-hotfix releases, use this structured mini-cycle.

### Step 1: Input Collection (Ongoing — from triage)

```
INPUTS FOR NEXT RELEASE

From triage sessions:
  [ ] Open P0 / P1 bugs from feedback log
  [ ] Feature requests with highest user demand count
  [ ] Analytics-driven insights (screen drop-offs, low engagement)
  [ ] Crash reports: recurring non-P0 crashes
  [ ] App store review patterns

From product vision:
  [ ] Items from the original roadmap / backlog
  [ ] Improvements identified during retrospective
```

### Step 2: Release Scoping (30-minute dedicated session)

```
RELEASE SCOPE SESSION

Run at the start of each iteration cycle.

1. List all candidate items (from inputs above)
2. Apply priority filter:
   MoSCoW method:
     Must Have (M): P0/P1 bugs, compliance fixes
     Should Have (S): P2 UX fixes, high-demand features
     Could Have (C): P3 cosmetic, low-demand features
     Won't Have (W): Clear out-of-scope items for this release

3. Estimate size (rough — not sprint points):
     S (small):  < 1 day of work
     M (medium): 1-3 days
     L (large):  3-7 days
     XL:         Defer to its own dedicated release

4. Fit-test:
   Total available days this cycle: [N]
   Sum of selected items: [N days]
   If sum > available days: descope the lowest-priority items

5. Lock the scope:
   "This release WILL include: [list]"
   "This release WILL NOT include: [list]"
   → Update iteration-log.md (below)
```

### Step 3: Spec (for features only — bugs don't need specs)

```
FEATURE SPEC — [Feature Name]

Problem being solved:
  [One sentence — what user pain or gap are we fixing?]

User signal:
  [How many users asked for this / what analytics showed the gap]

Proposed solution:
  [1-3 sentences — what we're building, not how]

User story:
  "As a [user type], I want to [action], so that [benefit]."

Acceptance criteria:
  [ ] [Testable criterion 1]
  [ ] [Testable criterion 2]
  [ ] [Testable criterion 3]

Out of scope (what this feature is NOT):
  - [Clarification 1]
  - [Clarification 2]

Design required:  Yes / No
Content required: Yes / No
Legal review:     Yes / No
```

### Step 4: Build

```
BUILD PROCESS FOR POST-LAUNCH UPDATES

  [ ] Feature branch created from main: feature/[feature-name]
  [ ] Acceptance criteria implemented
  [ ] Manual smoke test passed on real device
  [ ] Unit tests updated (if applicable)
  [ ] No new lint errors or warnings introduced
  [ ] Performance check: no regression in startup or core flows
  [ ] Build number incremented
  [ ] Release notes drafted (see Step 5)
  [ ] Merge to main via PR — reviewed by at least one other person (Standard+)
```

### Step 5: Release

```
RELEASE CHECKLIST

Pre-submission:
  [ ] All MoSCoW "Must Have" items complete and tested
  [ ] Regression testing on all changed screens (real device)
  [ ] Crash rate at baseline (no new crashes from release build)
  [ ] Build number incremented (iOS: CFBundleVersion, Android: versionCode)
  [ ] App version number updated (semver: X.Y.Z)
  [ ] Release notes written (What's New)
  [ ] Store listing updated if feature changes screenshots

Release Notes Guidelines:
  - Start with the most user-impactful change
  - Use plain English — not technical jargon
  - Max 3-4 bullet points
  - Own the bug fixes: "Fixed a crash that some users experienced" — own it
  - Don't list everything — just the meaningful things
  
  Example format:
    "Version X.Y — [Month Year]
    • [User-facing improvement 1]
    • [User-facing improvement 2]
    • Bug fixes and performance improvements"

Submission:
  iOS:
    [ ] Archive and upload to App Store Connect
    [ ] Select build and complete "What's New" section
    [ ] Submit for review
    
  Android:
    [ ] Build release AAB
    [ ] Upload to Play Console → Production → Create release
    [ ] Complete "What's new in this release" text
    [ ] Use staged rollout: 10% → 50% → 100% (watch crash rate between stages)

Post-release:
  [ ] Monitor crash dashboard for 24-48 hours
  [ ] Check D1 retention not impacted
  [ ] Respond to any new store reviews mentioning the release
  [ ] Notify team when staged rollout reaches 100%
```

---

## Part 3: Iteration Log

Keep a running log of every release. This creates institutional memory and feeds the retrospective.

```markdown
## Iteration Log — [Project Name]

---

### v[X.Y.Z] — [YYYY-MM-DD]

**Type:** Hotfix / Patch / Feature Release
**Status:** Released / Staged / Under Review

**Released items:**
  - [Bug fix or feature — one line]
  - [Bug fix or feature — one line]

**Deferred from scope:**
  - [Item deferred — link to next cycle]

**Metrics at time of release:**
  - DAU: [N]
  - Crash-free rate: [X]%
  - Current rating: [X.X]★

**Known issues entering this release:**
  - [Any open P2/P3 bugs that shipped with this version]

**Release notes published:**
  > "[Paste the actual What's New text here]"

---

### v[X.Y.Z] — [YYYY-MM-DD]
...
```

---

## Part 4: Backlog Management

A healthy backlog prevents every new idea from becoming a crisis.

```
BACKLOG TIERS

Tier 1 — NOW (current cycle scope)
  Items explicitly scoped into the current release.
  Max: What fits in the available build time.

Tier 2 — NEXT (next 1-2 cycles)
  Items that are confirmed and roughly estimated.
  Updated at the end of each cycle.

Tier 3 — LATER (3+ cycles out)
  Ideas validated by feedback but not yet scheduled.
  Review quarterly.

Tier 4 — NEVER / WON'T DO
  Clearly out of scope. Log WHY so you don't re-debate it.
  "We won't do X because [reason]."

BACKLOG HEALTH RULES
  [ ] Backlog reviewed at start of every cycle scope session
  [ ] No item stays in Tier 2 for more than 3 cycles without being promoted or demoted
  [ ] "Won't Do" items are logged with rationale — don't just delete them
  [ ] User demand count tracked per feature request (how many users asked?)
  [ ] Items older than 6 months in Tier 3 are reviewed for relevance
```

---

## Part 5: Version Numbering

Follow semantic versioning (semver):

```
FORMAT:  MAJOR.MINOR.PATCH

  MAJOR:  Breaking change in product experience (rare) — 2.0.0
  MINOR:  New user-facing feature added — 1.1.0, 1.2.0
  PATCH:  Bug fix or hotfix, no new features — 1.1.1, 1.1.2

BUILD NUMBER (also required):
  iOS (CFBundleVersion):    Monotonically increasing integer — 1, 2, 3...
  Android (versionCode):    Monotonically increasing integer — 1, 2, 3...
  NEVER reuse a build number — it breaks re-submission to stores

EXAMPLES:
  1.0.0 (build 1)  — Initial launch
  1.0.1 (build 2)  — Hotfix for crash
  1.1.0 (build 3)  — First feature release
  1.1.1 (build 4)  — Patch after 1.1.0
  2.0.0 (build 5)  — Major redesign or new business model
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Release cadence** | As-needed only | Monthly patch + 6-week feature | 2-week sprint cycle |
| **Hotfix SLA** | 72 hours | 48 hours | 24 hours |
| **Staged rollout (Android)** | Not needed | 10% → 100% | 10% → 25% → 50% → 100% |
| **Scope sessions** | Skip (informal) | 30 min every cycle | Dedicated planning sprint |
| **Feature specs** | Not needed | 1-page spec recommended | Full spec + design review |
| **Backlog management** | Sticky notes or none | Simple Notion/sheet | Dedicated project management tool |
| **PR review** | Optional | 1 reviewer required | 2+ reviewers required |
