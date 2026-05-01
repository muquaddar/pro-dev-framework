# Pro Dev Framework: Complete 10-Phase Planning Overview

> **Version:** PDF v1.0.0  
> **Kit:** Planning Kit  
> **Scope:** Stages -1 through 3 (Idea → Product → Launch → Scale)  
> **Coverage:** All 10 planning phases with relationships and dependencies

---

## Executive Summary

The Pro Dev Framework Planning Kit guides product teams through **10 interrelated planning phases**, from raw idea to launch-ready product with operational infrastructure.

```
Stage -1         Stage 0        Stage 1           Stage 2                    Stage 3
Validate Idea → Setup Project → Align Stakeholders → Build Product Plan → Prepare Launch & Scale
     ↓             ↓               ↓                    ↓                        ↓
    (Pre)        (Setup)      (Discovery)        (Product Design)      (Launch & Operations)
   Phase 0       Phase 0       Phase 0            Phases 1-7              Phases 8-11
```

---

## Phase Dependency Map

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  STAGE -1: IDEA VALIDATION                                             │
│  ├─ Feasibility Assessment (p_01)                                      │
│  ├─ Competitive Matrix (p_02)                                          │
│  └─ Idea Validation Brief (p_03)                                       │
│     ↓ (User confirms: GO / PIVOT / KILL)                               │
│                                                                         │
│  STAGE 0: PROJECT SETUP                                                │
│  └─ Project Config (p_04) ← Sets tier, stack, constraints              │
│     ↓ (All future files inherit tier + stack)                          │
│                                                                         │
│  STAGE 1: STAKEHOLDER DISCOVERY                                        │
│  ├─ Stakeholder Map (p_05)                                             │
│  ├─ Stakeholder Deep Dives (p_06_*.md) ← One per stakeholder           │
│  ├─ Work Streams (p_07)                                                │
│  └─ Cross-Stream Dependencies (p_08)                                   │
│     ↓ (User confirms: stakeholder alignment clear)                     │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 2: PRODUCT PLANNING (7 Phases)                           │   │
│  │                                                                 │   │
│  │  Phase 1: DISCOVERY (Requirements & UX Research)               │   │
│  │  ├─ Platform Research (p_09)                                   │   │
│  │  └─ Requirements (p_10)                                        │   │
│  │     ↓ User confirms: Requirements locked                       │   │
│  │                                                                 │   │
│  │  Phase 2: STRATEGY (Tech & Monetization)                      │   │
│  │  ├─ Strategy (p_11)                                            │   │
│  │  └─ Milestone Plan (p_12)                                      │   │
│  │     ↓ User confirms: Tech decisions locked                     │   │
│  │                                                                 │   │
│  │  Phase 3: UX FLOWS (Navigation & User Journey)                │   │
│  │  ├─ UX Flows (p_13)                                            │   │
│  │  ├─ Navigation Flow Diagram (p_14)                             │   │
│  │  ├─ User Journey Diagram (p_15)                                │   │
│  │  └─ State Diagram (p_16)                                       │   │
│  │     ↓ User confirms: Navigation & UX locked                    │   │
│  │                                                                 │   │
│  │  Phase 4: UI DESIGN (Visual Design & Prototypes)              │   │
│  │  ├─ UI Design Brief (p_18)                                     │   │
│  │  └─ Interactive Prototype (p_19)                               │   │
│  │     ↓ User confirms: Visual direction locked                   │   │
│  │                                                                 │   │
│  │  Phase 5: ARCHITECTURE (System Design & Data Model)           │   │
│  │  ├─ Architecture (p_20)                                        │   │
│  │  ├─ Architecture Diagram (p_21)                                │   │
│  │  ├─ Data Model Diagram (p_22)                                  │   │
│  │  └─ Walking Skeleton Spec (p_23)                               │   │
│  │     ↓ User confirms: Architecture & walking skeleton locked    │   │
│  │                                                                 │   │
│  │  Phase 6: COMPLIANCE (Security, Privacy, Accessibility)      │   │
│  │  ├─ Privacy Strategy (p_24)                                    │   │
│  │  ├─ Security Model (p_25)                                      │   │
│  │  ├─ Accessibility Constraints (p_26)                           │   │
│  │  ├─ Compliance Checklist (p_27)                                │   │
│  │  └─ Security Flow Diagram (p_28)                               │   │
│  │     ↓ User confirms: Security & compliance locked              │   │
│  │                                                                 │   │
│  │  Phase 7: PRD SYNTHESIS (Consolidated Product Brief)         │   │
│  │  └─ Product Requirements Document (p_29)                       │   │
│  │     ↓ User confirms: Full PRD signed off                       │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│     ↓ (Product planning complete. Product blueprint ready.)            │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 3: LAUNCH & SCALE PLANNING (4 Phases)                   │   │
│  │                                                                 │   │
│  │  Phase 8: TESTING & QA STRATEGY                                │   │
│  │  ├─ Testing Strategy (p_33)                                    │   │
│  │  ├─ QA Plan (p_34)                                             │   │
│  │  └─ Monitoring & Release Checklist (p_35)                      │   │
│  │     ↓ User confirms: QA plan locked                            │   │
│  │                                                                 │   │
│  │  Phase 9: LAUNCH & GO-TO-MARKET STRATEGY                      │   │
│  │  ├─ GTM Timeline (p_36)                                        │   │
│  │  ├─ Launch Day Plan (p_37)                                     │   │
│  │  └─ Growth & Contingency Plan (p_38)                           │   │
│  │     ↓ User confirms: GTM & launch plan locked                  │   │
│  │                                                                 │   │
│  │  Phase 10: OPERATIONS & TEAM STRUCTURE                          │   │
│  │  ├─ Org Chart & Hiring Plan (p_39)                             │   │
│  │  ├─ Communication Plan (p_40)                                  │   │
│  │  └─ Decision Framework (RACI) (p_41)                           │   │
│  │     ↓ User confirms: Org & operations plan locked              │   │
│  │                                                                 │   │
│  │  Phase 11: POST-LAUNCH ITERATION & FEEDBACK LOOPS              │   │
│  │  ├─ Feedback Loops (p_42)                                      │   │
│  │  ├─ Metrics Dashboard (p_43)                                   │   │
│  │  └─ Version Roadmap (p_44)                                     │   │
│  │     ↓ User confirms: Sustainability plan locked                │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│     ↓ (All planning complete. Ready to handoff to Build phase.)        │
│                                                                         │
│  FINAL HANDOFF PACKAGING                                              │
│  ├─ pdf-manifest.json (metadata for all files)                         │
│  ├─ index.md (file directory + quick reference)                        │
│  └─ AGENT.md (root: condensed project brain for IDE agent)             │
│     ↓                                                                   │
│  → Feed AGENT.md + manifest to IDE agent → BEGIN BUILD PHASE           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Phase Details & Key Decisions

### Stage -1: Idea Validation
**Purpose:** Is this a GO / PIVOT / KILL?

| Phase | Bite Count | Key Decision | Duration |
|-------|-----------|--------------|----------|
| Feasibility | 3 bites | Market opportunity + legal/technical risks | 1-2 days |
| Competitive Matrix | 2 bites | Competitive positioning (Standard+) | 1-2 days |
| Idea Validation | 2 bites | Final GO/PIVOT/KILL decision | 1 day |

**Tier Notes:** Lite skips competitive matrix (N/A stub). Enterprise adds external market validation.

---

### Stage 0: Project Setup
**Purpose:** Define project identity and constraints.

| Phase | Bites | Key Decision | Duration |
|-------|-------|--------------|----------|
| Project Config | 4 bites | Tier, stack, platforms, constraints | 1 day |

**Outcome:** `tier`, `stack`, `target_platforms` inherited by all downstream files.

---

### Stage 1: Stakeholder Discovery
**Purpose:** Align all stakeholders and define work streams.

| Phase | Bites | Key Decision | Duration |
|-------|-------|--------------|----------|
| Stakeholder Map | 2 bites | Identify MUST/SHOULD/COULD stakeholders | 1 day |
| Deep Dives | 7 bites × N | One deep dive per identified stakeholder | 1-2 weeks |
| Work Streams | 3 bites | Define CODE, CONTENT, ASSET, LEGAL, MARKETING streams | 1-2 days |
| Dependencies | 2 bites | Map blocking & non-blocking dependencies | 1 day |

**Outcome:** Clear stakeholder alignment + work stream structure ready for parallel execution.

---

### Stage 2: Product Planning (7 Phases)

#### Phase 1: Discovery
**Key Decision:** What does the user need and why?
- Requirements by user type
- User personas and journeys
- Edge cases and error scenarios
- Success metrics

#### Phase 2: Strategy
**Key Decision:** How do we build this and make money?
- Technology stack final selection
- Monetization strategy
- Milestone breakdown (MVP → v1.0 → v2.0)
- Risk assessment (Standard+)

#### Phase 3: UX Flows
**Key Decision:** How do users navigate the product?
- Screen flow diagrams
- User journey mapping
- Navigation structure
- Accessibility requirements (Standard+)

#### Phase 4: UI Design
**Key Decision:** What does it look like?
- Visual design system
- Component specifications
- Design tokens (colors, fonts, spacing)
- Interactive prototype
- **Tier Note:** Optional for Standard, required for Enterprise. Lite N/A.

#### Phase 5: Architecture
**Key Decision:** How is the system built?
- System architecture (monolith, microservices, serverless)
- Data model and database design
- API contract and data flow
- Walking skeleton specification (implementation road map)

#### Phase 6: Compliance
**Key Decision:** Is this legal and secure?
- Data privacy strategy (GDPR, CCPA, user data handling)
- Security model (auth, encryption, access control)
- Accessibility compliance (WCAG AA minimum)
- Regulatory requirements by jurisdiction

#### Phase 7: PRD Synthesis
**Key Decision:** Is everything consistent?
- Executive summary of product
- Consolidated user stories and requirements
- Appendices: stakeholder feedback, glossary, references

---

### Stage 3: Launch & Scale Planning (4 Phases)

#### Phase 8: Testing & QA Strategy
**Key Decision:** How do we verify quality before launch?
- Testing Strategy (p_33): Test pyramid, coverage targets
- QA Plan (p_34): Resources, timeline
- Monitoring & Release Checklist (p_35): Error tracking, pre-launch verification

#### Phase 9: Launch & Go-to-Market Strategy
**Key Decision:** How do we get users and grow?
- GTM Timeline (p_36): Pre-launch marketing
- Launch Day Plan (p_37): Execution schedule
- Growth & Contingency (p_38): Post-launch growth, crisis plans

#### Phase 10: Operations & Team Structure
**Key Decision:** How do we organize and operate?
- Org Chart & Hiring (p_39): Team evolution, hiring plan
- Communication Plan (p_40): Cadence, async rules
- Decision Framework (p_41): RACI matrix

#### Phase 11: Post-Launch Iteration & Feedback Loops
**Key Decision:** How do we improve and stay sustainable?
- Feedback Loops (p_42): Collection channels, review cadence
- Metrics Dashboard (p_43): KPIs, tracking
- Version Roadmap (p_44): Feature prioritization, tech debt

---

## Timeline & Pacing

### Typical Planning Duration by Tier

**Lite Tier (MVP, tight budget):**
- Stages -1 to 1: 2-4 weeks
- Stage 2: 4-8 weeks (streamlined)
- Stage 3: 2-4 weeks (streamlined)
- **Total:** 8-16 weeks (2-4 months)

**Standard Tier (Growth-ready):**
- Stages -1 to 1: 3-6 weeks
- Stage 2: 8-12 weeks (full)
- Stage 3: 4-6 weeks (full)
- **Total:** 15-24 weeks (3.5-6 months)

**Enterprise Tier (High stakes):**
- Stages -1 to 1: 4-8 weeks (full validation)
- Stage 2: 12-16 weeks (full + board reviews)
- Stage 3: 6-10 weeks (full + governance)
- **Total:** 22-34 weeks (5-8 months)

### Concurrent Execution

Phases can overlap:
- **Phase 1-2 (Discovery & Strategy):** Run sequentially (2 weeks each)
- **Phase 3-4 (UX & UI):** Run concurrent (overlaps 1-2 weeks)
- **Phase 5 (Architecture):** Can start after Phase 2 strategy is locked
- **Phase 6 (Compliance):** Can run parallel with Phase 5
- **Phase 7 (Testing):** Can run parallel with Phase 5 (inform architecture)
- **Phase 8 (Launch GTM):** Runs parallel with Phase 7-9
- **Phase 9 (Operations):** Runs parallel with Phases 5-8
- **Phase 10 (Iteration):** Completed just before launch

---

## Tier Differences Summary

| Aspect | Lite | Standard | Enterprise |
|--------|------|----------|------------|
| **Idea Validation** | Quick (4 of 5 steps) | Full (all steps) | Full + external validation |
| **Stakeholders** | 1-2 MUST only | All MUST + SHOULD | All + RACI matrix |
| **Phase 4 (UI Design)** | Skip (N/A stub) | Optional | Required |
| **Phase 6 (Compliance)** | Core only | Full | Full audit |
| **Phase 7 (Testing)** | 60% coverage, solo dev | 75% coverage, contractor | 85%+ coverage, team |
| **Phase 8 (GTM)** | Organic only | Organic + paid ads | Full-scale PR + events |
| **Phase 9 (Ops)** | Contractors | Small team | Formal org chart |
| **Phase 10 (Iteration)** | Founder-owned | PM-owned | Analyst + quarterly reviews |

---

## Key Files by Purpose

### Planning Methodology
- `01-planning-guide.md` — Master guide (read first)
- `02-idea-validation.md` — Stage -1 process
- `03-environment-setup.md` — Stage 0 process
- `04-stakeholder-discovery.md` — Stage 1 process
- `05-stakeholder-deep-dive.md` — Stage 1 deep dive template

### Phase 1-7 (Product Planning)
- `06-phase-discovery.md` through `12-phase-prd.md` — Detailed phase guides
- `13-output-formats.md` — Exact file format specs and templates

### Stage 3: Launch & Scale Planning (Phases 8-11)
- `15-phase-testing-qa.md` — Testing & QA methodology
- `16-phase-launch-marketing.md` — Launch & GTM methodology
- `17-phase-operations-team.md` — Operations & team methodology
- `18-phase-iteration-feedback.md` — Iteration & feedback methodology

### Reference
- `14-build-handoff-template.md` — AGENT.md generation guide
- `rules.md` — YAML frontmatter and output format rules
- `PHASES-OVERVIEW.md` — **This file**

---

## Next Steps

1. **Choose Your AI Facilitator:** Go to `platform-setup/` and follow setup guide
2. **Start with Stage -1:** Load `01-planning-guide.md` and begin idea validation
3. **Progress Phase by Phase:** Follow the bite protocol for each phase
4. **Save Each File:** Use Save-As-You-Go model (one file at a time)
5. **Complete All 10 Phases:** Don't skip any phase (except tier-specific N/A stubs)
6. **Generate Build Handoff:** Create AGENT.md + manifest.json at the end
7. **Transition to Build Phase:** Use IDE agent to build the product

---

## Questions?

- **Setup issue:** See `platform-setup/claude-setup.md` (or ChatGPT/Gemini guides)
- **Phase detail:** Read the specific phase file (e.g., `06-phase-discovery.md`)
- **Format question:** Check `13-output-formats.md` and `rules.md`
- **Conceptual issue:** Read `01-planning-guide.md` again (often answers meta questions)
