# Frontmatter Fix Prompt Template

> **Usage:** Copy this prompt into your AI coding tool (Claude Code, Qwen Coder, Gemini CLI, Aider, etc.) when the dashboard flags frontmatter errors. Replace the `[PLACEHOLDERS]` with your project values.

---

## Prompt

```
Fix the YAML frontmatter in the file at docs/[FILENAME].

The file must start with a --- delimited YAML block. Here is the exact required format:

---
pdf_version: "1.0.0"
project_id: "[PROJECT_ID]"
project_name: "[PROJECT_NAME]"
kit: "planning"
phase: [PHASE_NUMBER]
phase_name: "[PHASE_NAME]"
status: "draft"
tier: "[TIER]"
created_at: "[DATE]"
confirmed_at: "[DATE]"
confirmed_by: "human"
---

RULES:
- File MUST start with --- on its own line
- No escaped underscores: use pdf_version NOT pdf\_version
- No **bold** or markdown formatting in frontmatter
- All string values in double quotes
- phase is a bare number (no quotes): 0, 1, 2, etc.
- Exactly one # H1 heading after the closing ---
- H1 must not contain **bold** formatting
- Do not change body content below the H1

Only fix the frontmatter block and the H1 heading. Leave all other content unchanged.
```

---

## Phase Reference

| File | phase | phase_name |
|------|-------|-----------|
| p_01, p_02, p_03 | 0 | Pre-Discovery |
| p_04 | 0 | Setup |
| p_05, p_07, p_08 | 0 | Discovery |
| p_09, p_10 | 1 | Discovery |
| p_11, p_12 | 2 | Strategy |
| p_13 | 3 | UX |
| p_18 | 4 | UI Design |
| p_20, p_23 | 5 | Architecture |
| p_24, p_25, p_26, p_27 | 6 | Compliance |
| p_29 | 7 | PRD Synthesis |
| p_31 | 0 | Handoff |

---

## For Local Models (Small Context)

If using a small local model (Qwen 0.5B, Phi-3 mini, etc.), use this shorter prompt:

```
Read docs/[FILENAME]. Fix only the first block.
It must be valid YAML between --- delimiters.
Required fields: pdf_version, project_id, project_name, kit, phase, phase_name, status, tier, created_at.
No backslash escapes. No markdown bold. Strings in quotes. phase is a number.
```
