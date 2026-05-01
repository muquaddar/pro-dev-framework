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
