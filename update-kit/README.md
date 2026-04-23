# Update Kit

> **Version:** PDF v1.0.0 | **Kit:** Update | **Stage:** Post-v1.0 (Continuous)

---

## Purpose

The Update Kit is the **recurring framework** for every version of the product that comes after v1.0. Where the Building Kit builds the *first* version and the Maintenance Kit gets it to market, the Update Kit governs how the product **evolves responsibly** over its lifetime.

Without a structured update process, products accumulate:
- Undocumented breaking changes
- Surprise migrations for users
- Technical debt from rushed version bumps
- Inconsistent changelogs that say nothing useful
- Feature creep with no coherent product vision

The Update Kit prevents all of this.

---

## When to Use This Kit

| Trigger | Update Type | Starting Point |
|---|---|---|
| Bug fix or small polish (no new feature) | **Patch** — x.x.**Z** | `patch-update.md` |
| New feature added, backward-compatible | **Minor** — x.**Y**.0 | `minor-update.md` |
| Breaking change, architecture overhaul, business model shift | **Major** — **X**.0.0 | `major-update.md` |
| P0 crash / data loss / security vulnerability in production | **Emergency Patch** | `emergency-patch.md` |
| Phase out a feature users currently depend on | **Deprecation** | `deprecation-guide.md` |

---

## Kit Structure

```
update-kit/
│
├── README.md                       ← You are here
│
├── major-update.md                 — Full re-planning cycle for breaking changes
├── minor-update.md                 — Feature addition cycle (backward-compatible)
├── patch-update.md                 — Bug fix, polish, hotfix process
├── emergency-patch.md              — P0 production crisis: detect → fix → ship < 48 hrs
│
├── deprecation-guide.md            — Responsible feature/API sunset process
│
└── templates/
    ├── changelog-entry.md          — Structured CHANGELOG.md entry format
    └── migration-guide.md          — User-facing upgrade instructions template
```

---

## Version Strategy

The Pro Dev Framework uses [Semantic Versioning](https://semver.org) (semver):

```
MAJOR.MINOR.PATCH

  MAJOR (X.0.0)  — Breaking change. Users must take action to upgrade.
                   Examples:
                     - Removed or renamed a core feature
                     - Database schema changed incompatibly
                     - New mandatory account creation
                     - Business model change (free → paid)
                     - Complete UI redesign

  MINOR (x.Y.0)  — New feature, backward-compatible. No action required.
                   Examples:
                     - New screen or feature added
                     - New optional setting
                     - Expanded content library
                     - Performance improvement

  PATCH (x.y.Z)  — Bug fix only. No new functionality.
                   Examples:
                     - Crash fix
                     - Layout fix on a specific device
                     - Incorrect text corrected
                     - Accessibility fix

SPECIAL VERSIONS
  x.y.z-beta.N   — Pre-release (not on main stores)
  x.y.z-rc.N     — Release candidate (final pre-production test)
```

### Build Numbers

Store build numbers are separate and always monotonically increasing:

```
iOS:     CFBundleVersion — integer, starts at 1, never reused
Android: versionCode     — integer, starts at 1, never reused

Version string (user-visible): 1.2.3
Build number (hidden):         47

RULE: Never submit two builds with the same build number, even across versions.
```

---

## Update Cycle at a Glance

### Minor / Patch Update (most common)

```
  SIGNAL                   TRIAGE                   PLAN
  ───────────────────       ─────────────────────    ──────────────────
  Feedback, crashes,  →    Weekly triage session →  Scope session:
  analytics, reviews        (feedback-collection.md)  MoSCoW filter,
                                                       size estimate

  BUILD                    RELEASE                  MONITOR
  ──────────────────       ──────────────────────   ─────────────────
  Feature branch +  →     Archive + submit →        Watch crash rate
  acceptance criteria       Release notes written     for 48 hours post
  + regression test         + staged rollout (And)    release
```

*Reference: `maintenance-kit/post-launch/iteration-workflow.md`*

### Major Update (significant breaking change)

A major update re-enters a condensed version of the full planning cycle:

```
  1. DECISION: Confirm this warrants a major version (Gate 7 or strategic decision)
  2. PLANNING: Re-run affected planning phases (see major-update.md)
  3. MIGRATION PLAN: Write user-facing migration guide (templates/migration-guide.md)
  4. DEPRECATION: If removing features, follow deprecation-guide.md (notice period first)
  5. BETA: Extended beta test (at least 4 weeks — users adapted to old behavior)
  6. CHANGELOG: Document all breaking changes (templates/changelog-entry.md)
  7. GATE 5: Full pre-release gate required even for major updates
  8. STAGED ROLLOUT: 10% → 25% → 50% → 100% with monitoring at each step
```

---

## Changelog Discipline

A CHANGELOG is a record of what changed between versions — written for *users and developers*, not for the dev team's commit log.

### Rules

```
DO:
  ✅ Write from the user's perspective ("Now you can..." / "Fixed crash when...")
  ✅ Group by section: Breaking Changes, New Features, Bug Fixes, Improvements
  ✅ List breaking changes FIRST and make them impossible to miss
  ✅ Keep entries concise — 1-2 sentences per item max
  ✅ Date every version header: ## [1.2.0] — 2026-04-20
  ✅ Link to migration guide for breaking changes

DON'T:
  ❌ "Various bug fixes and performance improvements" — meaningless
  ❌ Include internal-only changes (refactoring, test updates) in user changelog
  ❌ Use technical commit message format ("fix: null pointer exception in settings")
  ❌ Skip versions — every non-trivial release needs a changelog entry
  ❌ Backfill changelogs from memory — write them at time of release
```

### CHANGELOG.md Location

Place `CHANGELOG.md` at the project root, alongside `README.md`. Follow [Keep a Changelog](https://keepachangelog.com) format.

---

## Framework Update Hook

When a significant lesson from a project should feed back into the Pro Dev Framework itself, log it here:

```
FRAMEWORK IMPROVEMENT NOTES — [Project Name]

File to update:             [e.g., maintenance-kit/gates/GATE-05-release.md]
Improvement needed:         [e.g., Add step to verify SDK versions before submission]
Source of insight:          [e.g., Crash caused by outdated Crashlytics SDK at launch]
Status:                     [ ] Pending / [ ] Applied

File to update:             [e.g., content-creation-kit/guides/legal-compliance.md]
Improvement needed:         [e.g., Add PIPA (South Korea) to international compliance section]
Source of insight:          [e.g., Store rejection due to missing Korean privacy declaration]
Status:                     [ ] Pending / [ ] Applied
```

This creates a **continuous improvement loop** between real project experience and the framework itself — which is how the Pro Dev Framework evolves.

---

## Relationship to Other Kits

```
Planning Kit ──► Building Kit ──► Maintenance Kit ──► UPDATE KIT ──► (loops back)
                                                          │
                              ┌───────────────────────────┤ 
                              │                           │
                  Patch:  Minor fix, no planning  →  Direct to Build
                  Minor:  Feature addition        →  Abbreviated plan (affected phases only)
                  Major:  Breaking change         →  Full re-plan (re-enter planning stages)
                  Emergency: P0 crisis            →  Detect → Fix → Ship → Debrief
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Patch updates** | As-needed | Monthly minimum | 2-week sprint cycle |
| **Minor updates** | Informal | Scoped mini-cycle | Full sprint planning |
| **Major updates** | Rare — informal | Gate 7 triggers | Board-level decision |
| **Deprecation notice** | None needed (personal project) | 30-day notice | 60-90 day notice with migration guide |
| **Changelog** | Not needed | CHANGELOG.md maintained | CHANGELOG.md + release notes + email |
| **Migration guides** | Not needed | Recommended for majors | Required for all majors |
| **Framework feedback loop** | Skip | Capture key lessons | Formal process improvement session |

---

> **First step when preparing an update:** identify the update type (patch / minor / major / emergency) and follow the corresponding process file in this kit.

---

## Files in This Kit

| File | When to Use |
|---|---|
| `major-update.md` | Breaking changes, architectural overhauls, business model shifts |
| `minor-update.md` | New features that don't break existing behavior |
| `patch-update.md` | Bug fixes, small UX polish, copy corrections |
| `emergency-patch.md` | P0 production crisis — ship fix within 48 hours |
| `deprecation-guide.md` | Phasing out a feature users currently rely on |
| `templates/changelog-entry.md` | Structured CHANGELOG.md entry for every release |
| `templates/migration-guide.md` | User-facing upgrade instructions for major versions |
