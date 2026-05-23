## Context

User requests a very detailed implementation plan for each required page, based on already gathered crawl evidence from `kmb.ac.id` and subdomains, with content-first ordering (top to bottom) before UI implementation. Previous change proved baseline coverage and gaps; this change deepens it into executable page content architecture that design can directly consume.

Current state:
- Source evidence exists for admissions, scholarships baseline, 7 academic programs, international office content, student systems links, and 4 research center entries.
- Several domains remain partial: leadership roster depth, service SOP/governance details, full contact matrix, policy-grade international operations.

Constraints:
- Plan must be content-first, not component-first; design maps come after content blocks are fixed.
- No fabricated KPI/performance claims.
- Public naming defaults to **APU Semarang** with legal/history exception handling.
- Must preserve evidence traceability per block so copy decisions are auditable.

Stakeholders:
- Web content strategist
- UI/UX designer
- Frontend implementer
- Admissions, Academics, Research/LPPM, International Office, Student Affairs, Leadership office

## Goals / Non-Goals

**Goals:**
- Produce per-page top-to-bottom blueprint with detailed block contract (purpose, required copy fields, data sources, CTA intent, fallback behavior).
- Give clear “launchable now vs requires input” flags per page block.
- Produce a standardized missing-content governance format with owner and unblock conditions.
- Provide canonical naming policy for migration text.

**Non-Goals:**
- No code/UI build.
- No legal policy authoring (only placeholder strategy where policy content absent).
- No data reconciliation beyond available evidence.

## Decisions

1. **Block-contract model per page**
   - Each page is decomposed into ordered blocks with mandatory fields.
   - Why: ensures design and implementation both target same content contract.
   - Alternative: freeform wireframe-first; rejected due to content drift risk.

2. **Evidence-backed block readiness states**
   - States: `Ready`, `Ready-with-caveat`, `Missing-input`.
   - Why: avoids hidden assumptions and prevents over-designing absent content.
   - Alternative: page-level only status; rejected because partial pages need mixed readiness.

3. **Parallel output lanes**
   - Lane A: page blueprint (what to publish now).
   - Lane B: missing-content register (what owners must provide).
   - Why: allows design progress while governance/data collection continues.

4. **Naming normalization with explicit exception classes**
   - Classes: marketing/public copy vs legal/history/provenance citations.
   - Why: avoids incorrect blanket replacement.

5. **P0/P1/P2 sequencing at block level**
   - Why: launch should not wait for late governance data on unrelated blocks.

## Risks / Trade-offs

- **[Risk] Crawl evidence goes stale** → Mitigation: include retrieval-date note and pre-build revalidation checkpoint.
- **[Risk] Teams treat placeholders as final** → Mitigation: mark all `Missing-input` blocks with owner + due condition.
- **[Risk] Naming policy inconsistently applied** → Mitigation: enforce checklist gate before copy freeze.
- **[Risk] Over-detailed plan increases execution overhead** → Mitigation: include concise block IDs and template fields for easy implementation mapping.

## Migration Plan

1. Reuse prior crawl evidence inventory as baseline.
2. Draft detailed page blueprints for all required sitemap pages (top-to-bottom).
3. Attach readiness state + source mapping per block.
4. Generate missing-content register with ownership and priority.
5. Publish final handoff doc for design-first implementation.

Rollback: if any section is over-specified without source support, downgrade to `Missing-input` and move details to backlog.

## Open Questions

- Should leadership page remain chairman-only at launch or show pending team slots?
- Which unit approves wording for SCCR relationship beyond “collaboration ecosystem”?
- Do we lock bilingual requirements (ID/EN) for all pages at launch, or phase per page?
