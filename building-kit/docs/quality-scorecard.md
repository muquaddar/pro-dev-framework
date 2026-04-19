# Quality Scorecard — [Project Name]

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 5 (Verify) | **Category:** Template
> Completed per milestone as part of the verification stage.
> Input to `gates/GATE-04-acceptance.md`.

---

**Project Tier:** [Lite / Standard / Enterprise]
**Last Updated:** [date]

## Tier Thresholds

| Metric | Lite | Standard | Enterprise |
|---|---|---|---|
| Test Coverage | Manual smoke test | ≥ 60% | ≥ 80% |
| Lint Warnings | 0 errors | 0 errors, ≤ 10 warnings | 0 errors, 0 warnings |
| File Size Violations | ≤ 500 lines | ≤ 500 lines | ≤ 500 lines |
| Circular Dependencies | 0 | 0 | 0 |
| Security Findings | No secrets in code | No critical/high | No critical/high/medium |

---

## Milestone: M[N] — [Milestone Name]

**Date:** [date]
**Reviewer:** [human / agent name]

### Test Coverage

| Metric | Value | Threshold | Pass? |
|---|---|---|---|
| Overall coverage | [X]% | [tier threshold] | ✅ / ❌ |
| Critical paths tested | [Y/Z] | All critical paths | ✅ / ❌ |
| New code coverage | [X]% | Same as overall | ✅ / ❌ |

**Command used:** `[test command with coverage flag]`

### Lint & Code Quality

| Metric | Value | Threshold | Pass? |
|---|---|---|---|
| Lint errors | [N] | 0 | ✅ / ❌ |
| Lint warnings | [N] | [tier threshold] | ✅ / ❌ |
| Unused imports | [N] | 0 | ✅ / ❌ |
| TODO count (this milestone) | [N] | 0 | ✅ / ❌ |

**Command used:** `[lint command]`

### File Size Compliance

| Metric | Value | Threshold | Pass? |
|---|---|---|---|
| Files over 500 lines | [N] | 0 | ✅ / ❌ |
| Files over 400 lines (warning) | [N] | — | ⚠️ |
| Largest file | `[path]` ([N] lines) | ≤ 500 | ✅ / ❌ |

**Command used:** `node scripts/generate-codebase-index.js` (check warnings output)

### Circular Dependencies

| Metric | Value | Threshold | Pass? |
|---|---|---|---|
| Circular import chains | [N] | 0 | ✅ / ❌ |

**Details (if any):**
```text
[file A] → [file B] → [file A]
```

### Security

| Metric | Value | Threshold | Pass? |
|---|---|---|---|
| Secrets in source code | [N] | 0 | ✅ / ❌ |
| Critical vulnerabilities | [N] | 0 | ✅ / ❌ |
| High vulnerabilities | [N] | 0 | ✅ / ❌ |
| Medium vulnerabilities | [N] | [tier threshold] | ✅ / ❌ |
| Dependency audit issues | [N] | [tier threshold] | ✅ / ❌ |

**Tools used:** `[security scan tool / npm audit / etc.]`

### Index Currency

| Metric | Value | Pass? |
|---|---|---|
| `docs/project-map.md` current | Yes / No | ✅ / ❌ |
| `docs/index/` files current | Yes / No | ✅ / ❌ |
| `AGENT.md` state updated | Yes / No | ✅ / ❌ |
| `docs/progress.md` current | Yes / No | ✅ / ❌ |

---

## Overall Verdict

| | Result |
|---|---|
| **All metrics pass?** | ✅ / ❌ |
| **Ready for Gate 4?** | ✅ / ❌ |
| **Blocking issues:** | [none / list issues] |
| **Signed off by:** | [name] |
| **Date:** | [date] |

---

## Historical Scorecards

| Milestone | Coverage | Lint | File Size | Circular | Security | Verdict |
|---|---|---|---|---|---|---|
| M1 | [X]% | [N] warn | [N] violations | [N] | [N] findings | ✅ / ❌ |
| M2 | [X]% | [N] warn | [N] violations | [N] | [N] findings | ✅ / ❌ |
