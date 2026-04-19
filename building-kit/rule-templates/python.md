# Stack Template: Python (API / CLI / Data / Desktop)

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule Template
> **Applies to:** Python (FastAPI, Django, Scripts) | **Priority:** Medium

---

## Project Structure

### API Project (FastAPI / Flask)
```text
src/
├── main.py                      # App entry, FastAPI app creation
├── routes/                      # Endpoint handlers by resource
├── services/                    # Business logic
├── models/                      # Pydantic / SQLAlchemy models
├── repositories/                # Database access layer
├── middleware/                   # Auth, logging, error handling
├── utils/                       # Helpers, config, constants
└── schemas/                     # Request/response schemas (if separate from models)
tests/
├── conftest.py                  # Shared fixtures
├── routes/                      # Route tests
├── services/                    # Service tests
└── utils/                       # Utility tests
```

### CLI Project (Click / Typer)
```text
src/
├── cli.py                       # CLI entry point
├── commands/                    # Command handlers
├── core/                        # Business logic
├── models/                      # Data classes
└── utils/                       # Helpers, formatters, validators
```

### Data Project
```text
src/
├── main.py                      # Pipeline entry
├── pipeline/                    # Pipeline stages
├── processors/                  # Data transformers
├── connectors/                  # Data source/sink connections
├── models/                      # Data schemas/classes
└── utils/                       # Helpers
```

## Python Rules
- **Python 3.11+** minimum. Use modern features.
- **Type hints everywhere.** All function signatures, return types, class attributes.
- **Pydantic for data validation.** Not raw dicts for structured data.
- **No mutable default arguments.** Use `None` + conditional, or `field(default_factory=...)`.
- **f-strings for formatting.** Not `.format()` or `%`.

## Code Style
- **Ruff** for linting and formatting (replaces black + isort + flake8)
- Line length: 88 characters (Ruff/black default)
- Imports ordered: stdlib → third-party → local (Ruff handles this)
- One class per file for complex classes. Simple dataclasses can share a file.
- Use `__all__` in `__init__.py` to control exports

## Error Handling
- Define custom exception classes in `utils/errors.py`
- FastAPI: use exception handlers, not try/except in every route
- CLI: use `click.echo` (not `print`) for output. Exit codes for scripts.
- Always specify which exceptions to catch. Never bare `except:`.

## Testing
- **pytest** (not unittest)
- Fixtures in `conftest.py` for shared setup
- Use `pytest-asyncio` for async code
- Mock external services with `pytest-mock` or `responses`
- Use `httpx.AsyncClient` for FastAPI test client

## Packaging
- `pyproject.toml` (not `setup.py`)
- Use `poetry` or `uv` for dependency management
- Pin production dependencies. Allow ranges for dev dependencies.
- Virtual environment: `.venv/` in project root (in `.gitignore`)

## Naming Conventions
- Files: `snake_case.py`
- Classes: `PascalCase`
- Functions/variables: `snake_case`
- Constants: `UPPER_SNAKE_CASE`
- Private: prefix with `_`
- Module-level dunder: `__all__`, `__version__`
