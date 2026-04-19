# Phase 1: Discovery — Requirements & User Understanding

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Stage:** 2 (Interactive Planning) | **Phase:** 1 of 6
> **Tier:** All | **Duration:** 45 min – 2 hours
> **Prerequisite:** Stage 1 (Stakeholder Discovery) complete

---

## Purpose

Discovery is the **divergent** phase — cast a wide net on what the product could do, who it serves, and what success looks like. Later phases will converge and narrow.

This phase is broken into **5 focused sessions (bites)** so the AI gives deep, comprehensive responses instead of shallow overviews. Each bite is a complete conversation turn with one focused goal.

**At the end of this phase, you will have:**
- Real user pain points gathered from platform research
- User personas grounded in actual user behavior
- Functional and non-functional requirements categorized by priority
- User stories with acceptance criteria
- Edge cases and error scenarios
- A clear scope boundary (in/out for v1.0)

---

## Phase Structure: 5 Bites

```
BITE 1: Platform Research          (15-30 min)
  AI researches real user pain points across multiple platforms
  Output: Research findings document

BITE 2: Personas & User Profiles   (10-15 min)
  Informed by research, craft data-driven personas
  Output: 2-4 personas with scenarios

BITE 3: Requirements Deep Dive     (15-20 min)
  MoSCoW requirements, broken into sub-categories
  Output: Functional + non-functional requirements

BITE 4: User Stories & Edge Cases  (10-15 min)
  Convert top requirements into stories with edge cases
  Output: Stories with acceptance criteria

BITE 5: Scope Lock                 (5-10 min)
  Define v1.0 boundary, explicitly exclude items
  Output: Scope boundary document
```

Each bite follows the 4-sub-step loop: **AI Proposes → Human Reviews → AI Refines → Human Confirms → SAVE**.

---

## Bite 1: Platform Research

> **Goal:** Ground the discovery in REAL user pain points, not assumptions.
> **Duration:** 15-30 min | **This is the most important bite.**

The AI conducts structured research across multiple platforms before forming any opinions about requirements. This ensures the product addresses real problems.

### Research Sources (search in this order)

```
1. APP STORE / PLAY STORE REVIEWS (Highest value)
   Search for: top 5-10 competitors in this category
   Focus on: 1-3 star reviews (pain points)
   Extract: What users hate, what's missing, what broke

2. REDDIT / FORUMS
   Search for: subreddits related to the domain
   Focus on: "I wish there was..." and "Why doesn't [app] do..."
   Extract: Unmet needs, frustrations, feature requests

3. PRODUCT HUNT / ALTERNATIVES.TO
   Search for: recently launched products in this space
   Focus on: Comments, upvotes, criticism
   Extract: What resonated, what was missing, market appetite

4. TWITTER/X / SOCIAL MEDIA
   Search for: complaints about existing solutions
   Focus on: Viral frustration threads, influencer reviews
   Extract: Emotional pain points, dealbreakers

5. INDUSTRY BLOGS / REVIEWS
   Search for: "[category] app comparison 2025/2026"
   Focus on: Professional reviews highlighting gaps
   Extract: Expert-identified weaknesses in current market

6. Q&A PLATFORMS (Stack Overflow, Quora)
   Search for: "how to [problem this product solves]"
   Focus on: Frequency of question, quality of existing answers
   Extract: How people currently DIY the solution
```

### Research Prompts for Cloud AI

**Prompt 1: Competitor Review Mining**
```
Search for the top 5-10 apps/products in the [CATEGORY] space 
on [App Store / Product Hunt / relevant platform].

For each competitor:
1. Name and rating
2. Top 3 praised features (from 5-star reviews)
3. Top 5 complaints (from 1-3 star reviews)
4. Most requested missing feature
5. Pricing model

Then synthesize: What are the TOP 10 pain points across ALL 
competitors? Rank by frequency (how many apps have this complaint).
```

**Prompt 2: Community Pain Point Discovery**
```
Search Reddit, forums, and social media for discussions about 
[PROBLEM DOMAIN].

Find:
1. The 5 most common complaints people have about existing solutions
2. The 3 most requested features that don't exist yet
3. Any workarounds people are using (hacks, spreadsheets, manual processes)
4. Any emerging trends or shifts in what users want
5. Specific quotes that capture the emotional frustration

Format each finding as:
  PAIN POINT: [Description]
  FREQUENCY: [How often this appears]
  EVIDENCE: [Source + quote or data point]
  OPPORTUNITY: [How our product could address this]
```

**Prompt 3: Underserved Audience Discovery**
```
Based on the reviews and discussions found:

1. Are there user segments that existing products IGNORE?
   (e.g., non-English speakers, accessibility needs, specific age groups)
2. Are there use cases that are poorly served?
   (e.g., offline use, family sharing, enterprise features)
3. Are there price points that are underserved?
   (e.g., everything is $10/mo, nothing is free or one-time purchase)

For each underserved segment, describe:
  WHO: [The ignored audience]
  WHY IGNORED: [Why competitors don't serve them]
  OPPORTUNITY SIZE: [Rough estimate — niche or mainstream?]
  OUR FIT: [Could we serve them? What would it take?]
```

### Research Output Template

```markdown
## Platform Research Findings — [PROJECT_NAME]

### Competitors Analyzed
| # | Name | Platform | Rating | Key Strength | Key Weakness |
|---|---|---|---|---|---|
| 1 | [App A] | [iOS/Web] | [4.2] | [Best at X] | [Fails at Y] |
| 2 | [App B] | [Android] | [3.8] | [Best at X] | [Fails at Y] |

### Top 10 User Pain Points (ranked by frequency)
| Rank | Pain Point | Frequency | Sources | Severity |
|---|---|---|---|---|
| 1 | [e.g., No offline mode] | 5/5 competitors | Reviews, Reddit | HIGH |
| 2 | [e.g., Too many ads] | 4/5 competitors | Reviews, Twitter | HIGH |
| 3 | [e.g., No progress tracking] | 3/5 competitors | Reviews | MEDIUM |

### Unmet Needs (features users want but nobody provides)
1. [Need] — Evidence: [source]
2. [Need] — Evidence: [source]
3. [Need] — Evidence: [source]

### Underserved Audiences
1. [Audience] — Why ignored: [reason] — Opportunity: [assessment]

### Workarounds Users Currently Use
1. [Workaround] — What it tells us: [insight]

### Key Quotes (real user voices)
> "[Quote from review/forum]" — [Source, Date]
> "[Quote from review/forum]" — [Source, Date]

### Synthesis: Our Opportunity
[2-3 paragraph summary: what the research tells us about WHERE
our product should focus to win. Which pain points to solve,
which audiences to target, what differentiates us.]
```

**Save as:** Include in `docs/requirements.md` as the opening section, or save separately as `docs/platform-research.md` for reference.

### 🧑 Suggested Human Activities (Optional but High-Value)

After the AI completes its platform research, the facilitator should suggest manual activities the user can do to **validate and enrich** the findings. These are things AI cannot do.

**The AI says:**
```
"The research above is based on publicly available data. To make 
our discovery even stronger, here are optional activities you can 
do yourself. Each one significantly improves the quality of our 
requirements. Pick any that fit your timeline."
```

**Activity Menu (AI presents all, user picks):**

```
⚡ QUICK (30 min or less — do before next bite)
─────────────────────────────────────────────
□ Download top 3 competitor apps
  Use each for 10 minutes. Note what's good, what's frustrating.
  YOUR experience as a user is data the AI can't generate.

□ Read 20 recent 1-star reviews
  Open App Store/Play Store for top 2 competitors.
  Screenshot the most insightful negative reviews.
  Share the screenshots — AI will incorporate them.

□ Search Reddit/Twitter for 15 minutes
  Search "[domain] + frustrated" or "[competitor] + hate"
  Copy-paste 3-5 interesting threads/posts back to the AI.

⏱️ MEDIUM (1-3 hours — do before finalizing requirements)
─────────────────────────────────────────────
□ Talk to 3-5 potential users
  Ask: "How do you currently [solve this problem]?"
  Ask: "What do you wish existed?"
  Ask: "Would you pay for [proposed solution]?"
  Report back key quotes — AI will weave into personas.

□ Run a quick survey (Google Forms / Typeform)
  5 questions max. Share in relevant communities.
  Even 10-20 responses are valuable data.
  AI can help draft the survey questions.

□ Join 2-3 relevant communities
  Facebook groups, Discord servers, subreddits.
  Lurk and read the top 10 posts. What problems keep appearing?
  Don't pitch — just listen and learn.

□ Test accessibility
  Turn on screen reader / large text on your phone.
  Try 2 competitor apps with accessibility on.
  Note what breaks — these are your differentiation opportunities.

🔬 DEEP (1-3 days — do before scope lock)
─────────────────────────────────────────────
□ Build a landing page (Carrd / Framer / simple HTML)
  Describe the product. Add a "Join waitlist" button.
  Share in relevant communities. Track signups.
  Real interest data beats all assumptions.

□ Create a clickable prototype (Figma / paper sketches)
  Show 3-5 people. Watch them try to use it.
  Where do they get confused? That's your UX priority list.

□ Interview a domain expert
  Find someone who works in this domain professionally.
  30-minute call. Ask what the real problems are.
  Often reveals pain points users can't articulate themselves.
```

**After any human activity, report findings back to the AI:**
```
"I tried [competitor X] for 10 minutes. Here's what I found:
- [Observation 1]
- [Observation 2]
- [Key frustration]

Please factor this into our personas and requirements."
```

The AI incorporates human findings into the existing research, updating pain point rankings and adding new insights. Human observations are tagged as `[HUMAN VALIDATED]` in the research document for higher confidence.

**Facilitator reminder at the end of Bite 1:**
```
"Before we move to personas, do you want to do any quick manual 
research? Even 15 minutes downloading a competitor app gives us 
data I can't generate. 

If you'd rather continue now, we can — you can always come back 
with findings later and I'll update the requirements."
```

---

## Bite 2: Personas & User Profiles

> **Goal:** Build data-driven personas informed by the research, not invented from thin air.
> **Duration:** 10-15 min

Now that research has revealed real pain points and real user behaviors, create personas that reflect actual users — not generic archetypes.

### Persona Template

```markdown
### Persona: [NAME]

**Type:** [Primary User / Secondary User / Admin / Buyer]
**Based on:** [Which research findings informed this persona]
**Age/Demographics:** [If relevant]
**Tech Comfort:** [Low / Medium / High]
**Context:** [When, where, what device, how often]

**Goals:**
- [What they want to achieve — informed by research]
- [What success looks like for them]

**Frustrations (from research):**
- [Pain point they ACTUALLY experience — with evidence]
- [What they hate about current solutions]
- [Quote from reviews/forums that captures this]

**Current Behavior:**
- [How they solve this problem today]
- [Workarounds they use]
- [What they've tried and abandoned]

**What Would Make Them Switch:**
- [Specific feature/quality that would pull them from competitors]
- [Dealbreaker if missing]

**Key Scenarios:**
1. [First-time use: what triggers them to try our product?]
2. [Core loop: what does a typical session look like?]
3. [Retention: what brings them back?]
4. [Edge case: what unusual thing might they try?]
```

**Facilitator prompt:**
```
"Based on the research we just did, I see [N] distinct user types 
emerging from the data. Let me draft a persona for each — grounded 
in the actual pain points and behaviors we found."

"Notice that Persona A maps to pain points #1 and #3 from our 
research, while Persona B maps to pain points #2 and #5."
```

---

## Bite 3: Requirements Deep Dive

> **Goal:** Comprehensive requirements, broken into digestible sub-categories.
> **Duration:** 15-20 min

Instead of one massive requirements dump, the AI proposes requirements in **sub-categories**, one at a time. This produces deeper, more thoughtful coverage.

### Sub-Category Sequence

```
The AI presents requirements ONE category at a time:

Category A: Core Functionality
  "Here are the core features that directly solve the pain points 
   we identified. Let's review each one."
  → Human reviews → AI refines → confirm

Category B: User Experience & Interactions
  "Now let's cover how users interact — navigation, feedback, 
   animations, accessibility."
  → Human reviews → AI refines → confirm

Category C: Data & Content
  "What content does the app need? How is it structured, stored, 
   and updated?"
  → Human reviews → AI refines → confirm

Category D: Platform & Technical
  "Performance targets, device support, offline capability, 
   storage limits."
  → Human reviews → AI refines → confirm

Category E: Privacy, Security & Compliance
  "Data handling, user accounts, age gates, regulatory requirements."
  → Human reviews → AI refines → confirm

Category F: Business & Monetization
  "Pricing model, analytics, A/B testing, growth features."
  → Human reviews → AI refines → confirm
```

### Requirements Table (per category)

```markdown
## Category [A]: Core Functionality

| ID | Requirement | Priority | Persona | Pain Point # | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-01 | [Feature] | MUST | [Persona] | #[N] | [Criteria] |
| FR-02 | [Feature] | MUST | [Persona] | #[N] | [Criteria] |
| FR-03 | [Feature] | SHOULD | [Persona] | #[N] | [Criteria] |
```

**Key: Link every requirement to a research pain point.** If a requirement can't be traced to a real pain point, question whether it's needed.

### Non-Functional Requirements Template

```markdown
## Non-Functional Requirements

| ID | Category | Requirement | Target | Measurement |
|---|---|---|---|---|
| NFR-01 | Performance | App launch time | < 3s cold start | Instrumented timing |
| NFR-02 | Performance | Screen transition | < 300ms | Frame profiling |
| NFR-03 | Storage | Initial app size | < 50MB | Build output |
| NFR-04 | Accessibility | Screen reader | WCAG 2.1 AA | Audit tool |
| NFR-05 | Privacy | Child data | Zero PII collected | Code review |
| NFR-06 | Reliability | Crash rate | < 0.1% sessions | Crash analytics |
| NFR-07 | Compatibility | iOS minimum | iOS 15+ | Device matrix |
| NFR-08 | Offline | Core features | 100% offline | Airplane mode test |
```

---

## Bite 4: User Stories & Edge Cases

> **Goal:** Convert top requirements into implementable stories with edge cases.
> **Duration:** 10-15 min

Focus on MUST and top SHOULD requirements only. Don't write stories for COULD/WON'T.

### User Story Format

```
As a [PERSONA],
I want to [ACTION],
so that [BENEFIT].

Research basis: Pain point #[N]: "[brief quote]"

Acceptance Criteria:
- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]

Edge Cases:
- [What if X happens?] → [Expected behavior]
- [What if user does Y?] → [Expected behavior]
```

### Edge Case Master Checklist

After writing stories, run through this checklist to catch missing edge cases:

```
NETWORK
□ No internet — what happens?
□ Slow connection — timeout handling?
□ Mid-operation disconnect — data loss?

DATA
□ Empty state — first launch, no content yet?
□ Full storage — device at capacity?
□ Corrupted data — graceful recovery?

USER BEHAVIOR
□ Rapid taps / double submit?
□ Back button / swipe back mid-flow?
□ App killed and reopened — state preserved?
□ Accessibility tools active?
□ Extremely long input text?

DEVICE
□ Minimum supported OS version?
□ Small screen (iPhone SE) vs large (iPad Pro)?
□ Permissions denied?
□ Low battery / power saver mode?

CONTENT
□ Missing asset (image/audio not found)?
□ Content in unexpected language?
□ Content longer than expected?
```

---

## Bite 5: Scope Lock

> **Goal:** Draw a clear line around v1.0. Prevents "just one more feature" during building.
> **Duration:** 5-10 min

```markdown
## Scope Boundary — v1.0

### IN SCOPE (committed)
Everything in MUST and SHOULD requirements.
Specifically:
- [Feature 1] — addresses pain points #X, #Y
- [Feature 2] — addresses pain point #Z
- [Feature 3] — key differentiator vs competitors

### OUT OF SCOPE (explicitly deferred)
- [Feature A] — reason: [too complex for v1.0]
- [Feature B] — reason: [needs more user validation]
- [Feature C] — reason: [regulatory blocker]

### STRETCH GOALS (only if MUST+SHOULD finish early)
- [Feature X] — from COULD requirements
- [Feature Y] — from COULD requirements

### SCOPE LOCK RULE
After this document is confirmed, new features require 
Gate 2 (Milestone Start) approval. The user must say:
"I want to add [feature] to scope" and accept the 
timeline/effort impact. No silent scope creep.
```

---

## Complete Deliverable

**File:** `docs/requirements.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 1
phase_name: "Discovery"
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Requirements — [PROJECT_NAME]

## Platform Research Findings
[From Bite 1 — or link to docs/platform-research.md]

## Personas
[From Bite 2 — 2-4 data-driven personas]

## Requirements by Category
[From Bite 3 — sub-categorized, each linked to pain points]
  - Category A: Core Functionality
  - Category B: User Experience
  - Category C: Data & Content
  - Category D: Platform & Technical
  - Category E: Privacy & Compliance
  - Category F: Business & Monetization

## Non-Functional Requirements
[From Bite 3 — performance, accessibility, reliability targets]

## User Stories
[From Bite 4 — MUST + SHOULD stories with acceptance criteria]

## Edge Cases
[From Bite 4 — master checklist]

## Scope Boundary
[From Bite 5 — in/out/stretch/lock rule]
```

**Save-As-You-Go checkpoints:**
```
After Bite 1 → Save platform research (docs/platform-research.md)
After Bite 2 → Save personas section
After Bite 3 → Save requirements section
After Bite 5 → Save complete docs/requirements.md
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| Platform Research | Top 3 competitors, 1 search | Top 5-10, all 6 sources | Full + paid research tools |
| Personas | 1-2, brief | 2-4, with research links | 3-5, with journey maps |
| Req Categories | A + D only | All 6 categories | All + traceability matrix |
| User Stories | 3-5 core | 8-15 stories | 15-30 + acceptance matrices |
| Edge Cases | Top 5 critical | Full checklist | Full + risk ratings per case |
| Scope Lock | Simple in/out | Detailed with rationale | Formal change request process |

---

## Facilitator Behavior for This Phase

```
CRITICAL RULES:

1. RESEARCH FIRST, OPINIONS SECOND
   Never propose requirements without conducting platform research 
   first. Every recommendation should cite a finding.

2. ONE BITE AT A TIME
   Present one category/section, wait for review, refine, confirm.
   Don't dump 50 requirements at once.

3. LINK TO EVIDENCE
   Every MUST requirement should trace to a research finding.
   "Based on pain point #3 (no offline support, cited in 5/5 
   competitor reviews), I recommend FR-03: Full offline mode."

4. CHALLENGE ASSUMPTIONS
   If the user adds a requirement without evidence, ask:
   "Did we see this need in the research? Is it a real pain point 
   or an assumption?" It's OK to proceed, but flag the risk.

5. QUANTITY CHECK
   After all categories, count requirements:
   Lite:       5-15 total (don't over-engineer)
   Standard:   15-30 total
   Enterprise: 30-50 total
   If significantly over: "We have [N] requirements. That's heavy 
   for [tier] tier. Want to re-prioritize?"
```
