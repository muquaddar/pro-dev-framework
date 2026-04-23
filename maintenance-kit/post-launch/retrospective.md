# Project Retrospective

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 7 — Post-Launch Operations

---

## Overview

A retrospective is a structured reflection on what happened — what worked, what didn't, and what you'd change if you built it again. Done well, it prevents the same mistakes in the next project and compounds your team's effectiveness over time.

**When to run a retrospective:**
- After the first 30 days of launch (recommended for all tiers)
- After each major milestone in a long-running project
- After any incident or significant failure (blameless post-mortem format)
- At the end of the project / before sunsetting

---

## Part 1: Launch Retrospective (30-Day Post-Launch)

Run this 30 days after the app goes live in production.

### Preparation (before the meeting)

```
PREPARATION — 24 HOURS BEFORE

Each team member answers these anonymously in a shared doc or survey:
  1. What is the one thing that went most smoothly during this project?
  2. What is the one thing that caused the most frustration or delay?
  3. What would you do differently if we started over tomorrow?
  4. What's the one piece of knowledge you wish you had at the beginning?
  5. Rate the project experience: 1 (terrible) to 10 (excellent)

PM / Lead prepares:
  [ ] Final metrics summary (compare launch goals vs. actuals)
  [ ] Timeline comparison (planned vs. actual)
  [ ] Issue log summary (how many P0s, P1s, total bugs)
  [ ] 3 key decisions made during the project and their outcomes
```

### Retrospective Agenda (60-90 minutes)

```
RETROSPECTIVE AGENDA

Attendees: All core team members
Format:    In-person or video call — no async for the first retro
Duration:  60 min (small team) / 90 min (larger team)

0:00 — Setting the stage (5 min)
  Facilitator: "The goal of today is to learn, not to blame. Everything we
                discuss stays in this room. Our job is to make the NEXT
                project better."

0:05 — Metrics review (10 min)
  Walk through: Launch goals vs. actuals
  Avoid judgment — just observe the numbers together.

0:15 — The Timeline Walk (15 min)
  Draw a rough timeline on a whiteboard (or shared doc).
  Each team member adds moments: ▲ (positive) or ▼ (negative)
  Briefly discuss each marked event: "What happened here?"

0:30 — Structured Debrief (30 min)
  Use Start / Stop / Continue format:
  
  START (15 min): "What should we START doing that we didn't do this time?"
    → Each person shares 1-2 items
    → Group votes on top 3
  
  STOP (8 min): "What should we STOP doing that hurt us?"
    → Each person shares 1 item
    → Group votes on top 2
  
  CONTINUE (7 min): "What worked so well we must do it again?"
    → Each person shares 1 item
    → Group votes on top 3

1:00 — Action items (10 min)
  From the START / STOP / CONTINUE items, identify 3-5 concrete action items:
    "By [date], [person] will [specific action] so that [outcome]."
  These are MANDATORY carries into the next project — not nice-to-haves.

1:10 — Close (5 min)
  Facilitator: "Thank you. One word to close: each person says one word that
                describes how they feel leaving this retro."
```

---

## Part 2: Retrospective Document Template

This is the record of the retrospective. Save it in `memory/retrospectives/` in your project.

```markdown
# Retrospective — [Project Name] — [YYYY-MM-DD]

**Type:** 30-Day Launch / Milestone / Incident / End-of-Project
**Facilitator:** [Name]
**Attendees:** [Name, Name, Name]
**Duration:** [X] minutes

---

## 1. Metrics Comparison

| Metric                | Goal         | Actual       | Delta  |
|-----------------------|--------------|--------------|--------|
| Planned launch date   | [Date]       | [Date]       | [+/-N days] |
| D1 retention          | >30%         | [X]%         |        |
| D7 retention          | >15%         | [X]%         |        |
| Installs (Month 1)    | [N]          | [N]          |        |
| App store rating      | ≥4.5★        | [X.X]★       |        |
| P0 bugs at launch     | 0            | [N]          |        |
| Total P1 bugs found   | [N]          | [N]          |        |
| Crash-free rate       | >99%         | [X]%         |        |

---

## 2. Timeline Walk Highlights

| Date         | Event                           | Impact |
|--------------|---------------------------------|--------|
| [YYYY-MM-DD] | [Positive moment description]   | ▲      |
| [YYYY-MM-DD] | [Negative moment description]   | ▼      |
| [YYYY-MM-DD] | [Turning point]                 | ▲      |

---

## 3. Start / Stop / Continue

### START — Do this next time

| Item | Votes | Owner | Next Project Action |
|------|-------|-------|---------------------|
| [e.g., Write specs before coding, not during] | 5 | PM | [Will be in phase templates] |
| [e.g., Run beta test for 2 full weeks, not just 1] | 4 | Dev | [Will update beta-test-plan.md] |
| [e.g., Have legal review privacy policy at Phase 3, not Phase 6] | 3 | PM | [Will add to compliance-review.md] |

### STOP — Don't do this again

| Item | Votes | Root Cause | Prevention |
|------|-------|------------|------------|
| [e.g., Starting store listing the day before submission] | 5 | No deadline set | [Add to go-to-market timeline] |
| [e.g., Making scope changes after gate 4] | 3 | No change request process | [Enforce SWITCH protocol in MASTER-GUIDE] |

### CONTINUE — Keep doing this

| Item | Votes | Why It Worked |
|------|-------|---------------|
| [e.g., Weekly sync with all streams] | 5 | [Prevented 2 major blockers being caught late] |
| [e.g., Automated crash alerts in Slack] | 4 | [Fixed a P0 within 4 hours of launch] |

---

## 4. Action Items for Next Project

| # | Action | Owner | By Date | Status |
|---|--------|-------|---------|--------|
| 1 | [Specific, actionable, measurable] | [Name] | [Date] | ⬜ |
| 2 | [e.g., Update beta-test-plan.md with 2-week minimum] | [Name] | [Date] | ⬜ |
| 3 | [e.g., Add legal review to Phase 3 gate criteria] | [Name] | [Date] | ⬜ |
| 4 | [e.g., Create "content freeze" reminder in go-to-market.md] | [Name] | [Date] | ⬜ |
| 5 | [e.g., Set up uptime monitoring BEFORE first beta] | [Name] | [Date] | ⬜ |

---

## 5. Things We'd Do Differently

**If we rebuilt this product from scratch tomorrow, we would:**
1. [Lesson 1]
2. [Lesson 2]
3. [Lesson 3]

---

## 6. Team Feedback

Anonymous ratings shared in closing (average):
  Project experience rating: [X.X] / 10

One-word close (each person's word):
  [Person]: "[word]"
  [Person]: "[word]"
  [Person]: "[word]"

---

## 7. Framework Improvements

Items to feed back into the Pro Dev Framework itself:

| File to Update | Update Needed |
|----------------|---------------|
| [e.g., beta-test-plan.md] | [Add minimum 2-week beta requirement] |
| [e.g., compliance-final.md] | [Add SDK audit step earlier in cycle] |
| [e.g., MASTER-GUIDE.md] | [Clarify gate 4 criteria for content stream] |

**Retrospective signed off by:** [Facilitator name] — [Date]
```

---

## Part 3: Incident Post-Mortem

Use this format (instead of the standard retrospective) for any **significant production incident** — major crash, data loss, security breach, store removal, or outage.

The post-mortem is **blameless** — systems and processes failed, not individuals.

```markdown
# Post-Mortem — [Incident Title] — [YYYY-MM-DD]

**Severity:** P0 / P1 / P2
**Duration:** [HH:MM] — from detection to resolution
**Users impacted:** [N users / X% of DAU]
**Written by:** [Name]  |  **Reviewed by:** [Name]

---

## Timeline of Events

| Time (UTC) | Event |
|------------|-------|
| [HH:MM]    | Alert received / First user report |
| [HH:MM]    | On-call / team notified |
| [HH:MM]    | Root cause identified |
| [HH:MM]    | Fix deployed |
| [HH:MM]    | Incident resolved |

---

## What Happened (Factual Description)

[2-4 sentences describing what happened from the user's perspective, then the technical cause]

---

## Root Cause

[The underlying technical or process cause. Must be a system/process, not a person.]

---

## Impact

- Users affected: [N] ([X]% of active users during the window)
- Features impacted: [List]
- Data affected: [None / Temporary loss / Permanent loss]
- Revenue impact: [None / $X estimated]

---

## What Went Well

- [e.g., Alert fired within 5 minutes — no manual detection needed]
- [e.g., Rollback was possible and completed in under 10 minutes]

---

## What Went Poorly

- [e.g., No runbook existed for this failure mode — response was ad hoc]
- [e.g., Staging environment didn't reproduce the issue]

---

## Action Items (Prevent Recurrence)

| # | Action | Owner | Due | Status |
|---|--------|-------|-----|--------|
| 1 | [e.g., Add integration test for null case in settings] | [Dev] | [Date] | ⬜ |
| 2 | [e.g., Add alert for >2% crash rate in first 2 hours] | [Dev] | [Date] | ⬜ |
| 3 | [e.g., Create staging environment that mirrors production] | [Dev] | [Date] | ⬜ |

---

**Post-mortem complete:** [Date]  |  **Action items reviewed by:** [PM Name]
```

---

## Retrospective Schedule Template

```
RETROSPECTIVE CALENDAR — [Project Name]

Post-Launch Retros:
  Day 30:   30-Day Launch Retrospective (see Part 1)
  Day 90:   Quarterly check-in (abbreviated — 30 min, metrics + backlog only)
  Day 180:  Mid-year retrospective (full format)
  Day 365:  Annual retrospective + Gate 7 Continue/Sunset decision

Milestone Retros (if applicable):
  After major feature release (>3 weeks of work)
  After any P0 incident

File each retrospective in:
  memory/retrospectives/retro-[YYYY-MM-DD]-[type].md
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **30-Day retro** | Optional | Recommended | Required |
| **Post-mortem** | After P0 only | After P0/P1 | After any incident |
| **Attendees** | Solo (written reflection) | Full team | Full team + stakeholders |
| **Duration** | 30 min written | 60 min | 90 min |
| **Framework feedback loop** | Skip | Capture key lessons | Formal process improvement cycle |
| **Archiving** | Not needed | `memory/retrospectives/` | Centralized knowledge base |
