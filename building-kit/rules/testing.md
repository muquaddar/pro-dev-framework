# Rule: Testing

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** High

---

## Test Requirements by Tier

| Tier | TDD Required | Coverage Target | Before Milestone Acceptance |
|---|---|---|---|
| **Lite** | No | None required | Manual smoke test |
| **Standard** | Recommended | 60% | Tests pass + smoke test |
| **Enterprise** | Mandatory | 80% | Tests pass + security scan + review |

---

## What to Test

### Always Test (All Tiers)
- Business logic (calculations, transformations, validations).
- API endpoint behavior (correct response, error cases).
- Data model constraints (required fields, relationships).

### Test When Applicable
- Auth flows (signup, login, protected routes).
- Edge cases identified in Phase 3 user flows.
- Integration points with external services (mock the service).

### Don't Test
- Framework boilerplate (router setup, app initialization).
- Auto-generated code (ORM models unless custom logic).
- Styling / layout (unless critical for functionality).

---

## Test File Organization

### Pattern: Mirror Source Structure
```
src/
├── services/
│   └── auth.service.ts
├── routes/
│   └── auth.routes.ts
tests/
├── services/
│   └── auth.service.test.ts
├── routes/
│   └── auth.routes.test.ts
```

### Pattern: Co-Located Tests
```
src/
├── services/
│   ├── auth.service.ts
│   └── auth.service.test.ts
├── routes/
│   ├── auth.routes.ts
│   └── auth.routes.test.ts
```

Pick one pattern and use it consistently. Add to AGENT.md conventions section.

---

## Test Writing Rules

- **One assertion per concept.** Test one behavior per test case.
- **Descriptive names.** `should reject expired tokens` not `test auth 3`.
- **Arrange-Act-Assert.** Set up → execute → verify. Clear separation.
- **No test interdependence.** Each test runs independently. No shared mutable state.
- **Mock external dependencies.** Network calls, databases in unit tests, file system.
- **Test the contract, not the implementation.** If you refactor an internal function, tests should still pass.

### Test Name Format
```
[unit under test] should [expected behavior] when [condition]

Examples:
- "createUser should return error when email is duplicate"
- "loginEndpoint should return 401 when password is wrong"
- "calculateTotal should include tax when region is US"
```

---

## TDD Workflow (Standard + Enterprise)

```
1. Write a failing test for the feature/fix
2. Write the minimum code to make it pass
3. Refactor (keeping tests green)
4. Commit: "test: [what you tested]" then "feat: [what you built]"
```

---

## Before Milestone Acceptance (GATE-04)

Run the verification suite:
```bash
# Your stack's test command:
npm test              # Node/React
flutter test          # Flutter
pytest                # Python
dotnet test           # C#
```

Check coverage if required by tier:
```bash
npm test -- --coverage
pytest --cov=src
flutter test --coverage
```
