# Stack Template: Flutter

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule Template
> **Applies to:** Flutter (Mobile/Web/Desktop) | **Priority:** Medium

---

## Project Structure
```text
lib/
├── main.dart                    # App entry (< 50 lines)
├── app/
│   ├── app.dart                 # MaterialApp, theme, router
│   ├── routes.dart              # GoRouter / Navigator config
│   └── theme.dart               # ThemeData, colors, typography
├── features/
│   └── [domain]/
│       ├── screens/             # Screen-level widgets
│       ├── widgets/             # Feature-specific widgets
│       ├── providers/           # Riverpod/Bloc/Provider state
│       ├── models/              # Data classes, DTOs
│       └── services/            # API calls, repositories
├── shared/
│   ├── widgets/                 # Reusable UI components
│   ├── services/                # Shared services (auth, http)
│   ├── models/                  # Shared data classes
│   └── utils/                   # Helpers, extensions, constants
└── l10n/                        # Localization (if applicable)
```

## Widget Rules
- **Stateless by default.** Only use StatefulWidget when managing local UI state (animation, text controllers).
- Business logic lives in providers/blocs, never in widgets.
- Extract widgets when a `build` method exceeds 80 lines.
- Const constructors wherever possible: `const MyWidget({super.key})`.
- Named parameters with `required` for non-optional props.

## State Management
- Use the state management chosen in Phase 2 Strategy (Riverpod / Bloc / Provider).
- Keep state classes immutable. Use `copyWith` for updates.
- UI reads state. Events/methods trigger changes. State notifies UI.
- No `setState` for business logic — only for local UI state.
- Dispose controllers and subscriptions properly.

## Navigation
- Use a declarative router (GoRouter recommended).
- Routes defined in a single `routes.dart` file.
- Type-safe route parameters.
- Deep linking supported for applicable routes.

## Dart Rules
- `dart fix --apply` before committing
- Follow effective Dart conventions
- Use `final` by default. `var` only when reassignment is needed.
- Avoid `dynamic`. Type everything.
- Extensions in `shared/utils/extensions/` with descriptive file names.
- Use `sealed class` for exhaustive pattern matching.

## Naming Conventions
- Files: `snake_case.dart`
- Classes: `PascalCase`
- Functions/variables: `camelCase`
- Constants: `camelCase` (Dart convention, not UPPER_SNAKE)
- Private: prefix with `_`

## Performance
- Use `const` widgets to avoid unnecessary rebuilds
- Lazy load heavy features with deferred imports
- Use `ListView.builder` for long lists (never `ListView(children: [...])`)
- Profile with DevTools before optimizing prematurely
