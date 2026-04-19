# Stage 1: Stakeholder Discovery & Deep Dives

> **Version:** PDF v1.0.0 | **Kit:** Building Kit (IDE) / Planning Kit (Cloud)
> **Tier:** All (depth varies) | **Duration:** 30 min – 2 hours | **Prerequisite:** Stage 0 complete

---

## Purpose

Most projects fail not because the code is bad, but because critical roles were ignored. A kids' app without a COPPA compliance review gets pulled from the store. A SaaS without a customer success workflow churns users. A game without an asset pipeline ships with placeholder art.

This stage systematically discovers **every person or role** the project depends on — not just developers — and explores each one deeply enough to prevent blind spots.

**At the end of this stage, you will have:**
- A complete stakeholder map with priorities
- Individual deep-dive briefs for each stakeholder
- Parallel work streams organized by role type
- A cross-stream dependency map
- No blind spots about who influences the project's success

---

## Key Principle: ATOMIC Deep Dives

> **Never batch multiple stakeholders into one conversation.**
> Discuss each stakeholder one at a time. Complete one before starting the next.
> Track progress visibly so the user always knows where they stand.

This principle is inspired by McKinsey's MECE (Mutually Exclusive, Collectively Exhaustive) decomposition — each stakeholder is explored independently to prevent gaps and overlaps.

---

## The 5-Step Process

### Step 1: Stakeholder Identification

The AI facilitator brainstorms all potential stakeholders using a category checklist. The user confirms which categories apply.

**Category Checklist:**

```
USERS & CUSTOMERS
□ Primary end users — who directly uses the product?
□ Secondary end users — who benefits indirectly?
□ Paying customers — same as users, or different? (e.g., parents pay, kids use)
□ Admin / power users — anyone needing elevated access?

CONTENT & CREATIVE
□ Content writers — who creates text, copy, educational material?
□ Illustrators / designers — who creates visual assets?
□ Animators — who creates motion/animated content?
□ Voice actors / audio — who creates sound effects, narration, music?
□ Video creators — who produces video content?
□ Translators / localizers — who handles multi-language support?

TECHNICAL
□ Frontend developer(s) — who builds the UI?
□ Backend developer(s) — who builds APIs, data layer?
□ DevOps / infrastructure — who handles deployment, monitoring?
□ QA / testers — who tests? Automated? Manual? Beta users?
□ Security reviewer — who audits for vulnerabilities?
□ Data/analytics — who tracks metrics, A/B tests?

BUSINESS & LEGAL
□ Product owner / PM — who decides priorities?
□ Legal / compliance — who reviews for COPPA, GDPR, HIPAA, accessibility?
□ Business / monetization — who handles payments, pricing, analytics?
□ Marketing / growth — who acquires users?
□ Customer support — who handles user problems post-launch?
□ Domain experts — who has deep knowledge of the subject matter?

EXTERNAL
□ App store reviewers — who approves the app for distribution?
□ API / platform providers — any external service dependencies?
□ Partners / integrations — any B2B relationships?
□ Accessibility reviewers — who ensures inclusive design?
□ Beta testers — who validates before launch?
```

**Facilitator prompts:**
```
"Let's map everyone involved in this project. I'll go through 
categories — tell me if each applies and who fills that role."

"Even if YOU are filling multiple roles (developer + content writer + 
marketer), we should still identify each role separately. The deep 
dive will reveal different requirements for each hat you wear."

"Are there any external stakeholders I haven't mentioned? Investors, 
advisors, platform gatekeepers?"
```

**Output format:**
```markdown
## Identified Stakeholders

| # | Stakeholder | Category | Filled By | Priority |
|---|---|---|---|---|
| 1 | Primary End User (Child) | User | n/a (persona) | MUST |
| 2 | Parent / Guardian | User | n/a (persona) | MUST |
| 3 | Content Writer | Creative | Self | MUST |
| 4 | Illustrator | Creative | Contractor (TBD) | MUST |
| 5 | Legal / COPPA | Business | Self + AI review | MUST |
| 6 | Marketing / ASO | Business | Self | SHOULD |
| 7 | Voice Actor | Creative | Contractor (TBD) | COULD |
| 8 | Beta Testers | External | Friends/family | SHOULD |

Priority: MUST = project fails without this
          SHOULD = significantly better with this
          COULD = nice to have
```

---

### Step 2: Prioritization & Tier-Based Scoping

Not every stakeholder gets a full deep dive. The tier determines depth:

```
LITE TIER:
  Deep dive: 1-2 MUST stakeholders only
  Others: noted but not explored
  Estimated time: 15-20 minutes

STANDARD TIER:
  Deep dive: All MUST + SHOULD stakeholders
  Others: noted with brief 2-3 line summary
  Estimated time: 45-90 minutes

ENTERPRISE TIER:
  Deep dive: ALL identified stakeholders
  RACI matrix: Responsible, Accountable, Consulted, Informed
  Estimated time: 1-2 hours
```

**Enterprise RACI Template:**
```markdown
## RACI Matrix

| Activity | Dev | Content | Legal | Marketing | PM |
|---|---|---|---|---|---|
| Feature decisions | C | I | I | I | A/R |
| Code review | R | - | - | - | I |
| Content creation | I | R | C | I | A |
| Compliance audit | C | C | R | - | A |
| App store listing | I | C | C | R | A |
| Bug fixes | R | - | - | - | I |
| Launch go/no-go | C | C | C | C | R |

R = Responsible | A = Accountable | C = Consulted | I = Informed
```

---

### Step 3: Atomic Deep Dives

For each stakeholder getting a deep dive, the AI facilitator explores these dimensions **one stakeholder at a time:**

**Deep Dive Template:**

```markdown
# Stakeholder Deep Dive: [ROLE NAME]

## Who
- **Role:** [e.g., Content Writer]
- **Filled by:** [e.g., Self / Contractor / Team member]
- **Priority:** [MUST / SHOULD / COULD]

## Needs FROM Project
[What does this stakeholder need the project to provide them?]
- [e.g., Clear content guidelines and templates]
- [e.g., A CMS or structured way to input content]
- [e.g., Review/approval workflow before content goes live]

## Needs FROM This Stakeholder
[What does the project need this stakeholder to deliver?]
- [e.g., 200 vocabulary words with definitions and example sentences]
- [e.g., 15 interactive stories organized by difficulty level]
- [e.g., Content delivered in markdown format by M3 milestone]

## Deliverables & Timeline
| Deliverable | Format | Deadline | Depends On |
|---|---|---|---|
| [Word list v1] | [CSV/Markdown] | [Before Code M3] | [Nothing] |
| [Story scripts] | [Markdown] | [Before Code M4] | [Word list v1] |
| [Review edits] | [Inline] | [1 week after QA] | [Beta test results] |

## Tools & Platform
- [e.g., Google Docs for writing, GitHub for version control]
- [e.g., Figma for visual references]
- [e.g., Shared folder for asset delivery]

## Risks If Neglected
- [e.g., App ships with placeholder content → bad reviews]
- [e.g., Content not age-appropriate → COPPA risk]
- [e.g., No review workflow → errors in published content]

## Integration Points with Code
- [e.g., Content loaded from JSON files in assets/ directory]
- [e.g., Content structure must match data model in lib/models/content.dart]
- [e.g., Content changes require app rebuild (or use remote config?)]

## Open Questions
- [e.g., Should content be bundled or fetched remotely?]
- [e.g., Do we need content versioning?]
```

**Progress Tracking:**

The facilitator displays progress after each deep dive:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STAKEHOLDER DEEP DIVES: [3/6 complete]
  
  ✅ Content Writer        (Session 2)
  ✅ Illustrator            (Session 3)  
  ✅ Parent/Guardian        (Session 4)
  🔵 Legal/COPPA           ← NEXT
  ⬜ Marketing/ASO
  ⬜ Voice Actor

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Facilitator prompts for each dive:**
```
"Let's deep dive into the [Role] stakeholder. I'll ask questions 
across 6 dimensions. Feel free to say 'skip' or 'not sure' for any."

"What does a [Role] need from this project to do their job well?"

"What does the project need delivered by [Role], and by when?"

"What happens if we neglect [Role]? What's the worst case?"

"How does [Role]'s work connect to the codebase? Where does 
their output plug in?"
```

**Deep dive files saved to:** `docs/stakeholders/[role-name].md`

---

### Step 4: Work Stream Creation

Group stakeholder deliverables into parallel tracks. Each stream has its own timeline and milestones independent from (but linked to) the code milestone plan.

**Work Stream Template:**

```markdown
## Work Streams

### CODE Stream (Primary)
Owner: Developer + AI Agent
Milestones: M1 (Skeleton) → M2 → M3 → ... → M[N]
Status: Tracked in docs/progress.md

### CONTENT Stream
Owner: [Who]
| ID | Task | Deadline | Depends On | Status |
|---|---|---|---|---|
| C1 | Word list v1 (200 words) | Before Code M3 | Nothing | ⬜ |
| C2 | Story scripts (15 stories) | Before Code M4 | C1 | ⬜ |
| C3 | Content review | After Code M5 | Beta results | ⬜ |

### ASSET Stream
Owner: [Who]
| ID | Task | Deadline | Depends On | Status |
|---|---|---|---|---|
| A1 | Character illustrations (10) | Before Code M3 | UI Brief | ⬜ |
| A2 | Voice recordings (200 words) | Before Code M4 | C1 (word list) | ⬜ |
| A3 | Background art (5 scenes) | Before Code M3 | UI Brief | ⬜ |

### LEGAL Stream
Owner: [Who]
| ID | Task | Deadline | Depends On | Status |
|---|---|---|---|---|
| L1 | COPPA compliance audit | Before Code M5 | Architecture | ⬜ |
| L2 | Privacy policy draft | Before Launch | L1 | ⬜ |
| L3 | App store compliance | Before Launch | L1 + L2 | ⬜ |

### MARKETING Stream
Owner: [Who]
| ID | Task | Deadline | Depends On | Status |
|---|---|---|---|---|
| K1 | App store listing draft | Before Launch | Screenshots | ⬜ |
| K2 | Launch strategy | Before Launch | Beta results | ⬜ |
```

**Save as:** `docs/work-streams.md`

---

### Step 5: Cross-Stream Dependency Map

Identify where streams depend on each other. These dependencies are CRITICAL — a code milestone can't start if it depends on content that hasn't been delivered.

**Dependency Map Format:**

```markdown
## Cross-Stream Dependencies

### Blocking Dependencies (code can't proceed without this)
| Code Milestone | Depends On | Stream | Status |
|---|---|---|---|
| M3 (Content Integration) | C1 (Word list v1) | CONTENT | ⬜ |
| M3 (Content Integration) | A1 (Character art) | ASSET | ⬜ |
| M4 (Audio Playback) | A2 (Voice recordings) | ASSET | ⬜ |
| M5 (Beta Release) | L1 (COPPA audit) | LEGAL | ⬜ |

### Non-Blocking Dependencies (nice to have, but code CAN proceed)
| Code Milestone | Benefits From | Stream | Status |
|---|---|---|---|
| M2 (UI Shell) | A3 (Background art) | ASSET | ⬜ |
| M6 (Launch) | K1 (Store listing) | MARKETING | ⬜ |

### Dependency Rules for Agents
- Before starting ANY milestone, check this map for blocking deps
- If a blocking dep is ⬜ (not done): STOP → notify human → cannot proceed
- If a non-blocking dep is ⬜: proceed with placeholders, note in progress.md
- Update this map when work stream statuses change
```

**Save as:** appended to `docs/work-streams.md` or kept in `docs/cross-stream-deps.md`

---

## Complete Deliverables

| File | Contents | Save Location |
|---|---|---|
| Stakeholder Map | Identification table + priorities | `docs/stakeholder-map.md` |
| Deep Dive Briefs | One per stakeholder | `docs/stakeholders/[role-name].md` |
| Work Streams | All streams + milestones | `docs/work-streams.md` |
| RACI Matrix | Enterprise only | Included in `docs/stakeholder-map.md` |

**After completing this stage:** proceed to Stage 2 (Interactive Planning).

---

## Save-As-You-Go Checkpoints

If doing this on a cloud platform, save after each sub-step:

```
After Step 1 → Save docs/stakeholder-map.md (identification table)
After each Step 3 dive → Save docs/stakeholders/[name].md
After Step 4 → Save docs/work-streams.md
After Step 5 → Append deps to docs/work-streams.md
```

This protects against session loss. If the cloud session crashes, you don't lose completed deep dives.
