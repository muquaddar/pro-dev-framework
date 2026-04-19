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
