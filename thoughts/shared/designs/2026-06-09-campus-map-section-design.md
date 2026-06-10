---
date: 2026-06-09
topic: "Campus Map Section with Multiple Markers"
status: validated
---

# Campus Map Section Design

## Problem Statement

Create a new Astro section that displays a map with 6 specific APU campus coordinates. The map should be static (no spin or fly-to animations) and show all locations at once with clear markers.

## Constraints

- Must use existing Leaflet installation (already in package.json)
- Must follow APU design system (tokens, primitives, section shell)
- Must be accessible and responsive
- No animations on the map itself
- Must not break existing `LeafletMap.astro` usage in `AnchorCampusSectionAPU`

## Approach

Extend the existing `LeafletMap.astro` component to support multiple markers and static display mode, then create a new section component that uses it.

**Why extend rather than duplicate:**
- Leaflet is already configured with styles, types, and tile settings
- Keeps map configuration in one place
- Backward compatible with existing single-marker usage

## Architecture

### Component: `LeafletMap.astro` (extended)

New props:
- `markers?: Array<{ lat: number; lng: number; label?: string }>` — when provided, renders multiple markers and auto-fits bounds
- `animated?: boolean` — defaults to `true` (existing behavior); when `false`, skips flyTo and pulse effects

Behavior changes:
- When `markers` is provided: calculate bounds from all markers, fit map to bounds with padding, render each marker with label popup
- When `animated` is `false`: render markers as static dots (no pulse animation), set view directly without flyTo
- Use class-based selector (`data-map-instance`) instead of ID to allow multiple map instances

### Section: `CampusLocationsSection.astro`

**Layout:**
- Full-width `apu-section-shell` with ambient glow
- `SectionHeader` with kicker "Lokasi Kampus" and title
- Two-column desktop layout (60/40 split):
  - Left: Map in `apu-glass-card` with 16:9 aspect ratio
  - Right: Location list with icon-chip pattern
- Mobile: single column, map stacks above list

**Location list:**
- 6 items using `.apu-icon-chip` + content row pattern
- Each item: map-pin icon, location name, coordinates
- Hover state for interactivity

**Map container:**
- `.apu-glass-card` wrapper
- Border radius via `--apu-radius-card`
- Shadow via `--apu-shadow-card`
- Subtle vignette overlay at edges

## Data

```typescript
const LOCATIONS = [
  { name: "Kampus Utama APU", lat: -7.071300, lng: 110.362306 },
  { name: "SCCR", lat: -7.070469, lng: 110.358658 },
  { name: "Karenina Resort", lat: -7.069780, lng: 110.359637 },
  { name: "Dermanina", lat: -7.069804, lng: 110.359198 },
  { name: "Agung Farm", lat: -7.075039, lng: 110.358688 },
  { name: "Sains De Resto", lat: -7.074095, lng: 110.359329 },
];
```

## Data Flow

```
CampusLocationsSection.astro
├── Defines LOCATIONS array
├── Passes markers + animated=false to LeafletMap
│   └── Extended LeafletMap.astro
│       ├── Calculates LatLngBounds from markers
│       ├── Sets static view with fitBounds
│       └── Renders markers with popups
└── Renders location list alongside
    └── ScrollReveal for staggered entrance
```

## Error Handling

- **Map fails to load:** Container remains visible, shows fallback text with location names
- **Invalid coordinates:** Leaflet's LatLngBounds handles gracefully
- **Script errors:** Wrapped in try/catch; map container stays visible

## Testing Strategy

1. Visual: all 6 markers visible on map
2. Responsive: layout stacks on mobile
3. Accessibility: keyboard nav through location list
4. Integration: existing AnchorCampusSection still works

## Open Questions

None.
