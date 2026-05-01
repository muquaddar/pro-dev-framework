# Stage 0: Environment & Project Setup

> **Version:** PDF v1.0.0 | **Kit:** Building Kit (IDE) / Planning Kit (Cloud)
> **Tier:** All | **Duration:** 15–30 min | **Prerequisite:** Stage -1 Go decision

---

## Purpose

Now that the idea is validated, establish the foundation for the project. This stage defines **what kind of project this is**, which determines how much framework machinery applies, what tools are used, and how many gates are required.

**At the end of this stage, you will have:**
- A project tier (Lite / Standard / Enterprise)
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
ASK THESE QUESTIONS:

1. How long will this take to build?
   □ A weekend                    → Lite
   □ 2-6 weeks                   → Standard
   □ Months / ongoing            → Enterprise

2. How many people are involved?
   □ Just me + AI agent           → Lite or Standard
   □ Me + content/design help     → Standard
   □ A team (3+ people)           → Enterprise

3. Are there regulatory requirements?
   □ No                           → Lite or Standard
   □ Yes (COPPA, GDPR, HIPAA)    → Standard or Enterprise

4. Will real users depend on this?
   □ No, it's a side project      → Lite
   □ Yes, but small audience      → Standard
   □ Yes, at scale                → Enterprise

5. Does this need content beyond code?
   □ No                           → Lite
   □ Some (images, copy)          → Standard
   □ Significant (art, audio, video, localization) → Enterprise
```

**Tier Comparison:**

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Timeline** | 1-3 days | 2-6 weeks | Months |
| **Milestones** | 2-3 | 4-8 | 8-15 |
| **Human Gates** | Go/No-Go + Gate 1 | + Gates 2, 4, 5 | All 7 |
| **Planning Phases** | 1, 2, 5 only | All, Phase 4 optional | All required |
| **Stakeholder Dives** | 1-2 key roles | All identified | All + RACI |
| **Work Streams** | Code only | Code + 1-2 | All identified |
| **TDD** | No | Recommended (60%) | Mandatory (80%) |
| **Content Kit** | Skip | Recommended | Required |
| **Maintenance Kit** | Skip | Core only | Full |
| **Session Memory** | Optional | Recommended | Mandatory |
| **ADR Log** | Optional | Recommended | Mandatory |
| **Quality Scorecard** | Skip | Per-milestone | Per-milestone + aggregate |

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
tier: "standard"                         # lite | standard | enterprise
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Project Configuration — [PROJECT_NAME]

## Tier
[Lite / Standard / Enterprise]
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
- Session Memory: [Mandatory / Recommended / Optional]

## Next Step
→ Stage 1: Stakeholder Discovery & Deep Dives
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
