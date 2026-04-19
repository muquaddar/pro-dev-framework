# Stack Template: Windows Desktop (C# / WPF / WinUI / Electron)

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule Template
> **Applies to:** WPF, WinUI, MAUI (.NET/C#) | **Priority:** Medium

---

## Project Structure (WPF / WinUI)
```text
src/
├── App.xaml                     # App entry, DI container
├── App.xaml.cs                  # Startup, service registration
├── Views/                       # XAML views organized by feature
│   ├── Shell/                   # Main window, navigation chrome
│   └── [Feature]/               # Feature-specific views
├── ViewModels/                  # ViewModel per view
├── Models/                      # Data models, DTOs
├── Services/                    # Business logic, data access
│   ├── Navigation/              # Navigation service
│   ├── Data/                    # Repository pattern
│   └── Platform/                # Windows-specific services
├── Controls/                    # Reusable UserControls
├── Converters/                  # Value converters
├── Resources/                   # Styles, templates, assets
│   ├── Styles/                  # XAML styles and themes
│   └── Assets/                  # Images, icons
└── Helpers/                     # Extension methods, utilities
```

## MVVM Rules
- **Strict MVVM.** Views never contain business logic.
- **Code-behind is minimal.** Only for: event-to-command routing, visual state triggers that can't be done in XAML.
- **ViewModels never reference Views.** Communication via data binding and messaging.
- **Use CommunityToolkit.Mvvm** for ObservableProperty, RelayCommand, messaging.
- **One ViewModel per View.** No shared ViewModels between unrelated views.

## Data Binding
- Bind in XAML, not code-behind.
- Use `{x:Bind}` (WinUI) or `{Binding}` (WPF) with explicit Mode.
- INotifyPropertyChanged via `[ObservableProperty]` attribute.
- Collections use `ObservableCollection<T>`.
- Commands use `[RelayCommand]` attribute.

## Navigation
- Service-based navigation (not code-behind frame navigation).
- Navigation service injected via DI.
- Views resolved by ViewModel type.
- Navigation state persisted across app restarts (if applicable).

## Dependency Injection
- Register services in `App.xaml.cs` using `Microsoft.Extensions.DependencyInjection`.
- Constructor injection everywhere. No service locator pattern.
- Scoped services for per-view data. Singleton for app-wide services.

## Platform Conventions
- Keyboard shortcuts for common actions (Ctrl+S save, Ctrl+Z undo).
- Right-click context menus where appropriate.
- System tray icon for background processes.
- Respect Windows theme (light/dark mode via system settings).
- DPI-aware layouts (use device-independent units).
- Proper window state management (restore position/size).

## Naming Conventions
- Files/Classes: `PascalCase`
- Methods: `PascalCase`
- Properties: `PascalCase`
- Private fields: `_camelCase`
- Constants: `PascalCase` (C# convention)
- Interfaces: `IPascalCase`
- XAML elements: `x:Name="PascalCase"`

## Testing
- Unit tests: xUnit or NUnit
- Mock with Moq or NSubstitute
- Test ViewModels, not Views
- Integration tests for Services
- UI tests with WinAppDriver (if needed)
