# APU Corner Accent Refactor Implementation Plan

**Goal:** Refactor `.apu-corner-accent` from a two-class system into self-contained single-class variants with size and color options, using grouped `:is()` selectors.

**Architecture:** CSS custom property cascade (`--apu-corner-size`, `--apu-corner-color`) driven by universal base selector + grouped `:is()` blocks for size, position, and color variants. Old two-class API remains functional.

**Design:** [`thoughts/shared/designs/2025-06-09-apu-corner-accent-refactor-design.md`](./2025-06-09-apu-corner-accent-refactor-design.md)

---

## Dependency Graph

```
Batch 1 (parallel): 1.1 [global.css refactor], 1.2 [ContactSection.astro update]
Batch 2 (sequential): 2.1 [visual verification]
```

**Note:** Task 1.1 and 1.2 are technically independent (1.2 only changes HTML classes, 1.1 only changes CSS), but both should be committed together since they're part of the same feature. Task 2.1 depends on both.

---

## Batch 1: Core Changes (parallel — 2 implementers)

### Task 1.1: Refactor Corner Accent CSS in `global.css`
**File:** `src/styles/global.css`  
**Test:** Visual verification via `test-corner-accent.html` (see Task 2.1)  
**Depends:** none

#### Step 1 — Identify the old block to replace

Locate lines **233–285** in `src/styles/global.css`. The old block is:

```css
    /* Corner accent — L-shaped border highlight */
    .apu-corner-accent {
        position: relative;
    }

    .apu-corner-accent::after {
        content: "";
        position: absolute;
        width: var(--apu-corner-size, 36px);
        height: var(--apu-corner-size, 36px);
        pointer-events: none;
        z-index: 2;
    }

    .apu-corner-accent--tl::after {
        top: 0;
        left: 0;
        border-top: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-left: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-right: none;
        border-bottom: none;
        border-radius: 0;
    }

    .apu-corner-accent--tr::after {
        top: 0;
        right: 0;
        border-top: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-right: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-left: none;
        border-bottom: none;
        border-radius: 0;
    }

    .apu-corner-accent--bl::after {
        bottom: 0;
        left: 0;
        border-bottom: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-left: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-top: none;
        border-right: none;
        border-radius: 0;
    }

    .apu-corner-accent--br::after {
        bottom: 0;
        right: 0;
        border-bottom: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-right: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color, rgb(var(--apu-accent)));
        border-top: none;
        border-left: none;
        border-radius: 0;
    }
```

#### Step 2 — Replace with the new CSS structure

**Design requires:** self-contained single-class API with size and color variants.  
**Implementing as:** Universal attribute selector (`[class^="apu-corner-"], [class*=" apu-corner-"]`) for base styles, plus grouped `:is()` blocks for size, position, and color.  
**Reasoning:** The universal selector handles all `apu-corner-*` classes regardless of class attribute ordering (e.g., `class="apu-glass-card apu-corner-accent--tr"`). `:is()` grouping keeps the CSS maintainable — 60 total variants collapse to ~12 CSS blocks.

Paste the following block in place of lines 233–285:

```css
    /* ================================================================
       Corner accent — L-shaped border highlight
       Architecture: self-contained single-class API with size & color
       Naming: apu-corner-{color}--{position}-{size}
       ================================================================ */

    /* Universal base — catches all apu-corner-* classes in any order */
    [class^="apu-corner-"],
    [class*=" apu-corner-"] {
        position: relative;
    }

    [class^="apu-corner-"]::after,
    [class*=" apu-corner-"]::after {
        content: "";
        position: absolute;
        width: var(--apu-corner-size, 36px);
        height: var(--apu-corner-size, 36px);
        pointer-events: none;
        z-index: 2;
    }

    /* ── Size variants ───────────────────────────────────────────── */

    :is(
        .apu-corner-accent--1,
        .apu-corner-accent--tl-1, .apu-corner-accent--tr-1,
        .apu-corner-accent--bl-1, .apu-corner-accent--br-1,
        .apu-corner-navy--1,
        .apu-corner-navy--tl-1, .apu-corner-navy--tr-1,
        .apu-corner-navy--bl-1, .apu-corner-navy--br-1,
        .apu-corner-white--1,
        .apu-corner-white--tl-1, .apu-corner-white--tr-1,
        .apu-corner-white--bl-1, .apu-corner-white--br-1
    ) {
        --apu-corner-size: 24px;
    }

    :is(
        .apu-corner-accent--2,
        .apu-corner-accent--tl-2, .apu-corner-accent--tr-2,
        .apu-corner-accent--bl-2, .apu-corner-accent--br-2,
        .apu-corner-navy--2,
        .apu-corner-navy--tl-2, .apu-corner-navy--tr-2,
        .apu-corner-navy--bl-2, .apu-corner-navy--br-2,
        .apu-corner-white--2,
        .apu-corner-white--tl-2, .apu-corner-white--tr-2,
        .apu-corner-white--bl-2, .apu-corner-white--br-2
    ) {
        --apu-corner-size: 36px;
    }

    :is(
        .apu-corner-accent--3,
        .apu-corner-accent--tl-3, .apu-corner-accent--tr-3,
        .apu-corner-accent--bl-3, .apu-corner-accent--br-3,
        .apu-corner-navy--3,
        .apu-corner-navy--tl-3, .apu-corner-navy--tr-3,
        .apu-corner-navy--bl-3, .apu-corner-navy--br-3,
        .apu-corner-white--3,
        .apu-corner-white--tl-3, .apu-corner-white--tr-3,
        .apu-corner-white--bl-3, .apu-corner-white--br-3
    ) {
        --apu-corner-size: 48px;
    }

    :is(
        .apu-corner-accent--4,
        .apu-corner-accent--tl-4, .apu-corner-accent--tr-4,
        .apu-corner-accent--bl-4, .apu-corner-accent--br-4,
        .apu-corner-navy--4,
        .apu-corner-navy--tl-4, .apu-corner-navy--tr-4,
        .apu-corner-navy--bl-4, .apu-corner-navy--br-4,
        .apu-corner-white--4,
        .apu-corner-white--tl-4, .apu-corner-white--tr-4,
        .apu-corner-white--bl-4, .apu-corner-white--br-4
    ) {
        --apu-corner-size: 60px;
    }

    :is(
        .apu-corner-accent--5,
        .apu-corner-accent--tl-5, .apu-corner-accent--tr-5,
        .apu-corner-accent--bl-5, .apu-corner-accent--br-5,
        .apu-corner-navy--5,
        .apu-corner-navy--tl-5, .apu-corner-navy--tr-5,
        .apu-corner-navy--bl-5, .apu-corner-navy--br-5,
        .apu-corner-white--5,
        .apu-corner-white--tl-5, .apu-corner-white--tr-5,
        .apu-corner-white--bl-5, .apu-corner-white--br-5
    ) {
        --apu-corner-size: 72px;
    }

    /* ── Position variants ───────────────────────────────────────── */

    :is(
        .apu-corner-accent--tl,
        .apu-corner-accent--tl-1, .apu-corner-accent--tl-2,
        .apu-corner-accent--tl-3, .apu-corner-accent--tl-4,
        .apu-corner-accent--tl-5,
        .apu-corner-navy--tl,
        .apu-corner-navy--tl-1, .apu-corner-navy--tl-2,
        .apu-corner-navy--tl-3, .apu-corner-navy--tl-4,
        .apu-corner-navy--tl-5,
        .apu-corner-white--tl,
        .apu-corner-white--tl-1, .apu-corner-white--tl-2,
        .apu-corner-white--tl-3, .apu-corner-white--tl-4,
        .apu-corner-white--tl-5
    )::after {
        top: 0;
        left: 0;
        border-top: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-left: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-right: none;
        border-bottom: none;
        border-radius: 0;
    }

    :is(
        .apu-corner-accent--tr,
        .apu-corner-accent--tr-1, .apu-corner-accent--tr-2,
        .apu-corner-accent--tr-3, .apu-corner-accent--tr-4,
        .apu-corner-accent--tr-5,
        .apu-corner-navy--tr,
        .apu-corner-navy--tr-1, .apu-corner-navy--tr-2,
        .apu-corner-navy--tr-3, .apu-corner-navy--tr-4,
        .apu-corner-navy--tr-5,
        .apu-corner-white--tr,
        .apu-corner-white--tr-1, .apu-corner-white--tr-2,
        .apu-corner-white--tr-3, .apu-corner-white--tr-4,
        .apu-corner-white--tr-5
    )::after {
        top: 0;
        right: 0;
        border-top: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-right: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-left: none;
        border-bottom: none;
        border-radius: 0;
    }

    :is(
        .apu-corner-accent--bl,
        .apu-corner-accent--bl-1, .apu-corner-accent--bl-2,
        .apu-corner-accent--bl-3, .apu-corner-accent--bl-4,
        .apu-corner-accent--bl-5,
        .apu-corner-navy--bl,
        .apu-corner-navy--bl-1, .apu-corner-navy--bl-2,
        .apu-corner-navy--bl-3, .apu-corner-navy--bl-4,
        .apu-corner-navy--bl-5,
        .apu-corner-white--bl,
        .apu-corner-white--bl-1, .apu-corner-white--bl-2,
        .apu-corner-white--bl-3, .apu-corner-white--bl-4,
        .apu-corner-white--bl-5
    )::after {
        bottom: 0;
        left: 0;
        border-bottom: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-left: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-top: none;
        border-right: none;
        border-radius: 0;
    }

    :is(
        .apu-corner-accent--br,
        .apu-corner-accent--br-1, .apu-corner-accent--br-2,
        .apu-corner-accent--br-3, .apu-corner-accent--br-4,
        .apu-corner-accent--br-5,
        .apu-corner-navy--br,
        .apu-corner-navy--br-1, .apu-corner-navy--br-2,
        .apu-corner-navy--br-3, .apu-corner-navy--br-4,
        .apu-corner-navy--br-5,
        .apu-corner-white--br,
        .apu-corner-white--br-1, .apu-corner-white--br-2,
        .apu-corner-white--br-3, .apu-corner-white--br-4,
        .apu-corner-white--br-5
    )::after {
        bottom: 0;
        right: 0;
        border-bottom: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-right: var(--apu-corner-thickness, 4px) solid var(--apu-corner-color);
        border-top: none;
        border-left: none;
        border-radius: 0;
    }

    /* ── Color variants ──────────────────────────────────────────── */

    :is(
        .apu-corner-accent--tl, .apu-corner-accent--tr,
        .apu-corner-accent--bl, .apu-corner-accent--br,
        .apu-corner-accent--tl-1, .apu-corner-accent--tr-1,
        .apu-corner-accent--bl-1, .apu-corner-accent--br-1,
        .apu-corner-accent--tl-2, .apu-corner-accent--tr-2,
        .apu-corner-accent--bl-2, .apu-corner-accent--br-2,
        .apu-corner-accent--tl-3, .apu-corner-accent--tr-3,
        .apu-corner-accent--bl-3, .apu-corner-accent--br-3,
        .apu-corner-accent--tl-4, .apu-corner-accent--tr-4,
        .apu-corner-accent--bl-4, .apu-corner-accent--br-4,
        .apu-corner-accent--tl-5, .apu-corner-accent--tr-5,
        .apu-corner-accent--bl-5, .apu-corner-accent--br-5,
        .apu-corner-accent--1, .apu-corner-accent--2,
        .apu-corner-accent--3, .apu-corner-accent--4,
        .apu-corner-accent--5
    )::after {
        --apu-corner-color: rgb(var(--apu-accent));
    }

    :is(
        .apu-corner-navy--tl, .apu-corner-navy--tr,
        .apu-corner-navy--bl, .apu-corner-navy--br,
        .apu-corner-navy--tl-1, .apu-corner-navy--tr-1,
        .apu-corner-navy--bl-1, .apu-corner-navy--br-1,
        .apu-corner-navy--tl-2, .apu-corner-navy--tr-2,
        .apu-corner-navy--bl-2, .apu-corner-navy--br-2,
        .apu-corner-navy--tl-3, .apu-corner-navy--tr-3,
        .apu-corner-navy--bl-3, .apu-corner-navy--br-3,
        .apu-corner-navy--tl-4, .apu-corner-navy--tr-4,
        .apu-corner-navy--bl-4, .apu-corner-navy--br-4,
        .apu-corner-navy--tl-5, .apu-corner-navy--tr-5,
        .apu-corner-navy--bl-5, .apu-corner-navy--br-5,
        .apu-corner-navy--1, .apu-corner-navy--2,
        .apu-corner-navy--3, .apu-corner-navy--4,
        .apu-corner-navy--5
    )::after {
        --apu-corner-color: rgb(var(--apu-navy));
    }

    :is(
        .apu-corner-white--tl, .apu-corner-white--tr,
        .apu-corner-white--bl, .apu-corner-white--br,
        .apu-corner-white--tl-1, .apu-corner-white--tr-1,
        .apu-corner-white--bl-1, .apu-corner-white--br-1,
        .apu-corner-white--tl-2, .apu-corner-white--tr-2,
        .apu-corner-white--bl-2, .apu-corner-white--br-2,
        .apu-corner-white--tl-3, .apu-corner-white--tr-3,
        .apu-corner-white--bl-3, .apu-corner-white--br-3,
        .apu-corner-white--tl-4, .apu-corner-white--tr-4,
        .apu-corner-white--bl-4, .apu-corner-white--br-4,
        .apu-corner-white--tl-5, .apu-corner-white--tr-5,
        .apu-corner-white--bl-5, .apu-corner-white--br-5,
        .apu-corner-white--1, .apu-corner-white--2,
        .apu-corner-white--3, .apu-corner-white--4,
        .apu-corner-white--5
    )::after {
        --apu-corner-color: rgb(255 255 255);
    }
```

#### Step 3 — Verify formatting

Ensure the replacement block maintains the same indentation (4 spaces per level, matching the surrounding `@layer components` block). No trailing whitespace. The block starts with the comment `/* Corner accent — L-shaped border highlight */` and ends after the white color variant block.

**Verify:** Open `src/styles/global.css` and confirm the new block is syntactically valid CSS (no unclosed braces, no missing semicolons). A quick way to check:
```bash
npx stylelint src/styles/global.css --syntax css
```
Or simply run the dev server and watch for CSS parse errors.

**Commit:** `feat(styles): refactor corner accent to self-contained class system`

---

### Task 1.2: Update ContactSection.astro Usage
**File:** `src/sections/ContactSection.astro`  
**Test:** Visual diff against production (see Task 2.1)  
**Depends:** none

#### Step 1 — Locate the old two-class usage

In `src/sections/ContactSection.astro`, line 77, find:

```html
<div class="apu-glass-card apu-interactive-card apu-corner-accent apu-corner-accent--tr p-5 group">
```

#### Step 2 — Replace with single-class API

Change to:

```html
<div class="apu-glass-card apu-interactive-card apu-corner-accent--tr p-5 group">
```

**Rationale:** `apu-corner-accent--tr` is now self-contained — it includes the base `position: relative` via the universal selector, plus position (top-right) and color (accent, default) via the `:is()` groups. The old `apu-corner-accent` base class is redundant.

**Backward compat note:** The old two-class form (`apu-corner-accent apu-corner-accent--tr`) still works perfectly. This change is purely cosmetic cleanup.

#### Step 3 — Verify no other files use the old pattern

Search the codebase for any remaining `.apu-corner-accent` + modifier pairs:

```bash
grep -r "apu-corner-accent" src/ --include="*.astro" --include="*.html" --include="*.css"
```

If other sections use the old pattern, update them the same way (remove the bare `.apu-corner-accent` class).

**Commit:** `refactor(contact): migrate to self-contained corner-accent class`

---

## Batch 2: Verification (sequential — 1 implementer)

### Task 2.1: Visual Verification via Test HTML Page
**File:** `public/test-corner-accent.html` (create temporarily, delete after verification)  
**Depends:** 1.1, 1.2

#### Step 1 — Create the test page

Create `public/test-corner-accent.html` with the following content. This page renders all 60 variant combinations plus backward-compat cases in a grid layout for quick visual scanning.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corner Accent — Visual Test</title>
    <link rel="stylesheet" href="/src/styles/global.css">
    <style>
        body {
            font-family: system-ui, sans-serif;
            padding: 2rem;
            background: #f5f5f5;
        }
        .test-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .test-card {
            height: 100px;
            background: rgb(19 40 66); /* apu-navy approx */
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.75rem;
            text-align: center;
            padding: 0.5rem;
        }
        .test-card-light {
            background: rgb(247 250 243); /* apu-surface approx */
            color: rgb(27 41 32);
            border: 1px solid rgb(176 201 164);
        }
        .test-card-white {
            background: rgb(43 122 74); /* apu-primary approx */
        }
        h2 {
            font-size: 1rem;
            margin: 1.5rem 0 0.5rem;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Corner Accent — Combinatorial Test</h1>

    <h2>Accent color (default) — all positions × all sizes</h2>
    <div class="test-grid">
        <div class="test-card apu-corner-accent--tl-1">tl-1<br>24px</div>
        <div class="test-card apu-corner-accent--tl-2">tl-2<br>36px</div>
        <div class="test-card apu-corner-accent--tl-3">tl-3<br>48px</div>
        <div class="test-card apu-corner-accent--tl-4">tl-4<br>60px</div>
        <div class="test-card apu-corner-accent--tl-5">tl-5<br>72px</div>

        <div class="test-card apu-corner-accent--tr-1">tr-1<br>24px</div>
        <div class="test-card apu-corner-accent--tr-2">tr-2<br>36px</div>
        <div class="test-card apu-corner-accent--tr-3">tr-3<br>48px</div>
        <div class="test-card apu-corner-accent--tr-4">tr-4<br>60px</div>
        <div class="test-card apu-corner-accent--tr-5">tr-5<br>72px</div>

        <div class="test-card apu-corner-accent--bl-1">bl-1<br>24px</div>
        <div class="test-card apu-corner-accent--bl-2">bl-2<br>36px</div>
        <div class="test-card apu-corner-accent--bl-3">bl-3<br>48px</div>
        <div class="test-card apu-corner-accent--bl-4">bl-4<br>60px</div>
        <div class="test-card apu-corner-accent--bl-5">bl-5<br>72px</div>

        <div class="test-card apu-corner-accent--br-1">br-1<br>24px</div>
        <div class="test-card apu-corner-accent--br-2">br-2<br>36px</div>
        <div class="test-card apu-corner-accent--br-3">br-3<br>48px</div>
        <div class="test-card apu-corner-accent--br-4">br-4<br>60px</div>
        <div class="test-card apu-corner-accent--br-5">br-5<br>72px</div>
    </div>

    <h2>Position-only (no size suffix → defaults to 36px)</h2>
    <div class="test-grid">
        <div class="test-card apu-corner-accent--tl">tl</div>
        <div class="test-card apu-corner-accent--tr">tr</div>
        <div class="test-card apu-corner-accent--bl">bl</div>
        <div class="test-card apu-corner-accent--br">br</div>
    </div>

    <h2>Navy color</h2>
    <div class="test-grid">
        <div class="test-card-light apu-corner-navy--tl-3">navy tl-3</div>
        <div class="test-card-light apu-corner-navy--tr-3">navy tr-3</div>
        <div class="test-card-light apu-corner-navy--bl-3">navy bl-3</div>
        <div class="test-card-light apu-corner-navy--br-3">navy br-3</div>
        <div class="test-card-light apu-corner-navy--tr">navy tr</div>
    </div>

    <h2>White color</h2>
    <div class="test-grid">
        <div class="test-card-white apu-corner-white--tl-3">white tl-3</div>
        <div class="test-card-white apu-corner-white--tr-3">white tr-3</div>
        <div class="test-card-white apu-corner-white--bl-3">white bl-3</div>
        <div class="test-card-white apu-corner-white--br-3">white br-3</div>
        <div class="test-card-white apu-corner-white--tr">white tr</div>
    </div>

    <h2>Backward compatibility — old two-class API</h2>
    <div class="test-grid">
        <div class="test-card apu-corner-accent apu-corner-accent--tr">old tr</div>
        <div class="test-card apu-corner-accent apu-corner-accent--tl">old tl</div>
        <div class="test-card apu-corner-accent apu-corner-accent--bl">old bl</div>
        <div class="test-card apu-corner-accent apu-corner-accent--br">old br</div>
    </div>

    <h2>Edge cases</h2>
    <div class="test-grid">
        <div class="test-card apu-corner-accent--3">no position<br>(should be invisible)</div>
        <div class="test-card apu-corner-accent--999">unknown size<br>(should fallback to 36px, invisible without position)</div>
    </div>

    <h2>Class ordering — apu-corner not first</h2>
    <div class="test-grid">
        <div class="test-card foo apu-corner-accent--tr-3">foo + tr-3</div>
        <div class="test-card apu-glass-card apu-corner-accent--tl-3">glass + tl-3</div>
    </div>
</body>
</html>
```

**Note:** The `<link rel="stylesheet" href="/src/styles/global.css">` may need adjustment based on your dev server setup. If using Vite/Astro dev server, the CSS is typically processed through the build pipeline. You may need to create a minimal Astro page (`src/pages/test-corner-accent.astro`) instead that imports the stylesheet:

```astro
---
import "../styles/global.css";
---
<!-- paste the <style> and <body> content from above -->
```

#### Step 2 — Visual checklist

Navigate to the test page (e.g., `http://localhost:4321/test-corner-accent`) and verify:

| # | Check | Expected Result |
|---|-------|-----------------|
| 1 | All "Accent color" cards show an orange (`rgb(var(--apu-accent))`) L-shaped border in the correct corner | ✅ |
| 2 | Size increases left-to-right: 24px → 36px → 48px → 60px → 72px | ✅ |
| 3 | "Position-only" cards are 36px (default) and in correct corners | ✅ |
| 4 | "Navy color" cards show a navy L-shaped border on light background | ✅ |
| 5 | "White color" cards show a white L-shaped border on green background | ✅ |
| 6 | "Backward compatibility" cards look identical to "Position-only" cards | ✅ |
| 7 | "Edge case: no position" card shows NO border (invisible pseudo-element) | ✅ |
| 8 | "Edge case: unknown size" card shows NO border (falls back to 36px but no position) | ✅ |
| 9 | "Class ordering" cards render correctly even when `apu-corner-*` is not the first class | ✅ |

#### Step 3 — ContactSection regression check

Navigate to the Contact section (`/#kontak`) and verify the contact cards still display the orange top-right corner accent at the same size (36px) as before.

#### Step 4 — Cleanup

Delete the test page after verification. Do NOT commit it.

**Commit:** (no separate commit — verification only)

---

## Backward Compatibility Confirmation

The following old usage patterns continue to work without modification:

| Old Pattern | Status | Reason |
|-------------|--------|--------|
| `.apu-corner-accent.apu-corner-accent--tr` | ✅ Works | `.apu-corner-accent` matches universal selector; `.apu-corner-accent--tr` matches position + color groups |
| `.apu-corner-accent.apu-corner-accent--tl` | ✅ Works | Same as above |
| `.apu-corner-accent.apu-corner-accent--bl` | ✅ Works | Same as above |
| `.apu-corner-accent.apu-corner-accent--br` | ✅ Works | Same as above |
| `.apu-corner-accent` (bare, no position) | ✅ Works | Still invisible (no position = no border), same as old behavior |

No breaking changes. Existing HTML across the site requires zero modifications to remain functional.

---

## Rollback Plan

If visual regression is detected:

1. Revert `src/styles/global.css` to the old block (lines 233–285 from git history).
2. Revert `src/sections/ContactSection.astro` line 77 to the old two-class form.
3. Both files can be reverted independently.

---

## Summary Checklist

- [ ] Task 1.1: Replace CSS block in `src/styles/global.css` (lines 233–285)
- [ ] Task 1.1: Verify CSS syntax (no parse errors)
- [ ] Task 1.2: Update `src/sections/ContactSection.astro` line 77
- [ ] Task 1.2: Search codebase for other old-pattern usages and update if found
- [ ] Task 2.1: Create and run visual test page
- [ ] Task 2.1: Verify all 9 checklist items pass
- [ ] Task 2.1: Verify ContactSection regression
- [ ] Task 2.1: Delete test page
- [ ] Commit both files together
