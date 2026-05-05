# Pro Dev Framework (PDF) — Consolidated Knowledge Base

> **Version:** 1.0.0
> **Consolidated Date:** 2026-05-03

---



<!-- START_OF_FILE: 01-planning-guide.md -->

# FILE: 01-planning-guide.md

# Planning Guide — Overview

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Purpose:** Master guide for the planning phase (Stages -1 through 2)

---

## What Is This?

This guide explains how the planning phase works. It is the **first file the cloud AI reads** when set up as a planning facilitator. It tells the AI:

1. What the planning phase produces
2. The stage sequence and what happens at each
3. How to guide the user through each stage
4. The Save-As-You-Go output model
5. How to hand off to the building phase

**You (the AI) are acting as a Planning Facilitator.** Your job is to guide a human through structured project planning, one stage at a time, producing concrete deliverables at each step.

---

## The Planning Phase

Planning covers **Stages -1 through 3** of the Pro Dev Framework:

```
Stage -1: Idea Exploration & Validation
  └── Is this idea worth building? Go / Pivot / Kill

Stage 0: Environment & Project Setup
  └── What tier? What stack? What constraints?

Stage 1: Stakeholder Discovery & Deep Dives
  └── Who is involved? What do they need? Work streams.

Stage 2: Product Planning (7 Phases)
  └── Discovery → Strategy → UX → UI → Architecture → Security → PRD Synthesis

Stage 2.5: Launch & Scale Planning (4 Phases)
  └── Testing & QA → Launch & GTM → Operations & Team → Iteration & Feedback
```

Each stage builds on the previous one. You cannot skip stages (except Phase 4: UI Design, which is optional for non-visual projects at Standard tier).

---

## Your Role as Facilitator

You are NOT a passive document generator. You are an **active consultant** who:

```
✅ DO:
  • Ask probing questions — don't accept vague answers
  • Challenge assumptions — "Why do you think that?"
  • Offer alternatives — "Have you considered X?"
  • Propose concrete options — not open-ended "what do you want?"
  • Track progress visibly — show what's done, what's next
  • Remind about save points — "Let's save this before moving on"
  • Flag risks early — "This could be a problem because..."
  • Stay in scope — don't jump ahead to building

❌ DON'T:
  • Generate code — that's the building phase
  • Make decisions for the user — propose, then let them choose
  • Dump everything at once — one stage, one step at a time
  • Skip the hypothesis — even "obvious" ideas need validation
  • Rush stakeholder dives — one at a time, thoroughly
  • Forget to save — remind the user after every deliverable
```

---

## The 4-Sub-Step Loop

Every planning phase follows this interaction pattern:

```
(a) AI PROPOSES
    You present your analysis, options, or initial draft.
    Be specific — show real options, not abstract categories.
    
    Example: "Based on your requirements, here are 3 architecture 
    options: A) Monolith with SQLite, B) BaaS with Supabase, 
    C) Full custom with Express + PostgreSQL. Here's why I'd 
    recommend B..."

(b) HUMAN REVIEWS
    The user reads, asks questions, pushes back, or accepts.
    
    Your job: Answer questions, clarify tradeoffs, defend 
    recommendations or adjust based on valid concerns.

(c) AI REFINES
    Incorporate feedback. Dig deeper where the user asked.
    Resolve any open questions from step (b).
    
    Example: "Good point about offline support. Let me revise 
    option B to include local SQLite cache + Supabase sync..."

(d) HUMAN CONFIRMS
    User explicitly approves. You output the deliverable.
    
    You say: "Great — here's the final [document name]. Please 
    save this as [exact filename] in your project's [folder]."
```

**Do not skip steps.** Even if the user says "just do it," walk them through the loop so they understand and own every decision.

---

## Stage Sequence

**NOTE:** The Planning Kit now follows the **44-File Protocol**, including both Product Planning Phases (1-7) and Launch & Scale Phases (8-11).

### Stage -1: Idea Exploration & Validation

**Methodology file:** `02-idea-validation.md`

```
Steps:
  0. Idea Discovery — if user has no idea, search for trending opportunities
  1. Hypothesis Formation — "I believe [users] have [problem]..."
  2. Problem Validation — is the problem real and painful?
  3. Solution Validation — is THIS solution the right approach?
  4. Feasibility Assessment — can it actually be built?
  5. Competitive Landscape — what exists already? (Standard+)
  6. Go / No-Go Decision — GO, PIVOT, or KILL

Deliverables:
  → docs/idea-validation-brief.md
  → docs/feasibility-assessment.md
  → docs/competitive-matrix.md (Standard+ only)
```

**Facilitator behavior:** Be a skeptical-but-constructive advisor. Kill weak ideas early — it saves weeks.

---

### Stage 0: Environment & Project Setup

**Methodology file:** `03-environment-setup.md`

```
Steps:
  1. Tier Selection — Lite / Standard / Enterprise
  2. Technology Stack — frontend, backend, data, infrastructure
  3. Project Identity — name, audience, purpose, tone
  4. Constraints & Resources — budget, timeline, scope boundaries

Deliverables:
  → docs/project-config.md
```

**Facilitator behavior:** Recommend a tier based on the project description. Propose a stack, don't ask the user to design one from scratch.

---

### Stage 1: Stakeholder Discovery & Deep Dives

**Methodology file:** `04-stakeholder-discovery.md`
**Deep dive template:** `05-stakeholder-deep-dive.md`

```
Steps:
  1. Stakeholder Identification — checklist of 25+ categories
  2. Prioritization — MUST / SHOULD / COULD
  3. Atomic Deep Dives — one stakeholder at a time, 7 dimensions
  4. Work Stream Creation — CODE, CONTENT, ASSET, LEGAL, MARKETING
  5. Cross-Stream Dependencies — blocking vs non-blocking

Deliverables:
  → docs/stakeholder-map.md (from template)
  → docs/stakeholders/[name].md (one per deep dive)
  → docs/work-streams.md (from template)

Save-As-You-Go:
  → Save stakeholder-map.md after identification
  → Save each [name].md after each deep dive
  → Save work-streams.md after stream creation
```

**Facilitator behavior:** Never batch multiple stakeholders. Show progress after each dive. Remind user to save after each.

---

### Stage 2: Interactive Planning (7 Phases)

**Methodology files:** `06-phase-discovery.md` through `11-phase-compliance.md`

```
Phase 1: Discovery (all tiers)
  → Requirements, personas, user stories, edge cases
  → Deliverable: docs/requirements.md

Phase 2: Strategy (all tiers)
  → Tech decisions, monetization, milestone breakdown
  → Deliverables: docs/strategy.md, docs/milestone-plan.md

Phase 3: UX Flows (Standard+)
  → Screen flows, navigation, user journeys
  → Deliverable: docs/ux-flows.md

Phase 4: UI Design (Standard+, optional)
  → Visual style, component specs, asset briefs
  → Deliverable: docs/ui-design-brief.md

Phase 5: Architecture (all tiers)
  → System design, data model, walking skeleton spec
  → Deliverables: docs/architecture.md, docs/walking-skeleton-spec.md

Phase 6: Security & Compliance (Standard+)
  → Auth, data protection, regulatory requirements
  → Deliverable: docs/compliance-checklist.md

Phase 7: PRD Synthesis (all tiers)
  → Consolidate Phases 1-6 into a single stakeholder-readable PRD
  → Deliverable: docs/prd.md
```

**Facilitator behavior:** Use the 4-sub-step loop for each phase. After each phase, remind the user to save. Show phase progress.

---

### Stage 2.5: Launch & Scale Planning (4 Phases)

**Methodology files:** `15-phase-testing-qa.md` through `18-phase-iteration-feedback.md`

```
Phase 8: Testing & QA Strategy (all tiers)
  → Test pyramid, coverage targets, QA timeline, monitoring, release checklist
  → Deliverables: docs/testing-strategy.md, docs/qa-plan.md, docs/monitoring-setup.md, docs/release-checklist.md

Phase 9: Launch & Go-to-Market (all tiers)
  → Pre-launch marketing timeline, launch day execution, post-launch growth, contingencies
  → Deliverables: docs/gtm-timeline.md, docs/launch-day-plan.md, docs/post-launch-growth.md, docs/contingency-plan.md

Phase 10: Operations & Team Structure (all tiers)
  → Org chart, hiring timeline, communication plan, decision-making framework, documentation standards
  → Deliverables: docs/org-chart.md, docs/hiring-plan.md, docs/communication-plan.md, docs/decision-making-framework.md

Phase 11: Post-Launch Iteration & Feedback (all tiers)
  → Feedback loops, metrics dashboard, version roadmap, technical debt management
  → Deliverables: docs/feedback-loops.md, docs/metrics-dashboard.md, docs/version-roadmap.md, docs/technical-debt-plan.md
```

**Facilitator behavior:** Continue the 4-sub-step loop. These phases shift focus from product design to operational execution. Ensure user understands these are launch-readiness checks, not just nice-to-have planning.

---

## Planning Phase Expansion

The original PDF v1.0.0 covered Phases 1-7 (Product Planning). These new phases extend the framework to cover:

- **Phase 8:** Quality assurance before launch
- **Phase 9:** Market entry and growth strategy
- **Phase 10:** Organizational structure and team operations
- **Phase 11:** Continuous improvement and sustainability

These phases are **not optional**. They should be completed before or concurrent with the Build phase to ensure a launch-ready, operationally sound product.

---

## Save-As-You-Go Model

The cloud AI guides the user to **save each deliverable immediately after it's confirmed.** This prevents session loss from destroying hours of planning.

**How it works:**

```
After each deliverable is confirmed, the AI says:

"✅ [DOCUMENT NAME] is ready. Please save it now:

📁 File: docs/[filename].md
📋 Copy the content below and save it in your project's docs/ folder.

[CONTENT BLOCK]

Once saved, say 'saved' and we'll continue to [next step]."
```

**The user is responsible for saving.** The AI cannot write files on cloud platforms. The AI MUST:
- Always provide the exact filename and path
- Always provide the complete content in a code block
- Always wait for confirmation before proceeding
- Always summarize what's been saved so far

**Save checkpoint display:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  PLANNING PROGRESS & SAVED FILES

  Stage -1: Idea Validation
    ✅ `p_01_feasibility-assessment.md`  SAVED
    ✅ `p_03_idea-validation-brief.md`    SAVED

  Stage 0: Environment
    ✅ `p_04_project-config.md`           SAVED

  Stage 1: Stakeholders
    ✅ `p_05_stakeholder-map.md`          SAVED
    ✅ `p_06_product-owner.md`            SAVED
    ✅ `p_06_lead-dev.md`                 SAVED
    🔵 `p_07_work-streams.md`             IN PROGRESS
    ⬜ `p_08_cross-stream-deps.md`        PENDING

  Stage 2: Planning Phases
    ⬜ Phase 1-6                       NOT STARTED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Tier-Based Phase Selection

Not all tiers do all phases:

| Phase | Lite | Standard | Enterprise |
|---|---|---|---|
| Stage -1: Idea Validation | Quick (Steps 1-4, 6) | Full (all steps) | Full + external validation |
| Stage 0: Environment | All 4 steps | All 4 steps | All 4 + RACI setup |
| Stage 1: Stakeholders | 1-2 MUST dives | All MUST + SHOULD | All + RACI matrix |
| Phase 1: Discovery | Core requirements | Full requirements + personas | Full + edge cases |
| Phase 2: Strategy | Stack + 2-3 milestones | Full + monetization | Full + risk analysis |
| Phase 3: UX Flows | Skip | Full | Full + accessibility review |
| Phase 4: UI Design | Skip | Optional | Full |
| Phase 5: Architecture | Core only | Full | Full + ADR log started |
| Phase 6: Security | Skip | Core compliance | Full audit |
| Phase 7: PRD Synthesis | 1-page brief | Full PRD (2-3 pages) | Full PRD + appendices |

---

## Build Handoff

After all planning is complete, the facilitator generates the **Build Handoff Package**:

**Methodology file:** `14-build-handoff-template.md`

```
The Build Handoff Package includes:

1. AGENT.md — The project brain (filled-in template)
   Contains: Framework Digest, Current State, Planning Package Index,
   Architecture Summary, Code Rules, Skill Pointers

2. Harness Adapter Shims — CLAUDE.md, AGENTS.md, etc.
   Points the IDE agent to AGENT.md

3. Activation Prompt — Paste into IDE agent to start building
   Contains: Project summary, what docs exist, instruction to 
   validate the planning package

4. Summary of all saved files and their locations
```

The AI outputs each piece with exact filenames and content, following the save-as-you-go model.

---

## Knowledge Base File Index

These files contain the detailed methodology for each stage and phase. The AI reads them on-demand as the user progresses:

### Core Planning Guide & Pre-Phase
| File | Stage | When to Read |
|---|---|---|
| `01-planning-guide.md` | — | **This file.** Read first, always. |
| `02-idea-validation.md` | -1 | When starting idea validation |
| `03-environment-setup.md` | 0 | When starting environment setup |
| `04-stakeholder-discovery.md` | 1 | When starting stakeholder work |
| `05-stakeholder-deep-dive.md` | 1 | When doing individual deep dives |

### Stage 2: Product Planning Phases (1-7)
| File | Phase | When to Read |
|---|---|---|
| `06-phase-discovery.md` | 1 | When starting Phase 1 (Discovery) |
| `07-phase-strategy.md` | 2 | When starting Phase 2 (Strategy) |
| `08-phase-ux.md` | 3 | When starting Phase 3 (UX Flows) |
| `09-phase-ui.md` | 4 | When starting Phase 4 (UI Design) |
| `10-phase-architecture.md` | 5 | When starting Phase 5 (Architecture) |
| `11-phase-compliance.md` | 6 | When starting Phase 6 (Compliance) |
| `12-phase-prd.md` | 7 (Synthesis) | When starting Phase 7 (PRD Synthesis) |

### Stage 3: Launch & Scale Phases (7-10)
| File | Phase | When to Read |
|---|---|---|
| `15-phase-testing-qa.md` | 8 | When starting Phase 8 (Testing & QA) |
| `16-phase-launch-marketing.md` | 9 | When starting Phase 9 (Launch & GTM) |
| `17-phase-operations-team.md` | 10 | When starting Phase 10 (Operations & Team) |
| `18-phase-iteration-feedback.md` | 11 | When starting Phase 11 (Iteration & Feedback) |

### Reference & Handoff
| File | Purpose | When to Read |
|---|---|---|
| `13-output-formats.md` | All | Reference for exact output templates |
| `14-build-handoff-template.md` | End | When generating the build handoff |


<!-- END_OF_FILE: 01-planning-guide.md -->

---


<!-- START_OF_FILE: 02-idea-validation.md -->

# FILE: 02-idea-validation.md

# Stage -1: Idea Exploration & Validation

> **Version:** PDF v1.0.0 | **Kit:** Building Kit (IDE) / Planning Kit (Cloud)
> **Tier:** All | **Duration:** 30 min – 2 hours | **Output:** Go / Pivot / Kill

---

## Purpose

Every project begins as a hypothesis, not a certainty. This stage prevents you from spending weeks building something nobody wants — or that can't feasibly be built.

The stage follows a **hypothesis-driven** approach (McKinsey methodology): form a clear hypothesis, stress-test it from multiple angles, then make a binary decision.

**At the end of this stage, you will have:**
- A validated (or invalidated) project hypothesis
- A clear assessment of feasibility
- A market/competitive landscape (Standard+ only)
- A firm Go / Pivot / Kill decision

---

## The Process

### Step 0: Idea Discovery (if you don't have an idea yet)

> **Skip this step** if you already have a project idea. Jump directly to Step 1.

Not everyone starts with a clear idea. If you know your **domain** (e.g., "education", "fitness", "finance") or your **skills** (e.g., "I know Flutter", "I'm good at data visualization") but don't know what to build — this step helps you discover trending opportunities.

**The AI facilitator will:**

```
(a) ASK ABOUT YOU
    - "What domains interest you?" (education, health, gaming, SaaS, etc.)
    - "What skills do you have?" (languages, frameworks, design, content)
    - "Who do you want to build for?" (kids, devs, small businesses, etc.)
    - "Any constraints?" (budget, timeline, solo vs team, platform preference)

(b) SEARCH FOR TRENDING OPPORTUNITIES
    Using web search, analyze:
    - Trending app categories on Product Hunt, App Store, Google Play
    - Rising topics on Reddit, Hacker News, IndieHackers
    - Gaps identified in recent app store reviews (high complaints, low solutions)
    - Emerging tech trends creating new possibilities (AI, AR, voice, etc.)
    - Underserved niches in the user's chosen domain

(c) PRESENT CURATED IDEAS (3-5 opportunities)
    For each opportunity:
    ┌──────────────────────────────────────────────┐
    │  💡 OPPORTUNITY: [Idea Name]                  │
    │                                              │
    │  Domain:   [e.g., Kids Education]             │
    │  Problem:  [What gap this fills]              │
    │  Audience: [Who would use it]                 │
    │  Why now:  [Market trend supporting this]     │
    │  Revenue:  [Potential monetization]            │
    │  Effort:   [Low / Medium / High]              │
    │  Match:    [How it fits YOUR skills]           │
    │                                              │
    │  Signal strength: ████████░░ 8/10             │
    └──────────────────────────────────────────────┘

(d) EXPLORE & PICK
    User picks 1-2 ideas that resonate.
    AI digs deeper into the selected idea(s):
    - Who are the existing competitors?
    - What are users complaining about in reviews?
    - What's the minimum viable version?
    - What makes YOUR version different?
    
    User commits to ONE idea → proceeds to Step 1.
```

**Research Prompt (for Cloud AI with web search):**
```
Search for trending opportunities in the [DOMAIN] space:

1. What are the top 5 trending app/product categories in [DOMAIN] 
   on Product Hunt, App Store, and Google Play in the last 3 months?
2. What are the most common complaints in [DOMAIN] app reviews?
   (Look for gaps where users want something that doesn't exist)
3. What emerging technologies are creating new possibilities in [DOMAIN]?
4. What are solo developers and indie hackers successfully building in [DOMAIN]?
5. Are there any underserved audiences in [DOMAIN] that are being ignored?

Present each opportunity with: problem, audience, why now, 
estimated effort, and potential revenue model.
```

**Research Prompt (for IDE agents without web search):**
```
Based on your training data knowledge, suggest 5 trending project 
opportunities in the [DOMAIN] space that would be feasible for a 
[solo developer / small team] with skills in [SKILLS].

For each, describe:
- The problem it solves
- Target audience
- Why this is timely
- Estimated effort (weekend / weeks / months)
- How similar products have monetized
- What would make a new entrant competitive

Note: These suggestions are based on training data, not live search.
For live market validation, use the External Validation Prompt in Step 6
with a web-search-enabled AI (ChatGPT, Gemini, or Perplexity).
```

**Output (save if desired):**
```markdown
## Idea Discovery — [DOMAIN]

### Opportunities Explored
1. [Idea A] — Signal: [N/10] — [1-line summary]
2. [Idea B] — Signal: [N/10] — [1-line summary]  
3. [Idea C] — Signal: [N/10] — [1-line summary]

### Selected Idea
**[Idea Name]:** [2-3 sentence description]
**Why this one:** [User's reasoning]

→ Proceeding to Step 1: Hypothesis Formation
```

---

### Step 1: Hypothesis Formation

Frame the idea as a testable hypothesis. This forces clarity.

**Template:**
```
I believe that [TARGET USERS]
have a problem with [SPECIFIC PROBLEM],
and [PROPOSED SOLUTION]
will solve it because [KEY REASON/INSIGHT].

Success looks like: [MEASURABLE OUTCOME]
Timeframe: [WHEN COULD THIS BE VALIDATED]
```

**Examples:**

```
GOOD:
"I believe parents of toddlers (ages 2-5) struggle to find
ad-free, offline educational apps. A vocabulary learning game
using interactive stories will solve this because parents want
screen time that is genuinely educational. Success: 1,000 downloads
in first month."

BAD:
"I want to build a kids app."
(No target user, no problem, no solution, no success metric)
```

**Facilitator prompts (for AI guiding the user):**
```
- "Who specifically has this problem? Can you describe them?"
- "How do they solve this today? What's painful about that?"
- "Why would YOUR solution be better than what exists?"
- "What would make you confident this is worth building?"
- "How would you know in 1 month if this is working?"
```

---

### Step 2: Problem Validation

Stress-test whether the problem is real, painful, and growing.

**Validation Questions:**

| Question | What You're Testing |
|---|---|
| Does this problem actually exist? | Not just assumed — evidence-based |
| How painful is it? (1-10) | Pain ≥7 = strong signal, ≤4 = weak |
| Who experiences it most? | Narrow the target audience |
| How do people solve it today? | Existing alternatives = competitors |
| Is the problem growing or shrinking? | Market timing |
| Would people pay to solve it? | Monetization viability |
| Can you reach these people? | Distribution feasibility |

**Evidence sources (best to worst):**
1. 🥇 Direct user interviews / surveys (highest confidence)
2. 🥈 App store reviews of competitors (real user complaints)
3. 🥉 Forum/Reddit/community discussions (organic demand signals)
4. 🏅 Market research reports (professional, but expensive)
5. ⚠️ Your own assumption (lowest confidence — flag as risk)

**Output format:**
```markdown
## Problem Validation Summary

**Problem Statement:** [One sentence]
**Evidence Level:** [Strong / Moderate / Weak / Assumption]
**Pain Score:** [1-10]
**Target Audience Size:** [Estimate]
**Growing or Shrinking:** [Growing / Stable / Shrinking]
**Key Evidence:**
1. [Source: finding]
2. [Source: finding]
3. [Source: finding]

**Verdict:** [Problem is real / Needs more evidence / Problem is weak]
```

---

### Step 3: Solution Validation

Now test whether YOUR specific solution is the right approach.

**Validation Questions:**

| Question | What You're Testing |
|---|---|
| Why this approach vs. alternatives? | Differentiation |
| What's the unfair advantage? | Moat / defensibility |
| What's the minimum viable version? | Scope control |
| What's the biggest technical risk? | Feasibility |
| What would make users choose this over existing solutions? | Value proposition |
| What would make users LEAVE this for something else? | Retention risk |

**Competitive Positioning (fill in):**
```
My solution is the ONLY [type of product]
that [key differentiator]
for [target audience]
who need [core need].

Unlike [competitor/alternative], we [key advantage].
```

**Output format:**
```markdown
## Solution Validation Summary

**Proposed Solution:** [One sentence]
**Differentiator:** [What makes this unique]
**Minimum Viable Version:** [Smallest useful version]
**Biggest Risk:** [What could kill this]
**Value Proposition:** [Why users would choose this]

**Verdict:** [Solution is strong / Needs refinement / Wrong approach]
```

---

### Step 4: Feasibility Assessment

Can this actually be built with available resources?

**Feasibility Dimensions:**

```
TECHNICAL FEASIBILITY
□ Can this be built with known technology?
□ Are there technical unknowns that could block progress?
□ Does this require specialized expertise?
□ What's the estimated development time?
□ Are there dependencies on third-party services?

RESOURCE FEASIBILITY
□ Budget available vs. estimated cost?
□ Team/skills available vs. required?
□ Timeline available vs. estimated?
□ Can this be built incrementally (MVP first)?

LEGAL FEASIBILITY
□ Any regulatory requirements? (COPPA, GDPR, HIPAA, etc.)
□ Any licensing or IP concerns?
□ Any content moderation requirements?
□ Any age-gating or parental consent requirements?

MARKET TIMING
□ Is the market ready for this?
□ Are competitors already establishing dominance?
□ Is there a window of opportunity?
□ Any upcoming platform changes that affect this? (API deprecations, policy changes)
```

**Output format:**
```markdown
## Feasibility Assessment

| Dimension | Score (1-5) | Notes |
|---|---|---|
| Technical | [N] | [Key consideration] |
| Resource | [N] | [Key constraint] |
| Legal | [N] | [Key requirement] |
| Market Timing | [N] | [Key factor] |

**Overall Feasibility:** [HIGH / MEDIUM / LOW]
**Blockers:** [List any showstoppers]
**Mitigations:** [How to address blockers]
```

**Save as:** `p_01_feasibility-assessment.md`

---

### Step 5: Competitive Landscape (Standard + Enterprise only)

Map the existing market. Lite tier can skip this.

**Competitor Matrix Template:**

```markdown
## Competitive Matrix

| Feature | Your Product | Competitor A | Competitor B | Competitor C |
|---|---|---|---|---|
| Core problem solved | | | | |
| Target audience | | | | |
| Pricing | | | | |
| Platform | | | | |
| Offline support | | | | |
| Ad-free | | | | |
| [Key Feature 1] | | | | |
| [Key Feature 2] | | | | |
| [Key Feature 3] | | | | |

## Gap Analysis
- **Gaps you fill:** [What competitors miss that you provide]
- **Gaps they fill:** [What competitors do that you don't — accept or plan to address]
- **Your moat:** [What's hard for them to copy]

## Competitive Strategy
- [ ] Direct competition (better product, same market)
- [ ] Niche focus (underserved segment)
- [ ] Blue ocean (new market category)
- [ ] Platform play (ecosystem, not just product)
```

**Save as:** `p_02_competitive-matrix.md`

---

### Step 6: Go / No-Go Decision

All evidence is in. Time for a clear decision.

**Decision Framework:**

```
✅ GO — Proceed to Stage 0
  All of:
  □ Problem is real (evidence ≥ Moderate)
  □ Solution is differentiated
  □ Feasibility is MEDIUM or HIGH
  □ No unresolvable blockers
  □ You're excited about building this

🔄 PIVOT — Problem is real, solution needs rethinking
  Any of:
  □ Problem is strong, but solution is weak
  □ Feasibility is LOW due to solvable issues
  □ Competitor analysis reveals a better angle
  □ Target audience needs narrowing

  Action: Return to Step 3 with new solution hypothesis.

❌ KILL — Don't build this
  Any of:
  □ Problem is weak (evidence ≤ Weak, pain ≤ 4)
  □ Feasibility is LOW with unresolvable blockers
  □ Market is saturated with no clear differentiator
  □ Legal/regulatory barriers are prohibitive
  □ You're not excited about this (life's too short)

  Action: Archive the hypothesis. Move to next idea.
```

**Decision Record:**
```markdown
## Go / No-Go Decision

**Date:** [YYYY-MM-DD]
**Decision:** [GO / PIVOT / KILL]
**Confidence:** [HIGH / MEDIUM / LOW]

**Rationale:**
- [Reason 1]
- [Reason 2]
- [Reason 3]

**Conditions (if GO):**
- [Any conditions attached to the GO decision]

**Next Step:** [Stage 0: Environment & Project Setup]
```

---

## External Validation Prompt

If you want a second opinion from a different AI model, paste this prompt along with your completed hypothesis, problem validation, and solution validation:

```
I'm considering building a product and want an honest, critical assessment.
Here is my analysis so far:

[PASTE YOUR HYPOTHESIS + PROBLEM VALIDATION + SOLUTION VALIDATION]

Please act as a skeptical but constructive business advisor:

1. What are the 3 strongest reasons this could succeed?
2. What are the 3 biggest risks that could kill it?
3. What assumptions am I making that I haven't validated?
4. Is my target audience specific enough, or too broad?
5. Is my competitive advantage real, or wishful thinking?
6. If you had to bet $10,000 of your own money on this, would you? Why?
7. What is the ONE thing I should validate before writing any code?
8. If I proceed, what should the first milestone look like?
```

This prompt is intentionally aggressive. A strong idea will survive the scrutiny. A weak idea will reveal its flaws — saving you weeks of wasted effort.

---

## Complete Deliverable

After completing all 6 steps, save the combined output:

**File:** `p_03_idea-validation-brief.md`

**Contents:**
```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 0
phase_name: "Idea Validation"
status: "confirmed"
tier: "all"
decision: "GO"                          # GO | PIVOT | KILL
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Idea Validation Brief — [PROJECT_NAME]

## Hypothesis
[From Step 1]

## Problem Validation
[From Step 2]

## Solution Validation
[From Step 3]

## Feasibility Assessment
[From Step 4 — or link to docs/feasibility-assessment.md]

## Competitive Landscape
[From Step 5 — or link to docs/competitive-matrix.md]
[Lite tier: "Skipped (Lite tier)"]

## Decision
[From Step 6]

## External Validation
[From External Validation Prompt — or "Not performed"]
```


<!-- END_OF_FILE: 02-idea-validation.md -->

---


<!-- START_OF_FILE: 03-environment-setup.md -->

# FILE: 03-environment-setup.md

# Stage 0: Environment & Project Setup

> **Version:** PDF v1.0.0 | **Kit:** Building Kit (IDE) / Planning Kit (Cloud)
> **Tier:** All | **Duration:** 15–30 min | **Prerequisite:** Stage -1 Go decision

---

## Purpose

Now that the idea is validated, establish the foundation for the project. This stage defines **what kind of project this is**, which determines how much framework machinery applies, what tools are used, and how many gates are required.

**At the end of this stage, you will have:**
- A project tier (Micro / Lite / Standard / Enterprise)
- A defined technology stack
- A clear project identity
- Resource and constraint boundaries
- A `p_04_project-config.md` file capturing all decisions

---

## The 4-Step Process

### Step 1: Tier Selection

The tier determines how much framework overhead applies. Choose honestly — over-engineering a weekend hack is as bad as under-engineering a production product.

**Decision Guide:**

```
ASK THESE QUESTIONS (Diagnostic Bite):

1. What is the scope of the build?
   □ Single script / bot / CLI utility   → Micro
   □ Simple MVP with one core loop      → Lite
   □ Full application with many features → Standard
   □ Complex ecosystem / Multi-tenant    → Enterprise

2. What is the expected development timeline?
   □ A weekend (1-2 days)               → Micro
   □ 1-2 weeks                          → Lite
   □ 2-6 weeks                          → Standard
   □ Months / ongoing                   → Enterprise

3. Who are the stakeholders?
   □ Just the developer                 → Micro
   □ Developer + Beta users             → Lite
   □ Developer + Business Owner + Users → Standard
   □ Multiple teams + Legal + Security  → Enterprise

4. Are there critical compliance needs?
   □ None                               → Micro or Lite
   □ Basic privacy (GDPR)               → Lite or Standard
   □ High-stakes (HIPAA, Fintech, COPPA) → Standard or Enterprise
```

**Tier Comparison:**

| Aspect | Micro | Lite | Standard | Enterprise |
|---|---|---|---|---|
| **Timeline** | 1-2 days | 1-2 weeks | 2-6 weeks | Months |
| **Milestones** | 1 | 2-3 | 4-8 | 8-15 |
| **Human Gates** | Gate 1 only | Go/No-Go + Gate 1 | + Gates 2, 4, 5 | All 7 |
| **Planning Phases** | 1, 5 only | 1, 2, 5 only | All, Phase 4 optional | All required |
| **Stakeholder Dives** | 0 | 1-2 key roles | All identified | All + RACI |
| **Work Streams** | Code only | Code only | Code + 1-2 | All identified |
| **TDD** | No | No | Recommended (60%) | Mandatory (80%) |
| **Content Kit** | Skip | Skip | Recommended | Required |
| **Maintenance Kit** | Skip | Skip | Core only | Full |
| **Session Memory** | Skip | Optional | Recommended | Mandatory |
| **ADR Log** | Skip | Optional | Recommended | Mandatory |
| **Quality Scorecard** | Skip | Skip | Per-milestone | Per-milestone + aggregate |

**Facilitator prompts:**
```
- "Based on what you've described, this sounds like a [Standard] tier project. 
   Does that feel right, or do you see it differently?"
- "You mentioned COPPA compliance — that typically requires Standard tier 
   at minimum. Want to go Standard or Enterprise?"
- "This is a weekend hack — I'd recommend Lite tier. We'll skip content kit,
   maintenance kit, and most gates to keep things fast."
```

---

### Step 2: Technology Stack Definition

Define the technical environment. The AI facilitator should propose a stack based on the project requirements from Stage -1, then let the user confirm or adjust.

**Stack Decision Template:**

```markdown
## Technology Stack

### Frontend
- **Framework:** [e.g., Flutter / React + Next.js / Vue / SwiftUI]
- **Language:** [e.g., Dart / TypeScript / Swift]
- **State Management:** [e.g., Riverpod / Zustand / Pinia]
- **UI Library:** [e.g., Material 3 / shadcn/ui / custom]
- **Routing:** [e.g., go_router / Next.js App Router]

### Backend
- **Runtime:** [e.g., Node.js / Python / Go / serverless]
- **Framework:** [e.g., Express / FastAPI / Gin / none (BaaS)]
- **API Style:** [e.g., REST / GraphQL / tRPC / RPC]

### Data
- **Database:** [e.g., Supabase / Firebase / PostgreSQL / SQLite]
- **ORM/Client:** [e.g., Prisma / Drizzle / raw SQL]
- **Cache:** [e.g., Redis / in-memory / none]
- **File Storage:** [e.g., S3 / Supabase Storage / local]

### Infrastructure
- **Hosting:** [e.g., Vercel / AWS / GCP / self-hosted]
- **CI/CD:** [e.g., GitHub Actions / GitLab CI / none]
- **Monitoring:** [e.g., Sentry / Datadog / simple logging]
- **CDN:** [e.g., Cloudflare / Vercel Edge / none]

### Development
- **IDE:** [e.g., VS Code / Android Studio / Xcode]
- **Version Control:** [e.g., Git + GitHub / GitLab]
- **Package Manager:** [e.g., npm / pnpm / pub]
- **Linting:** [e.g., ESLint / dart analyze / Ruff]
- **Formatting:** [e.g., Prettier / dart format / Black]
- **Testing:** [e.g., Jest / flutter_test / pytest]

### Third-Party Services
- [e.g., Auth0 / Stripe / SendGrid / Algolia]
```

**Facilitator prompts:**
```
- "For a kids' vocabulary app targeting offline use, I'd suggest Flutter 
   (cross-platform, offline-first) + Hive or SQLite for local data. 
   Does that align with your experience?"
- "Do you have a preference for the backend, or should I recommend 
   based on your requirements?"
- "You mentioned a tight budget — serverless (Supabase free tier) 
   would keep costs at $0 during development."
```

**Stack Rule Templates:**

After selecting a stack, the corresponding rule template from `building-kit/rule-templates/` applies:
- `web-app.md` — React/Next.js/Vue projects
- `flutter.md` — Flutter/Dart projects
- `python.md` — Python/FastAPI/Django projects
- `windows-desktop.md` — .NET/WPF/WinUI projects
- `unity.md` — Unity/C# game projects

---

### Step 3: Project Identity

Define who this project is for and what it does — in concrete, actionable terms.

**Identity Template:**

```markdown
## Project Identity

**Name:** [PROJECT_NAME]
**One-Liner:** [What it does in one sentence]
**Elevator Pitch:** [2-3 sentences explaining value proposition]

### Target Audience
- **Primary:** [Main user group — be specific]
- **Secondary:** [Supporting user group, if any]
- **Anti-Audience:** [Who is this explicitly NOT for]

### Core Purpose
- **Problem Solved:** [From Stage -1 Problem Validation]
- **Key Differentiator:** [From Stage -1 Solution Validation]
- **Success Metric:** [From Stage -1 Hypothesis]

### Tone & Personality
- **Brand Voice:** [e.g., Playful + educational, Professional + minimal]
- **Visual Style:** [e.g., Colorful neo-brutalist, Clean material design]
- **Content Tone:** [e.g., Encouraging, never condescending]
```

**Facilitator prompts:**
```
- "What should I call this project? Even a codename works."
- "In one sentence — what does this project DO?"
- "Who is this explicitly NOT for? Defining the anti-audience 
   prevents feature creep."
- "What should the experience FEEL like? Playful? Professional? 
   Calm? Exciting?"
```

---

### Step 4: Constraints & Resources

Map what you're working with — and what you're NOT working with.

**Constraints Template:**

```markdown
## Constraints & Resources

### Budget
- **Development Budget:** [e.g., $0 (free tiers only) / $500 / unlimited]
- **Monthly Running Cost:** [e.g., max $20/month / no limit]
- **Paid Services:** [List any paid tools/services approved]

### Timeline
- **Target Launch:** [Date or relative: "4 weeks from now"]
- **Hard Deadlines:** [Any immovable dates — app store review, event, etc.]
- **Working Schedule:** [e.g., evenings only / full-time / weekends]

### Team
- **Builder:** [e.g., Solo + AI agent / 2-person team]
- **Content:** [e.g., Self / contracted illustrator / content team]
- **Review:** [e.g., Self / peer / professional QA]

### Technical Constraints
- **Must support:** [e.g., offline mode, iOS + Android, < 50MB]
- **Must avoid:** [e.g., no ads, no tracking, no user accounts for children]
- **Must comply with:** [e.g., COPPA, GDPR-K, WCAG 2.1 AA]

### Scope Boundaries
- **In scope for v1.0:** [3-5 core features]
- **Explicitly out of scope:** [Features saved for later versions]
- **Stretch goals:** [Nice-to-have if time permits]
```

**Facilitator prompts:**
```
- "What's your budget for development tools and hosting?"
- "What's a realistic timeline? When do you want v1.0 live?"
- "What features are DEFINITELY in v1.0? And what can wait?"
- "Are there any regulatory requirements I should know about?"
```

---

## Deliverable

Combine all four steps into a single config file:

**File:** `p_04_project-config.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 0
phase_name: "Environment Setup"
status: "confirmed"
tier: "standard"                         # micro | lite | standard | enterprise
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Project Configuration — [PROJECT_NAME]

## Tier
[Micro / Lite / Standard / Enterprise]
Rationale: [Why this tier was chosen]

## Technology Stack
[From Step 2 — full stack definition]

## Project Identity
[From Step 3 — name, audience, purpose, tone]

## Constraints & Resources
[From Step 4 — budget, timeline, team, scope]

## Framework Settings (derived from tier)
- Planning Phases: [Which phases apply]
- Human Gates: [Which gates are active]
- TDD: [Yes/No, coverage target]
- Work Streams: [Which streams are active]
- Content Kit: [Required / Recommended / Skip]
- Maintenance Kit: [Full / Core / Skip]
- Session Memory: [Skip / Mandatory / Recommended / Optional]
- ADR Log: [Skip / Mandatory / Recommended / Optional]

## Next Step
→ Stage 1: Stakeholder Discovery & Deep Dives
```

### Micro Tier Preset
```
Planning Phases:       1 (Discovery), 5 (Architecture)
Human Gates:           Gate 1
TDD:                   No
Work Streams:          Code only
Content Kit:           Skip
Maintenance Kit:       Skip
Session Memory:        Skip
ADR Log:               Skip
Drift Detection:       None
Quality Scorecard:     Skip
Milestones:            1
```

---

## Tier Quick Configuration

For fast reference, here are the pre-set framework settings per tier:

### Lite Tier Preset
```
Planning Phases:       1 (Discovery), 2 (Strategy), 5 (Architecture)
Human Gates:           Go/No-Go, Gate 1
TDD:                   No
Work Streams:          Code only
Content Kit:           Skip
Maintenance Kit:       Skip
Session Memory:        Optional
ADR Log:               Optional
Drift Detection:       Every 5 tasks (relaxed)
Quality Scorecard:     Skip
Milestones:            2-3
```

### Standard Tier Preset
```
Planning Phases:       All 6 (Phase 4 optional if non-visual)
Human Gates:           Go/No-Go, Gates 1, 2, 4, 5
TDD:                   Recommended (60% coverage)
Work Streams:          Code + 1-2 non-code
Content Kit:           Recommended
Maintenance Kit:       Core (beta test + basic launch)
Session Memory:        Recommended
ADR Log:               Recommended
Drift Detection:       Every 3 tasks (standard)
Quality Scorecard:     Per-milestone
Milestones:            4-8
```

### Enterprise Tier Preset
```
Planning Phases:       All 6, all mandatory
Human Gates:           All 7
TDD:                   Mandatory (80% coverage)
Work Streams:          All identified
Content Kit:           Required
Maintenance Kit:       Full
Session Memory:        Mandatory
ADR Log:               Mandatory
Drift Detection:       Every 3 tasks (strict)
Quality Scorecard:     Per-milestone + aggregate
Milestones:            8-15
```


<!-- END_OF_FILE: 03-environment-setup.md -->

---


<!-- START_OF_FILE: 04-stakeholder-discovery.md -->

# FILE: 04-stakeholder-discovery.md

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

**Save as:** `p_08_cross-stream-deps.md`

---

## Complete Deliverables

| File | Contents | Save Location |
|---|---|---|
| Stakeholder Map | Identification table + priorities | `p_05_stakeholder-map.md` |
| Deep Dive Briefs | One per stakeholder | `p_06_[stakeholder-role].md` |
| Work Streams | All streams + milestones | `p_07_work-streams.md` |
| RACI Matrix | Enterprise only | Included in `p_05_stakeholder-map.md` |

**After completing this stage:** proceed to Stage 2 (Interactive Planning).

---

## Save-As-You-Go Checkpoints

If doing this on a cloud platform, save after each sub-step:

```
After Step 1 → Save `p_05_stakeholder-map.md` (identification table)
After each Step 3 dive → Save `p_06_[stakeholder-role].md`
After Step 4 → Save `p_07_work-streams.md`
After Step 5 → Save `p_08_cross-stream-deps.md`
```

This protects against session loss. If the cloud session crashes, you don't lose completed deep dives.


<!-- END_OF_FILE: 04-stakeholder-discovery.md -->

---


<!-- START_OF_FILE: 05-stakeholder-deep-dive.md -->

# FILE: 05-stakeholder-deep-dive.md

# Stakeholder Deep Dive — Template & Methodology

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Used by:** Cloud AI facilitator during Stage 1, Step 3
> **Frequency:** One deep dive per stakeholder, one at a time

---

## Purpose

This file teaches the AI facilitator how to conduct a single stakeholder deep dive. It is loaded when the facilitator begins Step 3 of Stage 1 (after identification and prioritization are complete).

**Key principle:** Each stakeholder is explored in its own conversation turn. Never combine two stakeholders in one session.

---

## Deep Dive Process

### Opening

Start each deep dive with context and framing:

```
"Let's deep dive into the [ROLE] stakeholder. 

I'll explore 7 dimensions to make sure we understand everything 
this role needs and everything the project needs from them.

Feel free to say 'skip' or 'not sure yet' for any question — 
we can come back to it later.

Let's begin."
```

### The 7 Dimensions

Explore each dimension in order. Adapt questions to the specific stakeholder role.

---

#### Dimension 1: Role Definition

**Goal:** Understand exactly who this is and how they relate to the project.

```
Questions:
- Who fills this role? (You, a contractor, a team member, a persona?)
- Is this a single person or a group?
- How much time can they dedicate to the project?
- What is their expertise level in this domain?
- Have they worked on similar projects before?
```

**Output:**
```markdown
## Who
- **Role:** [Role name]
- **Filled by:** [Person/team/contractor/self/persona]
- **Availability:** [Hours per week / as-needed / full-time]
- **Expertise:** [Novice / Intermediate / Expert]
- **Priority:** [MUST / SHOULD / COULD]
```

---

#### Dimension 2: Needs FROM the Project

**Goal:** What does this stakeholder need the project to give them so they can do their job?

```
Questions:
- What information do they need to get started?
- What tools or access do they need?
- What format should things be delivered to them in?
- What decisions need to be made before they can begin?
- Do they need examples, templates, or reference material?
```

**Examples by role type:**

| Role | Typical Needs |
|---|---|
| Content Writer | Style guide, word list structure, content templates, approved vocabulary |
| Illustrator | Art brief, color palette, size specifications, character descriptions |
| Voice Actor | Script, pronunciation guide, tone direction, recording specs |
| Legal/Compliance | Architecture doc, data flow diagram, privacy details, target markets |
| Marketing | Screenshots, feature list, target audience profile, launch timeline |
| Beta Tester | Build access, feedback form, known issues list, test scenarios |

**Output:**
```markdown
## Needs FROM Project
- [Need 1 with specifics]
- [Need 2 with specifics]
- [Need 3 with specifics]
```

---

#### Dimension 3: Needs FROM This Stakeholder

**Goal:** What concrete deliverables does the project need from this role?

```
Questions:
- What exact outputs does this role produce?
- In what format? (Files, documents, assets, reviews)
- What quantity? (10 illustrations, 200 words, 1 audit report)
- What quality standard? (Draft / reviewed / final)
- Any specific naming conventions or file structures?
```

**Output:**
```markdown
## Needs FROM This Stakeholder
- [Deliverable 1]: [quantity] in [format], [quality level]
- [Deliverable 2]: [quantity] in [format], [quality level]
- [Deliverable 3]: [quantity] in [format], [quality level]
```

---

#### Dimension 4: Timeline & Dependencies

**Goal:** When does each deliverable need to be ready, and what does it depend on?

```
Questions:
- When is the earliest this work can start?
- What needs to happen before they can begin? (Blocker awareness)
- When does the CODE stream need their deliverables?
- Are there intermediate checkpoints? (Draft → Review → Final)
- What's the lead time? (How long between "go" and "delivered"?)
```

**Output:**
```markdown
## Deliverables & Timeline

| Deliverable | Format | Deadline | Depends On | Lead Time |
|---|---|---|---|---|
| [Item 1] | [Format] | [Before Code M?] | [Dependency] | [N days/weeks] |
| [Item 2] | [Format] | [Before Code M?] | [Dependency] | [N days/weeks] |
| [Item 3] | [Format] | [After event] | [Dependency] | [N days/weeks] |
```

---

#### Dimension 5: Tools & Communication

**Goal:** How will this stakeholder work and communicate?

```
Questions:
- What tools do they use? (Figma, Google Docs, Pro Tools, etc.)
- Where will they deliver finished work? (Git repo, shared folder, email?)
- How do you communicate? (Slack, email, meetings, async?)
- How often should you check in? (Daily, weekly, per-milestone?)
- Do they need access to the code repo? (Read-only? Specific folders?)
```

**Output:**
```markdown
## Tools & Communication
- **Primary tool:** [e.g., Figma for design, Google Docs for writing]
- **Delivery method:** [e.g., Push to assets/ branch, upload to shared folder]
- **Communication:** [e.g., Weekly email check-in, Slack channel]
- **Check-in frequency:** [e.g., After each deliverable batch]
- **Repo access:** [e.g., Read-only on main, write on content/ branch]
```

---

#### Dimension 6: Risks & What If

**Goal:** What happens if this role is neglected, delayed, or done poorly?

```
Questions:
- What's the worst-case scenario if this role is ignored?
- What happens if their deliverables are late?
- What's the quality risk? What does "bad" look like?
- Is there a backup plan? (Can you do it yourself? Use AI? Skip?)
- How will you know if their work is good enough? (Quality criteria)
```

**Output:**
```markdown
## Risks If Neglected
- [Risk 1: consequence]
- [Risk 2: consequence]
- [Risk 3: consequence]

## Quality Criteria
- [How to tell if the work is "good enough"]
- [Specific acceptance criteria]

## Backup Plan
- [What to do if this role can't deliver]
```

---

#### Dimension 7: Integration Points

**Goal:** How does this stakeholder's work connect to the codebase?

```
Questions:
- Where in the codebase does their output plug in?
- What data format does the code expect? (JSON, CSV, PNG @2x, MP3?)
- Will their content change frequently or is it fixed at launch?
- Do content changes require a code rebuild, or hot-swap via config?
- Are there naming conventions the code expects?
- Does the data model need to accommodate their output structure?
```

**Output:**
```markdown
## Integration Points
- **Code location:** [e.g., assets/content/, lib/data/]
- **Expected format:** [e.g., JSON matching ContentModel schema]
- **Change frequency:** [e.g., Fixed at launch / Updated monthly]
- **Update mechanism:** [e.g., Rebuild required / Remote config]
- **Naming convention:** [e.g., snake_case, category_item_variant.png]
```

---

## Closing the Deep Dive

After all 7 dimensions, wrap up:

```
"That covers all 7 dimensions for [ROLE]. Here's the summary:

[Display completed deep dive brief]

✅ Please save this as: docs/stakeholders/[role-name].md

[Update and display progress tracker]

Ready for the next stakeholder? Next up: [NEXT ROLE]."
```

---

## Complete Output Template

The final deep dive output combines all 7 dimensions:

```markdown
# Stakeholder Deep Dive: [ROLE NAME]

<!-- Deep dive completed: YYYY-MM-DD | Session: [N] -->

## Who
- **Role:** [Role name]
- **Filled by:** [Person/team/contractor/self]
- **Availability:** [Hours/week]
- **Expertise:** [Level]
- **Priority:** [MUST/SHOULD/COULD]

## Needs FROM Project
- [Need 1]
- [Need 2]

## Needs FROM This Stakeholder
- [Deliverable 1]: [quantity] in [format]
- [Deliverable 2]: [quantity] in [format]

## Deliverables & Timeline
| Deliverable | Format | Deadline | Depends On | Lead Time |
|---|---|---|---|---|
| [Item] | [Format] | [Deadline] | [Dep] | [Time] |

## Tools & Communication
- **Primary tool:** [Tool]
- **Delivery method:** [Method]
- **Communication:** [Channel]
- **Check-in frequency:** [Frequency]

## Risks If Neglected
- [Risk 1]
- [Risk 2]

## Quality Criteria
- [Criterion 1]
- [Criterion 2]

## Integration Points
- **Code location:** [Path]
- **Expected format:** [Format]
- **Update mechanism:** [Mechanism]

## Open Questions
- [Any unresolved questions from this deep dive]
```

**Save as:** `docs/stakeholders/[role-name-lowercase-hyphenated].md`


<!-- END_OF_FILE: 05-stakeholder-deep-dive.md -->

---

