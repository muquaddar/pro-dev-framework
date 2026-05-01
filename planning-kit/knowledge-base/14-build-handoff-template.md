# Build Handoff — Packaging for IDE Agents

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Stage:** 2 (Interactive Planning) | **Phase:** Handoff
> **Tier:** All | **Duration:** 5-10 min
> **Prerequisite:** Phases 1-7 Confirmed (All `docs/` templates exist)

---

## Purpose

The Build Handoff is the bridge between the **Planning Kit** (cloud chat AI) and the **Building Kit** (IDE-integrated AI). 

IDE Agents (like Cursor, Copilot, Antigravity) are excellent at writing code but terrible at holding multi-phase design constraints in a single context window. The handoff process condenses the planning docs into a format the IDE agent can consume flawlessly.

This final module generates the **Handoff Package** and the **Activation Prompt**.

---

## The Handoff Process: 3 Steps

```
STEP 1: Validate the Planning Package      (Automated by AI)
STEP 2: Generate the Context Digest        (Automated by AI)
STEP 3: Provide the Activation Prompt      (Given to Human)
```

---

## Step 1: Validate the Planning Package

Before generating the handoff, the AI acting as the Planning Facilitator must silently check that all required deliverables exist and are tagged `Status: Confirmed`.

**Checklist:**
- `p_29_prd.md`
- `p_10_requirements.md`
- `p_11_strategy.md`
- `p_13_ux-flows.md`
- `p_18_ui-design-brief.md`
- `p_20_architecture.md`
- `p_27_compliance.md`
- `p_23_walking-skeleton-spec.md`

If anything is missing or unconfirmed, the AI halts and says: 
*"Wait! We haven't finalized `[Document]`. Let's finish that before handing off to the IDE."*

---

## Step 2: Generate the Context Digest

The AI creates two specific artifacts that the IDE agent will use to ground itself.

### 1. `docs/index.md` (The Master Index)
Instead of forcing the IDE to read all files at once (which blows up context limits), we generate an index. The IDE agent reads the index, then uses an internal `read_file` tool to fetch details ONLY when needed.

**Format for `docs/index.md`**:
```markdown
# Project Documentation Index

**Start Here:** `p_23_walking-skeleton-spec.md` contains the exact scope for Milestone 1. Do not build anything else until M1 is approved.

| Concept | Look Here |
|---|---|
| Product Overview (human-readable) | `p_29_prd.md` |
| Tech Stack & Architecture | `p_20_architecture.md` |
| Feature Scope (M1 vs M2) | `p_10_requirements.md` |
| UI Tokens (Colors, Typography) | `p_18_ui-design-brief.md` |
| UX Data Flow | `p_13_ux-flows.md` |
| Security/Privacy Rules | `p_27_compliance.md` |
```

### 2. The `p_32_AGENT.md` Base
The AI generates the initial contents of the `AGENT.md` file (the "persistent brain" for the building kit). 

**Format for `p_32_AGENT.md` initialization**:
```xml
<context>
  <project_name>[PROJECT_NAME]</project_name>
  <current_milestone>M1: Walking Skeleton</current_milestone>
  <tech_stack>[Format: Flutter + Hive]</tech_stack>
  <architecture>[Format: Feature-First Clean]</architecture>
</context>

<rules>
  - Read `p_23_walking-skeleton-spec.md` before writing code.
  - No cloud sync allowed in v1.0.
  - Max file size: 200 lines.
</rules>
```

---

## Step 3: Provide the Activation Prompt

The AI gives the human the final instruction block. The human will paste this EXACT text into their IDE to wake up the coding agent.

**The Output block:**

```text
======================================================
🎉 PLANNING COMPLETE! READY FOR IDE HANDOFF.
======================================================

**Human, do the following to start coding:**

1. Copy the entire `docs/` folder into your code editor.
2. Save the `AGENT.md` file at the root of your project.
3. Open your IDE's AI Agent (e.g., Cursor Composer, Antigravity).
4. Paste the prompt below exactly as written:

--------- PASTE THIS INTO YOUR IDE AI ---------

Initialize Project Build.
1. Read `p_32_AGENT.md` at the root. Do not process anything else until you read it.
2. Read `p_31_index.md` to map your context.
3. Read `p_23_walking-skeleton-spec.md` to get your exact scope.
4. Explain to me what you are about to build for M1, wait for my confirmation, and then begin scaffolding.

-----------------------------------------------

Good luck with the build phase! Returning to standby mode.
======================================================
```

---

## Facilitator Behavior (AI Rules)

- **DO** generate the markdown text in code blocks so the user can easily copy/paste it into files.
- **DON'T** rewrite the contents of the 7 core docs into the handoff prompt. That creates duplicates and wastes context.
- **DO** emphasize that the IDE agent must wait for human confirmation before scaffolding.
- **DON'T** assume the IDE agent has a large context window. Always use the `docs/index.md` pointer method.

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| Document Check | Just Architecture + Scope | All 7 + Walking Skeleton | Full Audit |
| Digest Type | Flat `docs/README` | `docs/index.md` pointer setup | Scripted `.zip` packager |
| AGENT.md prep | Basic context only | Full context + rules | Integrated with CI gates |
