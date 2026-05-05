# Pro Dev Framework: Planning Kit

> **Version:** PDF v1.0.0
> **Role:** Foundation mapping & spec generation before coding.
> **Target Platforms:** ChatGPT Plus, Claude Pro, Google Gemini Advanced.

---

## What is the Planning Kit?

The Planning Kit methodology bridges the gap between a vague idea and a structured, IDE-ready development plan. It is specifically designed to be loaded into modern, large-context cloud AI models (ChatGPT, Claude, Gemini) acting as a **Planning Facilitator**.

You do not write code in this phase. You interact with your LLM to generate the `docs/` folder, which serves as the blueprint for the IDE Agent (the Building Kit) later on.

## Directory Structure

```text
planning-kit/
├── knowledge-base/        ← The core methodology (Phases 1-6)
├── templates/             ← Pre-formatted outputs and templates
├── platform-setup/        ← Guides on how to load this kit into AI tools
├── system-prompt.md       ← The behavior instruction for the AI
└── README.md              (You are here)
```

## How to Use This Kit

1. **Choose Your AI Facilitator**
   Go to `platform-setup/` and follow the setup guide for your preferred AI (ChatGPT, Claude, or Gemini). You will inject `system-prompt.md` as the core behavior.

2. **Run Through the Gates**
   The AI Facilitator will lead you through 8 strictly gated strategic planning gates:
   - Gate PL_0: Strategic Alignment (Feasibility & Validation)
   - Gate PL_1: Stakeholder Discovery (Roles & Work Streams)
   - Gate PL_2: Discovery & Requirements (Functional/Non-functional)
   - Gate PL_3: Strategy & Design (Tech Strategy, UX/UI Tokens)
   - Gate PL_4: System Architecture (Data Model & Skeleton Spec)
   - Gate PL_5: Compliance & PRD Synthesis (Privacy & PRD)
   - Gate PL_6: Handoff & QA Strategy (AGENT.md & Test Pyramid)
   - Gate PL_7: Launch & Operations Planning (GTM & Metrics)

3. **Confirm & Assemble**
   After each phase, save the output markdown files into your project's `docs/` directory.

4. **Handoff**
   Once Stage 6 is confirmed, use the `14-build-handoff-template.md` to generate the final context package. Feed this directly into your IDE Agent to start the Building Kit.

## Key Principles

- **No Coding Yet:** Stick to diagrams, flowcharts, and markdown specs.
- **Bite-Sized Pacing:** The AI will ask you one question at a time.
- **Options Over Prescriptions:** The AI will always offer 2-3 approaches with pros/cons before assuming a decision.
- **Human Gateways:** The AI will not proceed to the next phase without your explicit verbal confirmation (e.g., "Confirmed, proceed to Phase 3").

## Next Steps

Head over to `platform-setup/` to configure your AI Facilitator.
