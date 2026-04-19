# Gemini Setup Guide — PDF Planning Facilitator

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Platform:** Google Gemini Advanced (via Google AI Studio or Gemini App)
> **Time:** 5-10 minutes (one-time setup)
> **Reusable:** Yes — one Gem works for unlimited projects

---

## What You're Building

A **Gemini Gem** (custom AI agent) that acts as your Pro Dev Framework Planning Facilitator. Once created, you can start a new chat any time to plan a project — the Gem already knows the full PDF methodology.

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  WHY GEMINI FOR PLANNING:                                    │
│                                                              │
│  ✅ Native Google Search integration — best for Phase 1      │
│  ✅ 1M+ token context window — largest available             │
│  ✅ Free with Google One AI Premium ($20/mo)                 │
│  ✅ Multimodal — paste competitor screenshots for analysis   │
│  ✅ Gem persists instructions + files across chats           │
│  ⚠️ Gem file upload size/count may vary by tier              │
│                                                              │
│  WHAT YOU NEED:                                              │
│                                                              │
│  • Google One AI Premium plan (includes Gemini Advanced)     │
│  • 18 kit files: 14 knowledge-base + rules.md + 3 templates  │
│  • The system-prompt.md file                                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Setup

### Step 1: Open the Gem Creator

1. Go to [https://gemini.google.com](https://gemini.google.com)
2. Click **"Gem Manager"** in the left sidebar (or navigate to **Gems**)
3. Click **"+ New Gem"**

> **Note:** Gems require Google One AI Premium ($19.99/mo). This includes Gemini Advanced with 1M token context.

---

### Step 2: Configure the Gem Identity

| Field | Value to Enter |
|---|---|
| **Name** | `PDF Planning Facilitator` |
| **Description** | `Pro Dev Framework v1.0.0 — Guides you through idea validation, stakeholders, and 6 interactive planning phases to produce IDE-ready project specs.` |

---

### Step 3: Set the Instructions

1. Open `planning-kit/system-prompt.md` from this repository
2. Copy **everything below the `---` line** (the actual prompt content, not the header)
3. Paste it into the **"Instructions"** field of your Gem

The instructions should start with:
> *"You are the Planning Facilitator for the Pro Dev Framework (PDF v1.0.0)..."*

---

### Step 4: Upload Knowledge Files

1. In the Gem editor, find the **"Knowledge"** or **"Files"** section
2. Click **"Upload"**
3. Upload **all 18 files** from these three locations:

**From `planning-kit/` (root):**
```
 ✅  rules.md   ← enforces frontmatter/heading/filename rules
```

**From `planning-kit/templates/` (3 files):**
```
 ✅  stakeholder-map.md       ← canonical template for file 5 of 32
 ✅  work-streams.md          ← canonical template for file 7 of 32
 ✅  stakeholder-progress.md  ← used during stakeholder deep-dives
```

**From `planning-kit/knowledge-base/` (14 files):**

```
 ✅  01-planning-guide.md
 ✅  02-idea-validation.md
 ✅  03-environment-setup.md
 ✅  04-stakeholder-discovery.md
 ✅  05-stakeholder-deep-dive.md
 ✅  06-phase-discovery.md
 ✅  07-phase-strategy.md
 ✅  08-phase-ux.md
 ✅  09-phase-ui.md
 ✅  10-phase-architecture.md
 ✅  11-phase-compliance.md
 ✅  12-phase-prd.md
 ✅  13-output-formats.md
 ✅  14-build-handoff-template.md
```

> **Important:** Upload ALL 18 files (1 rules + 3 templates + 14 knowledge-base). The facilitator references them by filename. Missing files will cause skipped phases, wrong formats, or validation failures. **Do not upload** `README.md` — it's human setup docs, not methodology.

> **If upload limit is reached:** Gemini's file limits may vary. If you cannot upload all 18:
> 1. Merge knowledge-base files 04 + 05 (stakeholder discovery + deep dive) into one file
> 2. Merge knowledge-base files 12 + 13 (output formats + handoff) into one file
> 3. `rules.md` and the 3 templates are non-negotiable — keep them separate

---

### Step 5: Save the Gem

1. Click **"Save"** (or **"Create"**)
2. Your Gem will appear in your Gems list
3. You can now start a new chat with this Gem at any time

---

## Downloadable File Output — Canvas-First Pattern

Gemini Gems output each of the 32 deliverables using **Gemini Canvas** (preferred) with a **fenced code block** as fallback when Canvas is unavailable.

### Enable Canvas in Your Gem

1. Start a chat with your `PDF Planning Facilitator` Gem
2. Click the **Canvas** toggle in the input bar (or type `/canvas` if supported in your account)
3. Verify Canvas is active — you should see a side panel open when the Gem generates a file
4. If Canvas is not available in your Gem, the Gem will automatically fall back to fenced code blocks (no user action required)

> **Note:** Canvas availability depends on your Gemini plan and region. Google One AI Premium accounts generally have it. If absent, the Gem's fallback keeps the 32-file sequence working — you just copy-paste instead of clicking Export.

### Per-File Workflow (Canvas Path — Preferred)

1. Gem announces the file (e.g., *"File 5 of 32: `p_05_stakeholder-map.md`"*)
2. Gem brainstorms with you (asks 2–5 questions, presents option tables)
3. After your answers, Gem **opens a Canvas** containing the complete file (frontmatter + body for `.md`, raw HTML for `.html`)
4. Gem's chat reply says:
   ```
   📥 Export this canvas → Markdown (.md)
   💾 Save as: docs/p_05_stakeholder-map.md
   📍 Stage: 1 — Stakeholder Discovery • File 5 of 32
   ```
5. In the Canvas panel, click **Export → Markdown** (or **HTML** for diagram files)
6. Save the downloaded file to the exact path shown
7. Reply **"Saved"** — Gem advances to file N+1
8. **For revisions:** tell the Gem what to change (e.g., *"In section 3, change X to Y"*). The Gem edits the canvas in place — no need to regenerate the whole file.

### Per-File Workflow (Fallback Path — Canvas Unavailable)

1–2. Same as above
3. Gem emits the complete file as a single fenced ```` ```markdown ```` or ```` ```html ```` block, preceded by the same `📥 Save as:` header
4. Click the **Copy** button on the code block → paste into your local editor → save at the exact path shown
5. Reply **"Saved"** — Gem advances to file N+1

### HTML Deliverables (Files p_14, p_15, p_16, p_17, p_21, p_22, p_28)

For diagram and prototype files, Canvas still works — but you must explicitly choose **Export → HTML** (not Markdown). The Gem will instruct this in its save header. If fallback is active, the Gem emits a ```` ```html ```` block instead of markdown.

**Do not skip the save step.** File N+1's brainstorm assumes file N exists on disk. The PDF Dashboard validates all 32 files are present before the Build handoff.

---

## First Conversation Test

Open your new Gem and type:

```
Start PDF Planning. I want to build a vocabulary learning app for 
toddlers — ad-free, offline-first, iOS and Android. Tier: Standard.
```

**Expected behavior:**
1. Gem welcomes you, confirms tier = Standard
2. Declares: *"Beginning Stage -1, File 1 of 32: `p_01_feasibility-assessment.md`"*
3. Asks 2–5 brainstorm questions before generating
4. After you answer, opens a Canvas with the complete file (or falls back to a fenced markdown block) and shows the `📥 Export → 💾 Save as: docs/p_01_feasibility-assessment.md` header
5. Waits for "Saved" before moving to file 2
6. Uses Google Search for competitive-matrix.md (file 2) and platform-research.md (file 9)

**Red flags (means setup failed):**
- ❌ Dumps multiple files in one turn
- ❌ Skips the brainstorm bite and goes straight to generating
- ❌ Uses non-canonical filenames (e.g., `StakeholderMap.md`)
- ❌ Omits the `📥 Save as:` header
- ❌ Tries to write production code
- ❌ Proceeds without waiting for "Saved" confirmation

If you see red flags, verify the system prompt is current (includes the 32-file sequence) and all knowledge files are uploaded.

---

## Leveraging Gemini's Strengths

### Native Google Search (Phase 1 Superpower)

Gemini has the strongest web search integration of any platform. During Phase 1 (Discovery), it can:

```
YOU:    "Run the competitor review mining prompt from 
        06-phase-discovery.md for kids' vocabulary apps."

GEMINI: [Automatically searches Google, App Store reviews, 
        Reddit discussions, Product Hunt listings]
        
        "Based on my research, here are the top 10 competitor 
        apps with their reviews analysis:
        
        | App | Rating | Top Complaint | Source |
        |-----|--------|---------------|--------|
        | ... | ...    | ...           | [URL]  |
        
        Key pain points across all competitors:
        1. Too many ads (found in 8/10 apps)
        2. No offline mode (found in 6/10 apps)
        ..."
```

This makes Gemini the **best platform for Phase 1 — Discovery research**.

### Multimodal Input (Phase 4 Enhancement)

During Phase 4 (UI Design), you can:
- **Paste competitor screenshots** — Gemini analyzes the UI patterns
- **Upload mood board images** — Gemini extracts colors, typography, layout patterns
- **Share hand-drawn wireframes** — Gemini converts to structured wireframe descriptions

```
YOU:    [uploads screenshot of competitor app]
        "Analyze this UI. What design patterns are they using?
        What works well? What would you change for our audience 
        (toddlers age 3-5)?"

GEMINI: "This app uses a tab-based navigation with 5 sections...
        For toddlers, I'd recommend simplifying to a Hub-and-Spoke 
        model because..."
```

---

## Usage Tips

### Starting a New Project
```
"Let's plan a new project."
```
Gemini starts from Stage -1 and works through all phases.

### Resuming a Previous Session
```
"Resume planning. I completed Phase 2 (Strategy). Here are my 
completed docs: [paste or upload files]"
```
Gemini picks up from the next phase.

### Using Search Strategically
For the deepest Phase 1 research, give Gemini specific search prompts:
```
"Search for the top 10 kids' vocabulary apps on the App Store. 
Focus on 1-3 star reviews. What are users complaining about?"
```

### Exporting Results
After each file, Gemini either opens a **Canvas** (click **Export → Markdown** or **HTML**, then save at the path shown) or — if Canvas is unavailable — emits a fenced code block you copy-paste. Either way, save at the exact path in the `💾 Save as:` header, then reply **"Saved"** so the Gem advances. All 32 files must be on disk before Build handoff — the PDF Dashboard validator will reject missing files.

### Pairing with NotebookLM (Recommended)

Gemini Gems and NotebookLM are complementary — use them together:

| Tool | Role in Planning Kit |
|---|---|
| **NotebookLM** | Research library + grounded Q&A over the 18 kit files (knowledge-base + rules + templates), your competitor research, industry reports, and existing project docs. Cites sources inline. |
| **Gemini Gem (PDF Facilitator)** | Drives the 32-file sequence, enforces bite protocol, emits downloadable `.md` files. |

**Workflow:**

1. **Build a NotebookLM notebook first.** Upload:
   - All 18 kit files: `rules.md` + 3 `templates/*.md` + 14 `knowledge-base/*.md`
   - Any market research PDFs, competitor feature lists, user interview transcripts, regulatory docs (COPPA, GDPR summaries)
   - Screenshots or exports from existing products you're learning from
2. **Use NotebookLM for grounded research** during Stage -1 (feasibility, competitive matrix, idea validation) and Phase 1 (platform-research). Ask questions like *"What are the top 5 monetization pitfalls for kids' apps cited in my sources?"* — NotebookLM answers with inline citations.
3. **Paste NotebookLM's findings into the Gem** when it runs the brainstorm bite for that file. The Gem then structures the finding into the canonical markdown template.
4. **Keep the notebook open throughout the 32-file sequence** — it's your external memory. Add new sources as the project evolves (design references for Phase 4, architecture decision records for Phase 5, etc.).

**Why this split works:** NotebookLM excels at source-grounded recall but doesn't follow multi-step methodologies. The Gem follows the methodology but hallucinates when asked for citations. Together: NotebookLM provides the evidence, the Gem provides the structure.

**Quick toggle pattern:**
```
[In NotebookLM] "Summarize the top 3 offline-sync strategies cited 
in my sources, with tradeoffs and citations."
→ Copy the answer.

[In Gemini Gem] "Here's my research from NotebookLM on offline sync: 
[paste]. Use this in the Phase 2 Strategy bite for stack selection."
→ Gem incorporates it into strategy.md.
```

### Switching to IDE for Building
After Phase 6 is confirmed:
```
"Generate the Build Handoff package."
```
Save the output files, open your IDE agent, and begin building.

---

## Updating the Gem

When new versions of the PDF methodology are released:

1. Go to **Gems** → click your Gem → **Edit**
2. Remove old knowledge files
3. Upload the new versions
4. Update instructions if the system prompt changed
5. Save — new conversations will use the updated methodology

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Gem ignores the methodology | Verify instructions are set (not just knowledge files) |
| "I don't have that file..." | Ensure all 14 files are uploaded in Knowledge |
| File upload limit reached | Merge small related files (see Step 4 workaround) |
| Wrong output format | Check that `13-output-formats.md` is uploaded |
| Gemini dumps everything at once | Add to instructions: "Handle ONE bite per response. Wait for user confirmation." |
| Search results are irrelevant | Be more specific in the search prompt: include category, platform, date range |
| Context gets confused over long chats | Start a new conversation within the same Gem. Upload prior phase outputs. |
| Mermaid diagrams don't render | Copy the Mermaid code block to [mermaid.live](https://mermaid.live) for rendering |

---

## Platform Comparison — Which to Use When

| Dimension | Gemini (this guide) | ChatGPT | Claude |
|---|---|---|---|
| **Web search** | ✅ Best (native Google) | ✅ Good (Bing) | ❌ None |
| **Context window** | ✅ 1M+ tokens | ⚠️ 128K tokens | ✅ 200K tokens |
| **Multimodal input** | ✅ Images + video | ✅ Images | ✅ Images |
| **Structured output** | ✅ Good | ✅ Excellent | ✅ Excellent |
| **Methodology adherence** | ⚠️ Good (may need nudging) | ✅ Strong | ✅ Strongest |
| **Best for** | Phase 1 (research) + Phase 4 (visual) | All-rounder | Phases 2-6 (structured) |

### Recommended Workflow (Multi-Platform)

For the highest quality planning output, use platforms by their strengths:

```
Phase 1 (Discovery)       → Gemini (Google Search for research)
Phases 2-3 (Strategy, UX) → Claude (best structured methodology following)
Phase 4 (UI Design)       → Gemini (paste screenshots, mood boards)
Phases 5-6 (Arch, Sec)    → Claude or ChatGPT (strong structured output)
Build Handoff             → Any platform (same output format)
```

All files use the same YAML frontmatter standard, so switching platforms mid-plan is seamless.

---

## Requirements

| Requirement | Details |
|---|---|
| **Subscription** | Google One AI Premium ($19.99/mo) |
| **Knowledge files** | 18 markdown files: `rules.md` + 3 templates + 14 knowledge-base |
| **Instructions** | `planning-kit/system-prompt.md` |
| **Browser** | Any modern browser (Chrome recommended for Google integration) |
| **Time to set up** | 5-10 minutes |
| **Reusable** | Yes — one Gem handles unlimited projects |
