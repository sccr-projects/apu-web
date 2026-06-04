# Work Plan: Interactive Organizational Structure Section

## Outcome
Add `AboutOrgStructure.astro` section to About APU page. Interactive org chart with hover effects, expand/collapse, and category filtering. Built with custom CSS tree + APU design system primitives (zero external chart libraries).

## Success Criteria
- [x] Section renders between VisionMission and Leadership on `/about-apu`
- [x] Org chart displays APU hierarchy: Yayasan → Rektor → WR/LPPM/LPMI → Fakultas → Prodi
- [x] Hover: node elevation + glow effect
- [x] Click: expand/collapse child nodes + rotate toggle icon
- [x] Filter tabs: Pimpinan | Fakultas | Unit Pendukung | Semua — switches visible nodes
- [x] Mobile: vertical tree layout (not horizontal overflow)
- [x] Uses APU glass cards, tokens, SectionHeader, ScrollReveal
- [x] Zero console errors on load
- [x] Zero new JS dependencies (no jQuery, no chart libraries)

---

## Tasks

### Phase 1: Setup & Data
- [x] 1.1 Create `src/data/organization.ts` — typed hierarchy data following `lecturers.ts` pattern
  - Interface: `OrgNode { id, name, role, category, parentId, description?, image?, children? }`
  - Categories: `pimpinan` | `fakultas` | `unit-pendukung` | `prodi`
  - Data covers full hierarchy from Yayasan to Prodi level
  - Helper function: `buildTree(flatNodes)` → nested tree structure
- [x] 1.2 Add generic avatar placeholder to `public/images/` (reusable across org chart nodes)
  - **Decision**: Using CSS initials instead of image placeholders. No file needed.

### Phase 2: Core Section
- [x] 2.1 Create `src/sections/about/AboutOrgStructure.astro`
  - Uses `SectionHeader` with kicker "Struktur Organisasi", title "Tata Kelola Institusi"
  - Wraps in `apu-section-shell` + `content-max`
  - Includes `FilterTabs` for category filtering (listens to `tabchange` event)
  - Tree container with custom CSS tree layout (CSS Grid + Flexbox)
  - Client-side script for expand/collapse and filtering
- [x] 2.2 Build CSS tree structure:
  - Horizontal connectors via CSS pseudo-elements (`::before`, `::after`)
  - Vertical connectors between parent and children
  - Node wrapper: `apu-glass-card apu-interactive-card`
  - Node title: `text-h3`
  - Node role: `text-body-s text-brand-text-muted`
  - Toggle button: chevron icon (SVG, rotates on expand)
- [x] 2.3 Implement filter logic:
  - On `tabchange` event, apply `data-filter` attribute to tree container
  - CSS rules show/hide nodes based on category + ancestors
  - "Semua" shows all, others show matching nodes + ancestors (context preserved)
  - Animate with CSS `opacity` + `transform` transitions
- [x] 2.4 Implement expand/collapse:
  - Click toggle button → toggle `is-expanded` class on parent node
  - Children container height animates via CSS `grid-template-rows` or `max-height`
  - Chevron rotates 90° via CSS `transform`
  - Store expanded state in `data-expanded` attribute

### Phase 3: Mobile & Polish
- [x] 3.1 Add mobile responsive behavior:
  - Below `md` breakpoint: switch to vertical layout (flex-direction: column)
  - Horizontal connectors become vertical (left border instead of top border)
  - Reduce node padding and font sizes
  - Enable horizontal scroll if tree exceeds viewport (with touch pan)
- [~] 3.2 Add empty state for filtered categories with no nodes
  - **Note**: Not implemented. All categories have matching nodes in current data.
- [~] 3.3 Add hover tooltip for long titles/roles (CSS-only, `title` attribute or `::after` pseudo)
  - **Note**: Description shown on hover/expand instead.
- [x] 3.4 Ensure focus-visible states for keyboard navigation
  - Tab through nodes, Enter/Space to expand/collapse
  - Focus ring matches APU tokens

### Phase 4: Integration
- [x] 4.1 Import `AboutOrgStructure` in `src/pages/about-apu.astro`
  - Insert between `AboutVisionMission` and `MessageFromLeadership`
- [x] 4.2 Verify section id for anchor linking (`#struktur-organisasi`)
- [x] 4.3 Run build check: `npm run build` — zero errors
- [x] 4.4 Run dev server and verify interactive behavior manually
  - Verified: section loads, expand/collapse works, filter works, hover shows description

---

## Files

### Create
- `src/sections/about/AboutOrgStructure.astro`
- `src/data/organization.ts`
- `public/images/org-avatar-placeholder.webp` (generic avatar if needed)

### Modify
- `src/pages/about-apu.astro` — add import and component
- `src/styles/global.css` — add CSS tree layout styles (connectors, node positioning, responsive breakpoints)

---

## Data Structure

```typescript
// src/data/organization.ts
export type OrgCategory = 'pimpinan' | 'fakultas' | 'unit-pendukung' | 'prodi';

export interface OrgNode {
  id: string;
  name: string;
  role: string;
  category: OrgCategory;
  parentId?: string;
  description?: string;
  image?: string;
}

export interface OrgTreeNode extends OrgNode {
  children?: OrgTreeNode[];
}

export const orgStructure: OrgNode[] = [
  { id: "yayasan", name: "Yayasan Agung Putra Ibrahim", role: "Pemilik", category: "pimpinan" },
  { id: "rektor", name: "Prof. Dr. Agung Putra, M.Si.", role: "Rektor", category: "pimpinan", parentId: "yayasan" },
  { id: "senat", name: "Senat Akademik", role: "Badan Pengambil Keputusan", category: "pimpinan", parentId: "yayasan" },
  { id: "wr1", name: "Wakil Rektor 1", role: "Akademik", category: "pimpinan", parentId: "rektor" },
  { id: "wr2", name: "Wakil Rektor 2", role: "Keuangan & Sarpras", category: "pimpinan", parentId: "rektor" },
  { id: "wr3", name: "Wakil Rektor 3", role: "Kemahasiswaan", category: "pimpinan", parentId: "rektor" },
  { id: "lppm", name: "LPPM", role: "Penelitian & Pengabdian", category: "unit-pendukung", parentId: "rektor" },
  { id: "lpmi", name: "LPMI", role: "Penjaminan Mutu", category: "unit-pendukung", parentId: "rektor" },
  { id: "fis", name: "Fakultas Ilmu Sosial", role: "Fakultas", category: "fakultas", parentId: "rektor" },
  { id: "fik", name: "Fakultas Ilmu Kesehatan", role: "Fakultas", category: "fakultas", parentId: "rektor" },
  // Prodi under FIS
  { id: "hukum", name: "KAPRODI Hukum", role: "Program Studi", category: "prodi", parentId: "fis" },
  { id: "komunikasi", name: "KAPRODI Ilmu Komunikasi", role: "Program Studi", category: "prodi", parentId: "fis" },
  { id: "manajemen", name: "KAPRODI Manajemen", role: "Program Studi", category: "prodi", parentId: "fis" },
  { id: "biotek", name: "KAPRODI Bioteknologi", role: "Program Studi", category: "prodi", parentId: "fis" },
  // Prodi under FIK
  { id: "biomedis", name: "KAPRODI Ilmu Biomedis", role: "Program Studi", category: "prodi", parentId: "fik" },
  { id: "sarjana-kebidanan", name: "KAPRODI Sarjana Kebidanan", role: "Program Studi", category: "prodi", parentId: "fik" },
  { id: "profesi-bidan", name: "KAPRODI Profesi Bidan", role: "Program Studi", category: "prodi", parentId: "fik" },
  { id: "d3-kebidanan", name: "KAPRODI D3 Kebidanan", role: "Program Studi", category: "prodi", parentId: "fik" },
];

// Helper: flat array → nested tree
export function buildTree(nodes: OrgNode[]): OrgTreeNode[] {
  const nodeMap = new Map<string, OrgTreeNode>();
  const roots: OrgTreeNode[] = [];
  
  // First pass: create nodes
  nodes.forEach(node => {
    nodeMap.set(node.id, { ...node });
  });
  
  // Second pass: build hierarchy
  nodes.forEach(node => {
    const treeNode = nodeMap.get(node.id)!;
    if (node.parentId) {
      const parent = nodeMap.get(node.parentId);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(treeNode);
      }
    } else {
      roots.push(treeNode);
    }
  });
  
  return roots;
}
```

---

## Acceptance Criteria (Agent-Executable QA)

### Functional
1. **Render**: `await page.goto('/about-apu')` → `page.locator('#struktur-organisasi').isVisible()` → true
2. **Filter**: Click tab "Fakultas" (`button[data-tab-id="fakultas"]`) → `.org-tree[data-filter="fakultas"]` exists → visible nodes count ≥ 1
3. **Expand**: Click `.org-node-toggle` on node with `data-has-children="true"` → `.org-node-children` has class `is-visible` → `.org-node-toggle svg` has `transform: rotate(90deg)`
4. **Collapse**: Click same toggle → `.org-node-children` lacks `is-visible` → toggle rotation returns to 0deg
5. **Mobile**: `page.setViewportSize({ width: 375, height: 667 })` → `.org-tree` has class `is-vertical` → no horizontal scroll (`scrollWidth === clientWidth`)

### Integration
6. **Import**: `about-apu.astro` contains `import AboutOrgStructure from "../sections/about/AboutOrgStructure.astro"`
7. **Position**: `AboutOrgStructure` appears after `AboutVisionMission` in component order
8. **Build**: `npm run build` exits 0

### Design System
9. **Glass cards**: Org nodes have class `apu-glass-card`
10. **Section header**: Uses `SectionHeader` component with kicker "Struktur Organisasi"
11. **Scroll reveal**: Section wrapper uses `ScrollReveal`
12. **Filter tabs**: Uses `FilterTabs` component with tabs `["Semua", "Pimpinan", "Fakultas", "Unit Pendukung", "Prodi"]`

### Performance
13. **Zero new dependencies**: `package.json` has no new entries beyond `organization.ts` import
14. **No console errors**: `page.on('pageerror')` captures 0 errors after load
15. **CSS bundle size**: `global.css` additions < 5KB

---

## Auto-Resolved Decisions

| Decision | Resolution | Rationale |
|---|---|---|
| Library | Custom CSS tree (zero dependencies) | orgchart.js requires jQuery (violates MUST NOT). Custom build gives full control + zero bundle risk. |
| Tree layout | CSS Grid + pseudo-element connectors | Matches design system, fully responsive, no JS layout calculations |
| Insertion point | Between `AboutVisionMission` and `MessageFromLeadership` | Matches wireframe AB-04 sequence |
| Details UI | Inline expand (click toggle to show children) | Simplest, native CSS transitions, no modal needed |
| Mobile behavior | CSS breakpoint switches to vertical flex layout | Native CSS, no JS resize handlers needed |
| Data pattern | Flat array + `buildTree()` helper | Mirrors `lecturers.ts` pattern, easy to maintain |
| Image placeholders | Generic avatar SVG or CSS initial | No new asset pipeline needed |
| Category filter behavior | CSS `data-filter` attribute + `[data-category]` selectors | Pure CSS show/hide, no JS re-renders |
| Expand/collapse | CSS `grid-template-rows` + `max-height` transitions | Hardware-accelerated, works without JS frameworks |

## User Decisions Needed

None. All critical questions answered or auto-resolved.

## Library Decision Note

**Switched from orgchart.js to custom CSS build.**

Research found that `orgchart` (npm package by dabeng) requires jQuery as a dependency — violating the "MUST NOT: Add jQuery" constraint. The ES6 version is not available as a separate npm package.

Alternative libraries evaluated:
- `@digdir/organisation-chart` — accessible, but limited customization
- `d3-org-chart` — powerful but heavy (~300KB with D3 dependency)
- `TreeWeave` — new, unproven at scale

**Custom CSS tree chosen because:**
1. Zero dependencies (no jQuery, no D3, no chart libs)
2. Full control over APU design system integration
3. CSS Grid/Flexbox handles layout natively
4. Expand/collapse via CSS transitions (hardware-accelerated)
5. Filtering via CSS attribute selectors (no JS re-renders)
6. Mobile responsive via CSS breakpoints
7. No library compatibility risks with Astro/Vite/Tailwind v4

## OpenSpec Note

Fills gap `AB-04 [M] Organizational structure` in about wireframe. Owner: Leadership Office. This implementation provides the interactive version where wireframe had only a placeholder.
