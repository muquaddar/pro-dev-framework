# 🗂️ Building Kit Index: File Purposes & Roles

> **Version:** PDF v1.0.0
> **Purpose:** A map of the 84 components that drive the AI-assisted build phase.

---

## 🔵 Core Orchestration (Root)
| File | Role | Description |
| :--- | :--- | :--- |
| `MASTER-GUIDE.md` | **The Brain** | The definitive framework reference. Read once per project. |
| `AGENT.md` | **The Brain (Project)** | The specific "Project Brain" template for each app. |
| `activation-prompt-template.md` | **Trigger** | Prompt used to "wake up" an IDE agent and point it to the framework. |
| `hook-setup-guide.md` | **Automation** | Guide for Wiring event-driven hooks (Post-Scaffold). |
| `token-optimization-rules.md` | **Efficiency** | The rules for the 3-tier index and reading budgets. |
| `scaffolding-guide.md` | **Scaffold** | How to build the "Walking Skeleton" (Gate BL_M1). |

---

## 🛠️ Specialized Subdirectories

### 📂 `/hooks` (Automation Layer)
*   **`/scripts`**: Node.js tools like `check-drift.js` and `update-progress.js` that run on tool boundaries.
*   **`/instructions`**: Markdown "code" that tells the agent how to execute the hooks.
*   **`/git-hooks`**: Pre-commit and post-commit bash scripts for universal Git-level safety.

### 📂 `/docs` (Project Documentation Templates)
*   `project-map.md`: Tier 0 index template.
*   `module-map.md`: Tier 1 index template.
*   `adr-log.md`: Architecture Decision Record log.
*   `quality-scorecard.md`: Verification results for Milestone Gates (BL_M*).

### 📂 `/harness-adapters` (Agent Shims)
*   `claude-code.md`, `antigravity.md`, `codex.md`: Specific activation settings for each AI tool.

### 📂 `/rules` & `/rule-templates`
*   **`/rules`**: Universal standards for Security, Testing, and Git workflow.
*   **`/rule-templates`**: Stack-specific conventions (Flutter, Web, Python, etc.).

### 📂 `/gates` (Human Approval)
*   `BL_M_milestone.md` through `BL_M_acceptance.md`: Checkpoints where the AI must stop for human review.

### 📂 `/scripts` (Framework Utilities)
*   `generate-codebase-index.js`: Automatically builds the 3-tier index.
*   `generate-skill-index.js`: Scans the `skills/` folder to build a lookup table for the AI.
