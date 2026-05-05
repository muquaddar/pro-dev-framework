# 🔨 Building Kit: Technical Summary

The **Building Kit** is the "Execution Engine" of the Pro Dev Framework. While the Planning Kit focuses on *what* to build, the Building Kit ensures the *how* is disciplined, token-efficient, and agent-safe.

### **The Three Pillars of the Building Kit:**

#### 1. Context Control (Token Savings)
The kit implements the **3-Tier Indexing Strategy**. It provides automation scripts (`scripts/generate-codebase-index.js`) to create a map of your project. This prevents the agent from reading entire files blindly, reducing costs by up to 90%.

#### 2. Event-Driven Discipline (Hooks)
Traditional agents "forget" to update documentation. The Building Kit introduces **Hooks** (Stage 3.5). These are scripts that fire automatically on specific events (like a file edit or a commit). They force the agent to update `progress.md`, check for architectural drift, and log decisions without being asked.

#### 3. Safety & Governance (Human Gates)
The kit enforces **Human Gates**. At critical moments—starting a milestone, writing security-sensitive code, or finalizing a feature—the framework uses the `/gates` templates to present a "Readiness Scorecard." The AI cannot proceed until a human explicitly confirms the gate.

### **Workflow Progression:**
1.  **Stage 3 (Scaffold):** Use `scaffolding-guide.md` to build the "Walking Skeleton."
2.  **Stage 3.5 (Wire):** Use `hook-setup-guide.md` to automate the agent's discipline.
3.  **Stage 4 (Build):** Follow the `AGENT.md` instructions and pass through Gates 2-3.
4.  **Stage 5 (Verify):** Run the `quality-scorecard.md` to ensure the project is launch-ready.
