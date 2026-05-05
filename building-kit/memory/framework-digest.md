# Framework Digest — PDF v2.0.0

> **Version:** PDF v2.0.0 | **Kit:** Building Kit
> **Purpose:** Compressed rules (~600 words) embedded into every AGENT.md.
> An agent reading ONLY this digest + AGENT.md can follow PDF correctly.
> **v2.0.0 additions:** Hot Zone Scratchpad, Atomic Fragment Retrieval, Model Routing, Agency Knowledge.

---

## Copy the block below into AGENT.md → Framework Digest section.

---

```markdown
## Framework Digest (PDF v2.0.0)

### Lifecycle
8 stages: Idea Validation (-1) → Environment Setup (0) → Stakeholder Discovery (1) → Interactive Planning (2) → Scaffold (3) → Build (4) → Verify (5) → Launch & Ops (6-7). Stages -1 to 2 happen on cloud AI. Stages 3-5 happen here in the IDE. Content streams run in parallel.

### Tiers
- **Lite:** 2-3 milestones, Gate 1 only, no TDD, skip Content/Maintenance kits.
- **Standard:** 4-8 milestones, Gates 1/2/4/5, TDD 60%, Content recommended.
- **Enterprise:** 8-15 milestones, all 7 gates, TDD 80%, all kits mandatory.

### Human Gates
Agent STOPS and presents a gate form. Never auto-proceed.
- **Gate 1:** Architecture approval (after planning).
- **Gate 2:** Milestone start (before each milestone — Standard+).
- **Gate 3:** Security-sensitive code (agent-triggered — Standard+).
- **Gate 4:** Milestone acceptance (after verification — Standard+).
- **Gates 5-7:** Release, launch readiness, continue/sunset (Enterprise).

### Session Start Protocol (v2.0.0)
1. Read AGENT.md (always — this file).
2. Read `.claude-state.md` — Hot Zones, Gotchas, Active ADRs (~300 tokens, replaces 3-4 rule files).
3. Check agency knowledge index BEFORE starting any novel feature.
4. Read `docs/project-map.md` ONLY if .claude-state.md Hot Zones are insufficient.
5. Confirm position with human before modifying code.

### Per-Task Workflow
1. Check `.claude-state.md` Hot Zone — is the file listed? If yes, you already have context.
2. If not hot: find domain in project-map → load Tier 1 (`docs/index/[domain].md`).
3. If writing code: load Tier 2 symbols — use LINE RANGES for files >200 lines (Atomic Fragment).
4. Read only the fragment needed: `Read file lines X–Y`, not the full file.
5. Implement → test → update index if structure changed.
6. Drift check every 3 tasks: on-task? in-scope? no unapproved deps?

### Atomic Fragment Retrieval (v2.0.0)
Tier 2 symbol index includes `[L{start}–L{end}]` for every symbol.
- Files >200 lines: read ONLY the required line range + 5 ghost lines each side.
- Never read a full large file when a line range is available.
- Example: `saveImage [L24–L67]` → read lines 19–72 only (145-line file = 97% saved).

### Zone Reading Strategy (v2.0.0)
| Zone | Source | Action |
|---|---|---|
| Hot | `.claude-state.md` Hot Zones | Read fully at session start |
| Warm | Tier 1 ACTIVE volatility | Read Tier 1 index, then file if needed |
| Cold | Not in Hot/Warm | Tier 2 line-range only |
| Dead | `.claude-state.md` Cold Archive | Skip entirely |

### Model Routing (v2.0.0)
- **Haiku:** discovery, grep, summarize background files
- **Sonnet:** implement features, fix bugs, write tests
- **Opus:** architecture decisions, security review, Gate approvals

### Code Rules
- Max 500 lines per file. Split proactively at 400.
- No circular imports. Dependencies flow: UI → Logic → Data.
- No secrets in code. No console.log debugging left behind.
- Error handling: never swallow silently. Fail fast at boundaries.
- Comments explain WHY, not WHAT. TODO format: `TODO(name): description — milestone`.

### Milestone Workflow
Gate 2 (approve scope) → implement tasks → drift checks → Gate 4 (verify):
- Fill `docs/quality-scorecard.md`: coverage, lint, file size, circular deps, security.
- Update `docs/progress.md`, AGENT.md state block, and `.claude-state.md` Hot Zones.

### Switch Protocol (session end) — v2.0.0
1. Save session snapshot → `memory/sessions/[date]-[agent].md`.
2. Update AGENT.md → Current State block.
3. Update `docs/progress.md`.
4. **Update `.claude-state.md`** → refresh Hot Zones, add new Gotchas, clear Session Notes.
5. If solved a novel pattern: tag the ADR with `#teach`, run `adr-to-skill.js`.
6. Ask target platform → generate handover.
7. NEVER end a session without saving state.

### Agency Knowledge (v2.0.0)
Check `WorkspaceAddOn/pro-dev-framework/building-kit/agency-knowledge/_index.md` BEFORE
implementing any feature you haven't built in this project. If an entry exists, inject it —
don't re-discover. After solving something novel, run `adr-to-skill.js`.

### Skills
On-demand knowledge files in the skill library. Discovery chain:
ROOT_INDEX → domain index → skill file. Never read proactively.
Search when: unfamiliar tech, new pattern, stuck, or human says so.

### Index Protocol
- **Tier 0:** `docs/project-map.md` — domain overview (~80 tokens). Read if .claude-state.md is insufficient.
- **Tier 1:** `docs/index/[domain].md` — file list, exports, volatility. Read per-task.
- **Tier 2:** `docs/index/symbols/[domain].md` — signatures + LINE RANGES. Read when writing code.
- NEVER skip the map and browse directories directly.
- NEVER read a full file >200 lines when a Tier 2 line range is available.
```
