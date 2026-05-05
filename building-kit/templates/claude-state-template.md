# Project State — {{PROJECT_NAME}}

> **Version:** PDF v2.0.0 | **Kit:** Building Kit
> **Purpose:** Living session scratchpad. Load this at session start INSTEAD of reading all agent-rules individually.
> **Maintained by:** Agent (via Switch Protocol) + Human (manual edits welcome).
> **Last updated:** {{YYYY-MM-DD}} by {{agent-name}}

---

## Current Position

- **Stage:** {{stage_number}} — {{stage_name}}
- **Milestone:** {{milestone_number}} — {{milestone_name}}
- **Active Task:** {{current_task_description}}
- **Blockers:** {{none | describe blocker}}

---

## Hot Zones (read fully at session start)

Files currently being actively worked on. Agent reads these before writing any code.

| File | Why Hot | Last Touched |
|---|---|---|
| `{{lib/features/feature/screen.dart}}` | {{Current feature under development}} | {{YYYY-MM-DD}} |
| `{{lib/features/feature/bloc.dart}}` | {{State machine being implemented}} | {{YYYY-MM-DD}} |

---

## Warm Zones (read Tier 1 index, then file only if needed)

Files that are related to current work but not being actively modified.

- `{{lib/shared/services/}}` — {{e.g., Auth service — referenced but not modified}}
- `{{lib/app/routes.dart}}` — {{Navigation — needs update when new screens added}}

---

## Cold Archive (never read source — use Tier 2 signatures only)

Files that are stable and not expected to change. Do NOT read these files — use their Tier 2 symbol index only.

- `{{lib/app/theme.dart}}` — {{Stable since Milestone 1}}
- `{{android/}}` — {{Native layer — no Dart changes expected}}
- `{{build/}}` — {{Generated — never read}}

---

## Known Gotchas

Critical constraints discovered during this project. These override general framework rules.

- {{e.g., Camera service requires iOS 11+ entry in Info.plist — missing this causes silent crash}}
- {{e.g., sqflite migrations MUST be sequential integers — gaps cause upgrade failures}}
- {{e.g., BLoC events must be immutable — mutable events cause subtle state bugs}}

---

## Patterns We Use

The specific choices made for this project. Do not deviate without a new ADR.

| Concern | Choice | Notes |
|---|---|---|
| State management | {{Bloc / Riverpod / Provider}} | {{See ADR-001}} |
| Local DB | {{sqflite / Drift / Hive}} | {{See ADR-002}} |
| Navigation | {{GoRouter / Navigator 2.0}} | — |
| HTTP client | {{Dio / http}} | — |
| Testing | {{mocktail / mockito}} | — |

---

## Active ADRs (decisions still shaping work)

- **ADR-{{NNN}}** — {{Decision title}} — see `docs/adr-log.md#adr-{{nnn}}`
- **ADR-{{NNN}}** — {{Decision title}} — see `docs/adr-log.md#adr-{{nnn}}`

---

## Agency Knowledge Applied

Cross-project lessons injected into this session. Do NOT re-research these.

- {{e.g., GPS accuracy on Android: use PRIORITY_HIGH_ACCURACY — from geo-tag-pro ADR-003}}
- {{e.g., Camera MethodChannel pattern — from geo-tag-pro, solved 2026-04-22}}

---

## Session Notes (clear each session)

_Use this for in-flight notes during the current session. Cleared at Switch Protocol._

- {{note}}
