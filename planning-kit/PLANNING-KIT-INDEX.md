# 🗂️ Planning Kit Index: File Purposes & Roles

> **Version:** PDF v1.0.0
> **Purpose:** A definitive map of the Planning Kit components for the Pro Dev Framework.

---

## 🟢 Core Orchestration (Root)
These files define how the AI Facilitator behaves and how it interacts with the user.

| File | Purpose | AI vs Human |
| :--- | :--- | :--- |
| `system-prompt.md` | The "Brain" of the facilitator. Paste this into ChatGPT/Claude to activate the framework. | **AI** |
| `rules.md` | Defines strict formatting rules (YAML frontmatter, H1 count, Bite Protocol). | **AI** |
| `README.md` | High-level introduction to the kit and how to use it. | **Human** |
| `PHASES-OVERVIEW.md` | A summary of all 11 planning phases and their dependencies. | **Human** |
| `IMPROVEMENTS.md` | A log of recent updates and framework evolution (e.g., adding Phases 8-11). | **Human** |
| `fix-frontmatter-prompt.md` | A utility prompt used to fix YAML errors in planning documents. | **Utility** |

---

## 🧠 Knowledge Base (`/knowledge-base`)
These files contain the actual methodology. The AI Facilitator reads these to know *what* to ask during each phase.

| File | Phase / Stage | Description |
| :--- | :--- | :--- |
| `01-planning-guide.md` | Overview | Master guide for the AI on how to facilitate the 11 phases. |
| `02-idea-validation.md` | Stage -1 | Methodology for the Hypothesis Loop and Go/No-Go decision. |
| `03-environment-setup.md` | Stage 0 | Rules for Tier selection and Tech Stack definition. |
| `04-stakeholder-discovery.md`| Stage 1 | Process for identifying all project roles (25+ categories). |
| `05-stakeholder-deep-dive.md`| Stage 1 | Template for conducting atomic interviews with each stakeholder. |
| `06-phase-discovery.md` | Phase 1 | Requirements, personas, and user story generation. |
| `07-phase-strategy.md` | Phase 2 | Monetization, milestone mapping, and risk registry. |
| `08-phase-ux.md` | Phase 3 | User journeys and Information Architecture (IA). |
| `09-phase-ui.md` | Phase 4 | Design tokens, component rosters, and visual briefs. |
| `10-phase-architecture.md` | Phase 5 | Data models, system design, and Walking Skeleton spec. |
| `11-phase-compliance.md` | Phase 6 | Security, data privacy (GDPR/COPPA), and accessibility. |
| `12-phase-prd.md` | Phase 7 | Final synthesis of all previous phases into a Master PRD. |
| `13-output-formats.md` | Reference | Strict templates for the 44-file protocol (YAML fields, etc). |
| `14-build-handoff-template.md`| Handoff | Instructions for generating the `AGENT.md` and activation prompt. |
| `15-phase-testing-qa.md` | Phase 8 | Quality assurance strategies and test pyramids. |
| `16-phase-launch-marketing.md`| Phase 9 | Go-to-market timelines and launch-day checklists. |
| `17-phase-operations-team.md` | Phase 10 | Team structure, communication plans, and org charts. |
| `18-phase-iteration-feedback.md`| Phase 11 | Metrics dashboards and feedback loop setup. |

---

## 🛠️ Setup & Templates
Files used for one-time setup and document scaffolding.

### `/platform-setup`
*   `chatgpt-setup.md`: Step-by-step for ChatGPT Plus / GPTs.
*   `claude-setup.md`: Step-by-step for Claude.ai Projects.
*   `gemini-setup.md`: Step-by-step for Google Gemini Gems.

### `/templates`
*   `stakeholder-map.md`: Markdown template for the RACI/Stakeholder register.
*   `stakeholder-progress.md`: Tracker to show which deep-dives are complete.
*   `work-streams.md`: Parallel stream tracker for Code, Content, and Assets.
