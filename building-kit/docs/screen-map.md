# Screen Map — [Project Name]

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> Maps every user-facing screen to its route, components, state, and milestone.

---

**Active Milestone:** M[N]
**Project Tier:** [Lite / Standard / Enterprise]
**Last Updated:** [date]

## Screens

| Screen | Route | Components | State Provider | Milestone | Status |
|---|---|---|---|---|---|
| [Screen Name] | `/route` | [Widget1, Widget2] | [Provider/Bloc] | M[N] | ACTIVE |
| [Screen Name] | `/route/:id` | [Widget1, Widget2] | [Provider/Bloc] | M[N] | STABLE |

## Navigation Flow

```text
[Splash] → [Onboarding] → [Home]
                              ├── [Feature A] → [Detail A]
                              ├── [Feature B] → [Detail B]
                              └── [Settings] → [Profile]
                                             → [Preferences]
```

## Screen Categories

| Category | Screens | Notes |
|---|---|---|
| Auth | [Login, Register, Forgot Password] | Unauthenticated access only |
| Core | [Home, Dashboard] | Main navigation targets |
| Feature | [Feature screens] | Feature-specific flows |
| Settings | [Profile, Preferences] | User configuration |
| System | [Splash, Onboarding, Error] | Non-navigable or one-time |

## Shared Components

| Component | Used By | Location |
|---|---|---|
| [AppBar] | All screens | `shared/widgets/` |
| [BottomNav] | Core screens | `shared/widgets/` |
| [LoadingOverlay] | Auth, Feature screens | `shared/widgets/` |

## How to Use This Map

1. **Adding a new screen?** → Use the `docs/lenses/new-screen.md` lens.
2. **Check the route** exists in the router config before creating the screen.
3. **Register the state provider** in the correct scope (global vs. screen-local).
4. **Update this map** after adding or removing screens.
5. **Status tags:** `ACTIVE` = being worked on, `STABLE` = complete, `PLANNED` = future milestone.

---

<!--
EXAMPLE for a Flutter app:

| Screen | Route | Components | State Provider | Milestone | Status |
|---|---|---|---|---|---|
| Splash | `/` | SplashView | — | M1 | STABLE |
| Login | `/login` | LoginForm, SocialButtons | AuthNotifier | M1 | STABLE |
| Home | `/home` | WordGrid, ProgressBar, DailyChallenge | HomeNotifier | M2 | ACTIVE |
| Word Detail | `/word/:id` | WordCard, AudioPlayer, Illustration | WordNotifier | M3 | PLANNED |
| Settings | `/settings` | ThemeToggle, LanguagePicker | SettingsNotifier | M4 | PLANNED |

EXAMPLE for a Next.js app:

| Screen | Route | Components | State Provider | Milestone | Status |
|---|---|---|---|---|---|
| Landing | `/` | Hero, Features, CTA | — | M1 | STABLE |
| Dashboard | `/dashboard` | StatsGrid, ActivityFeed, QuickActions | useDashboard | M2 | ACTIVE |
| Course | `/courses/[id]` | CourseHeader, LessonList, ProgressRing | useCourse | M3 | PLANNED |
| Profile | `/profile` | Avatar, InfoForm, BillingSection | useProfile | M4 | PLANNED |
-->
