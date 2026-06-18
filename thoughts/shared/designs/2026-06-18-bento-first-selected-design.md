---
date: 2026-06-18
topic: "Program Strengths Bento First Item Selected by Default"
status: validated
---

## Problem Statement

In `ProgramStrengthsBentoSection.astro`, no bento item is selected on page load. The request is to make the first item expanded/selected by default.

## Constraints

- Keep existing click, close, outside-click, and Escape behavior intact.
- Keep existing animation timing and clone mechanics.
- First item is index 0 in the `featured` array.
- No markup or CSS changes unless required.

## Approach

Call the existing `expand()` function with the first trigger after all event listeners are bound. The function handles null active state and performs the full expansion flow (hide hint, create clone, show panel).

I considered:
1. **Simulate click on first trigger** — rejected; direct `expand()` avoids synthetic event complexity.
2. **Manually set activeIndex and clone at load** — rejected; duplicate logic, brittle.
3. **Call `expand(triggers[0])`** — chosen; reuses existing flow.

## Architecture

Single inline script change. No new components, data flow, or styles.

## Components

- Existing IIFE script in `ProgramStrengthsBentoSection.astro`.
- Existing `expand(trigger)` function.

## Data Flow

No data changes. Behavior change only.

## Error Handling

Guard: only call if `triggers.length > 0`. Existing early return already ensures this.

## Testing Strategy

1. Load program page; first bento item should appear expanded in the stage area.
2. Click second item; expansion should switch normally.
3. Click outside expanded clone; should collapse and show hint.
4. Press Escape; should collapse and show hint.
5. Click close button; should collapse and return focus to trigger.

## Open Questions

None.
