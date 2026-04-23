# Voice Actor / Audio Producer Guide

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Role:** Voice Actor / Audio Producer

---

## Your Role in the Project

As a voice actor or audio producer, you own the **audio layer** of the product. Depending on the project, your scope may include:
- Character voices and narration
- Text-to-speech script review and post-processing
- Sound effects and ambient audio
- UI audio feedback (button clicks, success chimes, error alerts)
- Background music curation or production

Voice and audio work is **sequential** with content writing — you cannot record until the text is approved. Start technical preparation early, but wait for written content approval before any recording session.

---

## Phase 1: Project Brief Intake

Before any recording, confirm these items with the project lead:

```
AUDIO BRIEF — [Project Name]

Project type:   Educational app / Game / Productivity / Other: _______
Platform(s):    iOS / Android / Web / Desktop
Target audience: [Age range] — [Language + locale]
Launch date:    _______________________

CHARACTER VOICES (if applicable)
  Number of characters:            _______
  Character names and descriptions: [List each with personality notes]
  Sample reference voices:          [Link to audio or describe]
  Age of characters:               _______

NARRATION STYLE
  [ ] Warm and encouraging (educational)
  [ ] Neutral and clear (productivity / utility)
  [ ] Energetic and playful (games / children)
  [ ] Professional and authoritative
  [ ] Conversational and friendly
  [ ] Other: _______________________

SCOPE
  Narration lines:    [ ] _______ lines / _______ words
  Character dialogue: [ ] _______ lines / _______ words
  UI feedback sounds: [ ] List: _______________________
  Sound effects:      [ ] List: _______________________
  Background music:   [ ] Loops needed: _______________________

FILE REQUIREMENTS
  Format:    MP3 (128kbps+) / WAV (44.1 kHz, 16-bit) / OGG
  Naming:    [project]-[type]-[id].[ext]
              e.g. "myapp-narr-intro-01.mp3"
  Delivery:  Shared drive / Zip / WeTransfer / Other
  
LOCALIZATION (if applicable)
  Languages: [List target locales]
  Native speakers required: Yes / No
```

---

## Phase 2: Script Format and Preparation

### Standard Script Format

Scripts should be delivered to you in this format by the content writer. If not, request it:

```markdown
## [Project Name] — Voice Script
## Version: [1.0] | Approved: [Date] | Approved by: [Name]

---

### NARRATOR (if applicable)

NARR-01
[Context: intro screen, plays on first launch]
[Tone: warm, welcoming, unhurried]
"Welcome to [App Name]! I'm [Character Name], and I'll be your guide."

---

NARR-02
[Context: after user completes first activity]
[Tone: celebratory, energetic]
"Amazing work! You just completed your first lesson!"

---

### CHARACTER: [Character Name]
[Voice description: upbeat, slightly high-pitched, friendly — like a knowledgeable friend]

CHAR-HERO-01
[Context: tutorial prompt]
[Tone: encouraging, clear]
"Tap the glowing button to begin!"

CHAR-HERO-02
[Context: user makes error]
[Tone: gentle, reassuring — NOT negative or scolding]
"Oops! Let's try that again — you've got this!"

---

### UI FEEDBACK

UI-SUCCESS-01
[Short celebratory sound effect or short voice line]
"Yes!"

UI-ERROR-01
[Brief gentle tone — or silence for accessibility]
[No audio — visual only]

---
```

### Script Review Checklist (Before Recording)

```
[ ] All lines approved by project lead — no placeholder text
[ ] Character voices clearly described with references
[ ] Tone direction provided for each line
[ ] No lines reference content that may change (e.g., feature names, prices)
[ ] Pronunciation guide provided for unusual words, names, brand terms
[ ] Localization notes added for any locale-specific lines
[ ] Character limits checked against UI layout (longer audio = overflow risk)
```

---

## Phase 3: Recording Session Setup

### Home Studio Minimum Requirements

```
ACOUSTIC ENVIRONMENT
[ ] Quiet room — no HVAC, traffic, appliance, or echo
[ ] Soft surfaces: carpet, curtains, bookshelves — reduce reflections
[ ] Closet recording acceptable for voice-over work (clothes absorb sound)

EQUIPMENT
[ ] Microphone: Condenser (studio-quality preferred over USB mics for professional work)
[ ] Pop filter: Required — prevents plosive bursts on "P", "B", "T"
[ ] Mic stand or boom arm: No hand-holding (vibration noise)
[ ] Audio interface: Focusrite Scarlett 2i2 or equivalent (if using XLR mic)
[ ] Headphones: Closed-back (no bleed into microphone)

SOFTWARE
[ ] DAW: Audacity (free) / GarageBand (free) / Adobe Audition / Reaper
[ ] Plugin: DeEsser (reduces sibilance), Light compression, Light EQ
[ ] Noise gate: Recommended — cuts ambient noise between lines
```

### Professional Studio (recommended for Standard/Enterprise)

If hiring a professional recording studio:
```
Send the studio:
  1. The approved script (in the format above)
  2. Reference audio (voice samples from existing recordings)
  3. Character voice descriptions
  4. Your delivery timeline
  5. File format requirements

Request from the studio:
  1. Isolated WAV takes (unprocessed) as source files
  2. Mixed MP3 + WAV exports as deliverables
  3. Session files (optional but good for future pickups)
```

---

## Phase 4: Recording Protocol

### Session Checklist

```
PRE-SESSION (30 min before)
[ ] Room is quiet — windows closed, HVAC off, phone on silent
[ ] Equipment tested — no crackling, hum, or distortion
[ ] DAW running and recording level set: -12dB to -6dB peak (not clipping)
[ ] Script printed or on second screen — not on same device being recorded on
[ ] Water (no carbonated) — keep voice hydrated
[ ] Warm up voice with gentle scales or reading aloud for 5 min

DURING SESSION
[ ] Record each line 2-3 times — no editing the best take; re-do from the top
[ ] Pause 2 seconds of silence before and after each line
[ ] If a line feels wrong: say "Take 2" and re-record immediately
[ ] Do NOT edit during recording — capture all takes first
[ ] Note any takes that felt strong ("Hero-01, Take 2 — good")
[ ] Record pickups (single line re-takes) at end of session

POST-SESSION
[ ] Back up raw WAV files before editing
[ ] Label takes: [ID]-take[N]-raw.wav (e.g. "NARR-01-take2-raw.wav")
[ ] Complete all editing before delivery (see Phase 5)
```

---

## Phase 5: Audio Post-Processing

All deliverable audio must be processed — raw recordings are not acceptable.

### Processing Chain (in order)

```
1. SELECTION — pick the best take for each line
2. TRIM — remove silence at start/end (leave 100ms natural room tone)
3. NOISE REMOVAL — remove room noise using noise profile sample
4. DE-ESSER — reduce harsh "S" and "SH" sounds (frequency: 5k-8kHz)
5. COMPRESSION — gentle ratio 2:1 to 4:1, moderate attack
6. EQ — boost presence (2-5kHz slightly), cut muddy lows below 80Hz
7. NORMALIZE — normalize to -3dBFS peak
8. EXPORT — export at required format and bit rate
```

### Quality Check Per File

```
[ ] No clipping (waveform never hits 0dB)
[ ] No audible background noise between words
[ ] Consistent volume level across all lines (within ±2dB)
[ ] No breath noise landing on beat
[ ] No mouth clicks (fixed in edit or re-recorded)
[ ] Natural pause before/after speech (100-200ms silence)
[ ] Length matches UI context (no line runs over screen time)
```

---

## Phase 6: Delivery Checklist

```
BEFORE SUBMISSION
[ ] All line IDs present (cross-reference with script)
[ ] File naming matches convention: [project]-[type]-[id].[ext]
[ ] All formats delivered as specified (MP3 + WAV if required)
[ ] Folder structure organized by type (narration / characters / ui / sfx)
[ ] Source WAV files backed up separately (NOT submitted unless requested)
[ ] asset-pipeline.md updated to reflect delivery status

FOLDER STRUCTURE
  [project]-audio/
  ├── narration/
  │   ├── [project]-narr-01.mp3
  │   ├── [project]-narr-01.wav
  │   └── ...
  ├── characters/
  │   ├── [project]-hero-01.mp3
  │   └── ...
  ├── ui-feedback/
  │   ├── [project]-ui-success.mp3
  │   └── ...
  ├── sfx/
  │   ├── [project]-sfx-levelup.mp3
  │   └── ...
  └── README.txt  ← describes every file

AFTER SUBMISSION
[ ] Confirm developer received and can play all files
[ ] Update asset-pipeline.md to "Delivered ✅ [Date]"
[ ] Note pickup process: who to contact if a re-record is needed
```

---

## Phase 7: Pickup Process

Pickups are re-recordings of specific lines after the initial delivery.

```
Pickup Request:
  From: Developer / PM
  Include: Line ID, reason for pickup, corrected script
  Timeline: Allow 48-72 hrs for turnaround

Pickup Response:
  - Re-record ONLY the specific line(s) — do NOT re-record the whole session
  - Match the original session setup (room, mic, processing)
  - Deliver as: [original-id]-v2.mp3 (versioned file — do not overwrite)
  - Notify developer of delivery
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Voice recording** | TTS accepted | Professional VA recommended | Professional VA required |
| **Recording standard** | Any clean recording | Home studio minimum | Professional studio |
| **Post-processing** | Basic trim + normalize | Full chain (see Phase 5) | Full + mastered |
| **Source file retention** | Not needed | Recommended | Required (for future pickups) |
| **Localization** | Not applicable | Plan for it | Full localization |
| **Accessibility check** | Not needed | Captions/transcripts recommended | Captions/transcripts required |
