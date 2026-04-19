# Framework Digest — PDF v1.0.0

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Purpose:** Compressed rules (~500 words) embedded into every AGENT.md.
> An agent reading ONLY this digest + AGENT.md can follow PDF correctly.

---

## Copy the block below into AGENT.md → Framework Digest section.

---

```markdown
## Framework Digest (PDF v1.0.0)

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

### Session Start Protocol
1. Read AGENT.md (always — this file).
2. Read `docs/project-map.md` (Tier 0 — ~80 tokens).
3. Check `docs/progress.md` for current position.
4. Read latest session snapshot from `memory/sessions/` (if exists).
5. Confirm position with human before modifying code.

### Per-Task Workflow
1. Find domain in project-map → load Tier 1 index (`docs/index/[domain].md`).
2. If needed, load Tier 2 symbols (`docs/index/symbols/[domain].md`).
3. Read source file(s) — max 5 files, max 800 lines per task.
4. Implement → test → update index if structure changed.
5. Drift check every 3 tasks: on-task? in-scope? no unapproved deps?

### Code Rules
- Max 500 lines per file. Split proactively at 400.
- No circular imports. Dependencies flow: UI → Logic → Data.
- No secrets in code. No console.log debugging left behind.
- Error handling: never swallow silently. Fail fast at boundaries.
- Comments explain WHY, not WHAT. TODO format: `TODO(name): description — milestone`.

### Milestone Workflow
Gate 2 (approve scope) → implement tasks → drift checks → Gate 4 (verify):
- Fill `docs/quality-scorecard.md`: coverage, lint, file size, circular deps, security.
- Update `docs/progress.md` and AGENT.md state block.

### Switch Protocol (session end)
1. Save session snapshot → `memory/sessions/[date]-[agent].md`.
2. Update AGENT.md → Current State block.
3. Update `docs/progress.md`.
4. Ask target platform → generate handover (paste-ready or file-based).
5. NEVER end a session without saving state.

### Skills
On-demand knowledge files in the skill library. Discovery chain:
ROOT_INDEX → domain index → skill file. Never read proactively.
Search when: unfamiliar tech, new pattern, stuck, or human says so.

### Index Protocol
- **Tier 0:** `docs/project-map.md` — domain overview (~80 tokens). Read FIRST.
- **Tier 1:** `docs/index/[domain].md` — file list, exports, volatility. Read per-task.
- **Tier 2:** `docs/index/symbols/[domain].md` — full signatures. Read when writing code.
- NEVER skip the map and browse directories directly.
```
