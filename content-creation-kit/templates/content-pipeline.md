# Content Pipeline — Master Tracker

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Type:** Template
>
> **Instructions:** Copy this file to your project's `docs/` folder. Fill in all `[placeholder]` values. Update status fields weekly.

---

## Project: [Project Name]

```
Project ID:   [project-id]
Start date:   [YYYY-MM-DD]
Target launch: [YYYY-MM-DD]
PM / Owner:   [Name]
Last updated:  [YYYY-MM-DD]
```

---

## Content Work Streams

The Content Creation Kit runs alongside the Code stream as parallel tracks. Each stream below maps to the code milestone it must be ready for.

```
CODE MILESTONES
  M1: Scaffold    | M2: Core Feature | M3: Content Integration | M4: Polish

CONTENT STREAM
  C1: Style Guide → C2: Copy Written → C3: Review + QA → C4: Final Delivery

ASSET STREAM
  A1: Art Direction → A2: Illustration → A3: Voice Recording → A4: QA + Handoff

LEGAL STREAM
  L1: Draft Docs → L2: Legal Review → L3: Compliance Sign-off
```

---

## Stream 1: Content Writing

| ID   | Deliverable                     | Owner       | Depends On  | Due        | Status    | Notes |
|------|---------------------------------|-------------|-------------|-----------|-----------|-------|
| C1   | Style Guide — Voice & Tone      | [Writer]    | UI Design ✅ | [Date]    | 📝 Draft  |       |
| C2   | UI Copy — Onboarding            | [Writer]    | UX Flow ✅   | [Date]    | ⬜ Not started |  |
| C3   | UI Copy — Home Screen           | [Writer]    | UX Flow ✅   | [Date]    | ⬜ Not started |  |
| C4   | UI Copy — [Screen Name]         | [Writer]    | [UX Flow]   | [Date]    | ⬜ Not started |  |
| C5   | UI Copy — Error States          | [Writer]    | C2-C4        | [Date]    | ⬜ Not started |  |
| C6   | UI Copy — Empty States          | [Writer]    | C2-C4        | [Date]    | ⬜ Not started |  |
| C7   | Long-form: [Lesson/Story Name]  | [Writer]    | C1 done      | [Date]    | ⬜ Not started |  |
| C8   | Long-form: [Content Piece 2]    | [Writer]    | C1 done      | [Date]    | ⬜ Not started |  |
| C9   | App Store — Title + Subtitle    | [Writer]    | Core feature | [Date]    | ⬜ Not started |  |
| C10  | App Store — Description         | [Writer]    | M4 done      | [Date]    | ⬜ Not started |  |
| C11  | App Store — Keywords            | [Writer]    | C10 done     | [Date]    | ⬜ Not started |  |
| C12  | Push Notifications              | [Writer]    | Feature spec | [Date]    | ⬜ Not started |  |
| C13  | Help / FAQ Content              | [Writer]    | Full feature | [Date]    | ⬜ Not started |  |

**Status Codes:**
- `⬜ Not started` — work has not begun
- `📝 Draft` — first draft written, not yet reviewed
- `👀 In Review` — submitted for review
- `🔄 Revisions` — feedback given, revisions needed
- `✅ Final` — approved, ready for handoff
- `🚫 Blocked` — waiting on external input

---

## Stream 2: Visual Assets (Illustration)

| ID   | Deliverable                     | Owner          | Depends On     | Due     | Status    | Notes |
|------|---------------------------------|----------------|----------------|---------|-----------|-------|
| A1   | Art Direction Brief             | [PM/Designer]  | UI Design ✅    | [Date]  | 📝 Draft  |       |
| A2   | Style Guide — Visual Identity   | [Illustrator]  | A1             | [Date]  | ⬜ Not started |  |
| A3   | App Icon (all sizes)            | [Illustrator]  | A2             | [Date]  | ⬜ Not started |  |
| A4   | Character: [Name] — Full Set    | [Illustrator]  | A2             | [Date]  | ⬜ Not started |  |
| A5   | Background: [Scene Name]        | [Illustrator]  | A2             | [Date]  | ⬜ Not started |  |
| A6   | Background: [Scene Name 2]      | [Illustrator]  | A2             | [Date]  | ⬜ Not started |  |
| A7   | UI Illustrations / Icons        | [Illustrator]  | UI Design ✅    | [Date]  | ⬜ Not started |  |
| A8   | Empty State Artwork             | [Illustrator]  | A4             | [Date]  | ⬜ Not started |  |
| A9   | App Store Screenshots           | [Designer]     | M4 done        | [Date]  | ⬜ Not started |  |
| A10  | Feature Graphic (Android)       | [Designer]     | A3, A4         | [Date]  | ⬜ Not started |  |
| A11  | Social Media Assets             | [Designer]     | Brand approved | [Date]  | ⬜ Not started |  |

---

## Stream 3: Audio

| ID   | Deliverable                     | Owner         | Depends On  | Due     | Status    | Notes |
|------|---------------------------------|---------------|-------------|---------|-----------|-------|
| AU1  | Audio Brief + Script Request    | [PM]          | C1-C8 ✅     | [Date]  | ⬜ Not started |  |
| AU2  | Narration — [Section Name]      | [VA]          | AU1 approved | [Date] | ⬜ Not started |  |
| AU3  | Character: [Name] — All lines   | [VA]          | AU1 approved | [Date] | ⬜ Not started |  |
| AU4  | UI Sound Effects                | [Audio]       | Feature spec | [Date] | ⬜ Not started |  |
| AU5  | Background Music — [Screen]     | [Audio]       | A5/A6 tone   | [Date] | ⬜ Not started |  |
| AU6  | Audio QA + Processing           | [Audio Prod]  | AU2-AU5      | [Date] | ⬜ Not started |  |

---

## Stream 4: Legal & Compliance

| ID   | Deliverable                     | Owner      | Depends On       | Due     | Status    | Notes |
|------|---------------------------------|------------|------------------|---------|-----------|-------|
| L1   | Privacy Policy (Draft)          | [Legal]    | Architecture ✅    | [Date]  | ⬜ Not started |  |
| L2   | Terms & Conditions (Draft)      | [Legal]    | Business model ✅  | [Date]  | ⬜ Not started |  |
| L3   | COPPA Compliance Checklist      | [Legal]    | L1               | [Date]  | ⬜ Not started |  |
| L4   | GDPR Compliance Checklist       | [Legal]    | L1               | [Date]  | ⬜ Not started |  |
| L5   | App Store Privacy Labels        | [Legal]    | All SDKs audited  | [Date]  | ⬜ Not started |  |
| L6   | Accessibility Audit             | [QA/Legal] | M4 done           | [Date]  | ⬜ Not started |  |
| L7   | Compliance Sign-off             | [Legal]    | L1-L6 complete    | [Date]  | ⬜ Not started |  |

---

## Cross-Stream Dependencies

These are the critical handoff points where one stream blocks another. Review this table at every sprint start.

| Code Milestone | Content Blocker | Asset Blocker | Audio Blocker | Legal Blocker |
|---|---|---|---|---|
| **M1 — Scaffold** | — | — | — | L1 draft needed |
| **M2 — Core Feature** | C1 (style) ✅ | A1 (art brief) ✅ | — | — |
| **M3 — Content Integration** | **C2-C6 FINAL** | **A3-A7 DELIVERED** | — | — |
| **M4 — Polish** | C7+ content | A8-A10 | **AU2-AU5 DELIVERED** | L6 audit |
| **Gate 5 (Pre-Release)** | **All content ✅** | **All assets ✅** | **All audio ✅** | **L7 sign-off ✅** |

> ⚠️ **If any item in bold is not ✅ Final by the milestone start, the code milestone may be blocked.** Raise blockers in the weekly content sync at least 1 week before the dependency deadline.

---

## Weekly Content Sync Agenda

Run this meeting weekly (15-30 min). PM/developer + all content leads.

```
WEEKLY CONTENT SYNC — Week [N] — [Date]

1. Status round (5 min)
   Each stream lead: "Done this week: ___ | Blocker: ___"

2. Dependency check (5 min)
   Review the dependency table above — is any upcoming code milestone at risk?

3. Review queue (5 min)
   What needs review? Who is reviewing? What is the turnaround?

4. Handoffs (5 min)
   Any content ready to hand off to developer this week?

5. Next week's targets (5 min)
   One SMART goal per stream for next week.

Notes: [Link to meeting notes]
```

---

## Content Freeze Date

> **Content Freeze:** [YYYY-MM-DD]
>
> After this date, NO new content can be added or changed without going through a Change Request process (see review-workflow.md). Changes after freeze delay the release.

| Stream        | Freeze Date | Owner     | Status |
|---------------|-------------|-----------|--------|
| Copy / Text   | [Date]      | [Writer]  | ⬜     |
| Visual Assets | [Date]      | [Artist]  | ⬜     |
| Audio         | [Date]      | [VA]      | ⬜     |
| Legal Docs    | [Date]      | [Legal]   | ⬜     |
