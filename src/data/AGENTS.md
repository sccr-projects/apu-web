# DATA KNOWLEDGE BASE

## OVERVIEW
`src/data` is the content source of truth: typed exports consumed directly by sections.

## WHERE TO LOOK
| Task | Location | Notes |
|---|---|---|
| Program catalog | `programs.ts` | `Program` interface + 7 entries. |
| Admissions pathways | `pathways.ts` | `Pathway` and `Wave` interfaces. |
| Scholarships | `scholarships.ts` | Benefit + requirement arrays. |
| Document requirements | `requirements.ts` | Five-item checklist. |
| Shared links/contact | `contact.ts` | WhatsApp, website, scholarship, social links. |

## CONVENTIONS
- Keep explicit exported interfaces when file shape is reused by sections.
- Export plain constants; no fetch logic, no runtime transforms.
- Preserve Indonesian display copy unless request explicitly changes content language.
- Use absolute image paths in data (`/images/...`) to match current asset usage.

## ANTI-PATTERNS
- Do not move presentation logic into data files.
- Do not silently change ids; section markup may depend on them for keys, labels, or links.
- Do not introduce loosely typed objects when nearby files already use interfaces.

## NOTES
- `contact.ts` is cross-cutting; link changes affect hero, footer, scholarship, requirements, and contact sections.
- `programs.ts` and `pathways.ts` have the richest schema surface; update interfaces with data changes.
