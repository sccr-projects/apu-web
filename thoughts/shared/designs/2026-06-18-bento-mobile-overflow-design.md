---
date: 2026-06-18
topic: "Program Strengths Bento Mobile Overflow Fix"
status: validated
---

## Problem Statement

Mobile layout of the program strengths bento section overflows when an item expands. The expanded clone title/icon are sized for desktop and break the narrow panel.

## Constraints

- Keep desktop expanded styling unchanged.
- Preserve all click, close, outside-click, Escape, and auto-expand behavior.
- No JS interaction contract changes.
- Minimal CSS additions only.

## Approach

Add a mobile media query in the existing `<style>` block to reduce `.bento-clone.is-expanded` typography and icon chip size below the `md` breakpoint.

I considered:
1. **Tailwind responsive utilities on clone** — rejected; clone is generated in JS and relies on a dedicated style block with `!important` overrides.
2. **CSS media query in existing style block** — chosen; localized, no JS changes.

## Architecture

No markup or data changes. Pure CSS responsive sizing.

## Components

- `src/sections/academic/program/ProgramStrengthsBentoSection.astro`
- Existing second `<style>` block (`.bento-clone.is-expanded` rules)

## Data Flow

No data changes.

## Error Handling

None. Visual/layout change only.

## Testing Strategy

1. Load program page on mobile viewport.
2. First item auto-expands; verify title and icon fit inside panel without truncation or overflow.
3. Verify expanded clone does not cause horizontal scroll.
4. Verify desktop expanded view unchanged.
5. Build passes.

## Open Questions

None.
