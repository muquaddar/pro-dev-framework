# Rule: Code Architecture

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** High

---

## The 500-Line Limit

No source file exceeds 500 lines. **Split proactively at 400 lines.**

### How to Split

| When a file reaches 400 lines... | Split pattern |
|---|---|
| **Large component/view** | Extract sub-components (header, form, list, footer) |
| **Large service/module** | Split by domain (user-service, auth-service) |
| **Large route handler** | Extract middleware, validators, response formatters |
| **Large model** | Split into base model + mixins/extensions |
| **Large test file** | Split by feature area or test category |

### After Splitting
1. Update `docs/project-map.md` (Tier 0) with new domain entry if needed.
2. Update `docs/index/[domain].md` (Tier 1) with new file entries.
3. Verify imports — no circular dependencies introduced.

---

## Modular Structure

- **One file = one responsibility.** If you can't describe the file's purpose in one sentence, it's doing too much.
- **Dependencies flow ONE direction.** UI → Logic → Data. Never Data → UI.
- **No circular imports.** If A imports B and B imports A, extract shared code to C.
- **Shared code goes to a common location.** `shared/`, `common/`, `utils/`, or `lib/` — pick one and be consistent.

---

## Export Discipline

- Export only what other modules consume.
- Use barrel files (`index.ts`, `__init__.py`, `mod.rs`) for multi-file directories.
- Keep internals private — unexported functions, private methods, module-scoped variables.
- If an export has > 10 consumers, flag it as CRITICAL in the Tier 1 index.

---

## Naming Conventions

- **Files:** Match the default convention of your stack (kebab-case for web, PascalCase for C#, snake_case for Python).
- **Functions/Methods:** Verb-first for actions (`createUser`, `validateInput`), noun for getters (`userName`, `isActive`).
- **Constants:** UPPER_SNAKE_CASE.
- **Types/Interfaces:** PascalCase, descriptive (`UserCreateRequest`, not `Req1`).
- **Test files:** Mirror source file name with `.test`, `.spec`, or `_test` suffix.

---

## Error Handling

- **Never swallow errors silently.** Catch → handle or propagate. Never catch and do nothing.
- **Use specific error types** when the language supports them. Avoid generic `Error` or `Exception`.
- **User-facing errors** should have a user-readable message. Log the technical details separately.
- **Fail fast** at boundaries (API input, form validation). Don't let invalid data propagate.

---

## Comments & Documentation

- **Don't comment WHAT — comment WHY.** The code says what. The comment explains the non-obvious reason.
- **Document public interfaces:** Every exported function/class gets a docstring/JSDoc.
- **Remove commented-out code.** That's what git history is for.
- **TODO format:** `TODO([name]): [description] — [ticket/milestone]`. No orphan TODOs.
