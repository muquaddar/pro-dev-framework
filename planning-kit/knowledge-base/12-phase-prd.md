# Phase 7: PRD Synthesis — Consolidated Requirements Document

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Stage:** 2 (Interactive Planning) | **Phase:** 7
> **Tier:** All | **Duration:** 10–20 min
> **Prerequisite:** Phases 1–6 confirmed (all `docs/` deliverables exist)

---

## Purpose

Phases 1–6 produce **six separate documents**, each optimized for AI-driven, bite-sized collaboration. But human stakeholders — clients, managers, investors, team leads — need a **single master document** they can read end-to-end, review with their team, and formally approve.

**Phase 7: PRD Synthesis** consolidates the confirmed planning outputs into one **Product Requirements Document (PRD)**: `p_29_prd.md`.

This document is:
- **Human-first:** Written for stakeholders, not AI agents.
- **Non-redundant:** Summarizes and cross-references the detailed phase files; does NOT duplicate them.
- **Sign-off ready:** Includes an explicit approval section.

---

## What the PRD Is (and Is Not)

```
✅ IS:
  • A high-level summary of the entire planning phase
  • A stakeholder-readable "executive brief"
  • A sign-off document with explicit approval tracking
  • A navigation hub that links to detailed phase files

❌ IS NOT:
  • A replacement for the 6 phase documents
  • A copy-paste of all phase content into one file
  • A technical spec (that's `p_20_architecture.md`)
  • An agent-facing document (that's `p_32_AGENT.md`)
```

---

## Facilitator Workflow

### Step 1: Announce the PRD Phase

```text
"All 6 planning phases are confirmed. Before we hand off to the IDE,
let's create a single PRD — a master summary document that a human
stakeholder can read and approve. This takes about 10 minutes."
```

### Step 2: Synthesize (AI Proposes)

The AI reads all 6 confirmed phase files and generates the PRD draft. The structure follows the **exact template** defined in `13-output-formats.md`.

**Synthesis Rules:**
- **Summarize, don't copy.** Each phase section should be 3–8 bullet points, not a wall of text.
- **Link, don't repeat.** Every section ends with `→ Full details: docs/[filename].md`.
- **Use plain language.** A non-technical stakeholder should understand 80% of it.
- **Include decision rationale.** For each major choice (stack, architecture, monetization), explain WHY in one sentence.

### Step 3: Human Reviews

The user reads the PRD, asks questions, pushes back on any summaries that misrepresent decisions, or requests additions.

### Step 4: AI Refines

Incorporate feedback. Adjust tone, depth, or structure based on who will read this document.

### Step 5: Human Confirms

User explicitly approves. The AI outputs the final PRD with `status: confirmed` in the frontmatter.

```text
"✅ PRD is ready. Please save it now:

📁 File: `p_29_prd.md`
📋 Copy the content below and save it in your project's docs/ folder.

[CONTENT BLOCK]

Once saved, say 'saved' and we'll proceed to the Build Handoff."
```

---

## PRD Structure

The PRD follows this exact structure (template in `13-output-formats.md`):

```
1. Executive Summary     — One paragraph: what, who, why
2. Problem & Opportunity — From requirements.md
3. Target Users          — Personas from requirements.md
4. Scope & Features      — MoSCoW table from requirements.md
5. Technical Strategy    — Stack + architecture from strategy.md & architecture.md
6. User Experience       — Key flows from ux-flows.md
7. Visual Design         — Design tokens summary from ui-design-brief.md
8. Security & Compliance — Regulations from compliance.md
9. Milestone Roadmap     — From strategy.md
10. Success Metrics      — From requirements.md
11. Risks & Mitigations  — From strategy.md
12. Approval             — Sign-off section
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| PRD Length | 1 page (~500 words) | 2–3 pages (~1500 words) | 3–5 pages (~2500 words) |
| Sections | 1, 4, 5, 9, 12 only | All 12 sections | All 12 + appendices |
| Approval | Single `confirmed_by` | Single `confirmed_by` | Named approvers list |
| Cross-references | Minimal | Full links | Full links + version tracking |

---

## Facilitator Rules

- **DO** generate the PRD in a single code block so the user can copy-paste.
- **DO** keep summaries concise — this is a summary document, not a thesis.
- **DO** include the deep-link to each source document at the end of every section.
- **DON'T** introduce new requirements or decisions not present in the phase files.
- **DON'T** skip the approval section — it's the whole point of this phase.
- **DON'T** proceed to the Build Handoff until the PRD is saved.

---

## Connection to Build Handoff

After the PRD is confirmed and saved:
1. The **Build Handoff** (`14-build-handoff-template.md`) validates `docs/prd.md` exists alongside the 6 phase files.
2. The `docs/index.md` generated during handoff includes the PRD as the primary "start here for context" link.
3. The `AGENT.md` generated during handoff references the PRD for project-level context.

The PRD does NOT replace `AGENT.md`. The PRD is for **humans**. `AGENT.md` is for **agents**.
