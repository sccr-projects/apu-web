# Admissions Nav Desktop Behavior Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the desktop Admissions nav label click navigate to `/admission` while keeping the Scholarship dropdown visible on hover.

**Architecture:** Add an `href` to the Admissions nav section and render it as an anchor trigger on desktop. Update the desktop JS so click/keyboard activation on link-triggers performs native navigation instead of toggling the dropdown. Hover behavior and mobile accordion stay unchanged.

**Tech Stack:** Astro, TypeScript, vanilla client JS, Tailwind CSS.

---

### Task 1: Add `href` to the Admissions nav section

**Files:**
- Modify: `src/components/NavigationAPU.astro:52-77`

- [ ] **Step 1: Add the admission href**

```astro
  {
    label: "Admissions",
    href: `${HOME_PATH}admission`,
    items: [
      {
        label: "Scholarship",
        href: `${HOME_PATH}admission`,
        description: "Beasiswa APU — jalur beasiswa akademik dan non-akademik.",
        kind: "route",
        children: [
          {
            label: "Academic",
            href: `${HOME_PATH}beasiswa-akademik`,
            description: "Beasiswa berbasis prestasi akademik.",
            kind: "route",
          },
          {
            label: "Non-Academic",
            href: `${HOME_PATH}beasiswa-non-akademik`,
            description: "Beasiswa berbasis prestasi non-akademik.",
            kind: "route",
          },
        ],
      },
    ],
  },
```

- [ ] **Step 2: Verify the type still matches**

`NavSection` already allows `href?: string`, so no type change is needed.

---

### Task 2: Render anchor trigger for sections with both `href` and `items`

**Files:**
- Modify: `src/components/NavigationAPU.astro:207-235`

- [ ] **Step 1: Replace the button-only trigger block**

```astro
              {section.items ? (
                <>
                  {section.href ? (
                    <a
                      href={section.href}
                      class="nav-trigger"
                      role="menuitem"
                      aria-expanded="false"
                      aria-haspopup="true"
                      data-nav-kind={section.kind}
                      data-section={section.section}
                      data-route-path={section.kind === "route" && section.href ? routePathFromHref(section.href) : undefined}
                    >
                      <span>{section.label}</span>
                      <svg
                        class="nav-chevron"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <button
                      type="button"
                      class="nav-trigger"
                      aria-expanded="false"
                      aria-haspopup="true"
                      data-nav-kind={section.kind}
                      data-section={section.section}
                      data-route-path={section.kind === "route" && section.href ? routePathFromHref(section.href) : undefined}
                    >
                      <span>{section.label}</span>
                      <svg
                        class="nav-chevron"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  <div class="nav-dropdown" role="menu">
```

- [ ] **Step 2: Confirm CSS covers anchor triggers**

The existing styles already group `.nav-link, .nav-trigger`, so the new anchor will inherit hover/focus-visible styles without changes.

---

### Task 3: Skip dropdown toggle for anchor triggers on desktop

**Files:**
- Modify: `src/components/NavigationAPU.astro:777-796`

- [ ] **Step 1: Update click handler**

```js
      trigger.addEventListener('click', (e) => {
        if (trigger instanceof HTMLAnchorElement) return;
        e.preventDefault();
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isExpanded));
        dropdown.setAttribute('data-open', String(!isExpanded));
      });
```

- [ ] **Step 2: Update keyboard handler**

```js
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (trigger instanceof HTMLAnchorElement) return;
          e.preventDefault();
          const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
          trigger.setAttribute('aria-expanded', String(!isExpanded));
          dropdown.setAttribute('data-open', String(!isExpanded));
        }
        if (e.key === 'Escape') {
          trigger.setAttribute('aria-expanded', 'false');
          dropdown.setAttribute('data-open', 'false');
          trigger.focus();
        }
      });
```

- [ ] **Step 3: Leave hover timers untouched**

The `mouseenter`/`mouseleave` listeners above this block continue to open/close the dropdown for both buttons and anchors.

---

### Task 4: Verify behavior and types

**Files:**
- Run: project root

- [ ] **Step 1: Run type check**

```bash
bunx --bun astro check
```

Expected: no errors in `NavigationAPU.astro`; previously existing unrelated errors may remain.

- [ ] **Step 2: Manual desktop check**

```bash
bun run dev:frontend
```

Open `http://localhost:4322` on a desktop viewport.

- Hover over Admissions → Scholarship dropdown appears.
- Click Admissions label → browser navigates to `/admission`.
- Right-click Admissions label → browser shows native link options.
- Hover into dropdown and click a child link → navigates to that child.

- [ ] **Step 3: Manual mobile check**

Open the same page on a mobile viewport.

- Tap Admissions in the mobile menu → accordion expands.
- Tap Scholarship → navigates to `/admission`.
- Tap other top-level items → behavior unchanged.

- [ ] **Step 4: Commit**

```bash
git add src/components/NavigationAPU.astro
git commit -m "feat: make desktop Admissions nav label link to /admission"
```
