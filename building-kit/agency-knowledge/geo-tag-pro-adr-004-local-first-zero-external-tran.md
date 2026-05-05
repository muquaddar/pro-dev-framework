# Skill: Local-first, zero external transmission

> **Source:** geo-tag-pro ADR-004 | **Kit:** Building Kit
> **Category:** Agency Knowledge | **Added:** 2026-05-01
> **Tags:** {{add-relevant-tags e.g. flutter, android, database, auth}}

---

## When to Apply

Use this skill when: {{FILL IN — describe the trigger condition. e.g., "implementing camera integration on Android" or "adding a new database entity"}}

---

## The Decision

No backend for photo or GPS data. Only email (for Pro registration) leaves the device. All images, GPS coordinates, forensic hashes, and audit logs stay on-device.

---

## Why This Choice

- GDPR baseline is trivial (no data controllers/processors other than email marketing)
- No server-side attack surface

---

## What NOT to Use (and Why)

- Cloud sync (rejected — GDPR complexity, infra cost, attack surface); opt-in cloud backup (deferred to post-v1.0).

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
- **ADR:** ADR-004 in `/docs/adr-log.md`
- **Context:** GDPR compliance + academic privacy requirements + simpler infra.
