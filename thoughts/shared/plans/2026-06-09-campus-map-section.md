# Campus Map Section Implementation Plan

**Goal:** Create a new `CampusLocationsSection` that displays 6 APU campus locations on a static multi-marker Leaflet map with a companion location list, while extending `LeafletMap.astro` to support multiple markers and static display mode without breaking existing usage.

**Architecture:** Extend the existing `LeafletMap.astro` component with backward-compatible props (`markers`, `animated`), extract location data into a typed data module, and compose a new section using the APU design system primitives (`apu-section-shell`, `apu-glass-card`, `apu-icon-chip`, `SectionHeader`, `ScrollReveal`).

**Design:** [thoughts/shared/designs/2026-06-09-campus-map-section-design.md](thoughts/shared/designs/2026-06-09-campus-map-section-design.md)

---

## Dependency Graph

```
Batch 1 (parallel): 1.1, 1.2 [foundation - no deps]
Batch 2 (parallel): 2.1 [section - depends on batch 1]
Batch 3 (parallel): 3.1 [integration - depends on batch 2]
```

---

## Batch 1: Foundation (parallel — 2 implementers)

All tasks in this batch have NO dependencies and run simultaneously.

### Task 1.1: Location Data Module
**File:** `src/data/locations.ts`
**Test:** none (pure data module, verified by TypeScript compiler)
**Depends:** none

Create a typed data file exporting the 6 campus locations.

```typescript
export interface CampusLocation {
  name: string;
  lat: number;
  lng: number;
}

export const campusLocations: CampusLocation[] = [
  { name: "Kampus Utama APU", lat: -7.071300, lng: 110.362306 },
  { name: "SCCR", lat: -7.070469, lng: 110.358658 },
  { name: "Karenina Resort", lat: -7.069780, lng: 110.359637 },
  { name: "Dermanina", lat: -7.069804, lng: 110.359198 },
  { name: "Agung Farm", lat: -7.075039, lng: 110.358688 },
  { name: "Sains De Resto", lat: -7.074095, lng: 110.359329 },
];
```

**Verify:** `npx tsc --noEmit src/data/locations.ts` (or rely on Astro build)
**Commit:** `feat(data): add campus locations data module`

---

### Task 1.2: Extend LeafletMap Component
**File:** `src/components/LeafletMap.astro`
**Test:** Manual — verify existing `AnchorCampusSectionAPU` and `AnchorEcosystemSectionAPU` still render correctly
**Depends:** none

**Design requires:** Backward-compatible extension of `LeafletMap.astro` to support multiple markers and static mode. I'm implementing it by:
1. Adding optional `markers` and `animated` props
2. Changing from `id="leaflet-map"` to `data-map-instance` class selector for multiple-instance safety
3. Adding two init paths: single-marker animated (existing) and multi-marker static (new)
4. Preserving all existing prop defaults so current callers are unaffected

Replace the entire file content:

```astro
---
interface MarkerData {
  lat: number;
  lng: number;
  label?: string;
}

interface Props {
  center?: [number, number];
  zoomStart?: number;
  zoomEnd?: number;
  zoomDuration?: number;
  markers?: MarkerData[];
  animated?: boolean;
  class?: string;
}

const {
  center = [-7.071300, 110.362306],
  zoomStart = 10,
  zoomEnd = 16,
  zoomDuration = 4000,
  markers,
  animated = true,
  class: className = "",
} = Astro.props;
---

<div
  class={`apu-leaflet-map ${className}`}
  data-map-instance
  data-center={JSON.stringify(center)}
  data-zoom-start={zoomStart}
  data-zoom-end={zoomEnd}
  data-zoom-duration={zoomDuration}
  data-markers={markers ? JSON.stringify(markers) : undefined}
  data-animated={String(animated)}
>
</div>

<script>
  import L from "leaflet";

  interface MarkerData {
    lat: number;
    lng: number;
    label?: string;
  }

  interface MapData {
    center: [number, number];
    zoomStart: number;
    zoomEnd: number;
    zoomDuration: number;
    markers?: MarkerData[];
    animated: boolean;
  }

  function parseData(container: HTMLElement): MapData {
    return {
      center: JSON.parse(container.dataset.center || "[-7.071300, 110.362306]"),
      zoomStart: parseInt(container.dataset.zoomStart || "10"),
      zoomEnd: parseInt(container.dataset.zoomEnd || "16"),
      zoomDuration: parseInt(container.dataset.zoomDuration || "4000"),
      markers: container.dataset.markers ? JSON.parse(container.dataset.markers) : undefined,
      animated: container.dataset.animated !== "false",
    };
  }

  function createPulseIcon(): L.DivIcon {
    return L.divIcon({
      className: "apu-map-pin",
      html: `
        <div class="apu-map-pin__container">
          <div class="apu-map-pin__pulse"></div>
          <div class="apu-map-pin__dot"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  }

  function createStaticIcon(): L.DivIcon {
    return L.divIcon({
      className: "apu-map-pin",
      html: `<div class="apu-map-pin__container"><div class="apu-map-pin__dot"></div></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  }

  function initSingleMarkerMap(container: HTMLElement, data: MapData) {
    const map = L.map(container, {
      center: data.center,
      zoom: data.zoomStart,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    const icon = data.animated ? createPulseIcon() : createStaticIcon();
    L.marker(data.center, { icon }).addTo(map);

    if (data.animated) {
      setTimeout(() => {
        map.flyTo(data.center, data.zoomEnd, {
          duration: data.zoomDuration / 1000,
          easeLinearity: 0.25,
        });
      }, 800);
    }

    return map;
  }

  function initMultiMarkerMap(container: HTMLElement, data: MapData) {
    if (!data.markers || data.markers.length === 0) return;

    const map = L.map(container, {
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    const bounds = L.latLngBounds(data.markers.map((m) => [m.lat, m.lng]));

    data.markers.forEach((marker) => {
      const icon = createStaticIcon();
      const m = L.marker([marker.lat, marker.lng], { icon }).addTo(map);
      if (marker.label) {
        m.bindPopup(marker.label, {
          closeButton: false,
          className: "apu-map-popup",
        });
      }
    });

    map.fitBounds(bounds, { padding: [40, 40] });

    return map;
  }

  function initMap(container: HTMLElement) {
    try {
      const data = parseData(container);

      let map: L.Map | undefined;
      if (data.markers && data.markers.length > 0) {
        map = initMultiMarkerMap(container, data);
      } else {
        map = initSingleMarkerMap(container, data);
      }

      if (map) {
        document.addEventListener("astro:before-swap", () => {
          map?.remove();
        });
      }
    } catch (err) {
      console.error("LeafletMap init failed:", err);
      // Keep container visible as fallback
    }
  }

  function initAllMaps() {
    const containers = document.querySelectorAll<HTMLElement>("[data-map-instance]");
    containers.forEach((container) => {
      if (!container.dataset.mapInitialized) {
        container.dataset.mapInitialized = "true";
        initMap(container);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllMaps);
  } else {
    initAllMaps();
  }
</script>

<style>
  .apu-leaflet-map {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .apu-leaflet-map :global(.leaflet-container) {
    background: transparent;
  }

  .apu-leaflet-map :global(.leaflet-tile-pane) {
    filter: saturate(1.05) contrast(1.02);
  }

  /* Custom APU Pin Styles */
  .apu-map-pin {
    background: transparent;
    border: none;
  }

  .apu-map-pin__container {
    position: relative;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .apu-map-pin__dot {
    width: 12px;
    height: 12px;
    background: rgb(var(--color-apu-accent));
    border: 2px solid rgb(var(--color-apu-navy));
    border-radius: 50%;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 0 4px rgb(var(--color-apu-accent) / 0.3);
  }

  .apu-map-pin__pulse {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgb(var(--color-apu-accent) / 0.4);
    animation: apu-map-pulse 2s ease-out infinite;
    z-index: 1;
  }

  @keyframes apu-map-pulse {
    0% {
      transform: scale(0.5);
      opacity: 0.8;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .apu-map-pin__pulse {
      animation: none;
    }
  }
</style>
```

**Verify:**
1. Build passes: `npm run build` (or `astro build`)
2. Existing pages using `LeafletMap` still work:
   - `src/sections/AnchorCampusSectionAPU.astro` renders with single animated marker
   - `src/sections/AnchorEcosystemSectionAPU.astro` renders with single animated marker
3. New multi-marker mode works: create a temporary test page importing `LeafletMap` with `markers` prop

**Commit:** `feat(components): extend LeafletMap with multi-marker and static mode`

---

## Batch 2: Section Component (parallel — 1 implementer)

Depends on Batch 1 completing.

### Task 2.1: CampusLocationsSection Component
**File:** `src/sections/CampusLocationsSection.astro`
**Test:** Manual — section renders with header, map, and location list; responsive layout stacks on mobile
**Depends:** 1.1 (`src/data/locations.ts`), 1.2 (`src/components/LeafletMap.astro`)

Create the section following the canonical APU section patterns (see `PathwaysSectionAPU.astro`, `ContactSection.astro`).

```astro
---
import ScrollReveal from "../components/ScrollReveal.astro";
import SectionHeader from "../components/SectionHeader.astro";
import LeafletMap from "../components/LeafletMap.astro";
import { campusLocations } from "../data/locations";

const mapMarkers = campusLocations.map((loc) => ({
  lat: loc.lat,
  lng: loc.lng,
  label: loc.name,
}));

const mapPinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
---

<section
  id="lokasi-kampus"
  class="apu-section-shell motion-aurora-shell motion-aurora-shell--locations relative isolate overflow-hidden"
  style="padding-top: var(--apu-section-spacing-y); padding-bottom: var(--apu-section-spacing-y);"
>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.18)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.14)] blur-3xl"></div>
    <div class="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[rgb(var(--color-apu-navy)_/_0.18)] to-transparent"></div>
  </div>

  <div class="content-max relative z-[1]">
    <!-- Section Header -->
    <ScrollReveal>
      <SectionHeader
        kicker="LOKASI KAMPUS"
        title="Jelajahi Lingkungan Kampus APU"
        description="Temukan lokasi kampus utama dan fasilitas pendukung yang tersebar di area strategis Semarang."
        class="text-center mb-12 md:mb-16"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
        descriptionClass="text-body-s text-brand-text-muted max-w-xl mx-auto leading-relaxed"
        dividerClass="apu-gradient-line mx-auto mt-4 w-48"
      />
    </ScrollReveal>

    <!-- Two-column layout: Map + Location List -->
    <div class="grid md:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 items-start">
      <!-- Map -->
      <ScrollReveal>
        <div class="apu-glass-card apu-interactive-card relative overflow-hidden" style="aspect-ratio: 16/9;">
          <LeafletMap
            markers={mapMarkers}
            animated={false}
            class="absolute inset-0 w-full h-full"
          />
          <!-- Subtle vignette overlay -->
          <div
            class="pointer-events-none absolute inset-0 z-[2]"
            style="
              background:
                radial-gradient(circle at center, transparent 60%, rgb(var(--color-brand-surface) / 0.15) 100%);
            "
          ></div>
        </div>
      </ScrollReveal>

      <!-- Location List -->
      <div class="space-y-3">
        {campusLocations.map((loc, index) => (
          <ScrollReveal delay={index * 100}>
            <div class="apu-glass-card apu-interactive-card group flex items-center gap-4 p-4 transition-all duration-220">
              <div class="apu-icon-chip w-12 h-12 flex-shrink-0">
                <Fragment set:html={mapPinIcon} />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-body-s font-medium text-brand-text truncate leading-snug">
                  {loc.name}
                </p>
                <p class="text-caption text-brand-text-muted font-mono mt-0.5">
                  {loc.lat.toFixed(6)}, {loc.lng.toFixed(6)}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </div>
</section>
```

**Key decisions documented:**
- `SectionHeader` uses the standard component (per design system §8A) instead of inline markup
- Map wrapper uses `apu-glass-card.apu-interactive-card` with inline `aspect-ratio: 16/9` (design calls for 16:9)
- Location list items use `apu-icon-chip` + content row pattern (design system §8C)
- `ScrollReveal` provides staggered entrance with 100ms delay per item (within the 100–150ms range per design system §6)
- Vignette overlay is a subtle radial gradient at map edges (design requirement)
- Map is non-interactive (`dragging: false`, etc.) matching existing `LeafletMap` behavior
- `animated={false}` suppresses fly-to and pulse animations per design constraint

**Verify:**
1. Section renders without build errors: `npm run build`
2. Visual check: all 6 markers visible on map, no fly-to animation
3. Responsive check: on viewports < 768px, map stacks above list as single column
4. Accessibility check: location list items are keyboard-navigable (they are static divs with no interactive elements; no extra tabindex needed)
5. Fallback check: if Leaflet fails, the list still renders with location names

**Commit:** `feat(sections): add CampusLocationsSection with multi-marker map`

---

## Batch 3: Page Integration (parallel — 1 implementer)

Depends on Batch 2 completing.

### Task 3.1: Register Section on Admissions Page
**File:** `src/pages/index.astro` (or the page that contains admissions sections)
**Test:** Manual — new section appears in page flow, no layout breakage
**Depends:** 2.1

Find the admissions landing page (typically `src/pages/index.astro` or `src/pages/admission.astro`) and import + place the new section. It should be placed after academic/program sections and before the contact section, as campus location context fits naturally before reaching out.

Example integration (adapt to actual page structure):

```astro
---
// Add import near other section imports
import CampusLocationsSection from "../sections/CampusLocationsSection.astro";
---

<!-- Place in page layout, e.g. after ProgramsSectionAPU and before ContactSection -->
<CampusLocationsSection />
```

> **Note:** The exact page file path may vary. Search for where other sections like `<ContactSection />` or `<PathwaysSectionAPU />` are used, and insert `<CampusLocationsSection />` in the appropriate position.

**Verify:**
1. Page builds successfully
2. Section appears in DOM with id `lokasi-kampus`
3. Navigation anchor `#lokasi-kampus` works if added to nav
4. No console errors from Leaflet

**Commit:** `feat(pages): integrate CampusLocationsSection into admissions page`

---

## Testing Summary

| Test | Type | How |
|------|------|-----|
| All 6 markers visible | Visual | Load page, confirm 6 dots on map |
| No map animation | Visual/Interaction | Map loads already zoomed to fit all markers; no flyTo motion |
| Responsive layout | Visual | Resize to < 768px: single column, map above list |
| Backward compatibility | Regression | Check `AnchorCampusSectionAPU` and `AnchorEcosystemSectionAPU` still animate and show single marker |
| Keyboard navigation | Accessibility | Tab through page; section header and list are readable |
| Build passes | CI | `npm run build` exits 0 |
| Error resilience | Manual | If network blocks tiles, list still shows all location names |

---

## Rollback Plan

If the extended `LeafletMap.astro` causes issues with existing sections:
1. Revert `src/components/LeafletMap.astro` to its original content
2. Create a separate `MultiMarkerMap.astro` component instead
3. Update `CampusLocationsSection.astro` to import from the new component

This is a safe fallback because the existing component uses `id="leaflet-map"` (single-instance only), while the extension changes to `data-map-instance` (multi-instance safe). If problems arise, the separate-component approach avoids any risk to existing pages.
