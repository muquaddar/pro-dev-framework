# Harness Adapters — Agent-Specific Shims

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Purpose:** Map universal PDF concepts to agent-native syntax

---

## What Are Harness Adapters?

The Pro Dev Framework is **agent-agnostic** — all core methodology, rules, and templates use universally understood markdown and file conventions. However, each IDE agent has its own quirks:

- **Claude Code** reads `CLAUDE.md` automatically
- **Codex** reads `AGENTS.md` automatically
- **Antigravity** reads workspace files on demand
- **OpenCode** reads `AGENTS.md`

A **harness adapter** is a small translation layer that maps PDF's universal concepts to whatever the specific agent expects. Think of it like a device driver — the framework is the OS, the adapter is the driver for your specific agent.

---

## How They Work

```
┌─────────────────────────────────────────────────────────┐
│  AGENT.md (universal project brain)                     │
│  ├── Framework Digest (~500 words)                      │
│  ├── Current State (stage, milestone, task)              │
│  ├── Planning Package Index                             │
│  ├── Architecture Summary                               │
│  └── Code Rules                                         │
└────────────────────────▲────────────────────────────────┘
                         │ reads
┌────────────────────────┴────────────────────────────────┐
│  Harness Adapter Shim (1-line file)                     │
│                                                         │
│  CLAUDE.md  → "Read AGENT.md for all project context."  │
│  AGENTS.md  → "Read AGENT.md for all project context."  │
│                                                         │
│  These shims redirect any agent to AGENT.md             │
│  so there's ONE source of truth.                        │
└─────────────────────────────────────────────────────────┘
```

### What Each Adapter Provides

1. **Shim file** — One-liner redirecting the agent to AGENT.md
2. **Concept mapping table** — How PDF terms translate to agent-native terms
3. **Activation prompt** — Copy-paste prompt to boot the agent into PDF mode
4. **Session behavior** — How to configure session start/end for this agent
5. **Resume protocol** — How the agent picks up after downtime or handoff
6. **Known limitations** — What the agent can't do that PDF expects

---

## Choosing Your Adapter

| Agent | File | Auto-Reads | Best For |
|---|---|---|---|
| **Claude Code** | `claude-code.md` | `CLAUDE.md` | Full-stack, strong reasoning |
| **Codex CLI** | `codex.md` | `AGENTS.md` | Autonomous task execution |
| **Antigravity** | `antigravity.md` | Workspace files | Iterative pair programming |
| **OpenCode** | `opencode.md` | `AGENTS.md` | Lightweight, open-source |
| **Generic** | `generic.md` | None (manual) | Any agent with file access |

**Don't see your agent?** Use `generic.md` — it works with any agent that can read files and run terminal commands.

---

## Setup (All Agents)

### Step 1: Generate Shim Files

At Build Handoff (Stage 2 → Stage 3), the Planning Kit generates these files in your project root:

```
my-project/
├── AGENT.md      ← The universal project brain (always generated)
├── CLAUDE.md     ← Shim for Claude Code (auto-generated)
├── AGENTS.md     ← Shim for Codex/OpenCode (auto-generated)
```

Each shim is a one-liner:
```markdown
Read AGENT.md for all project context, rules, and current state.
```

### Step 2: Read Your Adapter

Open the adapter file for your agent. It contains:
- The activation prompt to paste on first use
- Session configuration specific to that agent
- Any workarounds for that agent's limitations

### Step 3: Activate

Paste the activation prompt from your adapter into your IDE agent. The agent validates the planning package, announces its position ("Resuming at Stage 3, M1"), and begins scaffolding.

---

## Adapter File Format

Every adapter follows this standard structure:

```markdown
# [Agent Name] — PDF Harness Adapter

## Shim File
What file to create and where to place it.

## Concept Mapping
| PDF Concept | [Agent] Equivalent |
|---|---|

## Activation Prompt
Copy-paste to boot the agent into PDF mode.

## Session Configuration
How to set up session start/end behavior.

## Resume Protocol
What to read and in what order when resuming.

## Known Limitations & Workarounds
What the agent can't do that PDF expects.
```

---

## Multi-Agent Workflows

You can use different agents for different milestones or tasks. The Universal State Protocol ensures seamless handoffs:

1. Agent A finishes work → triggers Switch Protocol → saves state
2. User opens Agent B → Agent B reads AGENT.md → announces position
3. Agent B continues from where Agent A left off

The shim files (CLAUDE.md, AGENTS.md) ensure every agent finds AGENT.md regardless of which file it auto-reads.
