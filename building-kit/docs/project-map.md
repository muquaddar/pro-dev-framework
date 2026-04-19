# Project Map — [Project Name]

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> **Tier 0 — Always consulted first.** ~80 tokens.
> Module-level overview. No file paths, no exports.

---

**Active Milestone:** M1
**Project Tier:** [Lite / Standard / Enterprise]
**Last Updated:** [date]

## Domains

| Domain | Responsibility | Index File | Status |
|---|---|---|---|
| [domain-1] | [what this domain handles] | `docs/index/[domain-1].md` | ACTIVE |
| [domain-2] | [what this domain handles] | `docs/index/[domain-2].md` | STABLE |
| [domain-3] | [what this domain handles] | `docs/index/[domain-3].md` | STABLE |

## Changed Since Last Session

```text
MODIFIED: [file path] ([what changed])
NEW: [file path]
DELETED: [file path]
```

## Task Lenses Available

| Lens | Use When | File |
|---|---|---|
| API Endpoint | Adding/modifying API routes | `docs/lenses/api-endpoint.md` |
| New Screen | Building a new UI page/screen | `docs/lenses/new-screen.md` |
| Auth Flow | Working on authentication | `docs/lenses/auth-flow.md` |
| Data Change | Modifying models/migrations | `docs/lenses/data-change.md` |

## How to Use This Map

1. **Find your domain** in the table above.
2. **Load its Tier 1 index:** `docs/index/[domain].md` — file table with signatures.
3. **If writing code,** load Tier 2: `docs/index/symbols/[domain].md` — full signatures.
4. **If a lens matches your task,** use it instead of step 2.
5. **NEVER skip this map** and browse directories directly.

### Volatility Tags
- `STABLE` — Trust session memory. No re-read needed.
- `ACTIVE` — Being worked on this milestone. Re-read at session start.
- `LOCKED` — Generated/migrations. Agent must NOT modify.

---

<!-- 
EXAMPLE for a web app:

| Domain | Responsibility | Index File | Status |
|---|---|---|---|
| auth | Login, sessions, tokens, roles | docs/index/auth.md | STABLE |
| users | User profiles, preferences, settings | docs/index/users.md | ACTIVE |
| courses | Course CRUD, enrollment, content | docs/index/courses.md | ACTIVE |
| payments | Stripe billing, subscriptions | docs/index/payments.md | STABLE |
| ui | Shared design system, primitives | docs/index/ui.md | STABLE |
| config | Database, env, middleware | docs/index/config.md | LOCKED |

Changed Since Last Session:
MODIFIED: src/features/users/user.service.ts (added profile photo upload)
NEW: src/features/users/photo.service.ts
-->
