## Context

The repository now has a strong content blueprint baseline (top-to-bottom per page), but there is no unified wireframe package translating that content into screen-level structure. Teams need wireframes for all required pages so UX, visual design, and implementation can proceed with shared layout decisions before high-fidelity UI work.

Current state:
- Content block contracts and readiness states are already defined in prior specs and blueprint outputs.
- Some blocks are marked `Missing-input`; wireframes must handle these with clear fallback treatment.

Constraints:
- Wireframes must follow content order from detailed-page-content-blueprinting.
- Must be page-complete across all required sitemap pages.
- Must annotate readiness and fallback behavior to avoid false completeness.
- Must remain implementation-ready for APU section/component system.

Stakeholders:
- Product/content owner
- UX designer
- Frontend implementer
- Domain owners (Admissions, Academics, Research, International, Student Affairs)

## Goals / Non-Goals

**Goals:**
- Define wireframe structure for each required page from top to bottom.
- Preserve traceability from content block -> wireframe section.
- Standardize wireframe annotation for readiness, missing inputs, and fallback.
- Provide handoff package that can immediately drive design and build.

**Non-Goals:**
- No final visual styling/high-fidelity mockups.
- No content policy authoring beyond existing validated material.
- No runtime code changes.

## Decisions

1. **Page-by-page wireframe documents with common template**
   - Why: ensures consistency and fast review across 11 pages.
   - Alternative: one giant board; rejected due to review complexity.

2. **Wireframe section IDs mirror content block IDs**
   - Why: direct traceability and lower handoff ambiguity.
   - Alternative: new IDs; rejected due to mapping overhead.

3. **Readiness badges embedded per section**
   - Why: allows realistic scoping and identifies risky sections early.
   - Alternative: separate readiness report only; rejected due to context switching.

4. **Fallback-first treatment for unresolved blocks**
   - Why: design can continue safely without inventing data.
   - Alternative: block entire page; rejected because most pages are partially launchable.

5. **Dual viewport intent annotation (desktop/mobile)**
   - Why: prevents desktop-only wireframe assumptions.

## Risks / Trade-offs

- **[Risk] Wireframe detail drifts from source blueprint** → Mitigation: enforce section-ID mapping checklist.
- **[Risk] Missing-input sections misunderstood as final** → Mitigation: explicit placeholder style + notes.
- **[Risk] Over-documentation slows design iteration** → Mitigation: fixed lightweight template per section.

## Migration Plan

1. Extract page/block order from detailed blueprint spec and docs.
2. Draft wireframe for each required page with section IDs + annotations.
3. Annotate readiness/fallback and CTA positions.
4. Produce handoff index and cross-page consistency checks.

Rollback: if any wireframe deviates from validated content sequence, reset to blueprint order and re-annotate.

## Open Questions

- Preferred delivery format: markdown ASCII wireframes only vs markdown + diagram asset links?
- Should leadership/team missing sections be shown collapsed by default or visible as placeholders?
