# Beta Test Plan

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 6 — Launch Preparation

---

## Overview

A beta test program validates your product with real users — outside your team — before public launch. It surfaces bugs, UX problems, and assumptions you cannot see when you're too close to the product.

**Beta testing is not optional for Standard and Enterprise tiers.** Skipping it trades a few days of beta for potentially thousands of user complaints, negative reviews, and a damaged launch.

---

## Beta Program Design

### Step 1: Define Beta Goals

Before recruiting testers, be specific about what you're trying to learn:

```
BETA GOALS — [Project Name]

Primary goals (must answer by end of beta):
  1. [e.g., Do first-time users complete onboarding without assistance?]
  2. [e.g., Is the core workflow (X → Y → Z) discoverable without a tutorial?]
  3. [e.g., Does the app feel stable on older devices (iPhone 12, Android 8)?]

Secondary goals (nice to know):
  1. [e.g., Which features do users engage with most?]
  2. [e.g., Are there any aesthetic or copy issues users notice?]

Anti-goals (NOT measuring in this beta):
  1. [e.g., Marketing messaging. We're testing the product, not the pitch.]
  2. [e.g., Store ratings. Beta feedback is private, not competitive positioning.]

Success criteria (beta passes when):
  [ ] Critical bug count drops to 0
  [ ] Crash-free rate > 99% across 3+ test days
  [ ] Onboarding completion rate > [X]% on first attempt
  [ ] < [Y] support requests per 100 sessions
```

### Step 2: Define Beta Scope

```
WHAT TESTERS WILL TEST
  [ ] Core features: [List key features included in beta]
  [ ] Onboarding flow: complete from install to first value moment
  [ ] Content integration: all content, audio, and assets in place
  [ ] Performance: startup time, scroll smoothness, load times
  [ ] Crash stability: no crash loops or data-loss bugs

WHAT IS OUT OF SCOPE
  [ ] [Feature not yet built]
  [ ] [Experimental feature — testing separately]
  [ ] Specific payment flows (if not yet integrated)
```

### Step 3: Beta Platform Setup

Choose your beta distribution channel first:

| Platform | iOS | Android | Notes |
|---|---|---|---|
| **TestFlight** | ✅ | ❌ | Up to 10,000 testers. Requires App Store Connect. Invite via email or public link. |
| **Google Play Internal Testing** | ❌ | ✅ | Up to 100 testers. Fast (<1 hr review). |
| **Google Play Closed Testing** | ❌ | ✅ | Up to 2,000 testers. Invite via Google Groups or email list. |
| **Firebase App Distribution** | ✅ | ✅ | Cross-platform. Great for internal/closed testing. No app store submission needed. |
| **Diawi / AppCenter** | Optional | Optional | Ad-hoc distribution without stores. Only for small internal groups. |

```
CHOSEN PLATFORM: [TestFlight / Google Play / Firebase / Other]

Setup steps:
  iOS TestFlight:
    [ ] App uploaded to App Store Connect
    [ ] TestFlight build selected
    [ ] Internal testers (team) added and tested
    [ ] External tester group created
    [ ] Beta App Review submitted (if external link)
    [ ] Public link / email invites ready

  Android Play:
    [ ] AAB uploaded to Play Console
    [ ] Internal track or Closed track selected
    [ ] Tester list (email group) configured
    [ ] Testers invited

  Firebase App Distribution:
    [ ] Firebase project configured
    [ ] App uploaded via CLI or CI/CD
    [ ] Tester groups defined (internal / closed)
    [ ] Invitations sent
```

---

## Tester Recruitment

### How Many Testers?

| Tier | Minimum | Target | Notes |
|---|---|---|---|
| Lite | 5 | 10 | Friends, family, colleagues |
| Standard | 20 | 50–100 | Mix of acquaintances and strangers |
| Enterprise | 100 | 200–500 | Formal recruitment with screener survey |

### Tester Profile (Screener Criteria)

Recruit testers who match your **actual target user**. Beta results from the wrong audience are misleading.

```
TARGET TESTER PROFILE — [Project Name]

Must have:
  [ ] [Device type: iPhone 12+ / Android 10+ / etc.]
  [ ] [Age range: 25-45 / Parents of children under 8 / etc.]
  [ ] [Relevant characteristic: uses similar apps / has this habit / etc.]
  [ ] Reliable — will use the app at least [X] days during beta

Would prefer:
  [ ] [Varied device types to broaden coverage]
  [ ] [Mix of tech-savvy and non-technical users]
  [ ] [Users from target geographic market]

Exclude:
  [ ] Your own team (too familiar with the product)
  [ ] People who will confuse UI with their personal taste
  [ ] Users without the correct device OS version
```

---

## Beta Schedule

```
BETA TIMELINE

Week 1: Pre-Beta Preparation
  [-7d]   Final beta build submitted to distribution platform
  [-5d]   Beta testers confirmed (final list)
  [-3d]   Tester onboarding guide sent
  [-1d]   Sanity check: install and run the app on one external device
  [Day 0] Beta launches — invitations sent

Week 2-3: Active Beta Period
  [Day 1]  Track install rates — follow up with non-installers
  [Day 3]  First check-in message to testers ("How's it going? Found anything?")
  [Day 7]  Mid-beta survey sent (use feedback form below)
  [Day 7]  Crash report review — fix P0 crashes and push patch build
  [Day 10] Qualitative check-in calls (3-5 min each, optional)
  [Day 14] Beta closes — final feedback survey sent

Week 3: Analysis & Fix Cycle
  [Day 15] All feedback consolidated
  [Day 16] Issues triaged (P0/P1/P2/Won't Fix)
  [Day 17] P0 and P1 issues fixed and re-tested internally
  [Day 18] Beta 2 patch sent if critical fixes made
  [Day 21] Beta sign-off — proceed to Gate 5
```

---

## Tester Onboarding Guide

Send this to testers before beta day:

```
---
BETA TESTER GUIDE — [Project Name]

Welcome! Thank you for helping us test [App Name] before launch. 
Your feedback shapes the final product.

WHAT TO TEST
  Please use [App Name] like you would in real life:
  - Try to [do the main user job: e.g., "complete a lesson each day"]
  - Explore different parts of the app
  - Try things that "feel wrong" — we want to find problems

WHAT TO REPORT
  Bugs:    Something is broken — crash, error, data lost, feature doesn't work
  UX:      Something confused you — you weren't sure what to do next
  Missing: Something you expected to be there that wasn't
  Copy:    Text that was unclear, wrong, or jarring

HOW TO REPORT
  [Preferred method: Google Form / Email / TestFlight feedback / Slack channel]
  Form link: [URL]
  Email: [beta@yourdomain.com]

For crashes: include what you were doing when it crashed.

DEVICES TO TEST ON (if you have multiple):
  Preferred: [latest device]
  Also test: [older device if possible]

BETA PERIOD: [Start Date] to [End Date]
Questions? Contact: [Name] at [email]

Do NOT share this app publicly — it's not ready yet.
---
```

---

## Feedback Collection

### Crash Tracking

Set up automated crash reporting before beta launch:
- **Firebase Crashlytics** (iOS + Android) — free, real-time crash reports
- **Sentry** — cross-platform, good stack traces
- **Bugsnag** — enterprise-grade, excellent grouping

```
CRASH MONITORING SETUP
  [ ] Crash tool integrated: [Firebase Crashlytics / Sentry / Bugsnag]
  [ ] Test crash verified (code: FirebaseCrashlytics.instance.crash())
  [ ] Crash notifications configured (email/Slack on new crash type)
  [ ] Dashboard access shared with team
  [ ] Symbolication configured (dSYMs uploaded for iOS)
```

### Feedback Form Template

Collect structured feedback via a simple form (Google Forms works fine):

```
BETA FEEDBACK FORM — [Project Name]

1. How often have you used [App Name] during the beta?
   [ ] Daily [ ] 2-3 times [ ] Once [ ] Couldn't get it to work

2. What did you enjoy most about [App Name]?
   [Long text answer]

3. What was most confusing or frustrating?
   [Long text answer]

4. Did you experience any crashes or errors? If yes, please describe:
   [Long text answer]

5. Was there anything you expected the app to do that it didn't?
   [Long text answer]

6. On a scale of 1-10, how likely are you to recommend [App Name] to a friend?
   [1 = Not at all, 10 = Definitely would]
   [Scale: 1 2 3 4 5 6 7 8 9 10]

7. What would most improve [App Name] before launch?
   [Long text answer]

8. Device used: [Open text]
9. OS version: [Open text]
10. Any other feedback: [Open text]
```

---

## Issue Triage & Prioritization

### Priority Matrix

| Priority | Criteria | Target Fix Timeline |
|---|---|---|
| **P0 - Critical** | App crashes, data loss, security issue, core feature broken | Fix before any launch |
| **P1 - High** | Major UX confusion, primary feature degraded, store listing blocker | Fix before Gate 5 |
| **P2 - Medium** | Minor UX issue, non-critical feature, copy error | Fix in first post-launch update |
| **P3 - Low** | Nice-to-have, cosmetic, edge case | Backlog for future release |
| **Won't Fix** | Out of scope, by design, not aligned with product vision | Close with explanation |

### Issue Log

```markdown
## Beta Issue Log — [Project Name]

| #   | Priority | Source       | Description                          | Status    | Fixed In |
|-----|----------|--------------|--------------------------------------|-----------|----------|
| 001 | P0       | Crashlytics  | Crash on settings screen (null ref)  | ✅ Fixed   | v1.0.1   |
| 002 | P1       | Tester x3    | Onboarding step 2 button not visible | 🔄 In fix  |          |
| 003 | P2       | Feedback form| "Save" button label unclear          | 📋 Backlog |          |
| 004 | P3       | Tester       | Would like dark mode                 | 📋 Future  |          |
```

---

## Beta Sign-Off Criteria

```
BETA SIGN-OFF — [Project Name]

Date: [YYYY-MM-DD]
Beta period: [Start] to [End]
Total testers: [N]
Total issues found: [N]

SIGN-OFF CHECKLIST
  [ ] P0 issues resolved: 0 open P0 bugs
  [ ] P1 issues resolved or deferred with PM sign-off
  [ ] Crash-free rate: ___% across last 3 days (target: >99%)
  [ ] Average NPS (feedback Q6): ___ (target: ≥7)
  [ ] Any stores review issues identified and addressed
  [ ] Beta build rebuilt with all fixes and re-tested internally

Decision:
  [ ] ✅ Beta passed — proceed to app store submission
  [ ] 🔄 Beta extended — [reason + new end date]

Sign-off by: [Name]    Date: [YYYY-MM-DD]
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Tester count** | 5-10 (friends) | 20-100 | 100-500+ (formal program) |
| **Beta length** | 3-7 days | 2-3 weeks | 3-6 weeks (phased) |
| **Feedback collection** | Email / conversation | Google Form | Dedicated feedback tool + interviews |
| **Crash reporting** | Crashlytics (basic) | Crashlytics + manual review | Crashlytics + Sentry + weekly triage |
| **Compensation** | None | Gift card recommend | Formal incentive program |
| **Gate 5 required** | No | Yes | Yes |
