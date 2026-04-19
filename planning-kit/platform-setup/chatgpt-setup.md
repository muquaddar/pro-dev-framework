# ChatGPT Setup Guide — PDF Planning Facilitator

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Platform:** ChatGPT Plus / Teams / Enterprise
> **Time:** 5-10 minutes (one-time setup)
> **Reusable:** Yes — one Custom GPT works for unlimited projects

---

## What You're Building

A **Custom GPT** that acts as your Pro Dev Framework Planning Facilitator. Once created, you can start a new chat any time to plan a project — the GPT already knows the full PDF methodology.

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  WHAT YOU GET:                                               │
│                                                              │
│  📋 A reusable AI assistant that:                            │
│     • Guides you through all 6 planning phases               │
│     • Presents 2-3 options for every major decision          │
│     • Outputs exact markdown files you save to docs/         │
│     • Generates pdf-manifest.json for project tracking       │
│     • Follows bite-sized pacing (one question at a time)     │
│     • Produces the Build Handoff package for IDE agents      │
│                                                              │
│  WHAT YOU NEED:                                              │
│                                                              │
│  • ChatGPT Plus, Teams, or Enterprise subscription           │
│  • 18 kit files: 14 knowledge-base + rules.md + 3 templates  │
│  • The system-prompt.md file                                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Setup

### Step 1: Open the Custom GPT Creator

1. Go to [https://chatgpt.com](https://chatgpt.com)
2. Click your **profile icon** (bottom-left) → **My GPTs**
3. Click **"+ Create a GPT"** (top-right)
4. Switch to the **"Configure"** tab at the top

> **Note:** Custom GPTs require ChatGPT Plus ($20/mo), Teams, or Enterprise. Free tier cannot create Custom GPTs.

---

### Step 2: Fill in the GPT Identity

| Field | Value to Enter |
|---|---|
| **Name** | `PDF Planning Facilitator` |
| **Description** | `Pro Dev Framework v1.0.0 — Guides you through idea validation, stakeholders, and 6 interactive planning phases to produce IDE-ready project specs.` |
| **Profile Picture** | Optional — use any icon/logo you'd like (📋 or 🏗️ recommended) |

---

### Step 3: Paste the System Prompt

1. Open `planning-kit/system-prompt.md` from this repository
2. Copy **everything below the `---` line** (the actual prompt content, not the header)
3. Paste it into the **"Instructions"** box in the Configure tab

The instructions box should now contain the full facilitator prompt starting with:
> *"You are the Planning Facilitator for the Pro Dev Framework (PDF v1.0.0)..."*

---

### Step 4: Upload Knowledge Files

1. Scroll down to the **"Knowledge"** section
2. Click **"Upload files"**
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

**From `planning-kit/knowledge-base/` (14 files, in this order):**

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

> **Important:** Upload ALL 18 files (1 rules + 3 templates + 14 knowledge-base). The facilitator references them by name. Missing files will cause skipped phases, wrong output formats, or validation failures. **Do not upload** `README.md` — it's human setup docs, not methodology.

> **File size limit:** ChatGPT supports up to 20 files, 512 MB each. 18 markdown files (~10-40 KB each) fit comfortably.

---

### Step 5: Configure Capabilities

In the **"Capabilities"** section, enable:

| Capability | Enable? | Why |
|---|---|---|
| **Web Browsing** | ✅ Yes | Critical for Phase 1 (Discovery) — the facilitator searches for competitor reviews, market trends, and user pain points |
| **DALL·E Image Generation** | ⬜ Optional | Not required for planning. Enable if you want the GPT to generate mood boards or visual references during Phase 4 (UI Design) |
| **Code Interpreter** | ⬜ Optional | Not needed for planning. Can be useful if you want the GPT to render Mermaid diagrams inline |

---

### Step 6: Set Conversation Starters

Add these suggested conversation starters:

```
1. "Let's plan a new project."
2. "Resume planning — here's my progress so far."
3. "I have an idea I want to validate before building."
4. "Generate the Build Handoff package for my completed plan."
```

---

### Step 7: Save and Test

1. Click **"Save"** (top-right)
2. Choose visibility:
   - **"Only me"** — Private, recommended for personal use
   - **"Anyone with a link"** — If you want to share with team members
3. Click **"Confirm"**

Your Custom GPT is now live. You'll find it in your GPT list and can start a new chat anytime.

---

## First Conversation Test

Open your new GPT and paste:

```
Let's plan a new project. I want to build a vocabulary learning 
app for toddlers. It should be ad-free, offline-first, and 
available on both iOS and Android.
```

**Expected behavior:**
1. The GPT welcomes you and confirms the project idea
2. It asks clarifying questions (audience, constraints, timeline)
3. It begins Stage -1 (Idea Validation) if the project is new
4. Or asks about tier selection (Stage 0) if the idea is already validated
5. It proceeds one bite at a time, waiting for your confirmation before moving forward

**Red flags (means setup failed):**
- ❌ Dumps all 7 phases at once instead of pacing
- ❌ Doesn't mention "bites" or offer options
- ❌ Doesn't reference the knowledge-base files or `rules.md`
- ❌ Tries to write production code

If you see red flags, verify that the system prompt and all 18 knowledge files (rules + templates + knowledge-base) are correctly uploaded.

---

## Usage Tips

### Starting a New Project
```
"Let's plan a new project."
```
The GPT will start from Stage -1 (Idea Validation) and work through all phases.

### Resuming a Previous Session
```
"Resume planning. I completed Phase 2 (Strategy). Here's my 
requirements.md and strategy.md: [paste or upload files]"
```
The GPT will pick up from Phase 3 (UX) and continue.

### Switching to IDE for Building
After Phase 6 is confirmed, say:
```
"Generate the Build Handoff package."
```
The GPT will produce the complete AGENT.md + pdf-manifest.json + docs/ file index. Save these files, open your IDE agent, and paste the activation prompt from `building-kit/activation-prompt-template.md`.

### Getting a Second Opinion
After any phase, you can copy the output and paste it into Claude or Gemini for a different perspective. The YAML frontmatter format ensures cross-platform compatibility.

---

## Updating the GPT

When new versions of the PDF methodology are released:

1. Go to **My GPTs** → click your GPT → **Configure**
2. Delete old knowledge files
3. Upload the new versions
4. Update the system prompt if changed
5. Save

The GPT will immediately use the updated methodology in new conversations.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| GPT ignores the methodology | Re-check that system prompt was pasted correctly in Instructions |
| GPT says "I don't have access to..." | Verify all 13 knowledge files are uploaded in the Knowledge section |
| Web search doesn't work in Phase 1 | Enable "Web Browsing" in Capabilities |
| GPT outputs wrong file formats | Ensure `13-output-formats.md` is uploaded — this defines the exact templates |
| GPT dumps everything at once | Add to Instructions: "Handle ONE bite at a time. Wait for user confirmation." |
| File upload fails | Check file size (should be <50KB each). Try uploading in batches of 5 |

---

## Requirements

| Requirement | Details |
|---|---|
| **Subscription** | ChatGPT Plus ($20/mo), Teams, or Enterprise |
| **Knowledge files** | 18 markdown files: `rules.md` + 3 templates + 14 knowledge-base |
| **System prompt** | `planning-kit/system-prompt.md` |
| **Browser** | Any modern browser |
| **Time to set up** | 5-10 minutes |
| **Reusable** | Yes — one GPT handles unlimited projects |
