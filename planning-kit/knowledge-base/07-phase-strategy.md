# Phase 2: Strategy — Technical Decisions & Project Roadmap

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Stage:** 2 (Interactive Planning) | **Phase:** 2 of 6
> **Tier:** All | **Duration:** 30 min – 1.5 hours
> **Prerequisite:** Phase 1 (Discovery) confirmed

---

## Purpose

Strategy is the **convergent** phase — take everything from Discovery and make hard decisions. What technology to use, how to monetize, and what the milestone plan looks like.

This phase is broken into **4 focused bites.** Each decision is explored and reasoned — never rushed.

**At the end of this phase, you will have:**
- Technology stack decisions with rationale and rejected alternatives
- Monetization and business model selected from compared options
- A milestone plan designed as quick wins
- Risk register with mitigations

---

## Phase Structure: 4 Bites

```
BITE 1: Technology Stack Decisions     (15-30 min)
  AI proposes 2-3 alternatives per decision with comparison
  Each decision explored ONE AT A TIME
  Output: Confirmed tech stack with rationale

BITE 2: Business Model & Monetization  (10-15 min)
  AI proposes 2-3 relevant models with comparison table
  Output: Selected model with pricing and growth plan

BITE 3: Milestone Plan                 (10-20 min)
  Quick wins — more milestones, smaller goals
  Each milestone = 1 demo-able outcome in ≤1 day
  Output: Milestone plan with dependencies

BITE 4: Risk Register                  (5-10 min)
  Identify top risks, map to milestone mitigations
  Output: Risk register with severity + mitigations
```

Each bite follows: **AI Proposes → Human Reviews → AI Refines → Human Confirms → SAVE**.

---

## Bite 1: Technology Stack Decisions

> **Goal:** Choose the right tools for the job with clear reasons why.
> **Duration:** 15-30 min

### Core Rule: One Decision at a Time, Always 2-3 Options

The AI walks through each technology decision **individually**. For EACH one, it presents **2-3 realistic alternatives** with a comparison table. Never dump all decisions at once.

### Decision Flow (repeat for each decision)

```
Step 1: FRAME THE DECISION
  "The next decision is [Frontend Framework]. Based on your 
  requirements (FR-03: offline mode, NFR-08: 100% offline, 
  budget: $0), here are 3 options."

Step 2: PRESENT COMPARISON TABLE
  ┌────────────────────────────────────────────────────────────┐
  │  DECISION: Frontend Framework                              │
  │                                                            │
  │  YOUR KEY REQUIREMENTS:                                    │
  │  • FR-03: Full offline mode                                │
  │  • NFR-07: iOS 15+ and Android 10+                         │
  │  • Budget: $0 development cost                             │
  │  • Team: Solo developer + AI agent                         │
  ├────────────────────────────────────────────────────────────┤
  │                                                            │
  │  Option A: Flutter (Dart)                                  │
  │  ✅ Native cross-platform from single codebase              │
  │  ✅ Excellent offline support (Hive, SQLite)                │
  │  ✅ Hot reload = fast development                           │
  │  ⚠️ Large app size (~15MB base)                            │
  │  ⚠️ Smaller package ecosystem than React Native             │
  │                                                            │
  │  Option B: React Native (TypeScript)                       │
  │  ✅ Huge ecosystem, familiar web skills                     │
  │  ✅ Large community, many tutorials                         │
  │  ⚠️ Bridge overhead affects performance                    │
  │  ❌ Weaker offline story (more manual work)                 │
  │                                                            │
  │  Option C: Native (Swift + Kotlin)                         │
  │  ✅ Best performance and platform integration               │
  │  ✅ Best offline support                                    │
  │  ❌ Two codebases = double the work                         │
  │  ❌ Solo developer = unsustainable                          │
  │                                                            │
  ├────────────────────────────────────────────────────────────┤
  │                                                            │
  │  COMPARISON MATRIX:                                        │
  │                        Flutter   React Native   Native     │
  │  Offline support:      ★★★★★     ★★★☆☆          ★★★★★      │
  │  Dev speed (solo):     ★★★★★     ★★★★☆          ★★☆☆☆      │
  │  Cross-platform:       ★★★★★     ★★★★☆          ★☆☆☆☆      │
  │  Performance:          ★★★★☆     ★★★☆☆          ★★★★★      │
  │  Ecosystem:            ★★★★☆     ★★★★★          ★★★★★      │
  │  Learning curve:       ★★★☆☆     ★★★★☆          ★★☆☆☆      │
  │  App size:             ★★★☆☆     ★★★★☆          ★★★★★      │
  │                                                            │
  └────────────────────────────────────────────────────────────┘

Step 3: AI RECOMMENDS WITH REASONING
  "I recommend Option A (Flutter) because:
  1. Your #1 requirement (FR-03: offline) is natively strong
  2. Single codebase is critical for a solo developer
  3. Hot reload speeds up AI-assisted development
  4. The app size tradeoff (15MB) is acceptable for your use case
  
  The main risk is Dart's smaller ecosystem, but for a kids' 
  vocabulary app, the packages we need (audio, animation, 
  local DB) are mature."

Step 4: HUMAN CHOOSES
  User picks an option (or asks for more detail on one).
  AI records: Decision + Rationale + What was rejected and why.

Step 5: MOVE TO NEXT DECISION
  "Great, Flutter it is. Next decision: Database..."
```

### Decision Areas (explored one by one)

```
1. Frontend Framework & Language
   └── Options shaped by: platform targets, offline needs, team skills

2. State Management
   └── Options shaped by: app complexity, testability requirements

3. Backend / BaaS
   └── Options shaped by: budget, auth needs, data sync model

4. Database (Local + Remote)
   └── Options shaped by: offline support, query complexity, data size

5. Hosting & Infrastructure
   └── Options shaped by: budget, scale, compliance jurisdiction

6. CI/CD Pipeline (Standard+)
   └── Options shaped by: team size, deployment frequency

7. Third-Party Services
   └── Options shaped by: auth, payments, analytics, notifications
```

### Stack Summary Output

After all decisions are made:

```markdown
## Technology Stack — [PROJECT_NAME]

### Decision Log

| # | Decision | Chosen | Why | Rejected | Why Not |
|---|---|---|---|---|---|
| 1 | Frontend | Flutter | Offline-first, cross-platform, solo dev | React Native | Weaker offline; Native: double work |
| 2 | State | Riverpod | Type-safe, testable, no boilerplate | BLoC | Too verbose for this scope |
| 3 | Backend | Supabase | Free tier, built-in auth, Postgres | Firebase | Vendor lock-in, COPPA complexity |
| 4 | Local DB | Hive | Ultra-fast, offline-first, no SQL needed | SQLite | Overkill for key-value data |
| 5 | Hosting | Vercel Edge | Auto-deploy, free tier sufficient | AWS | Over-engineered for this scale |
| 6 | CI/CD | GitHub Actions | Free for public repos, integrated | GitLab CI | Team already uses GitHub |
| 7 | Analytics | PostHog | Privacy-first, self-host option | GA4 | Children's data concerns |

### Full Stack Diagram
[AI draws a simple architecture showing how components connect]
```

### 🧑 Suggested Human Activities

```
⚡ QUICK (before confirming stack)
□ Search "[framework] + [key requirement]" for each choice
  Confirm mature packages exist. Share any concerns with AI.

□ Check free tier limits
  Open pricing pages for Supabase/Firebase/hosting.
  Confirm free tier covers your expected usage. Report surprises.

⏱️ MEDIUM (before starting milestones)
□ Build a 1-hour spike
  Create a tiny project: install framework → call DB → confirm offline.
  Test the SINGLE riskiest technical assumption.
  Report: "It worked" or "I hit a wall with [X]."

□ Assess your own skills honestly
  If you've never used [framework], try the official tutorial.
  Tell AI: "I'm comfortable" or "I need extra time to learn."
  AI adjusts milestone estimates accordingly.
```

---

## Bite 2: Business Model & Monetization

> **Goal:** Select the right business model from compared options.
> **Duration:** 10-15 min

### Core Rule: Present 2-3 Relevant Models, Not All Possible Models

The AI selects 2-3 models that **actually fit this project** based on audience, domain, and constraints. It does NOT list every possible model — only realistic ones.

### Model Comparison Flow

```
Step 1: AI SELECTS RELEVANT MODELS
  "Based on your project (kids vocabulary app, COPPA-compliant,
  offline-first, parents are the buyers), I see 3 viable models."

Step 2: AI PRESENTS COMPARISON TABLE
  ┌────────────────────────────────────────────────────────────┐
  │  BUSINESS MODEL OPTIONS                                    │
  │                                                            │
  │  Option A: Freemium (Core free, Premium unlock)            │
  │  ✅ Low barrier to entry → high download count              │
  │  ✅ Parents can try before buying                           │
  │  ✅ App Store friendly (no mandatory paywall)               │
  │  ⚠️ Conversion rate typically 3-5%                         │
  │  Revenue: $5 one-time × 4% of 1,000 users = $200/month    │
  │                                                            │
  │  Option B: One-Time Purchase ($4.99)                       │
  │  ✅ Simple — pay once, get everything                       │
  │  ✅ No ongoing feature gating                               │
  │  ✅ Parents prefer this for kids' apps                      │
  │  ⚠️ Lower download count (price scares away browsers)      │
  │  Revenue: $5 × 200 buyers = $1,000 total                  │
  │                                                            │
  │  Option C: Subscription ($2.99/month)                      │
  │  ✅ Recurring revenue                                       │
  │  ✅ Funds ongoing content development                       │
  │  ⚠️ Parents resist subscriptions for kids' apps            │
  │  ⚠️ Higher churn rate                                      │
  │  Revenue: $3/mo × 50 subscribers = $150/month              │
  │                                                            │
  ├────────────────────────────────────────────────────────────┤
  │                                                            │
  │  COMPARISON:                                               │
  │                      Freemium   Purchase   Subscription    │
  │  Barrier to entry:   ★★★★★      ★★★☆☆      ★★★★☆          │
  │  Revenue/user:       ★★★☆☆      ★★★★☆      ★★★★★          │
  │  Parent preference:  ★★★★☆      ★★★★★      ★★☆☆☆          │
  │  Implementation:     ★★★☆☆      ★★★★★      ★★☆☆☆          │
  │  Content funding:    ★★☆☆☆      ★★☆☆☆      ★★★★★          │
  │                                                            │
  └────────────────────────────────────────────────────────────┘

Step 3: AI RECOMMENDS
  "I recommend Option A (Freemium) because:
  1. COPPA means NO ads, so freemium is the natural alternative
  2. Parents need to see the app is quality before paying
  3. High SAM to TAM ratio with free downloads
  4. One-time $4.99 premium unlock keeps it simple
  
  Risk: Low conversion. Mitigation: Make free tier genuinely 
  useful (50 words) so parents see value before premium (200+ words)."

Step 4: HUMAN CHOOSES
  User picks. AI records decision.
```

### Business Model Output

```markdown
## Business Model — [PROJECT_NAME]

**Selected Model:** [e.g., Freemium with one-time premium unlock]
**Why This Model:** [2-3 sentence reasoning]

### Models Compared
| Aspect | Freemium ✅ | One-Time Purchase | Subscription |
|---|---|---|---|
| Barrier to entry | Free download | $4.99 upfront | Free trial needed |
| Revenue per user | $5 (if converts) | $5 guaranteed | $36/year |
| Parent preference | High | Highest | Low |
| Why rejected | — | Lower reach | Parents resist for kids |

### Free Tier
- [What's included — enough to be useful]
- [Clear limitation that creates upgrade desire]

### Premium Tier
- **Price:** [e.g., $4.99 one-time]
- **Unlock:** [What premium adds]
- **Payment:** [App Store IAP]

### Revenue Projections
| Month | Free Users | Conversion | Paid Users | Revenue |
|---|---|---|---|---|
| 1 | 500 | 4% | 20 | $100 |
| 3 | 2,000 | 5% | 100 | $500 |
| 6 | 5,000 | 5% | 250 | $1,250 |

### Growth Strategy
- **Acquisition:** [e.g., ASO, parent forums, social media]
- **Retention:** [e.g., daily streak, new content drops]
- **Referral:** [e.g., "Share with a friend" for bonus content]
```

---

## Bite 3: Milestone Plan

> **Goal:** Break the build into quick wins. More milestones, smaller goals.
> **Duration:** 10-20 min

### Core Rule: Quick Wins > Big Milestones

Every milestone should feel like a **small victory**. The developer sees progress, stays motivated, and can demo something real after each one.

```
QUICK WIN DESIGN RULES:

1. Each milestone = 1 DEMO-ABLE outcome
   "After M3, you can show someone: 'Look, the app plays audio 
   when you tap a word!'"

2. Max effort: 1 day per milestone (prefer half-day)
   If it's bigger → split it into 2 quick wins

3. Stack wins earliest
   Put the satisfying, visible wins first (UI, interactions, sound)
   Save invisible work (refactoring, optimization) for later

4. First milestone is ALWAYS the Walking Skeleton
   App launches → shows one screen → one user action works
   Proves: "The tech stack works. We can build from here."

5. Every 3 milestones = celebration checkpoint
   AI says: "🎉 You've completed 3 milestones! Here's what 
   you've built so far: [summary]. Keep going!"

6. Total milestones by tier:
   Lite:       3-5 quick wins
   Standard:   6-12 quick wins
   Enterprise: 10-20 quick wins
```

### Milestone Structure: Small Bites

Instead of big milestones like "Build content system" (too vague, too big), break into quick wins:

```
❌ BAD (too big):
  M2: Build content system (3 days)

✅ GOOD (quick wins):
  M2: Display word list with categories (4 hours)
  M3: Tap word → show detail screen (3 hours)
  M4: Add pronunciation audio playback (4 hours)
  M5: Add progress tracking per word (4 hours)

Each one is demo-able. Each one feels like progress.
```

### Milestone Plan Template

```markdown
## Milestone Plan — [PROJECT_NAME]

### Quick Win Summary
| # | Quick Win | What You Can Demo After | Effort | Stream Deps |
|---|---|---|---|---|
| M1 | Walking Skeleton | "App launches and shows a screen" | 4h | None |
| M2 | Category browsing | "User picks a category and sees words" | 4h | None |
| M3 | Word detail screen | "Tap a word → see image + info" | 4h | None |
| M4 | Audio playback | "Tap 🔊 → hear the word spoken" | 4h | A2 (audio files) |
| M5 | Progress tracking | "Stars show which words are learned" | 4h | None |
| M6 | Interactive quiz | "Kid answers questions about words" | 6h | C1 (word list) |
| M7 | Parent dashboard | "Parent sees child's progress" | 4h | None |
| M8 | Streak system | "3-day streak → celebration animation" | 4h | None |
| M9 | Settings & profiles | "Switch between child profiles" | 4h | None |
| M10 | Polish & animations | "Everything feels smooth and premium" | 6h | A1 (illustrations) |
| M11 | Testing & QA | "All tests pass, no crashes" | 4h | L1 (COPPA audit) |
| M12 | Launch prep | "Screenshots, store listing, submit" | 4h | K1, L2 |

### Celebration Checkpoints
🎉 After M3:  "You have a browsable word library!"
🎉 After M6:  "You have a working educational game!"
🎉 After M9:  "You have a complete app feature set!"
🎉 After M12: "You're ready to launch!"

### Detailed Quick Wins

#### M1: Walking Skeleton
**Demo:** App launches → shows home screen → navigate to one category → see placeholder words
**Tasks:**
- [ ] Create project with selected stack
- [ ] Set up folder structure (feature-first)
- [ ] Add navigation shell (3-4 screens, placeholder content)
- [ ] One widget test passing
- [ ] Push to Git
**Proves:** Stack works, navigation works, project structure is solid.
**Gate:** Gate 1 (Architecture Approval) after this milestone.

#### M2: Category Browsing
**Demo:** Home screen shows real categories → tap one → word list appears
**Tasks:**
- [ ] Define data model for Category + Word
- [ ] Add local data source (hardcoded for now)
- [ ] Build category grid UI
- [ ] Build word list UI
- [ ] Navigation: home → category → word list
**Depends On:** M1 complete
**No external deps — uses stub data**

#### M3: Word Detail Screen
**Demo:** Tap a word → detail screen with image placeholder + definition
**Tasks:**
- [ ] Build word detail screen
- [ ] Display word, definition, example sentence
- [ ] Image placeholder (replaced with real art in M10)
- [ ] Back navigation
**Depends On:** M2 complete

[Continue for each milestone...]
```

### 🧑 Suggested Human Activities

```
⚡ QUICK
□ Sanity-check with the "evening test"
  For each milestone, ask: "Could I finish this in one evening
  of focused work?" If not, tell AI to split it further.

□ Map to your calendar
  "I work evenings only" → M1 = Monday, M2 = Tuesday, etc.
  Share timeline. AI flags if dependencies don't line up.

□ Pick your first celebration checkpoint
  Which demo would excite you most? AI can reorder milestones
  to get to that satisfying demo sooner.

⏱️ MEDIUM
□ Pre-validate the Walking Skeleton
  Create the project now. Run `flutter create` or `npx create-next-app`.
  Confirm it builds. Report any issues before planning continues.
```

---

## Bite 4: Risk Register

> **Goal:** Identify what could go wrong and plan mitigations now.
> **Duration:** 5-10 min

The AI proposes **2-3 options per risk mitigation** where relevant, presented one at a time.

### Risk Identification

```
The AI presents risks ONE AT A TIME:

"Risk #1: Offline sync conflicts.
 Likelihood: Medium | Impact: High | Severity: 🔴 HIGH

 This matters because your #1 requirement is offline mode.
 If sync fails when the device reconnects, users lose progress.

 Mitigation options:
 A) Last-write-wins (simple, may lose data in rare cases)
 B) Conflict-free merge (complex but no data loss)
 C) Offline-only MVP, add sync in v2 (avoids problem entirely)

 I recommend C for v1.0 — keeps scope manageable. Thoughts?"

[Human responds]

"Risk #2: Content delivery delayed..."
```

### Risk Register Template

```markdown
## Risk Register — [PROJECT_NAME]

| # | Risk | Likelihood | Impact | Severity | Mitigation | Milestone |
|---|---|---|---|---|---|---|
| R1 | [e.g., Offline sync] | Medium | High | 🔴 | Go offline-only v1 | M1 |
| R2 | [e.g., Content delayed] | Medium | High | 🔴 | Start content NOW, parallelize | M4 dep |
| R3 | [e.g., New to Flutter] | High | Medium | 🟡 | Extra time M1, use skill library | M1 |
| R4 | [e.g., COPPA audit fails] | Low | High | 🟡 | Review arch + legal checklist in M1 | M11 |
| R5 | [e.g., Scope creep] | High | Medium | 🟡 | Scope Lock Rule at every gate | All |
| R6 | [e.g., App Store rejection] | Low | High | 🟡 | Follow maintenance-kit checklist | M12 |

### Severity Matrix
              Low Impact    Medium Impact    High Impact
High Likely     🟡 MED         🟡 MED          🔴 HIGH
Med Likely      🟢 LOW         🟡 MED          🔴 HIGH
Low Likely      🟢 LOW         🟢 LOW          🟡 MED

### Rule: HIGH risks get early milestones
Every 🔴 HIGH risk must be mitigated in the FIRST 3 milestones.
Don't wait until M10 to discover your architecture doesn't work offline.
```

---

## Complete Deliverable

**File:** `p_11_strategy.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 2
phase_name: "Strategy"
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Strategy — [PROJECT_NAME]

## Technology Stack
[From Bite 1 — decision log with alternatives + comparison]

## Business Model
[From Bite 2 — selected model + comparison table + projections]

## Milestone Plan
[From Bite 3 — or link to docs/milestone-plan.md]
[From Bite 3 — or link to docs/p_12_milestone-plan.md]

## Risk Register
[From Bite 4 — ranked risks with mitigations + milestone mapping]
```

**Additional files:**
- `p_12_milestone-plan.md` — standalone milestone document

**Save-As-You-Go checkpoints:**
```
After Bite 1 → Save Stack Selection to `p_11_strategy.md`
After Bite 2 → Save Milestone Roadmap to `p_11_strategy.md`
After Bite 3 → Save Risk Register to `p_11_strategy.md`
After Bite 4 → Save `p_12_milestone-plan.md`
After all    → Final confirmation of `p_11_strategy.md`
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| Stack Decisions | 3-4 decisions, 2 options each | All 7, 2-3 options each | Full + vendor evaluation matrix |
| Business Model | Quick decision, 2 options | Full comparison, 3 options | Full + financial model spreadsheet |
| Milestones | 3-5 quick wins, half day each | 6-12 quick wins | 10-20 quick wins + dependency graph |
| Risk Register | Top 3 risks, brief | Top 5-8, mitigations mapped | Full register + quarterly review plan |
| Human Activities | Optional | Recommended | Required (spike + calendar) |
| Celebration Points | After each milestone | Every 3 milestones | Every 3 + formal demo reviews |
