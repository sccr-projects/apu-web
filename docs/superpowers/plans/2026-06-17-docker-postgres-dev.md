# Docker Postgres Dev Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `bun run dev` start the Docker Postgres/Directus stack, apply Drizzle migrations, and launch the Astro dev server in one command, without conflicting with the host Postgres on port `5432`.

**Architecture:** Remap the Docker Postgres host port to `5433`, add a Directus healthcheck so `docker compose up --wait` blocks until both services are ready, then chain migration and Astro startup in the `dev` script.

**Tech Stack:** Bun, Astro, Docker Compose, Drizzle Kit, PostgreSQL, Directus

---

### Task 1: Remap Postgres host port in Docker Compose

**Files:**
- Modify: `docker-compose.yml:10`

- [ ] **Step 1: Change port mapping**

  Replace:
  ```yaml
      ports:
        - "5432:5432"
  ```
  with:
  ```yaml
      ports:
        - "5433:5432"
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add docker-compose.yml
  git commit -m "chore(docker): remap postgres host port to 5433"
  ```

---

### Task 2: Add Directus healthcheck

**Files:**
- Modify: `docker-compose.yml:19-41`

- [ ] **Step 1: Add healthcheck to the directus service**

  Insert a `healthcheck` block into the `directus` service:
  ```yaml
    directus:
      image: directus/directus:11.17.4
      container_name: apu-directus
      ports:
        - "8055:8055"
      volumes:
        - directus_uploads:/directus/uploads
        - directus_extensions:/directus/extensions
      environment:
        KEY: local-key-change-in-production
        SECRET: local-secret-change-in-production
        ADMIN_EMAIL: admin@sccr.id
        ADMIN_PASSWORD: admin12345
        DB_CLIENT: pg
        DB_HOST: postgres
        DB_PORT: 5432
        DB_DATABASE: kimi_claw
        DB_USER: postgres
        DB_PASSWORD: postgres
        WEBSOCKETS_ENABLED: "true"
      depends_on:
        postgres:
          condition: service_healthy
      healthcheck:
        test: ["CMD-SHELL", "wget --spider -q http://localhost:8055/server/health || exit 1"]
        interval: 10s
        timeout: 5s
        retries: 12
        start_period: 20s
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add docker-compose.yml
  git commit -m "chore(docker): add directus healthcheck"
  ```

---

### Task 3: Update DATABASE_URL in environment templates

**Files:**
- Modify: `.env.example:2`
- Modify: `.env:2` (sensitive file — use `sed`)

- [ ] **Step 1: Update `.env.example`**

  Change:
  ```
  DATABASE_URL=postgres://postgres:postgres@localhost:5432/kimi_claw
  ```
  to:
  ```
  DATABASE_URL=postgres://postgres:postgres@localhost:5433/kimi_claw
  ```

- [ ] **Step 2: Update local `.env`**

  Run:
  ```bash
  sed -i 's|localhost:5432|localhost:5433|' .env
  grep DATABASE_URL .env
  ```

  Expected output contains:
  ```
  DATABASE_URL=postgres://postgres:postgres@localhost:5433/kimi_claw
  ```

- [ ] **Step 3: Commit**

  `.env` should **not** be committed. Only commit `.env.example`:
  ```bash
  git add .env.example
  git commit -m "chore(env): point example DATABASE_URL to docker postgres 5433"
  ```

---

### Task 4: Wire one-command dev script

**Files:**
- Modify: `package.json:12-19`

- [ ] **Step 1: Update scripts**

  Change the scripts block to:
  ```json
  "scripts": {
    "astro:dev": "bunx --bun astro dev --port 4322",
    "astro:build": "bunx --bun astro build",
    "astro:preview": "bunx --bun astro preview --port 4322",
    "docker:up": "docker compose up -d --wait",
    "docker:down": "docker compose down",
    "docker:logs": "docker compose logs -f",
    "db:migrate": "bunx drizzle-kit migrate",
    "build": "bun run astro:build",
    "build:frontend": "bunx --bun astro build --config astro.config.static.mjs",
    "preview": "bun run astro:preview",
    "dev": "bun run docker:up && bun run db:migrate && bun run astro:dev",
    "dev:frontend": "bun run astro:dev",
    "up": "bun run dev"
  },
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add package.json
  git commit -m "feat(dev): one-command dev with docker, migrate, astro"
  ```

---

### Task 5: Verify Docker stack starts and is healthy

**Files:**
- None (verification)

- [ ] **Step 1: Tear down any existing dev containers**

  ```bash
  bun run docker:down
  ```

- [ ] **Step 2: Start the stack**

  ```bash
  bun run docker:up
  ```

  Expected: command exits after both services are healthy.

- [ ] **Step 3: Check running services**

  ```bash
  docker compose ps
  ```

  Expected: `apu-postgres` and `apu-directus` show `healthy`.

- [ ] **Step 4: Check Postgres connectivity on host port 5433**

  ```bash
  pg_isready -h localhost -p 5433
  ```

  Expected:
  ```
  localhost:5433 - accepting connections
  ```

- [ ] **Step 5: Check Directus health endpoint**

  ```bash
  curl -sf http://localhost:8055/server/health
  ```

  Expected: HTTP 200 response.

- [ ] **Step 6: Commit verification notes (optional)**

  If changes were only verification, no commit needed.

---

### Task 6: Apply Drizzle migrations

**Files:**
- None (uses existing `drizzle/` migration files)

- [ ] **Step 1: Run migrations**

  ```bash
  bun run db:migrate
  ```

  Expected output includes `Done` or no pending migrations.

- [ ] **Step 2: Confirm submissions table exists**

  ```bash
  PGPASSWORD=postgres psql -h localhost -p 5433 -U postgres -d kimi_claw -c "\dt public.*"
  ```

  Expected: `submissions` table listed.

---

### Task 7: Test `bun run dev`

**Files:**
- None (verification)

- [ ] **Step 1: Start dev command with a timeout**

  ```bash
  timeout 30 bun run dev
  ```

  Expected output includes:
  - Docker compose starting
  - Drizzle migration completing
  - Astro dev server starting on port `4322`

- [ ] **Step 2: Verify Astro port is reachable**

  In another terminal (or after the timeout), with the stack still running:
  ```bash
  curl -sf http://localhost:4322 | head -n 5
  ```

  Expected: HTML response from Astro.

- [ ] **Step 3: Stop the stack**

  ```bash
  bun run docker:down
  ```

---

### Task 8: Final review and cleanup

**Files:**
- None

- [ ] **Step 1: Confirm git status is clean**

  ```bash
  git status
  ```

  Expected: only the committed changes from previous tasks; no untracked files.

- [ ] **Step 2: Summarize changes for the user**

  - Postgres now exposes host port `5433`
  - Directus waits for Postgres and has its own healthcheck
  - `bun run dev` starts Docker, migrates, and launches Astro
  - `bun run dev:frontend` remains available for frontend-only work

---

## Self-Review

- **Spec coverage:** Port remap, Directus healthcheck, migration, and one-command dev are all covered.
- **Placeholder scan:** No TBD/TODO; exact code/commands provided.
- **Type consistency:** Script names and environment variable names match existing codebase.
