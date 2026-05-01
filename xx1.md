# Brainstorm Prompt for Claude Opus (or Advanced LLMs)

## Context

I have built two complete, production-ready systems:

1. **Pro Dev Framework (PDF v2.0.0)** — A consulting-grade, agent-agnostic methodology for guiding AI agents through **11 phases** of software development (115 files, 100% complete, including Stage 2.5 Extension)

2. **PDF Dashboard (v2.0.0)** — A modernized, production-ready team collaboration interface that operationalizes the Framework (React + Node.js, 100% feature-complete and security-hardened)

Both systems are **fully functional and deployed**. I now want to optimize the **workflows and integration** between them to maximize value delivery, team efficiency, and user experience.

---

## Your Task

Read and deeply analyze the comprehensive systems guide and supporting summaries:

- **Full Guide:** `d:\MyAIAgency\WorkspaceAddOn\COMPREHENSIVE_SYSTEMS_GUIDE.md`
- **Quick Summaries:** `d:\MyAIAgency\WorkspaceAddOn\summaries/` (Start here for rapid context)

After reading, brainstorm **workflow optimizations** across these dimensions:

### 1. **Planning → Building Handoff** (Stages -1 to 3, including Stage 2.5)
Currently: Cloud planning → AGENT.md generation → IDE agent begins

Questions to explore:
- How can we make the handoff more seamless?
- What information is being lost or duplicated between stages?
- Can we automate more of the transition?
- How do we better prepare the IDE agent for building?
- What if the agent could ask clarifying questions back to the planning team?
- Can we detect planning gaps before building starts?
- How do we measure readiness for each stage?

### 2. **Human Gates & Approvals** (All stages)
Currently: Agent triggers gate → Dashboard shows → Team approves/rejects

Questions to explore:
- Are there too many gates? Too few?
- How can we make gate reviews faster?
- Can we automate some gate decisions (e.g., drift violations)?
- What additional context should gates include?
- How do we prevent bottlenecks (slow approvals)?
- Can gates be parallel rather than sequential?
- How do we make gates asynchronous across time zones?
- What metrics predict gate approval vs. rejection?

### 3. **Agent Context & Token Optimization** (Daily)
Currently: 3-tier progressive disclosure (80 → 200 → 300 tokens)

Questions to explore:
- Can we reduce token consumption further?
- How do we predict what context the agent will need next?
- Can we pre-generate context for the next session?
- How do we handle context when the agent switches (mid-project)?
- What if agents could request specific context on-demand?
- How do we detect when context is stale or incorrect?
- Can we use git history to infer what code the agent needs to read?
- How do we optimize for different agent types (Claude vs. ChatGPT)?

### 4. **Work Stream Coordination** (Stages 3-5)
Currently: Code, content, assets, legal streams tracked in separate places

Questions to explore:
- How can streams be more tightly integrated?
- What happens when streams are blocked (content waits for code)?
- How do we detect and surface dependencies early?
- Can we automate dependency tracking?
- How do we prevent one stream from blocking others?
- What if agents could self-organize work based on dependencies?
- How do we parallelize streams more effectively?

### 5. **Real-Time Collaboration** (All stages)
Currently: WebSocket broadcasts, but limited bidirectional communication

Questions to explore:
- How can the agent and team have real-time conversations?
- What if agents could ask questions asynchronously?
- How do we surface progress updates without notification fatigue?
- Can we detect when human input is needed before the agent gets stuck?
- How do we make planning docs collaborative (not just editable)?
- What if changes to docs triggered agent notifications?
- Can we create a "war room" view for active projects?

### 6. **Drift Detection & Architecture Enforcement** (Daily)
Currently: drift-detector.js runs on session start, checks file sizes, imports, structure

Questions to explore:
- Can drift be detected in real-time (not just at session start)?
- How do we predict drift before it happens?
- What if minor violations were auto-fixed?
- How do we learn from drift violations to improve future architecture?
- Can we detect not just structural drift, but logical drift (code patterns diverging)?
- How do we handle intentional deviations from architecture?
- What if agents suggested architectural improvements proactively?

### 7. **Session Continuity & State Management** (Day-to-day)
Currently: Session snapshots saved, progress.md updated manually

Questions to explore:
- How do we create perfect continuity across sessions?
- What if the agent could pick up exactly where it left off?
- How do we handle context when agents swap (Claude → ChatGPT)?
- What information is most critical to preserve between sessions?
- Can we detect session failures before they happen?
- How do we handle parallel sessions (multiple agents on same project)?
- What if agents could help each other across sessions?

### 8. **Documentation & Knowledge** (All stages)
Currently: Planning docs, code indexes, rules compiled separately

Questions to explore:
- How can documentation stay in sync with reality?
- What if docs auto-updated based on code changes?
- How do we detect when docs are stale?
- Can agents write better documentation automatically?
- How do we surface the right docs at the right time?
- What if docs could include examples from the actual codebase?
- How do we prevent documentation debt?

### 9. **Quality & Testing** (Stages 4-5)
Currently: Agent writes tests, runs verification, code review happens

Questions to explore:
- How can we make testing continuous (not just at milestone end)?
- Can we detect flaky tests before they cause problems?
- How do we maintain test coverage automatically?
- What if agents suggested tests based on code changes?
- How do we measure code quality beyond coverage %?
- Can we predict bugs before code is written?
- How do we balance test speed with coverage?

### 10. **Feedback Loops & Iteration** (Stages 2.5, 6-7)
Currently: Users provide feedback, team prioritizes, agent builds fixes

Questions to explore:
- How can feedback reach the agent faster?
- What if agents could analyze user feedback automatically?
- How do we prioritize fixes vs. new features?
- Can we A/B test features before shipping?
- How do we measure which feedback is most impactful?
- What if agents could predict which features users want next?
- How do we close the feedback loop faster?

---

## Specific Optimization Areas

### A. **Bottleneck Elimination**
Identify the top 3 bottlenecks in the current workflow:
- What's slowing down projects?
- Where do teams wait the longest?
- Where do agents get stuck most often?
- How can we remove these bottlenecks?

### B. **Automation Opportunities**
What could be automated that currently requires human effort?
- Can more gates be automated?
- Can more documentation be generated?
- Can more context preparation be proactive?
- Can more decisions be made by rules/heuristics?

### C. **Intelligence Augmentation**
Where could we add AI-driven features?
- Predictive gates (predict approval/rejection based on history)?
- Smart routing (route gate approvals to right person)?
- Anomaly detection (spot unusual patterns)?
- Recommendation engine (suggest next steps)?

### D. **Developer Experience (DX)**
How can we make using the system more delightful?
- Smoother handoffs?
- Better visibility?
- Less cognitive load?
- Faster feedback?
- Clearer status?

### E. **Team Dynamics**
How can the system encourage better team collaboration?
- Reduce approval delays?
- Improve communication?
- Surface blockers earlier?
- Celebrate milestones?
- Distribute knowledge?

---

## Brainstorming Approach

For each area above, think through:

1. **Current State** — What's happening now?
2. **Problem** — What's suboptimal?
3. **Root Cause** — Why is it suboptimal?
4. **Ideal State** — What would be better?
5. **Solution** — How do we get there?
6. **Trade-offs** — What's the cost?
7. **Implementation** — How do we build it?
8. **Impact** — What value does it create?

---

## Question Categories

### Strategic Questions
- What's the single biggest bottleneck we're not addressing?
- What's the highest-leverage optimization?
- Should we focus on breadth (support more project types) or depth (optimize current workflow)?
- How do we differentiate from competitors?

### Tactical Questions
- What could we implement in the next 30 days?
- What would take 3 months?
- What would take 6 months?
- What requires architectural changes vs. UI polish?

### Structural Questions
- Should gates be sequential or parallel?
- Should streams be decoupled or tightly integrated?
- Should agents be autonomous or guided?
- Should the dashboard be real-time or eventual-consistency?

### User Questions
- What frustrates teams most?
- What excites them most?
- What would make them adopt faster?
- What would make them switch to competitors?

---

## Output Format

Please structure your brainstorm response as:

### 1. **Executive Summary** (1-2 paragraphs)
Key findings and recommendations

### 2. **Deep-Dive Analysis** (by topic)
For each of the 10 areas above:
- Current state
- Identified problems
- Optimization opportunity
- Proposed solution(s)
- Expected impact
- Effort estimate

### 3. **Top 5 Recommendations** (prioritized)
The highest-ROI optimizations to pursue first, with:
- What to build
- Why (the problem it solves)
- Expected impact
- Estimated effort
- Dependencies

### 4. **Implementation Roadmap** (30/90/180 days)
What to build when, in priority order

### 5. **New Ideas & Opportunities**
Things you think of that aren't in the current design

### 6. **Questions for the User**
Clarifications you need to refine recommendations

---

## Context for Brainstorming

**Constraints:**
- Both systems are production-ready (don't break existing functionality)
- Team is small (we can't build everything at once)
- Budget is limited (focus on high-leverage changes)
- Timeline is flexible (can take months if needed)

**Opportunities:**
- No competing products in this space (we can define the standard)
- Strong base of consulting expertise (McKinsey, ThoughtWorks, Deloitte patterns)
- Agent-agnostic design (works with any AI provider)
- Token efficiency is a competitive advantage (saves 83%)

**Goals:**
- Make projects faster to complete
- Make projects cheaper (fewer tokens)
- Make teams more collaborative
- Make process less error-prone
- Make system easier to use

---

## Final Instruction

**Think deeply. Challenge assumptions. Question everything. Suggest bold ideas AND practical incrementals. Consider what we're missing. Imagine what perfect would look like. Then tell me how to build it.**

What optimizations would make this system 10x better? What should we prioritize first? What are we getting wrong? What's the path to the next level?
# Response from AI
Brainstorm: Workflow Optimizations for PDF + Dashboard
Executive Summary
Your two systems are sound, but they're stitched together by filesystem polling and human-clicked gates. That's the ceiling. Three theses:

Gates are the wrong primitive. They should be continuously evaluated preconditions, not human-triggered events. Today they're sequential, synchronous, and modal — every gate is a stop-the-world.
The framework can't learn. There's no closed loop from Build → Planning. drift-detector.js detects drift; nothing feeds it back into planning templates. You ship the same brittle plans next project.
Context is curated, not derived. AGENT.md, task lenses, and the 3-tier index are hand-built artifacts that go stale. The right model is task-conditioned context retrieval — given the current task, derive the minimum context needed.
The single highest-leverage move: invert the gate model from "human approves before agent proceeds" to "agent proceeds with continuously-scored readiness; human only intervenes on red." Everything else is downstream of that.

Six Sharp Theses (instead of repeating your 10 areas)
Thesis 1: Replace gates with a continuous "readiness score"
Problem: Gates today are async-blocking. The agent stops, dashboard pings a human, human gets to it hours later, agent unblocks. In timezone-distributed teams this is the dominant latency.

Proposed: Each gate becomes a scoring rubric continuously evaluated by scan-projects.js + an LLM critic. Score 0-100 across dimensions (test coverage, drift, doc completeness, security flags). Default behavior:

≥85 (green): Agent auto-proceeds, human notified asynchronously, can rewind within 24h.
60–84 (yellow): Agent proceeds but flags risk; human review queued, not blocking.
<60 (red): Hard stop, human must approve.
This converts ~80% of gate-touches from blocking events into post-hoc review. The 7 gates stay conceptually; only the enforcement model changes.

Effort: 1–2 weeks. Already have milestone-gate-check.js + drift-detector.js outputting pass/fail; promote them to scored output and add an LLM critic for the qualitative axes.

Thesis 2: Build a closed feedback loop from Build → Planning
Problem: When drift happens repeatedly across projects (e.g., "Phase 5 architecture always misses retry logic"), nothing in the framework updates. Every new project re-discovers the same gaps. This is your biggest long-term weakness.

Proposed: Add a Framework Telemetry Layer:

Every drift flag, gate rejection, planning-validation failure, and session-end blocker writes to framework-telemetry.jsonl (anonymized).
Quarterly aggregation: "Phase 5 architecture docs miss compliance considerations 47% of the time" → auto-generate proposed updates to 10-phase-architecture.md.
Surface in dashboard as "Framework Improvement Suggestions" — humans approve/reject template changes.
This is the difference between a methodology that's useful once and one that compounds. Without this, PDF v3 ships on vibes.

Effort: 2–3 weeks instrumentation, ongoing aggregation logic. High strategic ROI.

Thesis 3: Task-conditioned context, not progressive disclosure
Problem: The 3-tier disclosure (80→200→300 tokens) is a static compression, not a task-aware one. An agent doing "add OAuth" needs different context than one doing "fix CSS bug" — but both get the same AGENT.md. Task lenses help but are hand-curated and rot.

Proposed: A Context Retrieval Service in the dashboard:

Index every code file, planning doc, ADR, and lens with embeddings on save (use a small local model — bge-small is fine, runs on CPU).
Agent calls POST /api/context with {task: "add OAuth callback", currentFile: "auth.ts"} → returns top-K relevant chunks scored by semantic + recency + structural-proximity.
Hand-curated lenses become training examples, not the primary mechanism.
This collapses a class of problems: stale lenses, missed context, overlong AGENT.md.

Effort: 3–4 weeks. Big payoff, but only worth it if you're hitting context-pollution problems today. Validate first by measuring: how often do agents ask for files that exist but weren't in their initial context?

Thesis 4: Streams should be a DAG, not parallel lanes
Problem: "Code/content/asset/legal in parallel" sounds nice, but the failure mode is invisible cross-stream blocks. Content stream waits on a copy decision that's actually a code decision. No one sees it until launch.

Proposed: Replace work-streams.md (a flat tracker) with a dependency graph:

Each deliverable declares blocks: [...] and blocked_by: [...].
Dashboard renders a critical-path view (longest chain to launch).
When one node slips, downstream nodes get auto-flagged with new ETAs.
Agents querying "what should I work on next?" get the answer derived from the graph + their skills.
Tools like Asana/Linear do this for tickets. PDF should do it for artifacts. The graph is the planning output, not a doc.

Effort: 2 weeks (schema + UI), but it changes how teams think — adoption is the hard part.

Thesis 5: Stage 2.5's phase numbering is a wart that will hurt you
Problem: Stage 2 ends with Phase 7 (PRD). Stage 2.5 also starts with Phase 7 (Testing). Two "Phase 7"s. Every doc, every conversation, every search will be ambiguous. This is a small thing that becomes a thousand small papercuts.

Proposed: Renumber. Either:

Stage 2.5 starts at Phase 8 (Testing=8, Launch=9, Ops=10, Iteration=11), OR
Use letter prefixes: P-7 (PRD), L-1 (Testing), L-2 (Launch), etc.
Do this now before more docs reference the colliding numbering. One-time cost, eliminated forever.

Effort: ~4 hours of find-and-replace. Trivial.

Thesis 6: Bidirectional async agent ↔ team channel
Problem: Today, when an agent has a clarifying question, it either (a) guesses and creates drift, or (b) writes a BLOCKER to progress.md and waits. Both are bad. The dashboard has WebSocket for agent→team but no good team→agent path mid-session.

Proposed: Add an agent inbox:

Agent writes structured questions: {type: "decision", options: [...], context: "...", default: "..."}.
Dashboard surfaces in a queue with one-click answers (like Slack reactions).
Answers stream back via WebSocket or the agent picks them up at next session start with full context.
Agent doesn't block — it picks the marked default, flags the assumption, and moves on. When the answer arrives, it diffs.
Treat the team like a slow-but-async oracle, not a synchronous gate.

Effort: 1 week. High impact for solo developers using cloud-AI overnight runs.

Top 5 Recommendations, Prioritized
#	What	Why	Effort	Order
1	Renumber Stage 2.5 phases	Prevents a permanent papercut; trivial	4h	This week
2	Telemetry layer (drift/gate/blocker logs → JSONL)	Foundation for everything else; can't optimize blind	1 week	Next sprint
3	Async agent inbox (questions queue)	Removes the worst single bottleneck for distributed teams	1 week	Next sprint
4	Continuous readiness scores → soft gates	Converts blocking gates to post-hoc reviews; biggest velocity win	2 weeks	Month 2
5	Stream DAG view	Surfaces invisible cross-stream blocks before launch	2 weeks	Month 2
Defer Thesis 3 (semantic context retrieval) until you've measured whether stale-context is actually a top-3 pain point. It's the highest-effort item and may be solving a problem you don't have yet.

30/90/180 Roadmap
30 days — Renumber phases (#1). Ship telemetry layer (#2). Ship agent inbox (#3). Pick one project to instrument end-to-end as your benchmark.

90 days — Soft gates with readiness scoring (#4). Stream DAG (#5). First quarterly framework-improvement aggregation: which planning templates are systematically failing? Patch them.

180 days — Decide on context retrieval based on telemetry. Build the framework feedback loop (Thesis 2 full version) — make framework templates self-improving. Consider an LLM-driven gate critic that pre-fills approval forms.

What I'd Challenge
"100% feature-complete" claims tend to mean "no one's pushed on the edges yet." A few questions: How many concurrent projects has the dashboard been tested against? What's the p99 scan time at 50 projects? How does AGENT.md regeneration behave when planning docs are mid-edit?
Three tiers (Lite/Standard/Enterprise) is one tier too many. I'd bet 90%+ of users are Standard. Lite tempts people to cut corners on planning (the thing PDF exists to enforce). Consider: just "Standard" with explicit opt-outs for individual phases.
The 32-file planning sequence is rigid. What's the amendment protocol when Stage 2 decisions change at Stage 4? If the answer is "go back to planning," teams will just stop using PDF mid-project. Need an explicit mid-build re-plan mechanism.
Questions That Would Sharpen This
What's your actual top-of-mind pain right now — velocity (projects too slow), quality (bugs slipping), or adoption (teams not following the framework)? My recs differ.
How many active projects does the dashboard manage today? My answers change at 5 vs. 50.
Is this for your own agency or a product you're selling? "Agent-agnostic" is a feature for the latter, irrelevant for the former.
What's the single concrete moment in the last month where the system felt slow or wrong? Real friction beats abstract optimization every time.
Pick one, and I'll go deeper on it.

1. Quality
2. right now it has only a few but I will be developing 100's of projects using this framework in future.
3. Yes it is my own agency, I can stick to claudecode, opencode, and kilo code for now.
4. Manual addition of all files from cloud servers.

Revised Brainstorm: Quality-First at Scale, Three-Agent Stack, Cloud Handoff Pain
What changes from the first pass
Quality-first invalidates Thesis 1 (soft gates). Don't soften gates when quality is the goal — instead, make gate decisions take 2 minutes instead of 2 hours. Different fix.
100s of projects elevates Thesis 2 (telemetry) from "nice" to existential. You cannot run a 200-project portfolio on quality without instrumentation.
Three-agent stack (Claude Code, OpenCode, Kilo Code) kills the "agent-agnostic" tax. Agent-specific bundles win.
Manual cloud-AI file copy is your real pain — none of my prior recs addressed this. It's the highest-priority fix.
Recommendation #1 (NEW, top priority): Stop using cloud AI for planning
The friction: You're typing prompts into claude.ai, getting markdown back, copy-pasting into docs/p_NN_*.md, then committing. For each new project that's ~30 manual file transfers. At 100s of projects, this is unsustainable and error-prone (wrong filenames, missing frontmatter, partial copies → planning-validation failures downstream).

The realization: You don't need cloud AI for planning. You're using Claude Code anyway. Claude Code can:

Read all 22 planning-kit knowledge files via CLAUDE.md references or a /plan slash command
Search the web (WebSearch tool) for competitive matrices and platform research
Write files directly to docs/ with correct names and YAML frontmatter
Run validate-planning.js after each write and self-correct
Concrete shape:

Create a planning-orchestrator skill (or slash command) in your global ~/.claude/. It loads the planning-kit knowledge files and walks the user phase-by-phase, writing files directly to disk, validating after each.
Each "bite" produces a real file commit, not a chat message you have to ferry.
The dashboard scans on save (already does), validation runs, gate gets a green tick.
Effort: 2–3 days to build the skill. Eliminates the #1 manual-toil source. This is the biggest single win available to you.

What you give up: The conversational UX of claude.ai. But Claude Code's interactive mode is identical conversation-quality and writes files atomically. There's no real loss.

Bonus: Same skill architecture works for OpenCode and Kilo Code — port the prompts to their config formats.

Recommendation #2: Quality telemetry layer (becomes existential at 100s of projects)
At 5 projects you can eyeball quality. At 200 you can't. Without this, quality regresses silently across the portfolio.

Three score dimensions per project, written to framework-telemetry.jsonl:

Score	Inputs	When written
Code Quality	drift-detector flags, file-size violations, test-gap count, lint errors, security-keyword hits	Every session-end
Planning Quality	validate-planning.js pass rate, frontmatter completeness, section adherence, placeholder count	Every doc save
Process Quality	gate rejection rate, blocker count, mid-build re-plans, time-in-stage variance vs. tier baseline	Every gate decision
Dashboard surfaces:

Portfolio scatter plot: each project a dot on (code quality × time-in-build). Outliers = projects to triage.
Cross-project trends: "your last 10 projects' Phase 5 architecture docs failed validation 60% of the time on first save" → actionable framework gap.
Per-project regression alert: project Quality Score drops >15% week-over-week.
Effort: 1 week for instrumentation, 1 week for dashboard views. Build it before you cross 20 projects, not after.

This is also the substrate for the Build → Planning feedback loop (Thesis 2 in the prior pass). Same data, different aggregation.

Recommendation #3: Make gate decisions take 2 minutes (keep them blocking)
Quality-first means gates do real work. Don't soften — accelerate the human decision.

Today: Approver opens dashboard, navigates project, reads multiple docs, runs scripts mentally, decides.

Proposed gate review page: One screen per gate trigger. Auto-populated by the existing scripts:

milestone-gate-check.js output (test pass/fail, coverage, dep changes)
find-test-gaps.js (missing tests)
drift-detector.js (scope drift since last gate)
Diff summary since last gate (file count, LOC, key files)
LLM-generated 3-bullet exec summary ("M3 added OAuth, coverage holds at 78%, one new dep passport-google adds OAuth-token storage — review for security")
Big green/red buttons + comment box
Approver looks at page, scans LLM summary, scans red flags, clicks. ~2 minutes.

Effort: 1 week. The hard part is the LLM summary prompt (cache the diff against a stable framework-context cache — your existing INTEGRATION_BRAINSTORM caching strategy handles this).

Why this beats soft gates for quality: soft gates trade quality for velocity. This trades human time for velocity while keeping the human in the loop on every quality decision. That's the right swap.

Recommendation #4: Drop agent-agnostic, ship agent-specific bundles
Three agents, three bundles. Each tuned to that agent's strengths.

Bundle	Agent	Vehicle
pdf-claude-bundle/	Claude Code	.claude/settings.json hooks (per BUILDING-KIT-HOOKS-ANALYSIS), skills, slash commands, agent-md template
pdf-opencode-bundle/	OpenCode	opencode.toml agents, rules, MCP server config pointing to dashboard
pdf-kilo-bundle/	Kilo Code	.kilocoderules, mode files, workflow templates
Why this beats agent-agnostic:

Hooks vs. rules vs. modes are not substitutable abstractions. Hand-rolling each unlocks the agent's actual mechanics.
For 3 agents this is maintainable. For 10 it wouldn't be.
"Agent-agnostic" was a marketing virtue. You're not selling. Drop the tax.
Effort: 1–2 weeks per bundle. Do Claude first (you already have the hook analysis), then OpenCode, then Kilo.

Sub-recommendation: Drop "AI agnostic" language from the framework docs entirely. It signals breadth your agency doesn't need and weakens the integrations.

Recommendation #5: Renumber Stage 2.5 phases (still trivial, still worth it)
Phase 7 collision (PRD vs. Testing) costs you debug time at scale. Rename Stage 2.5 phases to L1–L4 (Launch series). Half a day. Do it before the next 50 projects bake in the ambiguity.

What I'd Cut from My Prior Recommendations
Async agent inbox — solo agency, you are the team. Less critical. Park it.
Stream DAG — solo dev means streams collapse to a single critical path most of the time. Your existing cross-stream-deps.md is enough.
Semantic context retrieval — defer indefinitely. Three stable agents with stable AGENT.md/lens contracts will be fine until you find concrete evidence of context staleness. Don't build it speculatively.
Soft gates — actively wrong for quality-first. Keep gates blocking; speed up decisions.
Revised 30 / 90 / 180
30 days:

Build the Claude Code planning-orchestrator skill → kill manual cloud handoff (#1)
Renumber Stage 2.5 phases (#5)
Stand up the telemetry JSONL log (write-only first; views come later) (#2)
90 days:
4. Build gate-review page with LLM summary (#3)
5. Ship Claude Code agent bundle as the canonical reference implementation (#4)
6. First telemetry-driven framework patch ("Phase 5 architecture docs need a retry-logic prompt")

180 days:
7. Port bundle to OpenCode + Kilo
8. Portfolio quality dashboard with outlier detection
9. Quarterly framework auto-improvement pipeline (telemetry → template patches)

Two Things I'd Probe Further
What does "quality" mean concretely to you? Code defects after launch? Failed user acceptance? Framework drift mid-build? Each implies different telemetry. Without this, recommendation #2 is fuzzy.

Why are you currently using cloud AI for planning? If the answer is "habit" or "the planning-kit was built for it," recommendation #1 is a clear win. If there's a real reason (e.g., a non-technical stakeholder co-plans with you in the chat), the solution looks different — maybe a paste-and-extract tool, not a Claude Code skill.

Answer these and I'll go deeper on whichever recommendation matters most.

1. Quality means the bugs and errors should not be there, user experience should be smooth. 
2. I am using cloud AI to access web and other things.
Two important reframes from those answers. Let me adjust.
Final Sharpening: Runtime Quality + Bridge, Not Replacement
The big reframe: quality is runtime, not process
When you say "bugs shouldn't be there, UX should be smooth," that's post-launch reality, not pre-launch process. My prior telemetry recommendation was process-oriented (drift, validation, gate rejections). That's a predictor of quality, not the signal itself.

The real signal is: how many bugs hit production, and how often do user flows break?

This means the framework needs a closed loop:


Planning Quality → Build Quality → Production Reality
        ↑                                    │
        └────────── feedback ────────────────┘
Without the production-reality feedback, you're optimizing inputs without measuring outputs. At 200 projects, you'll be flying blind on the only metric that matters.

Recommendation #1 (revised): Build a bridge, don't replace cloud AI
You have real reasons for cloud AI (web, files, vision, project memory). Don't fight that. Eliminate the manual copy step instead.

Build a "Claude.ai → Project" bridge tool in the dashboard:

Single button: Import Planning Session. Three input modes:

Paste full chat transcript → server extracts every fenced markdown block with YAML frontmatter, names files per p_NN_ convention, runs validate-planning.js, commits.
Upload zip of saved markdown files.
Paste a single doc → asks which phase, applies frontmatter automatically.
Inline validation surface: any frontmatter or section-heading failures show up as fixable cards with a "Send to Claude API for repair" button. The repair is a tiny structured call ($0.001 each, cached against framework rules).

Effort: 3–4 days. Eliminates the actual manual toil without touching your planning workflow. This is the right shape now that I know cloud AI is doing real work for you.

Recommendation #2 (revised): Quality telemetry now includes production reality
Three layers, not just process:

Layer	Sources	When ingested
Pre-launch (process)	drift, validation, gate decisions, test coverage, blockers	Continuous via existing scripts
Launch readiness (predicted)	Composite score from pre-launch signals, historical correlations	Gate 5
Post-launch (reality)	Sentry/Bugsnag error rate, app store ratings, support tickets, crash-free sessions	Daily pull from external APIs
The dashboard's central artifact becomes a prediction-vs-reality chart per project: "Predicted Quality 87, Actual 64. Gap of 23." The gap is what tells you which planning patterns are bullshit.

Concrete first step: before shipping anything sophisticated, just add a per-project Sentry DSN field and ingest error counts daily. Even raw error count over time, plotted against gate dates, will reveal more than any process metric.

Effort: 2 days for raw ingestion. Iterative refinement after.

Recommendation #3 (unchanged): Speed up gate decisions
Same as before. Quality-first means gates stay blocking; just make the human review take 2 minutes via auto-prepared evidence + LLM exec summary.

Add now: include historical-pattern context in the gate review. "Projects with this drift level + this test coverage shipped with [X bugs/week] in the last 10 cases." Once telemetry exists, this is one query.

Recommendation #6 (NEW): A "Phase 7 (Testing) Audit" — your highest-leverage quality lever
Quality complaints trace to two sources: insufficient test coverage and untested edge cases. The framework already has Phase 7 (Testing & QA) but it's a planning artifact, not a runtime check.

Pin one thing in the framework: a mandatory "Bug-Risk Map" deliverable.

Per feature/milestone, the agent must produce:

The 3 most likely failure modes (LLM-generated, human-confirmed)
Specific tests for each
Manual QA steps (the parts tests can't catch)
Run as a PostToolUse hook when an agent finishes a milestone — it generates the bug-risk map and blocks Gate 4 until it's reviewed. Cheap, prevents the most common quality regression.

Effort: 2–3 days. Highest expected impact on the actual signal you care about (runtime bugs).

Revised Roadmap (final)
30 days:

Bridge tool — kill manual file copy (#1)
Sentry DSN per project + daily error ingest — start measuring reality (#2 layer 3)
Bug-Risk Map as Gate 4 requirement (#6)
Renumber Stage 2.5 phases
90 days:
5. Telemetry layers 1+2 (process + predicted)
6. Gate review page with LLM summary + historical pattern context
7. Claude Code agent bundle as canonical reference

180 days:
8. Prediction-vs-reality dashboard with cross-project pattern mining
9. First framework patch driven by reality data ("projects that skipped X had 3x more bugs")
10. Port bundle to OpenCode + Kilo

What I'd actually do this week
If you want one thing to ship Monday: the bridge tool. It eliminates current pain, takes a few days, and unblocks everything else (because clean planning data flowing into the dashboard is the substrate for all the telemetry recommendations).

If you want the most strategic first move: Sentry-DSN-per-project + daily error ingest. It's the only way to know whether anything you build for "quality" actually works. Two days of work for a permanent feedback loop.

Pick one. The rest follows.

Let us start with Bridge tool — kill manual file copy and how I can implement it.
Good choice — highest-leverage starting point. Let me look at what already exists in the dashboard so the plan builds on it instead of next to it.
Bridge Tool — Implementation Plan
1. Architecture (3 layers, 4 new files)

USER pastes chat transcript / uploads .md files
        ↓
[client/src/pages/ImportPlanning.tsx]   ← new React page
        ↓ POST /api/projects/:id/import-bulk
[lib/server/routes.js]                  ← add one route
        ↓ shells out to
[scripts/api-bulk-import.js]            ← new orchestrator
        ↓ uses
[lib/planning-extractor.js]             ← new pure-function parser
        ↓ calls existing
[scripts/api-upload-phase.js] (per file) + validate-planning.js
        ↓
Returns per-doc result → UI shows pass/fail/fixable cards
Why this shape: the extractor is pure logic (testable in isolation), the orchestrator coordinates writes, and the existing single-file path is reused — no duplication of write/registry logic.

2. Component-by-component
Component A: lib/planning-extractor.js (new, ~200 lines)
Pure functions, no I/O. Two responsibilities: split and classify.

Split strategies, in order of preference:

YAML frontmatter splitter (most reliable). Look for ---\n...yaml...\n---\n blocks. Each one starts a new doc.
Phase-slug heading splitter (fallback). Look for H1s matching known phase titles from phase-definitions.js (e.g. # Feasibility Assessment, # Idea Validation Brief).
File-fence splitter (fallback). Look for ```markdown or ```md fences (Claude often wraps file output).
Classify (phase inference) for each candidate:

If frontmatter has a phase: or file: field matching a known p_NN → use it.
If the H1/first heading matches a title in phase-definitions.js → infer phase.
If the filename in a code-fence header matches p_NN_*.md → use it.
Else → mark phase: null, needs_manual_assignment: true.
Output:


[
  { phase: 'p_01', title: 'Feasibility Assessment', content: '...', confidence: 'high', issues: [] },
  { phase: null,   title: 'Some Doc', content: '...', confidence: 'low',  issues: ['could not match phase'] },
  ...
]
Keep this file under 300 lines — it'll be heavily unit-tested.

Component B: scripts/api-bulk-import.js (new, ~120 lines)
Mirrors the shape of api-upload-phase.js. Takes JSON args, writes results to stdout.

Input:


{
  "id": "project-name",
  "raw": "<full pasted text or concatenated file contents>",
  "mode": "transcript" | "files"
}
Flow:

extractDocs(raw) → array of candidates (Component A)
For each candidate with a phase: spawn-sync api-upload-phase.js (or call its main fn directly — refactor that file to export writePhase() so we don't fork processes).
After all writes, run validate-planning.js on the project.
Merge: for each doc, attach validation errors from step 3.
Output a single JSON: { imported: [...], skipped: [...], validation: {...} }
Important: wrap each write in a try/catch so one bad doc doesn't fail the batch. The dashboard's atomic-write pattern (lib/fs-helpers.js) handles partial failure.

Component C: route + WebSocket event
In lib/server/routes.js, add:


POST /api/projects/:id/import-bulk
  Auth: admin (writes to docs/, mirrors existing api-upload-phase auth)
  Body: { raw: string, mode: 'transcript' | 'files' }
  Returns: { imported, skipped, validation }
  Side-effect: emits WebSocket `planning:imported` event for live UI refresh
Reuse the existing pattern from however api-upload-phase.js is wired today.

Component D: client/src/pages/ImportPlanning.tsx (new, ~250 lines)
UI shape — three states:

State 1 — Input:

Tabs: Paste Transcript | Upload Files
Big textarea / file dropzone
"Preview Extraction" button (calls a dry-run version of the API — same extractor, no writes)
State 2 — Preview:

Table: each detected doc as a row showing phase | title | confidence | content preview
Low-confidence rows: dropdown to manually assign phase (populated from phase-definitions.js)
"Import N docs" button
State 3 — Result:

Per-doc cards: ✅ written + validation status, or ❌ with error
For each validation failure, an inline "Fix with AI" button (defer this to v2 — see below)
Link back to project detail
Keep components small per CLAUDE.md's 500-line rule. Split into ImportPlanning.tsx (page), ExtractionPreview.tsx (table), ImportResultCard.tsx.

3. Build Order (4 days total)
Day 1 — Extractor (Component A) + tests

lib/planning-extractor.js
Unit tests in lib/planning-extractor.test.js — cover all three split strategies, phase inference, edge cases (missing frontmatter, partial frontmatter, multiple H1s in one doc, code fence wrapping)
This is the highest-risk piece. Get it right in isolation before wiring.
Day 2 — Orchestrator + route (Components B + C)

Refactor api-upload-phase.js to export writePhase(params) so it's callable in-process
scripts/api-bulk-import.js calls extractor → loops writePhase → invokes validation
Wire route in lib/server/routes.js
Manual test with curl + a real chat transcript
Day 3 — UI (Component D)

Three-state page with paste/preview/result
Hook into existing auth/notification contexts
WebSocket listener for planning:imported → refresh project context
Day 4 — Polish + edge cases

Add an "Import Planning" button on ProjectDetail.tsx and the project card menu
Handle the "no project exists yet" case: chain into api-create-project.js first
Document in DEVELOPMENT.md
4. Decisions to Lock Before Building
A few choices that affect the design — quick answers needed:

Overwrite policy. If a doc already exists for a phase (e.g. user re-imports p_10), do we (a) overwrite, (b) skip, (c) prompt per-file? My recommendation: prompt in preview UI per-file, default = overwrite for draft, skip for confirmed.
Frontmatter normalization. When the cloud AI omits required frontmatter fields (per validate-planning.js REQUIRED_FM list — pdf_version, project_id, kit, etc.), do we (a) fail the doc, (b) auto-fill from the project's existing manifest? Recommendation: (b) auto-fill. The fields are derivable.
AI-assisted repair (the "Fix with AI" button). Build in v1 or defer? Recommendation: defer to v2. v1 ships with manual phase reassignment + frontmatter auto-fill. Repair adds Claude API integration which has its own moving parts.
Transcript markers. Should the user wrap docs in any particular delimiter when pasting (e.g. ===FILE: p_10===)? Or do we infer everything blindly? Recommendation: infer blindly first, with optional explicit ===FILE: p_NN=== markers as a power-user fallback for transcripts where extraction fails.
5. What this does NOT do (intentional v1 scope cuts)
No Claude API integration (no auto-repair, no auto-frontmatter-generation)
No browser extension / claude.ai scraping
No support for non-markdown attachments (PDFs, screenshots)
No retroactive import for already-confirmed docs (refuses to overwrite confirmed status)
These are all v2 candidates after you've used v1 on a few real projects and seen the actual failure modes.
Delta 1: Add AI repair as a v1 feature (Gemini Flash)
New module + endpoint, ~1 extra day:

lib/ai-repair.js (new, ~150 lines)

Wraps Gemini Flash via GEMINI_API_KEY in .env
Single function: repairCandidate(candidate, projectContext, phaseDefinition) → repairedCandidate
Bounded scope — structural repair only:
Generate/fix YAML frontmatter from project context (auto-fill pdf_version, project_id, kit, tier, created_at)
Infer phase when extraction couldn't (matches against phase-definitions.js titles + sections)
Normalize section headings to exact required format (e.g. ## 1. Idea Summary)
Never generates planning content from scratch. If a required section is missing, leaves a [To be completed] placeholder so validate-planning.js still flags it.
Uses Gemini structured-output mode → returns strict JSON, no markdown parsing of LLM output.
UX flow update:
After paste → Preview state runs extraction and auto-repairs low-confidence/invalid candidates in one batch. Each repaired doc shows a "Repaired by AI" badge with tooltip listing what was changed. User can:

Accept as-is and import
Click "Manual override" to edit phase/content
Click "Re-extract without AI" if they want to see the raw output
Cost note: ~30 docs × ~2k tokens each = ~60k tokens through Gemini Flash. At Flash pricing this is pennies per import. Cache the project context + phase definitions in the request (Gemini also supports caching) so repeated imports get cheaper.

Reuse existing: the dashboard already has scripts/ai-provider.js for LLM integration. Day 4 task: check whether to extend that provider or write fresh — depends on its current shape (Claude-specific or generic).

Delta 2: One-shot paste UX (your stated workflow)
You said: "paste the whole chat in the dashboard, and it proceeds further." That's even simpler than my three-state design. New UX:

Paste → giant textarea, paste the entire claude.ai chat transcript (system prompts, user messages, assistant outputs, all of it).
Process → server runs extraction + auto-repair in one call.
Review → ranked list of candidate docs with phase + status badge:
✅ Ready to import (high confidence, validates clean)
🤖 AI-repaired (show diff)
⚠️ Needs manual phase assignment
❌ Couldn't classify (chat noise, drop)
Per-doc action: import / skip / overwrite-prompt for collisions / edit phase.
Import all approved → batch write + final validation pass → done.
The "drop chat noise" classifier is important — full transcripts contain assistant prose, user questions, scratch text. The extractor needs a noise bucket so the user isn't asked to phase-assign every paragraph.

Updated Build Order (5 days)
Day	Component	Deliverable
1	lib/planning-extractor.js + tests	Pure extraction logic, all 3 split strategies, noise filter
2	lib/ai-repair.js + Gemini integration	Structural repair via Gemini Flash JSON mode
3	scripts/api-bulk-import.js + route	Orchestrator wiring extractor → repair → write → validate
4	client/src/pages/ImportPlanning.tsx	Single-paste UX with review table
5	Polish: per-file overwrite prompt, ProjectDetail integration, DEVELOPMENT.md updates	Ship-ready
Day 1 Complete
What shipped:

lib/planning-extractor.js — pure-function parser, 4 split strategies (markers, frontmatter, code-fence, headings), classification with confidence scoring, noise filter, dedupe
test/extractor.test.js — 36 unit tests covering all strategies, edge cases, and an end-to-end realistic transcript
Wired into test/smoke.js (also fixed a stale PHASES.length assertion that was 4 behind reality)
New npm scripts: test:extractor, test:smoke
Results: 36/36 extractor tests pass · 39/39 smoke tests pass.

Day 2 preview — AI repair with provider abstraction
Heads-up on a small course-correction before I start: the existing scripts/ai-provider.js already has provider dispatch (Claude + Gemini, routed by model.provider). Rather than building a parallel lib/ai/providers/ tree, I'll extend the existing pattern:

Add a non-streaming generateJSON(messages, systemPrompt, modelId) function alongside the existing streamChat — same provider router, same env conventions.
New file: lib/ai-repair.js — only contains the repair-task system prompt and a repairCandidate() function that calls generateJSON.
Default model: gemini-2.0-flash. User can override via env var PDF_REPAIR_MODEL to swap to Claude Haiku or any future provider added to MODELS.
This way, future providers added to ai-provider.js automatically become available for repair without touching ai-repair.js. One source of truth for the provider list.

Sound good? If yes, I'll proceed to Day 2. If you'd rather keep repair logic in a separate lib/ai/ tree, say so and I'll build it that way.
Day 2 Complete
What shipped:

lib/ai/generate-json.js — non-streaming JSON generation. Provider-routed via existing MODELS registry. Currently wires Claude + Gemini; new providers added via one function + one router case.
lib/ai/repair.js — repairCandidate() and repairCandidates() (parallel, capped concurrency, fault-tolerant). Strict system prompt: structural repair only, never invents content, uses [To be completed] for missing required sections.
scripts/ai-provider.js:404 — exports extended with MODELS and resolveModel for reuse
test/repair.test.js — 28 unit tests (AI calls mocked via _generateJSON injection — no network)
Updated .env.example with PDF_REPAIR_MODEL override doc
Wired both new modules into smoke + new test:all npm script
Test results: 41 smoke + 36 extractor + 28 repair = 105 tests passing, 0 failing.

Provider abstraction shape:

Add a new model entry to MODELS in scripts/ai-provider.js
Add a callXxxJSON function in lib/ai/generate-json.js mirroring the existing two
Add it to PROVIDER_HANDLERS
Done — both streaming chat and structured JSON tasks pick it up automatically
One real-world note: the AI calls are unit-tested via mocks. To validate against live Gemini Flash, you'll need to set GEMINI_API_KEY in .env and we'll exercise it during Day 3 when the orchestrator wires everything together. If you want a quick live smoke test before Day 3, drop the key in and I can run a single repairCandidate against a real document.

Ready for Day 3 — bulk-import orchestrator + route? Or want to live-test repair first?
Day 3 Complete
What shipped:

File	Purpose
scripts/api-upload-phase.js	Refactored — exports writePhase() for in-process use; CLI entry preserved via require.main guard
lib/bulk-import.js	Pure orchestration: previewImport() (extract + AI repair + conflict detection) and commitImport() (write + validate). No HTTP, no spawn.
scripts/api-bulk-import.js	Thin CLI shim for local testing — dispatches mode: "preview" or "commit"
scripts/serve.js	Two new routes wired inline: POST /api/projects/:id/import-bulk/preview and .../commit. Both admin-auth, both call lib/bulk-import.js in-process (avoids runScript's 60s subprocess timeout for AI repair). Commit broadcasts planning:imported via WebSocket and triggers rescanOne so the dashboard refreshes immediately.
test/bulk-import.test.js	34 tests — file writes use temp-dir fixtures, AI calls mocked via _generateJSON injection
Total test results: 43 smoke + 36 extractor + 28 repair + 34 bulk-import = 141 tests, 0 failures.

Key design decisions:

Preview vs. commit are separate endpoints. Preview is read-only (no writes), so the user can review what the AI did before committing. Matches your "paste → review → import" flow.
Auto-repair runs only on candidates flagged by shouldRepair() — clean fm-docs skip the AI call, saving tokens. Confirmed in tests.
Confirmed-doc protection. If docs/p_NN_*.md already exists with status: confirmed, commit skips it by default. The UI must send decision: 'overwrite' to bypass — prevents accidental loss of approved work.
In-process route handlers instead of runScript because AI repair can exceed the 60s subprocess timeout. The script entry remains for CLI testing.
Live test path (when you want to verify against real Gemini):


# 1. Set GEMINI_API_KEY in .env
# 2. Start the server: npm run dev
# 3. With a registered project named "test-app":
curl -X POST http://localhost:4040/api/projects/test-app/import-bulk/preview \
  -H "Authorization: Bearer <admin-token>" \
  -H "Content-Type: application/json" \
  -d '{"rawText":"# Feasibility Assessment\n## 1. Idea Summary\n..."}'
  Day 4 Complete
What shipped:

File	Purpose
client/src/lib/api.ts	New types (BulkImportCandidate, BulkImportPreview, BulkImportCommit, etc.) and two API functions: bulkPreview(), bulkCommit()
client/src/components/project/ImportPreviewCard.tsx	Per-doc card with phase badge, confidence pill, AI-repair badge, conflict warning, decision dropdowns (skip/create/overwrite), manual phase reassignment, expandable content preview
client/src/components/project/ImportPlanning.tsx	Main 4-state component (paste → processing → preview → committing → result). Single-paste UX, auto-repair toggle, summary stats, importable-count gating, validation surface
client/src/pages/ProjectDetail.tsx	New "Import" tab with Upload icon. onImported callback re-fetches project state so the Docs tab + completion gauges refresh
lib/bulk-import.js	Preview response now includes phaseDirectory so the client never hardcodes the phase list
test/bulk-import.test.js	New test verifying phaseDirectory is populated correctly (25+ entries with id/title/file/tier/stage)
UX flow as built:

Paste — large textarea, "Auto-repair flagged docs with AI" toggle (default on), Process Import button (gated on ≥50 chars). Tip about ===FILE: p_NN=== markers for tricky transcripts.
Processing — spinner + status text. Note about 30–60s for AI repair on long transcripts.
Preview — summary card (Extracted / Classified / Repaired / Conflicts), per-doc cards. Each card shows confidence color, AI-repair badge with expandable changes list, conflict severity (lock icon for confirmed), per-row "Will import / Will skip / Blocked" status. Smart defaults: confirmed conflicts default to skip, unclassified docs default to skip, fresh docs default to create.
Result — written/skipped/failed counts, file list with byte counts, validation summary (errors/warnings/passes), "Import another" button.
Quality checks:

TypeScript tsc --noEmit — clean
Vite production build — succeeds (548 KB gzipped 172 KB; pre-existing chunk warning unrelated to my changes)
All 142 tests passing (43 smoke + 36 extractor + 28 repair + 35 bulk-import)
Manual test path:


1. npm run dev (starts both server + client)
2. Log in as admin
3. Open any registered project → click "Import" tab
4. Paste a chat transcript → toggle AI repair → click Process Import
5. Review per-doc decisions → click "Import N docs"
6. Verify files written under docs/, validation result shown
Bridge tool is feature-complete. Day 5 polish remaining covers DEVELOPMENT.md documentation and a smoke test that exercises the live HTTP endpoints (currently they're tested at the lib/bulk-import.js layer but not via HTTP). Ready for Day 5 when you are, or you can stop here and live-test the UI first — both are reasonable.
Day 5 Complete — Bridge Tool Ships
What shipped today:

File	Change
scripts/serve.js	WebSocket broadcast renamed planning:imported → planning_imported (snake_case to match codebase convention); now includes projectName resolved from registry
client/src/hooks/useWebSocket.ts	New WsPlanningImported event type + handler. Fires a success toast ("Planning imported into "MyApp" — 5 docs written") for every connected client when an import completes. Toast turns warning-colored if any docs failed.
DEVELOPMENT.md	New section under Key Concepts: full pipeline overview, env-var requirements, conflict policy, test commands
test/smoke.js	Two new smoke checks: (1) verifies the import-bulk routes are wired in serve.js, (2) verifies writePhase is exported from api-upload-phase
Final test results:


✅ 45 passed (smoke)
✅ 36 passed (extractor)
✅ 28 passed (repair)
✅ 35 passed (bulk-import)
─────────────────────────
✅ 144 tests, 0 failures
Plus: TypeScript tsc --noEmit clean, Vite production build succeeds (548 KB / 172 KB gzipped — bundle grew ~360 bytes vs. yesterday).

5-Day Recap
The bridge tool is feature-complete. The full picture:

Backend (5 new files, 1 refactor):

lib/planning-extractor.js — pure parser, 4 split strategies, 36 tests
lib/ai/generate-json.js — provider-routed JSON gen (Claude + Gemini today, extensible)
lib/ai/repair.js — structural repair via LLM, 28 tests
lib/bulk-import.js — orchestrator (preview + commit), 35 tests with temp-dir fixtures
scripts/api-bulk-import.js — CLI shim for local testing
scripts/api-upload-phase.js — refactored to export writePhase() for in-process reuse
Backend wiring:

2 inline routes in serve.js: POST /api/projects/:id/import-bulk/{preview,commit}
WebSocket broadcast planning_imported on commit success
Project rescan triggered to refresh dashboard state
Frontend (3 new files):

client/src/components/project/ImportPlanning.tsx — main 4-state component
client/src/components/project/ImportPreviewCard.tsx — per-doc preview card
API client + types in client/src/lib/api.ts
Frontend wiring:

New "Import" tab in ProjectDetail.tsx with onImported refresh callback
Toast notification handler in useWebSocket.ts
Total: 9 new files, 4 refactored, 144 tests, full TypeScript type-coverage, production build green.

What manual testing should validate
Happy path: Paste a real claude.ai planning chat → toggle auto-repair on → process → review → import. Verify files written under docs/, validation pass count > 0, toast notification fires, Docs tab shows new files.
Conflict path: Re-run the same import. Verify confirmed docs are protected (default skip), draft docs default to overwrite.
Manual phase reassignment: Paste a doc that doesn't match any phase title. Verify the dropdown lets you assign one.
AI failure: Set an invalid GEMINI_API_KEY. Verify the preview still works (extraction-only), candidates with issues stay flagged, "Auto-repair failed: …" appears as an issue, import still works for clean docs.
No AI configured: Remove GEMINI_API_KEY and ANTHROPIC_API_KEY. Verify the toggle is functionally a no-op (extraction runs, repair skipped).
Power-user markers: Paste a transcript wrapped in ===FILE: p_NN=== markers and confirm those classify with confidence: 'high' and source: 'marker'.
If any of those produce surprising behavior, that's the v2 backlog. Otherwise — the bridge is ready to use.