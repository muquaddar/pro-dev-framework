# Skill: Flutter + BLoC for integrity-critical state machine

> **Source:** geo-tag-pro ADR-001 | **Kit:** Building Kit
> **Category:** Agency Knowledge | **Added:** 2026-05-01
> **Tags:** {{add-relevant-tags e.g. flutter, android, database, auth}}

---

## When to Apply

Use this skill when: {{FILL IN — describe the trigger condition. e.g., "implementing camera integration on Android" or "adding a new database entity"}}

---

## The Decision

Use Flutter with `flutter_bloc`. BLoC enforces explicit state transitions via events; auditors can inspect the state machine as documentation of the integrity guarantees.

---

## Why This Choice

- Clear audit trail of state transitions
- Cross-platform reuse for iOS (Phase 2 roadmap)

---

## What NOT to Use (and Why)

- Riverpod (rejected — too flexible, less auditable); Provider (rejected — lacks formal state semantics); native Kotlin (rejected — blocks future iOS port).

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
- **ADR:** ADR-001 in `/docs/adr-log.md`
- **Context:** The capture pipeline must enforce a strict state sequence (Capturing → Verifying → Hashing → Sealed) to guarantee forensic integrity. Any race condition could let an unverified capture slip through.
