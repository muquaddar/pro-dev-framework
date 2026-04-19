# Skill File Format Specification

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Specification
> Defines the standard format for skill files used by the Skill System.
> See also: `MASTER-GUIDE.md § Skill System`.

---

## What Is a Skill File?

A skill is a standalone markdown file (~200–600 tokens) that teaches an agent ONE specific technique. Skills live in a shared library directory and are loaded on-demand — never proactively.

---

## Required YAML Frontmatter

Every skill file MUST include this frontmatter block at the top of the file:

```yaml
---
domain: "flutter"                        # Required. Primary domain (must match an index category)
subdomain: "state-management"            # Required. Narrower classification within the domain
keywords:                                # Required. 3-8 search terms for discovery
  - riverpod
  - provider
  - state
  - reactive
complexity: "intermediate"               # Required. One of: beginner | intermediate | advanced
token_cost: 350                          # Required. Approximate token count if loaded (~word count × 1.3)
version: "1.0.0"                         # Required. Semantic version of the skill
last_verified: "2026-04-01"              # Required. Date the skill was last verified accurate (YYYY-MM-DD)
applicable_stacks:                       # Required. Which rule-templates this applies to
  - flutter
  - dart
author: "agent"                          # Optional. "human" or "agent"
---
```

### Field Validation Rules

| Field | Type | Required | Constraints |
|---|---|---|---|
| `domain` | string | ✅ | Lowercase, kebab-case. Must match a category in ROOT_INDEX.md. |
| `subdomain` | string | ✅ | Lowercase, kebab-case. More specific than domain. |
| `keywords` | string[] | ✅ | 3–8 items. Lowercase. No duplicates. |
| `complexity` | enum | ✅ | `beginner` \| `intermediate` \| `advanced` |
| `token_cost` | integer | ✅ | 50–1000. Estimate: word count × 1.3. |
| `version` | string | ✅ | Semantic version: `MAJOR.MINOR.PATCH` |
| `last_verified` | date | ✅ | ISO 8601 date: `YYYY-MM-DD`. Must not be in the future. |
| `applicable_stacks` | string[] | ✅ | 1–5 items. Must reference valid stack names. |
| `author` | string | ❌ | `human` \| `agent`. Defaults to `agent`. |

### Valid Domain Categories

```text
flutter          — Flutter & Dart mobile/web/desktop
web              — React, Next.js, Vue, Svelte, vanilla JS
backend          — Node.js, FastAPI, Django, Express
python           — Python-specific patterns (non-web)
database         — SQL, NoSQL, ORM patterns
devops           — CI/CD, Docker, cloud deployment
security         — Auth, encryption, vulnerability prevention
compliance       — COPPA, GDPR, accessibility, legal
design           — UI/UX patterns, design systems
testing          — Unit, integration, E2E testing patterns
performance      — Optimization, profiling, caching
windows-desktop  — WPF, WinUI, C# desktop
unity            — Unity game development, C# scripting
general          — Cross-stack patterns (logging, error handling)
```

---

## Skill Content Structure

Below the frontmatter, the skill body follows this structure:

```markdown
# [Skill Title]

## Problem
[What problem does this skill solve? 1-2 sentences.]

## Solution
[The technique, pattern, or approach. Be specific and actionable.]

## Code Example
[Working code snippet demonstrating the pattern.]

## Gotchas
[Common mistakes, edge cases, or pitfalls. Numbered list.]

## When NOT to Use
[Situations where this pattern is wrong or overkill.]

## Related Skills
[Links to related skills in the same or adjacent domains.]
```

---

## Complete Example

```markdown
---
domain: "flutter"
subdomain: "state-management"
keywords:
  - riverpod
  - provider
  - async
  - notifier
complexity: "intermediate"
token_cost: 400
version: "1.0.0"
last_verified: "2026-04-01"
applicable_stacks:
  - flutter
  - dart
author: "agent"
---

# Riverpod AsyncNotifier Pattern

## Problem
Managing async state (API calls, database reads) in Flutter with proper
loading, error, and data states — without boilerplate.

## Solution
Use Riverpod's `AsyncNotifier` + `AsyncValue` to get built-in
loading/error/data states with minimal code.

## Code Example
​```dart
@riverpod
class WordList extends _$WordList {
  @override
  Future<List<Word>> build() async {
    return ref.read(wordRepositoryProvider).getAll();
  }

  Future<void> refresh() async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(
      () => ref.read(wordRepositoryProvider).getAll(),
    );
  }
}

// In widget:
final wordList = ref.watch(wordListProvider);
return wordList.when(
  data: (words) => WordGrid(words: words),
  loading: () => const LoadingSpinner(),
  error: (err, stack) => ErrorDisplay(message: err.toString()),
);
​```

## Gotchas
1. Don't call `ref.read` inside `build()` for providers that change —
   use `ref.watch` instead.
2. Always use `AsyncValue.guard` instead of try/catch for consistent
   error handling.
3. `state = AsyncLoading()` clears previous data. Use
   `state = AsyncLoading<T>().copyWithPrevious(state)` to keep it.

## When NOT to Use
- Simple synchronous state (use `Notifier` instead)
- One-shot actions with no UI state (use `ref.read` directly)
- State that never fails (use `StateProvider`)

## Related Skills
- `riverpod-basics.md` — Foundational Riverpod concepts
- `go-router-riverpod.md` — Navigation + state integration
```

---

## File Naming Convention

```text
[topic]-[subtopic].md

Examples:
  riverpod-async-notifier.md
  oauth2-pkce-flow.md
  postgres-query-optimization.md
  coppa-compliance-checklist.md
```

- All lowercase, kebab-case.
- Max 40 characters.
- Descriptive — should be understandable without reading the file.

---

## Creating a Skill During a Project

When the agent discovers a reusable pattern:

1. Create file: `[skills-dir]/[domain]/[skill-name].md`
2. Add YAML frontmatter with all required fields
3. Write the skill body (Problem → Solution → Code → Gotchas)
4. Run `node scripts/generate-skill-index.js --skills-dir [path]` to update indexes
5. Log the new skill in `memory/session-learning-template.md`

---

## Validation

The `generate-skill-index.js` script validates each skill file:

| Check | Rule | Severity |
|---|---|---|
| Frontmatter exists | YAML block between `---` markers | ERROR — skip file |
| All required fields present | See table above | ERROR — skip file |
| `domain` matches known category | See domain list | WARNING — still indexed |
| `token_cost` in range | 50–1000 | WARNING |
| `last_verified` not stale | ≤ 180 days old | WARNING — flagged in index |
| File size | ≤ 600 tokens (~460 words) | WARNING |
