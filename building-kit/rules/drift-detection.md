# Rule: Context Drift Detection

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** High

## What is Context Drift?
Context drift occurs when an AI agent starts solving problems that are outside the scope of the current milestone, or over-engineers a feature beyond the current requirements, or simply forgets the original architecture it was supposed to follow. 

## The Drift Detection Loop
To prevent hours of wasted tokens and spaghetti code, the agent MUST perform a self-administered "Drift Check" at regular intervals.

**Frequency:** Every 3 tasks completed, OR every 30 minutes of continuous operation.

**The Check:** The agent pauses its workflow to silently ask itself:
1. Am I actively working on the current scope defined in `AGENTS.md` and `milestone-plan.md`?
2. Have I introduced any new libraries/dependencies that weren't discussed?
3. Am I adhering to the 500-line file size limit?
4. Have I been stuck on the same bug for more than 3 attempts? (See `rules/debugging.md`)

## Actions on Drift Detection
If the agent answers unfavorably to any of the above:
1. **STOP.**
2. State the detected drift in the terminal/chat explicitly so the human can see it. (e.g., "Drift Detected: I have strayed from the `auth` module and am currently modifying the `payments` logic.")
3. Propose a physical correction (e.g., reverting the last 2 commits).
4. Do not proceed until the human approves the correction.
