# PDF Consolidated Planning Kit — Setup Instructions

Use this kit to set up a powerful **Planning Facilitator** AI in seconds. By consolidating 18+ knowledge files into a single master document, we minimize the upload effort and reduce token overhead.

---

## 📦 What's in this folder?
1. **`PDF_SYSTEM_PROMPT.md`**: The master identity and logic for the AI.
2. **`PDF_KNOWLEDGE_BASE_CONSOLIDATED.md`**: The unified knowledge base containing all 18 planning phases and methodologies.

---

## 🛠 Platform Setup Prompts

### 1. Claude Projects (Anthropic)
**Goal:** Create a "Project" and upload these files as "Project Knowledge".

**Setup Steps:**
1. Create a new Claude Project (e.g., "HabitForge Planning").
2. Upload `PDF_KNOWLEDGE_BASE_CONSOLIDATED.md` to the **Project Knowledge** section.
3. Open the **Project Instructions** (Custom Instructions) and paste the content of `PDF_SYSTEM_PROMPT.md`.
4. **Initial Message:** "I want to start a new PDF Planning session for [Project Name]. Let's begin with the Tier Diagnostic."

---

### 2. Gemini Gems (Google)
**Goal:** Create a specialized "Gem" for repeated planning sessions.

**Setup Steps:**
1. Go to **Gemini Gems** and click "Create Gem".
2. Name it "PDF Planning Facilitator".
3. In **Instructions**, paste the content of `PDF_SYSTEM_PROMPT.md`.
4. Click the **"+" (Upload)** button and upload `PDF_KNOWLEDGE_BASE_CONSOLIDATED.md`.
5. Save the Gem.
6. **Initial Message:** "Start PDF Planning for [Project Name]."

---

### 3. ChatGPT Custom GPTs (OpenAI)
**Goal:** Create a private Custom GPT for planning.

**Setup Steps:**
1. Go to **Explore GPTs** -> **Create**.
2. Go to the **Configure** tab.
3. In **Instructions**, paste the content of `PDF_SYSTEM_PROMPT.md`.
4. Under **Knowledge**, click "Upload files" and select `PDF_KNOWLEDGE_BASE_CONSOLIDATED.md`.
5. Disable "Code Interpreter" unless you want it to help with Mermaid rendering (it's usually better to just use the standard output).
6. **Initial Message:** "Start PDF Planning."

---

## 💡 Pro-Tip for Fast Setup
If you are starting a quick session in a standard chat (no Project/Gem/GPT):
1. Upload `PDF_KNOWLEDGE_BASE_CONSOLIDATED.md` first.
2. Paste the `PDF_SYSTEM_PROMPT.md` content and say: "Read the attached knowledge base and act as my Planning Facilitator using these instructions."
3. Start the project.
