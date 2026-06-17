# One-Command Dev Setup with Docker Postgres

## Goal

`bun run dev` starts the full local stack — Postgres, Directus, migrations, and Astro — without conflicting with the system Postgres service installed on the host.

## Context

- The project already uses Docker Compose (`docker-compose.yml`) with a `postgres` service and a `directus` service.
- `package.json` already has a `dev` script that runs `docker:up` before `astro:dev`.
- The host also has a system Postgres running on port `5432`.
- Drizzle ORM and `drizzle-kit` are configured for migrations.

## Design

### 1. Port remap to avoid host conflict

- Change Postgres host port mapping from `5432:5432` to `5433:5432` in `docker-compose.yml`.
- Update `DATABASE_URL` in `.env` and `.env.example` to `postgres://postgres:postgres@localhost:5433/kimi_claw`.
- Internal Docker networking is unchanged: Directus still connects to `postgres:5432`.

### 2. Wait for service readiness

- Change `docker:up` script from `docker compose up -d` to `docker compose up -d --wait`.
- Add a `healthcheck` to the `directus` service in `docker-compose.yml` so `docker compose up --wait` blocks until both Postgres and Directus are healthy.

### 3. Run migrations before Astro

- Add a `db:migrate` script: `bunx drizzle-kit migrate`.
- Change `dev` to:
  ```json
  "dev": "bun run docker:up && bun run db:migrate && bun run astro:dev"
  ```

### 4. Preserve frontend-only workflow

- Keep `dev:frontend` as `bun run astro:dev` for cases when the Docker stack is already running.

## Error Handling

- If host port `5433` is already in use, `docker compose up` fails with a clear port-binding error.
- If migrations fail, the chain stops and Astro does not start.

## Files to Change

- `docker-compose.yml`
- `.env`
- `.env.example`
- `package.json`

## Out of Scope

- Modifying the system Postgres service.
- Production deployment or environment-specific secrets.
