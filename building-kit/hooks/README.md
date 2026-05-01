# Hooks — Event-Driven Automation for the Building Kit

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 3.5 (Wire Hooks) | **Companion to:** [harness-adapters/](../harness-adapters/), [rules/session-management.md](../rules/session-management.md), [rules/drift-detection.md](../rules/drift-detection.md)

---

## What This Directory Provides

A **hook** is an event-driven trigger that runs without the agent having to remember to invoke it. The framework enforces several disciplines (write a session snapshot, run a drift check every 3 tasks, validate planning docs after edits, sync `progress.md`) that historically depended on the agent staying disciplined. Hooks move that responsibility off the agent.

This directory ships:

| Folder | Purpose |
|---|---|
| [`scripts/`](scripts/) | Generic, agent-agnostic Node.js scripts. Idempotent. Exit 0 on non-fatal errors. |
| [`git-hooks/`](git-hooks/) | Universal git hook templates (`pre-commit`, `post-commit`). Work regardless of agent. |
| [`instructions/`](instructions/) | AI-instruction templates for harnesses that lack script-hook surfaces. The agent runs them as part of its turn. |
| [`presets/`](presets/) | Tier-specific bundles: [Lite](presets/lite.md), [Standard](presets/standard.md), [Enterprise](presets/enterprise.md). |

The goal is **agent-agnostic**: any IDE agent — Claude Code, Codex, Antigravity, OpenCode, or a future one — can wire the same hooks via its own native surface, with consistent on-disk effects (snapshots, progress updates, drift flags).

---

## Three Delivery Layers

Different harnesses expose different hook surfaces. The building-kit uses three layers in combination so coverage is consistent regardless of agent:

```
┌─────────────────────────────────────────────────────────────────────┐
│ Layer 1: Harness-native script hooks                                │
│ ───────────────────────────────────                                 │
│ Fired by the agent's runtime on tool-call boundaries.               │
│ Example: Claude Code settings.json → PreToolUse / PostToolUse /     │
│          Stop / SessionStart / UserPromptSubmit                     │
│ Calls scripts/*.js directly. Deterministic. No agent involvement.   │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              │  Fallback when harness lacks
                              │  this surface (Codex, Antigravity,
                              │  OpenCode, generic agents)
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│ Layer 2: AI-instruction hooks                                       │
│ ─────────────────────────────                                       │
│ Markdown rules in the harness adapter / AGENT.md that the agent     │
│ follows during its turn (e.g., "after every 3 file edits, run       │
│ scripts/check-drift.js").                                           │
│ Calls the same scripts/*.js, but invocation depends on agent        │
│ discipline. Less reliable than Layer 1 but works everywhere.        │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              │  Augmented by harness-independent
                              │  triggers
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│ Layer 3: Out-of-band triggers                                       │
│ ────────────────────────────                                        │
│ Git hooks (.git/hooks/pre-commit, post-commit) — fire on commit     │
│ regardless of which agent committed.                                │
│ Cron / scheduler — fire on wall-clock for time-based events the     │
│ agent has no notion of (e.g., 30-min drift backstop).               │
└─────────────────────────────────────────────────────────────────────┘
```

**Rule of thumb:** Wire Layer 1 wherever the harness supports it. Use Layer 2 as fallback. Always wire Layer 3 git hooks — they cost nothing and catch everything that flows through commits.

---

## Universal Event Taxonomy

The same events fire across every harness, even though the trigger mechanism differs. See [events.md](events.md) for the full catalog. Five categories:

| Category | Examples | Primary script |
|---|---|---|
| **Session boundary** | Session start, session end, long dormancy resume, platform switch | `session-start.js`, `capture-session-state.js` |
| **Task & drift** | Task completion, every-3-task drift check, file size > 500 lines, new dependency | `update-progress.js`, `check-drift.js` |
| **Gate & milestone** | Milestone start (Gate 2), security-sensitive code (Gate 3), milestone end (Gate 4), pre-release (Gate 5) | `gate-check.js` |
| **Code & commit** | Pre-commit, post-commit, branch created, milestone tag pushed | `git-hooks/*` |
| **Planning & doc** | Planning doc edited, AGENT.md regenerated, ADR added | `validate-doc.js` |

---

## Choosing a Tier Preset

Pick a preset based on project tier (matches the framework's Lite/Standard/Enterprise tiers):

| Preset | Hook Count | Right for | File |
|---|---|---|---|
| **Lite** | 3 | Solo dev, weekend project. Don't lose state between sessions. | [presets/lite.md](presets/lite.md) |
| **Standard** | 8 | Multi-week product, parallel work streams, real gates. | [presets/standard.md](presets/standard.md) |
| **Enterprise** | 12+ | Compliance, audit trail, multi-agent traceability. | [presets/enterprise.md](presets/enterprise.md) |

Each preset documents which hooks fire on which events and points to the harness-specific config snippets.

---

## How to Wire Hooks (Stage 3.5)

See [hook-setup-guide.md](../hook-setup-guide.md) for the full step-by-step. In summary:

1. **Detect harness** (Claude Code / Codex / Antigravity / OpenCode / generic).
2. **Pick tier preset** — Lite, Standard, or Enterprise.
3. **Apply Layer 1 config** from the harness adapter's "Hooks" section. If the harness has no script-hook surface, apply the Layer 2 instructions instead.
4. **Install Layer 3 git hooks** — copy from `git-hooks/` into `.git/hooks/`.
5. **Verify** — run `node scripts/session-start.js` and `node scripts/capture-session-state.js` end-to-end on a throwaway session.
6. **Document** — add an "Active Hooks" table to the project's `AGENT.md`.

---

## Design Constraints (Read Before Modifying Scripts)

All scripts in `scripts/` follow these constraints so they are safe to wire as hooks:

| Constraint | Reason |
|---|---|
| **Idempotent.** Running twice produces the same result. | Hooks may fire more than once per logical event. |
| **Exit 0 on non-fatal errors.** Log to `memory/hooks.log`, do not block the agent. | A crashing hook must not block the user's tool call. |
| **No large stdout output.** Print one summary line; write detail to log. | Hook output may be appended to agent context — keep it cheap. |
| **Marker files for re-entry guards.** Each script writes `memory/.hook-pulse-[name]` while running and skips if found. | Prevents infinite loops (hook writes file → triggers PostToolUse → fires hook). |
| **Respect `.gitignore`.** Never read `.env`, never write secrets into snapshots. | Snapshots get committed. |
| **No required dependencies.** Use Node stdlib only. | Scripts must run in a freshly-scaffolded project before `npm install`. |
| **Path-relative to project root.** Take optional `[project-path]` arg, default to `process.cwd()`. | Hooks fire from various working directories. |

If you need richer functionality, the [PDF Dashboard](../../../pdf-dashboard/) ships an extended set of 26 scripts that the same harness configs can swap in.

---

## File Effects — What Hooks Write

Each script writes to specific files under the project. Knowing the write surface helps you predict and audit hook behavior.

| Script | Writes |
|---|---|
| `session-start.js` | `memory/sessions/.current.json` |
| `capture-session-state.js` | `memory/sessions/YYYY-MM-DD-[agent].md`, updates `AGENT.md` Current State |
| `update-progress.js` | `memory/sessions/active.jsonl`, updates `docs/progress.md` checkboxes |
| `check-drift.js` | `memory/hooks.log` (drift events), prints summary to stdout |
| `validate-doc.js` | `memory/hooks.log` (validation results), prints pass/fail |
| `gate-check.js` | `docs/gates/GATE-NN-report.md`, prints summary |
| `git-hooks/pre-commit` | Blocks commit if `validate-doc.js` fails |
| `git-hooks/post-commit` | Updates `docs/manifest.md` |

---

## See Also

- [hook-setup-guide.md](../hook-setup-guide.md) — Stage 3.5 walkthrough
- [events.md](events.md) — full event catalog
- [harness-adapters/](../harness-adapters/) — agent-specific hook configs
- [rules/session-management.md](../rules/session-management.md) — Switch Protocol (what hooks automate)
- [rules/drift-detection.md](../rules/drift-detection.md) — Drift loop (what hooks automate)
