# Agency Knowledge Index

> **Version:** PDF v2.0.0 | **Kit:** Building Kit
> **Purpose:** Cross-project knowledge registry. Read this (~200 tokens) before starting any
>              feature you haven't implemented in the current project before.
> **Maintained by:** adr-to-skill.js autoloop + manual entries.
> **Rule:** If a relevant entry exists here, inject it — don't re-discover from scratch.

---

## How to Use

1. **Before a novel feature:** Scan this index for relevant entries.
2. **Inject:** Read the linked skill file and add a note to `.claude-state.md` → "Agency Knowledge Applied".
3. **After solving something new:** Tag the ADR with `#teach` and run `adr-to-skill.js`.

---

## Knowledge Registry

| Skill | Source | Added | Tags |
|---|---|---|---|
| [Flutter + BLoC for integrity-critical state machine](geo-tag-pro-adr-001-flutter-bloc-for-integrity-cri.md) | geo-tag-pro ADR-001 | 2026-05-01 | `flutter` `bloc` `architecture` |
| [sqflite over NoSQL (Hive/Isar) for forensic data](geo-tag-pro-adr-002-sqflite-over-nosql-hive-isar-f.md) | geo-tag-pro ADR-002 | 2026-05-01 | `flutter` `database` `architecture` |
| [Native Platform Channels for watermark burn-in](geo-tag-pro-adr-003-native-platform-channels-for-w.md) | geo-tag-pro ADR-003 | 2026-05-01 | `flutter` `android` `performance` `camera` |
| [Local-first, zero external transmission](geo-tag-pro-adr-004-local-first-zero-external-tran.md) | geo-tag-pro ADR-004 | 2026-05-01 | `flutter` `architecture` `security` |

---

## How to Add Entries Manually

1. Copy `entry-template.md` → create a new file in this directory.
2. Fill in the template.
3. Add a row to the table above.
4. Commit: `git commit -am "feat(agency-knowledge): add [skill-name]"`

---

## Tagging Convention

Use consistent tags so the index is searchable:

| Tag | Meaning |
|---|---|
| `flutter` | Flutter/Dart specific |
| `android` | Android platform specific |
| `ios` | iOS platform specific |
| `camera` | Camera / media capture |
| `database` | Local database (sqflite, Drift, Hive) |
| `auth` | Authentication / authorization |
| `gps` | Location / GPS |
| `bloc` | BLoC state management pattern |
| `performance` | Performance optimization |
| `security` | Security / forensic integrity |
| `testing` | Testing patterns |
| `architecture` | Structural / architectural decisions |
