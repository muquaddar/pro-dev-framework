# [Domain] Module Index

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> **Tier 1 — On demand.** ~200-300 tokens per module.
> Per-domain file table with Volatility, Impact, and Mini-Interface.

---

## [domain] module index

**Domain:** [domain name]
**Responsibility:** [what this domain handles]
**Status:** [ACTIVE / STABLE / LOCKED]
**Last Updated:** [date]

### Files

| File | Lines | Volatility | Impact | Mini-Interface |
|---|---|---|---|---|
| `[path/to/file.ext]` | [N] | [STABLE/ACTIVE/LOCKED] | [N] consumers | `functionA(args) → ReturnType` |
| `[path/to/file.ext]` | [N] | [STABLE/ACTIVE/LOCKED] | [N] consumers | `ClassB`, `functionC` |
| `[path/to/file.ext]` | [N] | [STABLE/ACTIVE/LOCKED] | [N] consumers | `middlewareX`, `middlewareY` |

### Dependency Impact

```text
[critical-file.ext] [CRITICAL — N consumers]: [list of consuming files/modules]
[shared-type.ext] [HIGH — N consumers]: [list]
```

### Notes

- [Any domain-specific context the agent should know]
- [Files approaching 400 lines that may need splitting soon]

---

<!--
EXAMPLE: auth module index

| File | Lines | Volatility | Impact | Mini-Interface |
|---|---|---|---|---|
| src/features/auth/auth.service.ts | 120 | STABLE | 8 | `authenticate(creds) → AuthResult`, `refreshToken(token) → AuthResult` |
| src/features/auth/auth.middleware.ts | 45 | STABLE | 12 | `requireAuth`, `requireAdmin`, `requireRole(role)` |
| src/features/auth/auth.routes.ts | 80 | STABLE | 2 | `POST /auth/signup`, `POST /auth/login`, `POST /auth/refresh` |
| src/features/auth/auth.types.ts | 35 | STABLE | 15 | `User`, `AuthResult`, `LoginRequest`, `SignupRequest` |

Dependency Impact:
auth.types.ts [CRITICAL — 15 consumers]: all services, all protected routes, all middleware
auth.middleware.ts [HIGH — 12 consumers]: all protected route files
-->
