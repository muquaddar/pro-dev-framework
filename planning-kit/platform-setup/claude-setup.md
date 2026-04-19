# Claude Setup Guide — PDF Planning Facilitator

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Platform:** Claude Pro / Teams / Enterprise
> **Time:** 5-10 minutes (one-time setup)
> **Reusable:** Yes — one Project works for unlimited planning sessions

---

## What You're Building

A **Claude Project** that acts as your Pro Dev Framework Planning Facilitator. Once created, you can start a new conversation inside the project any time — Claude already has the full PDF methodology in its project knowledge.

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  WHY CLAUDE FOR PLANNING:                                    │
│                                                              │
│  ✅ 200K context window — fits all 13 knowledge files easily │
│  ✅ Project Knowledge persists across conversations          │
│  ✅ Strong structured output (tables, markdown, Mermaid)     │
│  ✅ Excellent at following multi-step methodology            │
│  ⚠️ No native web search — Phase 1 research is manual       │
│     (user searches, pastes findings into chat)               │
│                                                              │
│  WHAT YOU NEED:                                              │
│                                                              │
│  • Claude Pro ($20/mo), Teams, or Enterprise subscription    │
│  • 18 kit files: 14 knowledge-base + rules.md + 3 templates  │
│  • The system-prompt.md file                                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Setup

### Step 1: Create a New Project

1. Go to [https://claude.ai](https://claude.ai)
2. Click **"Projects"** in the left sidebar
3. Click **"+ New Project"**
4. Name it: **`PDF Planning Facilitator`**
5. Optionally add a description: *"Pro Dev Framework v1.0.0 — interactive planning facilitator for software projects."*

> **Note:** Projects require Claude Pro ($20/mo), Teams, or Enterprise. Free tier has limited project functionality.

---

### Step 2: Set Project Instructions

1. Inside your new project, click the **⚙️ gear icon** or **"Project instructions"**
2. Open `planning-kit/system-prompt.md` from this repository
3. Copy **everything below the `---` line** (the actual prompt content, not the header)
4. Paste it into the **Project Instructions** field

The instructions should start with:
> *"You are the Planning Facilitator for the Pro Dev Framework (PDF v1.0.0)..."*

> **Tip:** Claude's Project Instructions have a generous character limit (~8,000 characters). The system prompt fits comfortably.

---

### Step 3: Upload Knowledge Files

1. In the project view, find the **"Project knowledge"** section
2. Click **"Add content"** → **"Upload files"**
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

> **Size limits:** Claude Projects support up to 200K tokens of project knowledge. 18 markdown files total ~60K tokens — well within limits.

---

### Step 4: Verify the Setup

After uploading, you should see:
- ✅ Project name: `PDF Planning Facilitator`
- ✅ Project instructions: System prompt pasted
- ✅ Project knowledge: 18 files listed (rules.md, 3 templates, 14 knowledge-base)

There are no additional capability toggles needed — Claude Projects don't have separate capability switches like ChatGPT.

---

### Step 5: Start Your First Conversation

1. Inside the project, click **"New conversation"**
2. Every conversation inside this project automatically has access to the instructions and knowledge files

That's it — setup is complete.

---

## First Conversation Test

Open a new conversation in your project and type:

```
Let's plan a new project. I want to build a vocabulary learning 
app for toddlers. It should be ad-free, offline-first, and 
available on both iOS and Android.
```

**Expected behavior:**
1. Claude welcomes you and confirms the project idea
2. It asks clarifying questions (audience, constraints, timeline)
3. It begins Stage -1 (Idea Validation) or Stage 0 (Environment Setup)
4. It proceeds one bite at a time, waiting for your confirmation
5. It references the knowledge-base files by name when following methodology

**Red flags (means setup failed):**
- ❌ Doesn't follow the bite-sized pacing
- ❌ Dumps all phases at once
- ❌ Doesn't mention PDF methodology or knowledge files
- ❌ Tries to write production code

If you see red flags, verify that the project instructions and all 13 knowledge files are correctly added.

---

## Handling Phase 1 Without Web Search

Claude does not have native web browsing. For Phase 1 (Discovery), which requires platform research, you have two options:

### Option A: Manual Research (Recommended)

```
YOU:    "Starting Phase 1. I searched the App Store for kids' 
        vocabulary apps. Here are the top 5 competitors and 
        their 1-star review themes: [paste findings]"

CLAUDE: "Thank you. Based on your research, I see 3 major pain 
        points emerging: [analysis]. Let me structure these into 
        our Platform Research Findings template..."
```

### Option B: Use Claude's Training Knowledge

```
YOU:    "Start Phase 1 Discovery. Use your training data for 
        competitor analysis since you don't have web access."

CLAUDE: "I'll base the competitive analysis on my training data.
        Note: these findings should be validated with live data 
        before finalizing requirements. Here's what I know about 
        the kids' education app market..."
```

The facilitator will tag AI-generated research as lower confidence and suggest human validation.

### Option C: Hybrid with Another Tool

1. Ask Claude to generate the research prompts from `06-phase-discovery.md`
2. Paste those prompts into ChatGPT or Perplexity (which have web search)
3. Copy the search results back into Claude
4. Claude structures the findings using the PDF template

---

## Usage Tips

### Starting a New Project
Each new project should get its own conversation thread within the Project. Start with:
```
"Let's plan a new project."
```

### Resuming a Previous Session
Start a new conversation (or continue an existing one) with:
```
"Resume planning. I completed Phase 2 (Strategy). Here's my 
requirements.md and strategy.md: [paste or upload files]"
```

### Multiple Projects
You can run multiple projects through the SAME Claude Project — each in its own conversation thread. The methodology stays the same; only the project details differ.

### Uploading Previous Outputs
If you completed some phases in another tool, upload the docs directly into the conversation:
```
"Here are my completed planning docs from Phases 1-3. 
Please review and continue from Phase 4."
[attach requirements.md, strategy.md, ux-flows.md]
```

Claude can read uploaded files mid-conversation — you don't need to add them to Project Knowledge.

### Switching to IDE for Building
After Phase 6 is confirmed:
```
"Generate the Build Handoff package."
```
Claude produces the AGENT.md + pdf-manifest.json + file index. Save to your project folder, open your IDE agent, and begin building.

---

## Updating the Project

When new versions of the PDF methodology are released:

1. Go to **Projects** → click your project → **⚙️ settings**
2. Remove old knowledge files
3. Upload the new versions
4. Update project instructions if the system prompt changed
5. New conversations will immediately use the updated methodology

> **Note:** Existing conversation threads retain the context from when they were started. Only new conversations pick up updated knowledge files.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Claude ignores the methodology | Verify project instructions are set (not just knowledge files) |
| "I don't see the file..." | Ensure all 14 files are uploaded in Project Knowledge |
| Wrong output format | Check that `13-output-formats.md` is in the knowledge files |
| Claude dumps everything at once | Add to instructions: "Handle ONE bite per response. Wait for user confirmation." |
| Research is shallow in Phase 1 | Expected — Claude lacks web search. Use Option A or C above |
| Context window fills up | Start a new conversation within the same project. Upload prior phase outputs. |
| Claude contradicts the methodology | It may hallucinate steps. Say: "Check file 06-phase-discovery.md, Bite 2" to ground it |

---

## Claude vs ChatGPT — When to Use Which

| Dimension | Claude (this guide) | ChatGPT (see chatgpt-setup.md) |
|---|---|---|
| **Web search** | ❌ No native search | ✅ Built-in browsing |
| **Context window** | ✅ 200K tokens | ⚠️ 128K tokens |
| **Structured output** | ✅ Excellent | ✅ Excellent |
| **Project persistence** | ✅ Project Knowledge | ✅ Custom GPT Knowledge |
| **Best for** | Phases 2-6 (methodology-heavy) | Phase 1 (research-heavy) |
| **Workaround** | Paste research from other tools | N/A |

**Best combo:** Use ChatGPT for Phase 1 (Discovery research), then switch to Claude for Phases 2-6 (structured planning). The YAML frontmatter format ensures files are compatible across platforms.

---

## Requirements

| Requirement | Details |
|---|---|
| **Subscription** | Claude Pro ($20/mo), Teams, or Enterprise |
| **Knowledge files** | 18 markdown files: `rules.md` + 3 templates + 14 knowledge-base |
| **Project instructions** | `planning-kit/system-prompt.md` |
| **Browser** | Any modern browser |
| **Time to set up** | 5-10 minutes |
| **Reusable** | Yes — one Project handles unlimited planning sessions |
