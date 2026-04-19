# Rule: Fitness Functions

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** Medium

## What are Fitness Functions?
Fitness functions are automated, objective checks that ensure the codebase hasn't violated its core architectural constraints over time. Rather than relying on subjective code-review, fitness functions provide binary pass/fail metrics on structural integrity.

## Standard Fitness Checks
Agents working on Standard or Enterprise projects MUST execute these checks (via existing test runners or bespoke scripts) prior to calling **GATE-04: Milestone Acceptance**:

1. **Dependency Direction:** Code in the `domain` or `business_logic` layer MUST NOT import code from the `ui` or `data` layers. If a UI component is imported into a core model, the fitness function fails.
2. **Circular Dependencies:** Check for modules importing each other, creating infinite loops or lock-ups.
3. **File Size/Complexity:** Assert that no file violates the 500-line rule. Assert cyclomatic complexity is below the threshold.
4. **Coverage Thresholds:** Assert that unit test coverage hits the target tier metric (60% or 80%).

## Agent Verification Protocol
When preparing the `quality-scorecard.md`, the agent must run the project's equivalent of these fitness checks (e.g., using `dependency-cruiser` in JS, or `archunit` in Java).

If any fitness function fails, the agent MUST treat it as a hard bug and fix the structural violation before requesting Milestone Acceptance.
