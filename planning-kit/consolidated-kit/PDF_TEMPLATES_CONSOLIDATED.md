# Pro Dev Framework (PDF) — Consolidated Templates

---


# TEMPLATE: stakeholder-map.md

# Stakeholder Map — [PROJECT_NAME]

<!-- Stage: 1 | Date: YYYY-MM-DD | Status: [Draft / Complete] -->
<!-- Total Identified: [N] | Deep Dives Complete: [X/N] -->

---

## Stakeholder Register

<!--
  Fill this table during Stage 1, Step 1 (Identification).
  Priority: MUST = project fails without | SHOULD = significantly better | COULD = nice to have
  Deep Dive: Link to docs/stakeholders/[role-name].md when complete
-->

| # | Stakeholder | Category | Filled By | Priority | Deep Dive | Status |
|---|---|---|---|---|---|---|
| 1 | [e.g., Child (end user)] | User | n/a (persona) | MUST | [Link](stakeholders/child-end-user.md) | ⬜ |
| 2 | [e.g., Parent/Guardian] | User | n/a (persona) | MUST | [Link](stakeholders/parent-guardian.md) | ⬜ |
| 3 | [e.g., Content Writer] | Creative | [Self / Name] | MUST | [Link](stakeholders/content-writer.md) | ⬜ |
| 4 | [e.g., Illustrator] | Creative | [Contractor] | MUST | [Link](stakeholders/illustrator.md) | ⬜ |
| 5 | [e.g., Legal / COPPA] | Business | [Self + AI] | MUST | [Link](stakeholders/legal-coppa.md) | ⬜ |
| 6 | [e.g., Marketing / ASO] | Business | [Self] | SHOULD | [Link](stakeholders/marketing.md) | ⬜ |
| 7 | [e.g., Voice Actor] | Creative | [Contractor] | COULD | [Link](stakeholders/voice-actor.md) | ⬜ |
| 8 | [e.g., Beta Testers] | External | [Friends/family] | SHOULD | [Link](stakeholders/beta-testers.md) | ⬜ |

**Legend:** ⬜ Not started | 🔵 In progress | ✅ Complete | ⏭️ Skipped (Lite tier)

---

## Priority Summary

```
MUST HAVE (project fails without):
  • [Stakeholder 1]
  • [Stakeholder 2]
  • [Stakeholder 3]

SHOULD HAVE (significantly better):
  • [Stakeholder 4]
  • [Stakeholder 5]

COULD HAVE (nice to have):
  • [Stakeholder 6]
```

---

## RACI Matrix (Enterprise Tier Only)

<!--
  R = Responsible (does the work)
  A = Accountable (owns the decision)
  C = Consulted (provides input before)
  I = Informed (told after)
  
  Delete this section for Lite and Standard tiers.
-->

| Activity | Developer | Content | Design | Legal | Marketing | PM |
|---|---|---|---|---|---|---|
| Feature prioritization | C | I | I | I | I | A/R |
| Code implementation | R | - | I | - | - | I |
| Content creation | I | R | C | C | I | A |
| Visual asset creation | I | C | R | - | I | A |
| Compliance audit | C | C | - | R | - | A |
| Testing / QA | R | C | C | - | - | A |
| App store listing | I | C | C | C | R | A |
| Launch decision | C | C | C | C | C | R |
| Post-launch support | R | I | - | I | I | A |

---

## Category Coverage Check

<!--
  Verify no category was accidentally skipped during identification.
  Mark each as ✅ (explored) or N/A (not applicable to this project).
-->

| Category | Explored? | Stakeholders Found |
|---|---|---|
| **Primary End Users** | ⬜ | |
| **Secondary End Users** | ⬜ | |
| **Paying Customers** | ⬜ | |
| **Content Writers** | ⬜ | |
| **Illustrators / Designers** | ⬜ | |
| **Voice / Audio** | ⬜ | |
| **Video** | ⬜ | |
| **Translators** | ⬜ | |
| **Frontend Dev** | ⬜ | |
| **Backend Dev** | ⬜ | |
| **DevOps** | ⬜ | |
| **QA / Testers** | ⬜ | |
| **Security** | ⬜ | |
| **Legal / Compliance** | ⬜ | |
| **Business / Monetization** | ⬜ | |
| **Marketing / Growth** | ⬜ | |
| **Customer Support** | ⬜ | |
| **Domain Experts** | ⬜ | |
| **App Store / Platform** | ⬜ | |
| **External Partners** | ⬜ | |
| **Accessibility** | ⬜ | |
| **Beta Testers** | ⬜ | |

---

## Deep Dive Progress Tracker

<!--
  Updated after each atomic deep dive.
  This section is what the AI facilitator displays during the session.
-->

```
DEEP DIVES: [0/N complete]

⬜ [Stakeholder 1]
⬜ [Stakeholder 2]
⬜ [Stakeholder 3]
⬜ [Stakeholder 4]
⬜ [Stakeholder 5]
⬜ [Stakeholder 6]
```

---

## Notes & Open Questions

<!--
  Capture anything that came up during identification that needs follow-up.
-->

- [ ] [e.g., Need to confirm whether voice actor is in budget]
- [ ] [e.g., Should we add a "Teacher" stakeholder for classroom use?]
- [ ] [e.g., COPPA: do we need a Children's Privacy Officer?]


---

# TEMPLATE: stakeholder-progress.md

# Stakeholder Deep Dive Progress — [PROJECT_NAME]

<!-- 
  This file is kept in memory/ because it tracks SESSION-LEVEL progress.
  The AI facilitator updates this after each deep dive session.
  It persists across sessions and platform switches.
-->

---

## Status

- **Total Identified:** [N]
- **Deep Dives Required:** [N] (based on tier)
- **Completed:** [X/N]
- **Current:** [Stakeholder name or "All complete"]
- **Last Updated:** [YYYY-MM-DD]

---

## Progress

| # | Stakeholder | Priority | Status | Session | Date | File |
|---|---|---|---|---|---|---|
| 1 | [Role] | MUST | ⬜ | — | — | — |
| 2 | [Role] | MUST | ⬜ | — | — | — |
| 3 | [Role] | MUST | ⬜ | — | — | — |
| 4 | [Role] | SHOULD | ⬜ | — | — | — |
| 5 | [Role] | SHOULD | ⬜ | — | — | — |
| 6 | [Role] | COULD | ⬜ | — | — | — |

**Status Key:** ⬜ Not started | 🔵 In progress | ✅ Complete | ⏭️ Skipped

---

## Visual Progress

<!--
  The AI facilitator displays this after each completed deep dive.
  Copy-paste friendly for both cloud and IDE sessions.
-->

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STAKEHOLDER DEEP DIVES: [0/N]

  ⬜ [Stakeholder 1]
  ⬜ [Stakeholder 2]
  ⬜ [Stakeholder 3]
  ⬜ [Stakeholder 4]
  ⬜ [Stakeholder 5]
  ⬜ [Stakeholder 6]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Session Log

<!--
  Brief notes on what was covered in each deep dive session.
  Useful for resuming after a platform switch.
-->

| Session | Date | Platform | Stakeholder | Key Discoveries |
|---|---|---|---|---|
| 1 | [DATE] | [Platform] | Identification (all) | [N] stakeholders found |
| 2 | [DATE] | [Platform] | [Role] | [1-line key finding] |
| 3 | [DATE] | [Platform] | [Role] | [1-line key finding] |

---

## Resumption Guide

<!--
  If you're picking up stakeholder dives on a new platform or after
  a break, read this section to know exactly where you left off.
-->

**Last completed:** [Stakeholder name]  
**Next up:** [Stakeholder name]  
**Remaining:** [N] deep dives  
**Estimated time:** [N × 15-20 min = total]

**To resume, say:**
```
"Let's continue stakeholder deep dives. We completed [X] and 
[Y]. Next is [Z]. Here's their context: [brief from stakeholder-map]."
```


---

# TEMPLATE: work-streams.md

# Work Streams — [PROJECT_NAME]

<!-- Stage: 1 | Date: YYYY-MM-DD | Status: [Draft / Active / Complete] -->

---

## Stream Overview

<!--
  Each stream runs independently with its own milestones.
  The CODE stream is primary; others run in parallel.
  Cross-stream dependencies are tracked at the bottom.
-->

| Stream | Owner | Milestones | Status |
|---|---|---|---|
| 🔨 CODE | Developer + AI Agent | M1 → M[N] | ⬜ Not started |
| 📝 CONTENT | [Owner] | C1 → C[N] | ⬜ Not started |
| 🎨 ASSET | [Owner] | A1 → A[N] | ⬜ Not started |
| ⚖️ LEGAL | [Owner] | L1 → L[N] | ⬜ Not started |
| 📣 MARKETING | [Owner] | K1 → K[N] | ⬜ Not started |

**Legend:** ⬜ Not started | 🔵 In progress | ✅ Complete | ⏸️ Blocked

---

## 🔨 CODE Stream

<!--
  Primary stream. Milestones defined in docs/milestone-plan.md.
  This section is a summary pointer — details live in milestone-plan.md.
-->

**Owner:** Developer + AI Agent
**Tracking:** `docs/progress.md` + `docs/milestone-plan.md`

| Milestone | Name | Effort | Status |
|---|---|---|---|
| M1 | Walking Skeleton | 1 day | ⬜ |
| M2 | [NAME] | [EFFORT] | ⬜ |
| M3 | [NAME] | [EFFORT] | ⬜ |
| M4 | [NAME] | [EFFORT] | ⬜ |

---

## 📝 CONTENT Stream

<!--
  All text content: copy, educational material, stories, word lists,
  localization, metadata, and documentation for end users.
-->

**Owner:** [Name / Self / Contractor]
**Delivery format:** [e.g., Markdown files, CSV, JSON]
**Delivery location:** [e.g., assets/content/ in project repo]

| ID | Task | Deliverable | Deadline | Depends On | Status |
|---|---|---|---|---|---|
| C1 | [e.g., Word list v1] | [200 words in CSV] | [Before M3] | [Nothing] | ⬜ |
| C2 | [e.g., Story scripts] | [15 stories in MD] | [Before M4] | [C1] | ⬜ |
| C3 | [e.g., UI copy/labels] | [strings.json] | [Before M2] | [Nothing] | ⬜ |
| C4 | [e.g., Content review] | [Reviewed content] | [After M5] | [Beta results] | ⬜ |

**Quality Gate:** Content must pass `content-creation-kit/checklists/content-review.md` before integration.

---

## 🎨 ASSET Stream

<!--
  All non-text creative assets: illustrations, icons, animations,
  voice recordings, sound effects, music, video.
-->

**Owner:** [Name / Contractor]
**Delivery format:** [e.g., PNG @2x/3x, SVG, MP3, sprite sheets]
**Delivery location:** [e.g., assets/images/, assets/audio/ in project repo]

| ID | Task | Deliverable | Deadline | Depends On | Status |
|---|---|---|---|---|---|
| A1 | [e.g., Character illustrations] | [10 PNGs @2x] | [Before M3] | [UI Brief] | ⬜ |
| A2 | [e.g., Voice recordings] | [200 MP3 files] | [Before M4] | [C1 word list] | ⬜ |
| A3 | [e.g., Background scenes] | [5 PNGs @2x] | [Before M3] | [UI Brief] | ⬜ |
| A4 | [e.g., App icon] | [1024x1024 PNG] | [Before Launch] | [Nothing] | ⬜ |
| A5 | [e.g., App Store screenshots] | [6 screenshots] | [Before Launch] | [M5 complete] | ⬜ |

**Quality Gate:** Assets must pass `content-creation-kit/checklists/asset-review.md` before integration.

---

## ⚖️ LEGAL Stream

<!--
  Compliance, privacy, accessibility, terms of service,
  and regulatory requirements.
-->

**Owner:** [Name / Self + AI review]
**Tracking:** `content-creation-kit/checklists/compliance-review.md`

| ID | Task | Deliverable | Deadline | Depends On | Status |
|---|---|---|---|---|---|
| L1 | [e.g., COPPA compliance audit] | [Audit report] | [Before M5] | [Architecture] | ⬜ |
| L2 | [e.g., Privacy policy] | [Legal document] | [Before Launch] | [L1] | ⬜ |
| L3 | [e.g., Terms of service] | [Legal document] | [Before Launch] | [Nothing] | ⬜ |
| L4 | [e.g., Accessibility audit] | [WCAG checklist] | [Before Launch] | [M5 UI complete] | ⬜ |
| L5 | [e.g., App store compliance] | [Review checklist] | [Before Launch] | [L1 + L2] | ⬜ |

---

## 📣 MARKETING Stream

<!--
  User acquisition, app store optimization, launch strategy,
  social media, and growth planning.
-->

**Owner:** [Name / Self]

| ID | Task | Deliverable | Deadline | Depends On | Status |
|---|---|---|---|---|---|
| K1 | [e.g., App store listing draft] | [Title, description, keywords] | [Before Launch] | [Screenshots] | ⬜ |
| K2 | [e.g., Launch strategy] | [Channel plan] | [Before Launch] | [Beta results] | ⬜ |
| K3 | [e.g., Social media setup] | [Profiles created] | [Before Launch] | [Nothing] | ⬜ |
| K4 | [e.g., Press/review outreach] | [Media list] | [Before Launch] | [K1] | ⬜ |

---

## Cross-Stream Dependency Map

<!--
  CRITICAL: Agents must check this before starting any milestone.
  Blocking deps = code CANNOT proceed → agent STOPS and notifies human.
  Non-blocking deps = code CAN proceed with placeholders.
-->

### 🔴 Blocking Dependencies

| Code Milestone | Blocked By | Stream | Item | Status |
|---|---|---|---|---|
| [M3] | [Word list v1] | CONTENT | C1 | ⬜ |
| [M3] | [Character illustrations] | ASSET | A1 | ⬜ |
| [M4] | [Voice recordings] | ASSET | A2 | ⬜ |
| [M5] | [COPPA audit] | LEGAL | L1 | ⬜ |

### 🟡 Non-Blocking Dependencies

| Code Milestone | Benefits From | Stream | Item | Status |
|---|---|---|---|---|
| [M2] | [Background art] | ASSET | A3 | ⬜ |
| [Launch] | [Store listing] | MARKETING | K1 | ⬜ |
| [Launch] | [Privacy policy] | LEGAL | L2 | ⬜ |

### Agent Rules for Dependencies

```
BEFORE starting any code milestone:
  1. Check this dependency map
  2. If ANY 🔴 blocking dep is ⬜ or 🔵:
     → STOP
     → Tell the human: "M[N] is blocked by [item] from [stream]"
     → Cannot proceed until human resolves or overrides
  3. If a 🟡 non-blocking dep is ⬜:
     → Proceed with placeholder data
     → Note in docs/progress.md: "Using placeholder for [item]"
     → Set reminder to replace when dep completes
```

---

## Stream Health Dashboard

<!--
  Updated at each session end. Gives a quick visual of where everything stands.
-->

```
STREAM HEALTH: [DATE]

🔨 CODE       ████████░░░░  M3/M6   On track
📝 CONTENT    ██████░░░░░░  C2/C4   On track
🎨 ASSET      ████░░░░░░░░  A1/A5   ⚠️ Behind (voice recordings delayed)
⚖️ LEGAL      ██░░░░░░░░░░  L1/L5   On track
📣 MARKETING  ░░░░░░░░░░░░  K0/K4   Not started (normal — starts at M5)

Blocking Issues: [None / List any]
```


---
