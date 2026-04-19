# Module Map — [Project Name]

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> Documents module boundaries, public interfaces, and dependency relationships.
> Cross-references Tier 1 indexes in `docs/index/[module].md`.

---

**Active Milestone:** M[N]
**Project Tier:** [Lite / Standard / Enterprise]
**Last Updated:** [date]

## Modules

| Module | Responsibility | Public API | Dependencies | Consumers | Index |
|---|---|---|---|---|---|
| [module-1] | [one-line description] | [key exports] | [modules it imports] | [modules that import it] | `docs/index/[module-1].md` |
| [module-2] | [one-line description] | [key exports] | [modules it imports] | [modules that import it] | `docs/index/[module-2].md` |

## Dependency Diagram

```text
┌──────────┐     ┌──────────┐     ┌──────────┐
│    UI    │────▶│  Logic   │────▶│   Data   │
└──────────┘     └──────────┘     └──────────┘
                      │
                      ▼
               ┌──────────┐
               │  Shared  │
               └──────────┘
```

> **Rule:** Dependencies flow ONE direction: UI → Logic → Data. Never Data → UI.

## Module Interfaces

### [Module Name]

**Exports:**
```
FunctionOrClass1(params) → ReturnType
FunctionOrClass2(params) → ReturnType
```

**Consumed by:** [list of consumer modules]
**Depends on:** [list of dependency modules]

**Contract rules:**
- [Any guarantees this module makes, e.g., "all methods return Futures"]
- [Any constraints, e.g., "never throws — returns Result types"]

---

## Boundary Rules

| Rule | Enforcement |
|---|---|
| No circular imports | Verified by `fitness-functions.md` |
| One direction only (UI → Logic → Data) | Code review + `generate-codebase-index.js` consumer graph |
| Shared code goes to `shared/` | Convention |
| Cross-module communication via interfaces, not internals | Code review |
| New module = new Tier 1 index entry | Agent updates `docs/index/[module].md` |

## How to Use This Map

1. **Before adding a new module:** Check that no existing module already covers this responsibility.
2. **Before importing across modules:** Verify the dependency direction is correct (UI → Logic → Data).
3. **After creating a new module:** Add a row to the Modules table and create a Tier 1 index file.
4. **Run `generate-codebase-index.js`** to auto-detect dependency relationships.

---

<!--
EXAMPLE for a Flutter app:

| Module | Responsibility | Public API | Dependencies | Consumers | Index |
|---|---|---|---|---|---|
| auth | Authentication, sessions, tokens | AuthService, AuthState | http, storage | home, profile, settings | docs/index/auth.md |
| home | Main screen, word grid, daily challenge | HomeScreen, HomeNotifier | auth, content, audio | (root router) | docs/index/home.md |
| content | Word data, stories, lessons | ContentRepository, Word | storage | home, quiz, search | docs/index/content.md |
| audio | Audio playback, recording | AudioService, AudioPlayer | — | home, content, quiz | docs/index/audio.md |
| shared | Common widgets, utils, extensions | AppButton, AppCard, StringExt | — | all feature modules | docs/index/shared.md |
-->
