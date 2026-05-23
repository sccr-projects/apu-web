## Why

APU needs a content-first blueprint per required page before UI build, so design and implementation decisions are based on verified source material instead of assumptions. This is urgent now because crawl evidence from `kmb.ac.id` is already available and can be converted into an execution-grade content architecture.

## What Changes

- Create a detailed top-to-bottom page blueprint for every required page in `apu-web-plan/apu-website-content-plan.md`.
- Convert previous crawl findings into structured per-section content plans, including exact block purpose, required fields, source mapping, and fallback/placeholder policy.
- Define page-level “must exist now vs later” boundaries (P0/P1/P2) for launch sequencing.
- Define strict naming migration policy for content text: public-facing IKMB mentions become **APU Semarang**, with legal/history exceptions.
- Define missing-content register format and handoff rules so design can proceed with known constraints.

## Capabilities

### New Capabilities
- `detailed-page-content-blueprinting`: Produce page-by-page content architecture from hero to footer with explicit section order and content requirements.
- `source-evidence-content-mapping`: Map each planned block to verified `kmb.ac.id`/subdomain evidence and identify unsupported claims.
- `content-gap-governance`: Standardize missing-data tracking, owners, priority, and unblock criteria for pages not fully fulfillable.
- `apu-naming-normalization-policy`: Enforce APU Semarang-first naming and controlled legal/historical exceptions.

### Modified Capabilities
- None.

## Impact

- Affected artifacts: `openspec/changes/apu-detailed-page-content-blueprint/{proposal.md,design.md,tasks.md,specs/**}`.
- Affected planning inputs: `apu-web-plan/apu-website-content-plan.md` and prior crawl evidence already gathered from `kmb.ac.id` ecosystem.
- Affected implementation readiness: all core website pages (Home, Admissions, Scholarships, Academics, Research, Student Life & Services, News & Stories, About, Leadership, International, Contact).
- No runtime API/code dependency changes in this proposal phase.
