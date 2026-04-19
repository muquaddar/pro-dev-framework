# Preflight Environment Checklist

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 3 (Scaffold) | **Category:** Utility
> **Purpose:** Run once per machine/project, before starting your first PDF coding session.

---

## 1. Select Project Tier

| Tier | When to Use |
|---|---|
| **Lite** | Weekend hack, prototype, learning project, PoC |
| **Standard** | Multi-week shipping product, client project, SaaS MVP |
| **Enterprise** | Team project, compliance requirements, production system |

- [ ] **Selected tier:** ____________

---

## 2. Choose Your AI Agent & Adapter

Read `building-kit/harness-adapters/README.md` for the full decision table.

| Agent | Adapter File | Key Setup |
|---|---|---|
| Claude Code | `harness-adapters/claude-code.md` | Creates `CLAUDE.md` shim → `AGENT.md` |
| Codex (OpenAI) | `harness-adapters/codex.md` | Creates `AGENTS.md` shim, sandbox config |
| Antigravity | `harness-adapters/antigravity.md` | KI workflow, `brain/` directory |
| OpenCode | `harness-adapters/opencode.md` | Rules directory, context injection |
| Generic | `harness-adapters/generic.md` | Filesystem-only, works with any agent |

- [ ] **Selected agent:** ____________
- [ ] **Adapter setup complete** (followed adapter file instructions)

---

## 3. Configure Sandbox

> The AI agent should NOT have unrestricted access to your machine.

### Minimum Restrictions
- [ ] Agent cannot access files outside project directory.
- [ ] Agent cannot make unrestricted network requests.
- [ ] Agent cannot install system-level packages without approval.
- [ ] Agent cannot execute destructive commands (`rm -rf`, `DROP TABLE`, etc.).

### Configure Permission Deny-List
Create a generic `deny-list.txt` or configure it in your agent platform:

```text
## Deny List — Agent Must NOT:
- Read or write files outside: [project root]
- Access directories: ~/.ssh, ~/.aws, ~/.config/gcloud, ~/.*credentials*
- Run commands: rm -rf, DROP, TRUNCATE, shutdown, reboot
- Install: system packages, global npm packages, kernel modules
- Access URLs: internal network, localhost ports not in use by this project
```

- [ ] **Deny-list configured**

---

## 4. Identity Separation

> Don't let the AI agent use your personal credentials.

- [ ] Project uses its own `.env` file (not linked to personal accounts).
- [ ] API keys are project-scoped (not personal keys).
- [ ] Git commits use a project-appropriate author identity.
- [ ] No personal tokens/passwords in project files or environment.

---

## 5. Copy Framework Files (See Stack Setup Guide)

### Always Copy (All Tiers)
- [ ] `AGENT.md` → project root (filled with Phase 5 output).
- [ ] `building-kit/rules/` → ported into local project `.agent-rules/`.
- [ ] `building-kit/rule-templates/[your-stack].md` → ported to `.agent-rules/`.
- [ ] `docs/project-map.md`.

---

## 6. Adapter-Specific Shim

> Your adapter creates a shim file so the agent auto-discovers `AGENT.md`.

- [ ] **Shim file created (e.g., CLAUDE.md)**

---

## 7. Verify Setup

- [ ] Agent can read `AGENT.md` (run agent, ask it to summarize the project).
- [ ] Agent can read local rule files.
- [ ] Agent cannot access deny-listed paths.
- [ ] Git is configured and can commit.

---

## ✅ Preflight Complete

Proceed to the **Scaffolding Guide** to initialize your specific tech stack.
