# Hook Event Catalog

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Purpose:** Universal taxonomy of building-kit lifecycle events — agent-agnostic. Each event maps to a script (Layer 1/2) and/or a workflow trigger (Layer 3).

---

## How to Read This Catalog

Every event has four facets:

| Facet | Meaning |
|---|---|
| **Trigger** | What fires the event (tool boundary, file change, git op, time, gate decision). |
| **Layer** | Where the hook can run: 1 = harness script hook, 2 = AI instruction, 3 = git/cron. |
| **Script** | The generic script in `scripts/` (or git-hook in `git-hooks/`) that handles it. |
| **Tier** | Lite (3 hooks) / Standard (8) / Enterprise (12+) — which preset includes it. |

The same event has different Layer 1 mappings depending on the harness. The harness adapter for each agent translates the universal event to the harness's native surface.

---

## A. Session Boundary Events

| Event | Trigger | Layer | Script | Tier |
|---|---|---|---|---|
| **session-start** | Agent enters project / first prompt of session | 1 (preferred), 2 (fallback) | `session-start.js` | Lite+ |
| **session-end** | "switch", "done", context full, Stop event | 1 (preferred), 2 (fallback) | `capture-session-state.js` | Lite+ |
| **long-dormancy-resume** | Session start && last-active > 14 days | 1 + 2 | `session-start.js --reorient` | Standard+ |
| **platform-switch** | User says "hand over to [other agent]" | 2 | `capture-session-state.js --handover` | Standard+ |

**What gets automated:**
- The agent no longer has to *remember* to read `AGENT.md` and the latest snapshot — it happens before the agent's first turn.
- The agent no longer has to *remember* to write a snapshot — it happens on the Stop event regardless of how the session ends.

---

## B. Task & Drift Events

| Event | Trigger | Layer | Script | Tier |
|---|---|---|---|---|
| **task-complete / file-edit** | PostToolUse on Edit/Write | 1 (preferred), 2 (fallback) | `update-progress.js` | Lite+ |
| **drift-check-task-interval** | Every 3 file edits | 1 (preferred), 2 (fallback) | `check-drift.js --threshold 3` | Standard+ |
| **drift-check-time-interval** | Every 30 min wall-clock | 3 (cron) | `check-drift.js --interval` | Enterprise |
| **file-size-violation** | Any Write/Edit producing > 500 lines | 1 (preferred), 2 (fallback) | `check-drift.js --check size` | Standard+ |
| **new-dependency** | PostToolUse on package.json / requirements.txt / pyproject.toml / pubspec.yaml | 1 (preferred), 2 (fallback) | `check-drift.js --check deps` | Standard+ |

**What gets automated:**
- Drift counting (every 3 tasks) — script does the count, agent does not have to.
- 500-line check — script does it on every write, agent does not have to.
- Dependency-add detection — script flags an unapproved dep before it's committed.

---

## C. Gate & Milestone Events

| Event | Trigger | Layer | Script | Tier |
|---|---|---|---|---|
| **milestone-start** (Gate 2) | User triggers via "/start M[N]" or AI instruction | 2 | `gate-check.js --gate 2 --milestone M[N]` | Standard+ |
| **security-sensitive-edit** (Gate 3) | PostToolUse on file matching auth\|crypto\|token\|secret\|payment | 1 (preferred), 2 (fallback) | `gate-check.js --gate 3 --scan` | Enterprise |
| **milestone-end** (Gate 4) | User triggers / pre-merge | 2 + 3 (git pre-merge) | `gate-check.js --gate 4` | Standard+ |
| **pre-release** (Gate 5) | User triggers before deploy | 2 | `gate-check.js --gate 5` | Standard+ |
| **launch-readiness** (Gate 6) | All work-streams green check | 2 | `gate-check.js --gate 6 --all-streams` | Enterprise |
| **continue-or-sunset** (Gate 7) | Quarterly cron | 3 (cron) | `gate-check.js --gate 7 --quarterly` | Enterprise |

**What gets automated:**
- Gate readiness reports compose themselves from disk state instead of the agent assembling them by hand.
- Security keyword scan fires on every relevant Edit/Write — Gate 3 cannot be missed by accident.

---

## D. Code & Commit Events

| Event | Trigger | Layer | Script | Tier |
|---|---|---|---|---|
| **pre-commit** | git commit | 3 (git hook) | `git-hooks/pre-commit` → `validate-doc.js` + lint + secret scan | Standard+ |
| **post-commit** | git commit complete | 3 (git hook) | `git-hooks/post-commit` → updates `docs/manifest.md` | Standard+ |
| **branch-created** | git checkout -b | 3 (git hook, optional) | log to `memory/branches.log` | Enterprise |
| **milestone-tag-pushed** | git tag matching `M[N]-*` | 3 (post-tag git hook) | `gate-check.js --finalize` | Enterprise |

**What gets automated:**
- Manifest stays in sync with on-disk truth without anyone running `sync-manifest` manually.
- Pre-commit catches doc drift, secret leaks, lint failures before they enter history.

---

## E. Planning & Doc Events

| Event | Trigger | Layer | Script | Tier |
|---|---|---|---|---|
| **planning-doc-edited** | PostToolUse on `docs/*.md` | 1 (preferred), 2 (fallback) | `validate-doc.js` | Standard+ |
| **agent-md-edited** | PostToolUse on `AGENT.md` | 1 (preferred), 2 (fallback) | `validate-doc.js --agent-md` | Standard+ |
| **adr-added** | New file under `docs/adr/` | 1 (preferred), 2 (fallback) | append to `docs/adr-log.md` | Standard+ |
| **skill-discovered** | New file under skills directory | 2 | regenerate skill index | Standard+ |

**What gets automated:**
- Planning docs that are missing required headings or have placeholder TODOs are flagged immediately, not at gate-review time.
- ADR log stays consistent with the per-decision files in `docs/adr/`.

---

## Coverage Matrix by Tier

| Event Category | Lite | Standard | Enterprise |
|---|---|---|---|
| Session boundary | session-start, session-end | + long-dormancy, platform-switch | (same) |
| Task & drift | task-complete | + drift-check (3-task), file-size, new-dep | + drift-check (30-min) |
| Gate & milestone | — | milestone-start, milestone-end, pre-release | + security-edit, launch-ready, quarterly |
| Code & commit | — | pre-commit, post-commit | + branch-created, milestone-tag |
| Planning & doc | — | planning-doc-edited, agent-md-edited, adr-added, skill-discovered | (same) |
| **Total hooks** | **3** | **~8** | **~12+** |

---

## Mapping Events to Harness Hook Surfaces

| Event | Claude Code | Codex | Antigravity | OpenCode | Generic |
|---|---|---|---|---|---|
| session-start | `SessionStart` | AGENTS.md instruction | Activation prompt | AGENTS.md instruction | Activation prompt |
| session-end | `Stop` | AGENTS.md instruction | AGENT.md "session end" rule | AGENTS.md instruction | AGENT.md "session end" rule |
| task-complete | `PostToolUse` matcher `Edit\|Write` | AGENTS.md "after every edit" rule | AGENT.md "after every edit" rule | AGENTS.md instruction | AGENT.md instruction |
| drift-check (3-task) | `PostToolUse` + counter | AI instruction (agent counts) | AI instruction | AI instruction | AI instruction |
| pre-commit | git hook (Layer 3) | git hook | git hook | git hook | git hook |
| security-edit | `PostToolUse` matcher with path filter | AI instruction | AI instruction | AI instruction | AI instruction |

**Key insight:** Layer 3 (git hooks, cron) is harness-independent. Layer 1 (script hooks) only exists on harnesses with that surface (today: Claude Code). Layer 2 (AI instructions) covers everything else.

---

## See Also

- [README.md](README.md) — overview and three-layer architecture
- [presets/](presets/) — tier bundles
- [scripts/](scripts/) — script implementations
- [git-hooks/](git-hooks/) — git hook templates
- [instructions/](instructions/) — AI-instruction templates
