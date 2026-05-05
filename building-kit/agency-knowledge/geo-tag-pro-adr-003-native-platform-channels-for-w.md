# Skill: Native Platform Channels for watermark burn-in

> **Source:** geo-tag-pro ADR-003 | **Kit:** Building Kit
> **Category:** Agency Knowledge | **Added:** 2026-05-01
> **Tags:** {{add-relevant-tags e.g. flutter, android, database, auth}}

---

## When to Apply

Use this skill when: {{FILL IN — describe the trigger condition. e.g., "implementing camera integration on Android" or "adding a new database entity"}}

---

## The Decision

Bridge to native Kotlin/C++ via MethodChannel for the image composition step. Dart handles UI and state; native handles pixel manipulation using hardware-accelerated Bitmaps.

---

## Why This Choice

- Meets <500ms performance target

---

## What NOT to Use (and Why)

- `image` Dart package (rejected — >2s per 12MP image); FFI to skia (rejected — excessive complexity for v1.0).

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
- **ADR:** ADR-003 in `/docs/adr-log.md`
- **Context:** Watermark burn-in target is <500ms per 12MP image. Pure Dart image libraries cannot hit this on mid-range Android hardware.
