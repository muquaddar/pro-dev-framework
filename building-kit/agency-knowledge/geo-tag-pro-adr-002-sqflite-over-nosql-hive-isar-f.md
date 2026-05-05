# Skill: sqflite over NoSQL (Hive/Isar) for forensic data

> **Source:** geo-tag-pro ADR-002 | **Kit:** Building Kit
> **Category:** Agency Knowledge | **Added:** 2026-05-01
> **Tags:** {{add-relevant-tags e.g. flutter, android, database, auth}}

---

## When to Apply

Use this skill when: {{FILL IN — describe the trigger condition. e.g., "implementing camera integration on Android" or "adding a new database entity"}}

---

## The Decision

Use `sqflite` (relational SQLite) with indexed columns on `timestamp` and `lat/lon`. Supports 10,000+ photo datasets.

---

## Why This Choice

- Standard SQL exports for academic tools
- Indexed queries scale to 10k+ captures

---

## What NOT to Use (and Why)

- Hive (rejected — proprietary binary format, poor for external audit); Isar (rejected — query DSL, not standard SQL).

---

## Gotchas / Traps

- _Fill in from ADR consequences (-) lines._

---

## Example Pattern

```dart
// TODO: Add a minimal code example demonstrating the pattern.
// Keep it under 30 lines — just enough to show the key structure.
```

---

## Source Project Context

- **Project:** geo-tag-pro
- **ADR:** ADR-002 in `/docs/adr-log.md`
- **Context:** Academic/legal reviewers need to query photo metadata with standard SQL tools (ArcGIS, QGIS export pipelines).
