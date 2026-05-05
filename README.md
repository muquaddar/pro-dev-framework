# Pro Dev Framework (PDF) v1.0.0

> An agent-agnostic, consulting-grade development methodology organized into **5 specialized kits** — separating planning, building, content, maintenance, and updates for maximum clarity and zero vendor lock-in.

---

## What Is This?

Pro Dev Framework is a structured system that guides any AI coding agent through the complete lifecycle of a software project — from raw idea to post-launch operations. It is designed for non-technical founders, solo developers, and small teams who use AI agents (ChatGPT, Claude, Gemini, Codex, Antigravity, etc.) to build software.

### Core Innovation: 5 Specialized Kits

Instead of one monolithic methodology, the framework is split into **5 purpose-built kits**, each designed for a specific phase and audience:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  📋 PLANNING KIT          (Stages -1 to 2)                  │
│  Where: Cloud AI (ChatGPT / Gemini / Claude)                │
│  Who: Founder, PM, Product Owner                            │
│  What: Idea validation, stakeholders, architecture          │
│  Output: 15+ planning docs → project folder                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔨 BUILDING KIT           (Stages 3 to 5)                  │
│  Where: IDE Agents (Antigravity / Claude Code / Codex)      │
│  Who: Developer + AI Agent                                  │
│  What: Scaffold, code, test, review                         │
│  Input: Reads AGENT.md + planning docs                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🎨 CONTENT CREATION KIT   (Parallel to Stages 3-5)         │
│  Where: Any platform                                        │
│  Who: Content writers, illustrators, voice actors, legal    │
│  What: Content pipelines, asset specs, style guides,        │
│        compliance checklists, review workflows              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🚀 MAINTENANCE KIT        (Stages 6 to 7)                  │
│  Where: IDE + Cloud + Manual                                │
│  Who: Developer, QA, Marketing, Support                     │
│  What: Launch prep, beta testing, app store, monitoring,    │
│        feedback loops, iteration cycles                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔄 UPDATE KIT             (Post v1.0)                       │
│  Where: TBD                                                 │
│  Who: TBD                                                   │
│  What: Version upgrades, feature additions, refactoring     │
│  Status: Planned for future release                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Repository Structure

```
pro-dev-framework/
│
├── planning-kit/                     ← Upload to cloud AI (one-time setup)
│   ├── README.md                     — Setup instructions
│   ├── system-prompt.md              — The AI facilitator's brain
│   ├── knowledge-base/               — 13 methodology files to upload
│   │   ├── 01-planning-guide.md      — Planning methodology overview
│   │   ├── 02-idea-validation.md     — Stage -1: Hypothesis loop
│   │   ├── 03 through 11            — Stages 0-2 methodology
│   │   ├── 12-phase-prd.md            — PRD Synthesis (Phase 7)
│   │   ├── 13-output-formats.md      — Exact file templates per stage
│   │   └── 14-build-handoff-template.md — Final AGENT.md + package generator
│   ├── templates/                    — Output templates (saved to project)
│   │   ├── stakeholder-map.md        — Stakeholder register + RACI
│   │   ├── work-streams.md           — Parallel stream tracker + deps
│   │   └── stakeholder-progress.md   — Deep dive session tracker
│   └── platform-setup/               — Step-by-step for each platform
│       ├── chatgpt-setup.md
│       ├── claude-setup.md
│       └── gemini-setup.md
│
├── building-kit/                     ← Used by IDE agents during building
│   ├── MASTER-GUIDE.md               — The definitive framework reference
│   ├── AGENT.md                      — Project brain template
│   ├── harness-adapters/             — Agent-specific shims
│   ├── phase-prompts/                — Reserved for future IDE-based planning prompts
│   ├── gates/                        — Human approval checkpoints (1-4)
│   ├── rules/                        — Code, process, & session rules
│   ├── rule-templates/               — Stack-specific conventions
│   ├── docs/                         — Codebase indexes & tech doc templates
│   ├── memory/                       — Session & state protocol templates
│   ├── scripts/                      — Auto-indexing & context generation
│   └── ci-cd/                        — CI/CD templates
│
├── content-creation-kit/             ← For non-code stakeholders
│   ├── README.md                     — How content work integrates
│   ├── guides/                       — Role-specific deep guides
│   │   ├── content-writer.md         — Writing workflows, tone, structure
│   │   ├── illustrator.md            — Art specs, style guides, deliverables
│   │   ├── voice-actor.md            — Audio specs, recording guidelines
│   │   └── legal-compliance.md       — COPPA, GDPR-K, accessibility
│   ├── templates/                    — Deliverable templates
│   │   ├── content-pipeline.md       — Content creation workflow tracker
│   │   ├── asset-pipeline.md         — Art/audio/video asset tracker
│   │   ├── style-guide.md            — Visual & written style reference
│   │   └── review-workflow.md        — Content review & approval process
│   └── checklists/                   — Quality gates for content
│       ├── content-review.md         — Writing quality checklist
│       ├── asset-review.md           — Art/audio quality checklist
│       └── compliance-review.md      — Legal & accessibility checklist
│
├── maintenance-kit/                  ← Post-build lifecycle (OP_1 to OP_4)
│   ├── README.md                     — Launch & operations overview
│   ├── launch-prep/                  — Launch readiness templates
│   │   ├── beta-test-plan.md         — Beta program design
│   │   ├── app-store-submission.md   — Store listing & review prep
│   │   ├── go-to-market.md           — Marketing launch plan
│   │   └── compliance-final.md       — Final compliance verification
│   ├── post-launch/                  — Operations templates
│   │   ├── monitoring-setup.md       — Error tracking, analytics
│   │   ├── feedback-collection.md    — User feedback pipelines
│   │   ├── iteration-workflow.md     — Feature request → build cycle
│   │   └── retrospective.md          — Team/project retrospective
│   └── gates/                        — Human gates for operations
│       ├── OP_1_content.md           — Content Audit & Strategy
│       ├── OP_2_launch.md            — Launch Readiness Checklist
│       ├── OP_3_ops.md               — Operations & Support Manual
│       └── OP_4_maintenance.md       — Long-term Maintenance Plan
│
├── update-kit/                       ← Planned for future release
│   └── README.md                     — Coming soon
│
├── README.md                         ← You are here
├── CHANGELOG.md
└── VERSION
```

---

## Quick Start (5 minutes)

### Option A: Plan on Cloud, Build in IDE (Recommended)

**Step 1: Set up the Planning Facilitator (one-time, 5 min)**

Pick your cloud platform and follow the setup guide:
- ChatGPT → `planning-kit/platform-setup/chatgpt-setup.md`
- Claude.ai → `planning-kit/platform-setup/claude-setup.md`
- Gemini → `planning-kit/platform-setup/gemini-setup.md`

You upload 14 files + a system prompt. This creates a reusable AI assistant that guides you through planning.

**Step 2: Plan your project (1-4 hours)**

Open your cloud AI and say: *"Let's plan a new project."*

The AI will guide you through:
1. **Idea Validation** — Is this worth building?
2. **Stakeholder Discovery** — Who is involved beyond developers?
3. **Interactive Planning** — Requirements, strategy, UX, architecture, security

After each stage, the AI tells you exactly what file to save and where.

**Step 3: Build in your IDE agent**

Once planning is complete, you'll have a project folder with 44+ planning documents. Open your IDE agent (Antigravity, Claude Code, Codex) and paste the activation prompt from `building-kit/activation-prompt-template.md`.

The agent validates your planning package and begins building.

**Step 4: Content in parallel**

While building, hand the `content-creation-kit/` to your content team (or use it yourself). It provides templates and checklists for writing, illustration, audio, and legal compliance.

**Step 5: Launch & maintain**

When building is complete, the `maintenance-kit/` guides you through beta testing, app store submission, monitoring, and post-launch iteration.

### Option B: Plan and Build in IDE (All-in-One)

If you prefer to do everything in one IDE agent:
1. Point the agent at `building-kit/MASTER-GUIDE.md`
2. The agent follows the 16-gate sequence
3. Higher token cost, but no platform switching

---

## The 16-Gate Lifecycle

| Gate | Name | Kit | Where | What |
|---|---|---|---|---|
| **PL_0** | Strategic Alignment | 📋 Planning | ☁️ Cloud | Feasibility → Validation → Go/No-Go |
| **PL_1** | Stakeholder Discovery | 📋 Planning | ☁️ Cloud | Identify all roles, deep-dive each |
| **PL_2** | Discovery & Req | 📋 Planning | ☁️ Cloud | Functional & Non-functional requirements |
| **PL_3** | Strategy & Design | 📋 Planning | ☁️ Cloud | Tech Strategy, UX Flows, UI Tokens |
| **PL_4** | Architecture | 📋 Planning | ☁️ Cloud | Data Model, System Design, Skeleton Spec |
| **PL_5** | Compliance & PRD | 📋 Planning | ☁️ Cloud | Privacy, Security, PRD Synthesis |
| **PL_6** | Handoff & QA | 📋 Planning | ☁️ Cloud | AGENT.md, Index, QA Strategy |
| **PL_7** | Ops Planning | 📋 Planning | ☁️ Cloud | GTM, Hiring, RACI, Metrics, Roadmap |
| **BL_M*** | Agile Sprints | 🔨 Building | 🖥️ IDE | Dynamic milestones (M1, M2, M3...) |
| **OP_1** | Content Creation | 🛠️ Ops | 🖥️ IDE + M | Content Audit, Copy, Creative Assets |
| **OP_2** | Launch Readiness | 🛠️ Ops | 🖥️ IDE + M | Pre-flight checks, Environment validation |
| **OP_3** | Post-Launch Ops | 🛠️ Ops | 🖥️ IDE + M | Monitoring, Support Manual, Live Handoff |
| **OP_4** | Maintenance | 🛠️ Ops | 🖥️ IDE + M | Stability, Debt Management, Versioning |

**Content Creation** (🎨) runs **in parallel** with Stages 3-5. Content, assets, and compliance work tracked via dedicated work streams.

---

## Project Tiers

| | Lite | Standard | Enterprise |
|---|---|---|---|
| **For** | Weekend hack | Multi-week product | Team / compliance |
| **Planning** | 2-4 hours | 4-8 hours | 8-16 hours |
| **Milestones** | 2-3 | 4-8 | 8-15 |
| **Human Gates** | 4 (PL_0, PL_1, BL_M1, OP_2) | 10 (PL_0-PL_5, BL_*, OP_1-OP_3) | All 16 |
| **Content Kit** | Optional | Recommended | Required |
| **Maintenance Kit** | Skip | Core only | Full |

---

## Key Features

- **5 Specialized Kits**: Each phase has its own toolkit, audience, and platform.
- **Agent-Agnostic**: Works with any AI coding agent. Zero vendor lock-in.
- **Human-Gated**: 16 mandatory approval checkpoints. AI never makes irreversible decisions alone.
- **Switch Protocol**: Seamlessly switch between platforms mid-project. The agent generates a complete handover prompt.
- **Consulting-Grade**: Methodology inspired by McKinsey (hypothesis-driven), ThoughtWorks (walking skeleton), and Deloitte (stakeholder interviews).
- **Token-Efficient**: 3-tier progressive disclosure. Session start costs ~900 tokens.
- **Stakeholder-Aware**: Discovers ALL project roles and provides dedicated guides per role in the Content Creation Kit.
- **Save-As-You-Go**: Cloud AI outputs exact filenames after each planning stage. Incremental saves protect against session loss.

---

## Platform Switching

At any point during building, tell your agent:

> "Switch to ChatGPT"

The agent will:
1. Save all session state
2. Generate a complete paste-ready handover prompt
3. You paste it into ChatGPT, continue working
4. When done, ChatGPT outputs a session snapshot
5. You save it, return to any IDE agent — it picks up where you left off

---

## Version

- **Current:** v1.0.0
- **Released:** 2026-04-12
- **License:** Private use

See `CHANGELOG.md` for release history.
