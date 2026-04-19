# Stack Setup Guide

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 3 (Scaffold) | **Category:** Utility
> **Purpose:** Pick your project type → get the right files.

---

## Files for EVERY Project (All Tiers, All Stacks)

```
AGENT.md                               ← project brain (fill with Phase 5 summary)
.agent-rules/code-architecture.md      ← 500-line limit, modular patterns
.agent-rules/git-workflow.md           ← commits, branches, recovery
.agent-rules/debugging.md             ← error handling, agent mistakes
.agent-rules/testing.md               ← when/what/how to test (tier-based)
.agent-rules/dependencies.md          ← package management rules
.agent-rules/security.md              ← security basics + gate 3 triggers
docs/project-map.md                    ← Tier 0 index (always consulted first)
docs/progress.md                       ← task tracker + session log
docs/milestone-checklist.md            ← pre-release verification
```

### Standard + Enterprise: Also Add
```
.agent-rules/multi-agent.md           ← if using parallel agent instances
docs/index/                            ← Tier 1 indexes (per domain)
docs/lenses/                           ← Task lens files
docs/adr-log.md                        ← architectural decision records
memory/                                ← session memory directory
```

### Enterprise: Also Add
```
docs/index/symbols/                    ← Tier 2 symbol indexes
```

---

## Then Add Stack-Specific Rules

### Web App (React/Next.js/Vue + Node/Express/FastAPI)
```
.agent-rules/web-app.md               ← from rule-templates/web-app.md
```
Add to docs/:
```
docs/api-spec.md                       ← from Phase 5
docs/data-model.md                     ← from Phase 5
docs/screen-map.md                     ← from Phase 3 + Phase 4
```

---

### Flutter App (Mobile / Cross-Platform)
```
.agent-rules/flutter.md               ← from rule-templates/flutter.md
```
Add to docs/:
```
docs/screen-map.md                     ← from Phase 3 + Phase 4
docs/data-model.md                     ← if has backend
docs/api-spec.md                       ← if has custom API
```

---

### Python Project (API / CLI / Data / Desktop)
```
.agent-rules/python.md                ← from rule-templates/python.md
```
Add to docs/:
```
docs/module-map.md                     ← from Phase 5 (primary for non-UI)
docs/data-model.md                     ← from Phase 5
docs/api-spec.md                       ← if API project
docs/screen-map.md                     ← if desktop GUI project
```

---

### Windows Desktop (C# / WPF / WinUI / Electron)
```
.agent-rules/windows-desktop.md       ← from rule-templates/windows-desktop.md
```
Add to docs/:
```
docs/screen-map.md                     ← windows/dialogs = screens
docs/module-map.md                     ← service/viewmodel architecture
docs/data-model.md                     ← if uses database
```

---

### Unity (3D / Game / Interactive)
```
.agent-rules/unity.md                 ← from rule-templates/unity.md
```
Add to docs/:
```
docs/module-map.md                     ← game systems, managers, data flow
docs/screen-map.md                     ← UI panels (HUD, menus, dialogs)
docs/data-model.md                     ← ScriptableObjects, save data
```

---

## What Goes Where — Quick Reference

| Doc File | When to Use | Source |
|---|---|---|
| `docs/project-map.md` | ALL projects | Tier 0 index — created at scaffold |
| `docs/index/[domain].md` | Standard + Enterprise | Tier 1 — generated during coding |
| `docs/index/symbols/[domain].md` | Enterprise | Tier 2 — generated when modifying |
| `docs/progress.md` | ALL projects | Phase 2 milestones → tasks |
| `docs/milestone-checklist.md` | ALL projects | Before each release |
| `docs/api-spec.md` | Projects with HTTP APIs | Phase 5 |
| `docs/screen-map.md` | Projects with visual UI | Phase 3 + Phase 4 |
| `docs/module-map.md` | Non-UI or complex modules | Phase 5 |
| `docs/data-model.md` | Projects with data persistence | Phase 5 |
| `docs/adr-log.md` | Standard + Enterprise | Architecture decisions |
