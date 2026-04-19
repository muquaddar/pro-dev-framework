# Rule: Session Management & The Switch Protocol

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** Critical

## The Stateless Agent Reality
Unlike human developers who remember what they did yesterday, AI agents are inherently stateless across execution sessions (or context window clears). When a session ends abruptly, the agent literally loses its mind.

To prevent this, the framework enforces a rigid **Switch Protocol** for ending a session or moving work between different agent platforms (e.g., from ChatGPT to Claude Code to Antigravity).

## Triggering the Protocol
The agent MUST initiate the Switch Protocol when:
1. The human types "switch", "hand over", "done for today", or "pause".
2. The agent detects its context window limit is approaching.
3. The human completes a major Gate (e.g., Gate 4) and workflow might branch.

## The Switch Protocol Steps

### Step 1: Capture the Destination
The agent asks the human where they intend to resume work next:
"Where would you like to continue? (e.g., ChatGPT Web, Claude Code CLI, Antigravity, or Unknown/Done)"

### Step 2: The Mandatory State Save
Regardless of the destination, the agent MUST persist its short-term memory to the physical disk.
1. Create/update a session snapshot at `memory/sessions/[YYYY-MM-DD]-[agent].md`.
2. Update `AGENT.md` (Update the "Current State" and "Session History" blocks).
3. Update `docs/progress.md` (Check off completed tasks).
4. **Commit:** Execute a `git commit -am "chore(session): save state for agent switch"` so no uncommitted file states are lost.

### Step 3: Generating the Handover
- If the human is switching to a **Cloud Web UI** (ChatGPT/Claude), the agent creates a large, compiled prompt text block containing the Framework Digest, Current State, and the specific next task, so the human can copy-paste it into the new blank chat.
- If the human is switching to an **IDE Agent** (Antigravity/Claude Code), the agent just confirms that `AGENT.md` is updated, as these tools will read it natively upon their next activation.
- Never exit without ensuring Step 2 is complete.
