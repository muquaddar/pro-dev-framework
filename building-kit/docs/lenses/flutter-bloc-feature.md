# Task Lens: Flutter BLoC Feature

> **Version:** PDF v2.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Lens
> **Stack:** Flutter + BLoC | **Replaces:** Reading 6-8 individual files
> **Token cost:** ~350 tokens (vs ~2,400 for ad-hoc discovery)

---

## When to Use This Lens

You're working on: adding a new feature module with BLoC state management.
Trigger: "add [Feature]", "implement [Feature] screen + state", "create [Feature] bloc".

---

## Files You'll Need

### BLoC Files (create these)
| File | Lines | Purpose |
|---|---|---|
| `lib/features/[domain]/bloc/[feature]_bloc.dart` | NEW | BLoC class — handles events, emits states |
| `lib/features/[domain]/bloc/[feature]_event.dart` | NEW | Sealed class of all events |
| `lib/features/[domain]/bloc/[feature]_state.dart` | NEW | Sealed class of all states |

### Screen / Widget Files (create these)
| File | Lines | Purpose |
|---|---|---|
| `lib/features/[domain]/screens/[feature]_screen.dart` | NEW | BlocBuilder screen widget |
| `lib/features/[domain]/widgets/[feature]_body.dart` | NEW | Main content widget |

### Reference Files (read existing examples — do NOT rewrite)
| File | Lines | Interface |
|---|---|---|
| `lib/features/[similar-domain]/bloc/[similar]_bloc.dart` | [N] | Pattern to follow |
| `lib/features/[similar-domain]/screens/[similar]_screen.dart` | [N] | Screen pattern |
| `lib/shared/services/[relevant-service].dart` | [N] | Service the BLoC will call |

### Registration Files (update these)
| File | Lines | Interface |
|---|---|---|
| `lib/app/routes.dart` | [N] | Add new route |
| `lib/main.dart` or `lib/app/app.dart` | [N] | Register BlocProvider if global |

---

## BLoC Pattern (compact reference)

```dart
// _event.dart
sealed class FeatureEvent {}
final class FeatureStarted extends FeatureEvent {}
final class FeatureItemSelected extends FeatureEvent {
  final String id;
  const FeatureItemSelected(this.id);
}

// _state.dart
sealed class FeatureState {}
final class FeatureInitial extends FeatureState {}
final class FeatureLoading extends FeatureState {}
final class FeatureLoaded extends FeatureState {
  final List<Item> items;
  const FeatureLoaded(this.items);
}
final class FeatureError extends FeatureState {
  final String message;
  const FeatureError(this.message);
}

// _bloc.dart
class FeatureBloc extends Bloc<FeatureEvent, FeatureState> {
  final FeatureService _service;
  FeatureBloc(this._service) : super(FeatureInitial()) {
    on<FeatureStarted>(_onStarted);
  }
  Future<void> _onStarted(FeatureStarted event, Emitter<FeatureState> emit) async {
    emit(FeatureLoading());
    try {
      final items = await _service.getAll();
      emit(FeatureLoaded(items));
    } catch (e) {
      emit(FeatureError(e.toString()));
    }
  }
}
```

---

## Checklist

- [ ] Event class uses `sealed class` + `final class` variants
- [ ] State class covers: Initial, Loading, Loaded, Error
- [ ] Screen uses `BlocBuilder<Bloc, State>` with `exhaustive` switch
- [ ] BLoC injected via `BlocProvider` — not constructed in widget
- [ ] BLocProvider registered above the route in widget tree
- [ ] All states handled in UI (no missing cases)
- [ ] Add route to `lib/app/routes.dart`
- [ ] Unit test the BLoC (not the widget)
- [ ] Update `docs/screen-map.md`
- [ ] Update Tier 1 index for the feature domain

---

## Typical Workflow

1. Read an existing similar BLoC as reference pattern.
2. Create event, state, bloc files.
3. Create screen + body widget using BlocBuilder.
4. Register BlocProvider (in route or app-level).
5. Add route.
6. Wire navigation from entry point.
7. Write BLoC unit tests (mock the service).
8. Update screen-map and domain index.
