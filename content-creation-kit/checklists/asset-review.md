# Asset Review Checklist

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Type:** Checklist
>
> **Instructions:** Use this checklist before delivering any visual or audio asset to the developer. Creator self-reviews first. Art Director / Audio Producer validates before final handoff.

---

## Part 1: Visual Asset Review (Illustration / Icons / Marketing)

### 1.1 Visual Quality

```
[REQUIRED]  [ ] Asset is sharp and clear at all required sizes — no blurriness or pixelation
[REQUIRED]  [ ] No accidental artifacts, stray pixels, or unintended transparency holes
[REQUIRED]  [ ] Edges are clean — no jagged borders on curved shapes (anti-aliased correctly)
[REQUIRED]  [ ] Gradients are smooth — no banding or color stepping
[RECOMMENDED] [ ] Asset looks polished at the smallest required size — test at 1x scale
```

### 1.2 Color & Style Compliance

```
[REQUIRED]  [ ] All colors match the style guide palette (hex codes verified)
[REQUIRED]  [ ] No unapproved colors introduced without Style Guide update
[REQUIRED]  [ ] Character(s) look consistent with other characters in the project
[REQUIRED]  [ ] Illustration style matches the project style (flat / hand-drawn / etc.)
[REQUIRED]  [ ] Outline weight consistent across all assets
[REQUIRED]  [ ] Shading/shadow technique consistent across all assets
[RECOMMENDED] [ ] Asset references approved mood board or style reference
```

### 1.3 Character Consistency (if applicable)

```
[REQUIRED]  [ ] Character proportions match approved character sheet
[REQUIRED]  [ ] Character color palette is identical across all expressions
[REQUIRED]  [ ] All required expression poses are delivered (see asset-pipeline.md)
[REQUIRED]  [ ] Character personality reads correctly at small sizes (emoji-size test)
[RECOMMENDED] [ ] Character feel is consistent with voice/tone in the style guide
```

### 1.4 Technical Specifications

```
[REQUIRED]  [ ] All required sizes exported (1x, 2x, 3x for mobile or SVG)
[REQUIRED]  [ ] PNG files: transparent background where required
[REQUIRED]  [ ] PNG files: no color fringing from semi-transparent edges
[REQUIRED]  [ ] SVG files: no embedded raster images inside the SVG
[REQUIRED]  [ ] SVG files: paths simplified and optimized
[REQUIRED]  [ ] File size meets target limits:
                  App icons: < 200 KB per size
                  Characters: < 500 KB per size
                  Backgrounds: < 1 MB per size
                  UI illustrations: < 100 KB
                  Marketing screenshots: < 3 MB each
[REQUIRED]  [ ] File naming follows convention: [project]-[category]-[name]-[size].[ext]
[RECOMMENDED] [ ] Source files backed up (.fig, .psd, .ai) before delivering
```

### 1.5 App Icon Specific

```
[REQUIRED]  [ ] Icon works at 60×60 pt (the smallest common display size)
[REQUIRED]  [ ] Icon is visually distinct at small sizes (test on real device home screen)
[REQUIRED]  [ ] Icon follows platform-specific corner treatment:
                  iOS: No rounded corners in the file — iOS applies them automatically
                  Android: Includes both foreground and background layers for adaptive icon
[REQUIRED]  [ ] No text smaller than the app name is legible at 60pt
[REQUIRED]  [ ] 1024×1024 px version delivered for App Store Connect (iOS)
[REQUIRED]  [ ] 512×512 px version delivered for Play Store (Android)
```

### 1.6 Marketing / Store Screenshots

```
[REQUIRED]  [ ] Correct dimensions for each device (see illustrator.md Phase 2)
[REQUIRED]  [ ] Real device or approved device frame used (not placeholder wireframes)
[REQUIRED]  [ ] Actual app UI shown — no mockup-only screenshots not reflecting real UI
[REQUIRED]  [ ] All text legible at standard display size
[REQUIRED]  [ ] Marketing headline on each screenshot within character limit (30 chars)
[REQUIRED]  [ ] App content shown is representative of the actual app version
[RECOMMENDED] [ ] Screenshots show best feature first (highest value proposition in #1)
[RECOMMENDED] [ ] Screenshots tell a narrative story across the set
```

---

## Part 2: Audio Asset Review

### 2.1 Technical Quality

```
[REQUIRED]  [ ] No clipping — waveform never reaches 0dBFS
[REQUIRED]  [ ] No audible background noise between words (noise floor -60dB or better)
[REQUIRED]  [ ] Consistent volume across all lines (within ±2dB variation)
[REQUIRED]  [ ] No mouth clicks, lip smacks, or plosive bursts (p, b, t sounds)
[REQUIRED]  [ ] Natural breath between lines (removed or kept appropriately)
[REQUIRED]  [ ] Normalized to -3dBFS peak (not louder — leave headroom for mobile speaker)
[REQUIRED]  [ ] File format matches spec (MP3 128kbps+ / WAV 44.1kHz 16-bit)
```

### 2.2 Performance Quality

```
[REQUIRED]  [ ] Voice actor's performance matches the tone direction for each line
[REQUIRED]  [ ] Character voices are consistent across all lines (same performance, same session feel)
[REQUIRED]  [ ] Narration pacing is appropriate — not rushed, not dragging
[REQUIRED]  [ ] All required lines are present and complete (cross-referenced with script)
[REQUIRED]  [ ] No lines cut off at start or end (100ms silence at each end)
[REQUIRED]  [ ] Difficult pronunciations correct (proper nouns, brand terms, technical words)
[RECOMMENDED] [ ] Performance test: does this line sound natural coming from a phone speaker?
[RECOMMENDED] [ ] Emotional range is delivered — celebration sounds celebratory, calm sounds calm
```

### 2.3 Integration Readiness

```
[REQUIRED]  [ ] File naming matches convention: [project]-[type]-[id].[ext]
[REQUIRED]  [ ] All line IDs present and complete (none missing from script)
[REQUIRED]  [ ] Files organized in correct folder structure (see asset-pipeline.md)
[REQUIRED]  [ ] README.txt in delivery folder describes all files
[REQUIRED]  [ ] Tested playback on target device type (phone speaker)
[RECOMMENDED] [ ] LUFs measurement: -16 LUFS (mobile standard) for narration
[RECOMMENDED] [ ] Loop points marked for background music files (if looping)
```

### 2.4 Sound Effects Specific

```
[REQUIRED]  [ ] Sound effect duration is appropriate (button click: < 0.2s, success: < 1s)
[REQUIRED]  [ ] Sound effects do not overlap with narration timing in context
[REQUIRED]  [ ] Error sounds are NOT alarming or aggressive (gentle, neutral)
[REQUIRED]  [ ] Success sounds are positive but not over-the-top for context
[RECOMMENDED] [ ] Sound effects test: close your eyes and play them. Do they convey the right emotion?
```

### 2.5 Background Music Specific

```
[REQUIRED]  [ ] Loop is seamless — no audible click, gap, or abrupt change at loop point
[REQUIRED]  [ ] Music volume sits under narration/SFX when all playing together
[REQUIRED]  [ ] Music does not distract from core task (ambient, not featured)
[REQUIRED]  [ ] Music rights confirmed: original composition or license confirmed
[RECOMMENDED] [ ] Multiple intensity variants (e.g. quiet / normal) for different states
```

---

## Part 3: Animation Asset Review (Lottie / GIF / Video)

```
[REQUIRED]  [ ] Animation plays smoothly at 60fps (or specified frame rate)
[REQUIRED]  [ ] Animation file size meets target: Lottie < 100 KB, GIF < 500 KB
[REQUIRED]  [ ] Loop point is seamless (if looping animation)
[REQUIRED]  [ ] Animation respects Reduce Motion preference (fallback is static image)
[REQUIRED]  [ ] Colors match brand palette exactly
[REQUIRED]  [ ] Animation timing matches the design spec (duration per spec)
[RECOMMENDED] [ ] Test on lowest-spec target device — does it perform at acceptable FPS?
```

---

## Final Delivery Checklist

```
[ ] All assets in this batch are reviewed and pass all [REQUIRED] items
[ ] Failures documented and resolved (list below)
[ ] Files organized in delivery folder structure (see asset-pipeline.md)
[ ] README.txt included in delivery
[ ] File sizes verified (no oversized files)
[ ] asset-pipeline.md updated for all delivered items

FAILURES RESOLVED:
  [ ] [Asset ID] — [Failure description] — [Resolution]

Reviewed by:   [Art Director / Audio Producer Name]
Date:          [YYYY-MM-DD]
Decision:      ✅ Cleared for developer handoff
```
