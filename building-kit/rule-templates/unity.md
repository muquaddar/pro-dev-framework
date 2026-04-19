# Stack Template: Unity (Game / 3D Simulation / Interactive)

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule Template
> **Applies to:** Unity Engine (C#) | **Priority:** Medium

---

## Project Structure
```text
Assets/
├── _Project/                    # All project-specific code and assets
│   ├── Scripts/
│   │   ├── Core/                # Game managers, singletons, bootstrapping
│   │   ├── Systems/             # Gameplay systems (combat, inventory, AI)
│   │   ├── UI/                  # UI controllers and presenters
│   │   ├── Data/                # ScriptableObjects, save/load, configs
│   │   ├── Player/              # Player controller, input, camera
│   │   ├── World/               # Level, environment, spawning
│   │   └── Utils/               # Helpers, extensions, constants
│   ├── Prefabs/                 # Prefab assets organized by type
│   ├── ScriptableObjects/       # SO instances (configs, item data)
│   ├── Scenes/                  # Scene files
│   ├── Art/                     # Models, textures, materials
│   ├── Audio/                   # Sound effects, music
│   └── UI/                      # UI assets, fonts, icons
├── Plugins/                     # Third-party plugins
└── Resources/                   # Runtime-loaded assets (use sparingly)
```

## Architecture Rules
- **Component-based design.** Small, focused MonoBehaviours. One responsibility per component.
- **No God objects.** GameManager should delegate to specialized managers (AudioManager, UIManager, SaveManager).
- **ScriptableObjects for data.** Game configs, item databases, ability definitions — all SOs, not hardcoded.
- **Events over direct references.** Use UnityEvents, C# events, or a message bus. Reduce coupling.
- **Avoid Find/GetComponent in Update.** Cache references in Awake/Start. Use SerializeField for editor references.

## MonoBehaviour Rules
- **Only Unity callbacks in MonoBehaviours.** Business logic goes in plain C# classes.
- **RequireComponent for dependencies.** `[RequireComponent(typeof(Rigidbody))]`
- **SerializeField for inspector.** Private fields with `[SerializeField]`, not public fields.
- **Awake for self-init, Start for cross-references.** Awake caches own components. Start connects to others.
- **Coroutines for sequences.** async/await for non-Unity-lifecycle async operations.

## Performance Rules
- **Object pooling** for frequently spawned items (bullets, particles, enemies).
- **No allocations in Update.** No `new`, no LINQ, no string concatenation in hot paths.
- **LOD and culling** for 3D scenes. Occlusion culling for complex environments.
- **Profile before optimizing.** Use Unity Profiler. Don't optimize what isn't slow.

## Scene Management
- **One scene per major area** (main menu, gameplay, loading).
- **Additive scenes** for UI overlays, shared systems.
- **Bootstrap scene** loads first, initializes managers, then loads game scene.
- **DontDestroyOnLoad** for persistent managers only.

## Input
- **New Input System preferred** over legacy Input class.
- Input actions defined in InputAction asset. C# generated class.
- Separate input reading from input handling (Input → Controller → System).

## Save/Load
- JSON serialization with `JsonUtility` or Newtonsoft.JSON.
- Save data in platform-appropriate location (`Application.persistentDataPath`).
- Version save files for backward compatibility.
- Never save Unity objects directly — serialize data classes.

## Naming Conventions
- Scripts: `PascalCase.cs`
- MonoBehaviours: `PascalCase` (match file name)
- ScriptableObjects: `PascalCase_SO.cs` or `PascalCaseData.cs`
- Private fields: `_camelCase` with `[SerializeField]`
- Public properties: `PascalCase`
- Constants: `PascalCase` (C# convention)
- Scenes: `PascalCase`
- Prefabs: `PascalCase`

## Testing
- Edit Mode tests for pure logic (no MonoBehaviour dependency).
- Play Mode tests for integration (requires scene setup).
- Use Assembly Definitions for testable architecture.
- Mock time with custom `ITimeProvider`. Mock input with input action overrides.
