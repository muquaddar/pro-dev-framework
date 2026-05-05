# Task Lens: Flutter Data Entity (sqflite / Drift)

> **Version:** PDF v2.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Lens
> **Stack:** Flutter + sqflite or Drift | **Replaces:** Reading 5-7 individual files
> **Token cost:** ~320 tokens (vs ~2,000 for ad-hoc discovery)

---

## When to Use This Lens

You're working on: adding a new database table, modifying a schema, adding a repository, or writing a migration.
Trigger: "add [Entity] model", "create [Entity] table", "store [data] locally", "schema migration".

---

## Files You'll Need

### Model Files (create / modify)
| File | Purpose |
|---|---|
| `lib/features/[domain]/models/[entity].dart` | Data class with `copyWith`, `toMap`, `fromMap` |
| `lib/features/[domain]/models/[entity].g.dart` | Generated (if using Drift/json_serializable — do not edit) |

### Database / Schema Files (modify)
| File | Purpose |
|---|---|
| `lib/data/database/app_database.dart` | Main DB class — add table definition here |
| `lib/data/database/app_database.g.dart` | Generated — do not edit manually |

### Repository Files (create)
| File | Purpose |
|---|---|
| `lib/features/[domain]/repositories/[entity]_repository.dart` | CRUD operations |
| `lib/features/[domain]/repositories/i_[entity]_repository.dart` | Interface (for testability) |

### Migration Files (create — sqflite only)
| File | Purpose |
|---|---|
| `lib/data/database/migrations/migration_v[N]_to_v[N+1].dart` | Schema migration logic |

### Reference Files (read — do NOT rewrite)
| File | Purpose |
|---|---|
| `lib/features/[similar-domain]/models/[similar].dart` | Existing model as pattern |
| `lib/features/[similar-domain]/repositories/[similar]_repository.dart` | Existing repo as pattern |
| `lib/data/database/app_database.dart` (current version) | Current schema — understand before changing |

---

## sqflite Pattern (compact reference)

```dart
// Model
class PhotoRecord {
  final int? id;
  final String filePath;
  final double latitude;
  final double longitude;
  final DateTime capturedAt;

  const PhotoRecord({this.id, required this.filePath, required this.latitude,
      required this.longitude, required this.capturedAt});

  Map<String, dynamic> toMap() => {
    'id': id, 'file_path': filePath, 'latitude': latitude,
    'longitude': longitude, 'captured_at': capturedAt.millisecondsSinceEpoch,
  };

  factory PhotoRecord.fromMap(Map<String, dynamic> map) => PhotoRecord(
    id: map['id'], filePath: map['file_path'],
    latitude: map['latitude'], longitude: map['longitude'],
    capturedAt: DateTime.fromMillisecondsSinceEpoch(map['captured_at']),
  );

  PhotoRecord copyWith({int? id, String? filePath, ...}) => PhotoRecord(...);
}

// Repository
class PhotoRepository {
  final Database _db;
  PhotoRepository(this._db);

  Future<int> insert(PhotoRecord record) =>
      _db.insert('photos', record.toMap(), conflictAlgorithm: ConflictAlgorithm.replace);

  Future<List<PhotoRecord>> findAll() async {
    final maps = await _db.query('photos', orderBy: 'captured_at DESC');
    return maps.map(PhotoRecord.fromMap).toList();
  }

  Future<int> delete(int id) => _db.delete('photos', where: 'id = ?', whereArgs: [id]);
}
```

---

## sqflite Migration Pattern

```dart
// RULE: version integers MUST be sequential — no gaps
Future<void> _onUpgrade(Database db, int oldVersion, int newVersion) async {
  if (oldVersion < 2) await _migrateV1toV2(db);
  if (oldVersion < 3) await _migrateV2toV3(db);
}

Future<void> _migrateV1toV2(Database db) async {
  await db.execute('ALTER TABLE photos ADD COLUMN hash TEXT');
}
```

---

## Checklist

- [ ] Model has `toMap()`, `fromMap()`, `copyWith()`
- [ ] All DateTime stored as `millisecondsSinceEpoch` (int), not as String
- [ ] Repository has interface (`I[Entity]Repository`) for test mocking
- [ ] Migration is sequential — no version gaps
- [ ] DB version constant bumped in `app_database.dart`
- [ ] `onUpgrade` handles ALL version hops (cumulative `if oldVersion < N`)
- [ ] New table indexed on frequently queried columns (`timestamp`, `lat/lon`)
- [ ] Run `dart run build_runner build` if using Drift or code generation
- [ ] Add index column to `docs/data-model.md`
- [ ] Update Tier 1 index for the data domain

---

## Typical Workflow

1. Read existing model + repo as reference pattern.
2. Create data class with `toMap`/`fromMap`/`copyWith`.
3. Add table definition to `app_database.dart`.
4. Write migration (bump DB version, add `_migrateVN` method).
5. Create repository with interface.
6. Register repository in DI/service locator.
7. Update BLoC to use new repository.
8. Run migration locally — verify schema.
9. Update `docs/data-model.md`.
10. Update Tier 1 index for data domain.

---

## ⚠️ Pre-Modification Warning

Schema changes on tables with existing user data require a Gate 4 review:
- Dropping columns? → Data loss.
- Renaming columns? → Migration required.
- Changing column types? → Migration required.
- Adding NOT NULL column without default? → Breaks existing rows.

**Always present migration plan to human before executing on production schema.**
