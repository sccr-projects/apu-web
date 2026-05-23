## Why

APU needs a launch-ready content migration plan grounded in real source material from `kmb.ac.id` and its subdomains, but current planning is split across datasets and not yet converted into implementation-ready page guidance. This change is needed now to reduce launch risk, close critical content gaps early, and standardize institutional naming to **APU Semarang**.

## What Changes

- Perform a structured content-coverage audit for every page in `apu-web-plan/apu-website-content-plan.md` using live `kmb.ac.id` and relevant subdomains.
- Produce page-by-page fulfillment status against must-have criteria, including explicit evidence sources.
- Produce a detailed implementation plan for pages with sufficient content, including mapping from existing content blocks into APU design-system components and section primitives.
- Produce a markdown missing-content register for gaps that block full criteria fulfillment.
- Define institutional naming migration rules across all new page content:
  - Replace mentions of **"Institut Karya Mulia Bangsa"** with **"APU Semarang"** for forward-facing copy.
  - Preserve historical/legal references only where context requires provenance (e.g., decrees/history sections).

## Capabilities

### New Capabilities
- `website-content-coverage-audit`: Audit content sufficiency per target page criteria using `kmb.ac.id` ecosystem sources.
- `apu-content-migration-planning`: Generate implementation-ready content and section plans aligned to APU design language primitives/components.
- `institutional-naming-normalization`: Enforce consistent public naming migration from IKMB naming to APU Semarang conventions.

### Modified Capabilities
- None.

## Impact

- Affected artifacts: `openspec/changes/apu-kmb-content-coverage-and-migration-plan/{proposal.md,design.md,tasks.md,specs/**}`.
- Affected planning inputs: `apu-web-plan/apu-website-content-plan.md` and related datasets in `apu-web-plan/`.
- Affected implementation scope (next phase): page content architecture for Home, Admissions, Scholarships, Academics, Research, About, Leadership, Student Life & Services, International, News & Stories, and Contact.
- No runtime API or dependency changes in this proposal phase.
