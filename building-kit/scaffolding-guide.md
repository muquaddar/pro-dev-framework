# Project Scaffolding Guide

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 3 (Scaffold) | **Category:** Utility
> **Prerequisite:** All Stage 2 (Interactive Planning) phases complete.

---

## Step-by-Step Setup

### 1. Create Project Directory
```bash
mkdir [project-name] && cd [project-name]
git init
```

### 2. Copy System Files
```bash
mkdir -p docs docs/index docs/index/symbols docs/lenses .agent-rules memory specs
```

Using `stack-setup-guide.md`, copy:
- `AGENT.md` → project root
- All applicable rules → `.agent-rules/`
- Your stack's rule template → `.agent-rules/` (rename to match stack)
- Doc templates → `docs/`

### 3. Set Up Agent Adapter
Follow your adapter's instructions from `harness-adapters/[your-agent].md`:
- Create shim file (CLAUDE.md, AGENTS.md, etc.)
- Map `.agent-rules/` to agent's native path
- Configure session management

### 4. Save Phase Outputs
```bash
# Export the generated markdown docs from the Planning Kit Facilitator
cp 01-discovery.md 02-strategy.md [...] specs/
```

### 5. Fill AGENT.md
1. Paste Phase 5 Architecture Summary into Architecture section
2. Fill Commands based on your stack
3. Fill Conventions from Phase 2 decisions
4. Set Active Milestone to M1
5. Fill "What's Next" with first 3 tasks from M1
6. Set Project Tier

### 6. Fill Doc Files

| Doc | Source | Action |
|---|---|---|
| `docs/project-map.md` | Phase 5 file structure | Create Tier 0 map with domains |
| `docs/progress.md` | Phase 2 milestones | Break into specific tasks |
| `docs/milestone-checklist.md` | Template | Copy as-is |
| `docs/api-spec.md` | Phase 5 | Paste API spec (if applicable) |
| `docs/data-model.md` | Phase 5 | Paste data model (if applicable) |
| `docs/screen-map.md` | Phase 3 + Phase 4 | Screens for M1 only (if applicable) |
| `docs/module-map.md` | Phase 5 architecture | Module interfaces (if applicable) |
| `docs/adr-log.md` | Template | Start empty, add decisions as they come |

### 7. Scaffold the Project with Your Agent

Tell your IDE agent:
```
I'm starting a new project. Read AGENT.md for the architecture.

Scaffold the project:
1. Initialize [package manager] with project name
2. Install core dependencies from the architecture spec
3. Create the directory structure from Phase 5
4. Create .env.example with all required variables
5. Create a basic entry point that runs
6. Set up linting and formatting

Don't build any features yet — just the empty scaffold that runs.
```

### 8. Verify Scaffold Runs
```bash
npm run dev        # web
flutter run        # flutter
python main.py     # python
dotnet run         # C#
```

### 9. Generate Initial Index
Tell your agent:
```
The scaffold is set up. Populate docs/project-map.md with all domains.
Create docs/index/[domain].md for each domain with file listings.
```

### 10. Initial Commit
```bash
git add -A
git commit -m "chore: initial project scaffold"
```

### 11. Start Milestone 1
You're ready. Follow the session workflow from `MASTER-GUIDE.md` and trigger **GATE-02: Milestone Start Approval**.

---

## Scaffold Prompts by Stack

### Web App (Next.js + Node)
```text
Agent, scaffold:
- Next.js app with App Router + TypeScript + [styling choice]
- Express/Fastify backend with TypeScript
- [ORM] with [database]
- Project structure from Phase 5
- ESLint + Prettier config
- .env.example with all variables from Phase 5
- docker-compose.yml for local database
```

### Flutter
```text
Agent, scaffold:
- Flutter project with [state management]
- Feature-first directory structure from Phase 5
- GoRouter for navigation
- [Backend service] configuration
- Analysis options (strict linting)
- .env setup with flutter_dotenv
```

### Python (API)
```text
Agent, scaffold:
- [FastAPI/Flask] project with Python 3.11+
- [ORM] setup
- Pydantic models directory
- pytest configuration
- pyproject.toml with dependencies
- .env.example
- Ruff for linting
```

### Python (CLI)
```text
Agent, scaffold:
- [Click/Typer] CLI project
- Command directory structure from Phase 5
- pyproject.toml with entry point
- pytest configuration
- Ruff for linting
```

### Windows Desktop (C# WPF)
```text
Agent, scaffold:
- WPF project with .NET 8
- MVVM structure from Phase 5
- CommunityToolkit.Mvvm
- Dependency injection setup
- Settings infrastructure
- .editorconfig
```

### Unity
```text
Agent, scaffold:
- Unity project structure under Assets/_Project/
- Assembly definitions for testable code
- Core managers (GameManager, AudioManager, UIManager)
- ScriptableObject base classes
- Input System setup
- Bootstrap scene
```
