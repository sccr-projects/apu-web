# Kimi Claw

A minimal Astro + Directus + PostgreSQL stack.

## Architecture

```
Astro (localhost:4321)  ← REST →  Directus (localhost:8055)  ← SQL →  PostgreSQL (localhost:5432)
```

- **Content (Pattern A):** Directus owns the `posts` table. Authors write in the Directus dashboard. Astro fetches via REST API.
- **Forms (Pattern B):** Astro API endpoint writes directly to PostgreSQL `submissions` table using Drizzle ORM.

## Prerequisites

- PostgreSQL 15+ running locally on `localhost:5432`
- Node.js 20+

## Quick Start

### 1. Prepare Local PostgreSQL

Create the app database (one-time):

```bash
psql -U postgres -d postgres -c "CREATE DATABASE kimi_claw;"
```

If your `postgres` user password is not `postgres`, update `.env` accordingly.

### 2. Start Directus Locally

```bash
# copy env file first
cp .env.example .env

# one-time project init
npx directus bootstrap

# run directus server
npx directus start
```

If `bunx directus` works in your environment, you can use `bunx` instead of `npx`.

Verify:
- Directus: open http://localhost:8055/admin (login: `admin@kimiclaw.local` / `admin12345`)

### 3. Configure Directus

Run the automated setup script (requires `curl` and `python3`):

```bash
./scripts/setup-directus.sh
```

Or manually:
1. Go to http://localhost:8055/admin
2. Settings → Data Model → Create Collection: `posts`
3. Add fields: `title` (string), `slug` (string, unique), `excerpt` (text), `content` (WYSIWYG), `published_date` (datetime), `status` (dropdown: draft/published)
4. Settings → Roles & Permissions → Public → `posts` Read → filter `status` Equals `published`
5. Content → Posts → Create a post with status `published`

### 4. Run Application

```bash
# Run migrations (requires local PostgreSQL running)
bunx drizzle-kit migrate

# Start dev server
bun run dev
```

Visit http://localhost:4321

### 5. Verify

- **Posts:** http://localhost:4321/blog — pulls from Directus
- **Form:** http://localhost:4321/form — writes to PostgreSQL directly
- **Database:** `psql "postgres://postgres:postgres@localhost:5432/kimi_claw" -c "SELECT * FROM submissions;"`

## Project Structure

```
kimi-claw/
├── drizzle/                    # Migration files
├── scripts/
│   └── setup-directus.sh       # Automated Directus config
├── src/
│   ├── components/
│   │   └── Nav.astro
│   ├── db/
│   │   ├── index.ts            # Drizzle client
│   │   └── schema.ts           # submissions table
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── directus.ts         # Directus SDK client
│   └── pages/
│       ├── api/
│       │   └── submit.ts       # POST /api/submit
│       ├── blog/
│       │   ├── index.astro     # Post listing
│       │   └── [slug].astro    # Individual post
│       ├── form.astro          # Submission form
│       └── index.astro         # Home
├── astro.config.mjs
├── drizzle.config.ts
└── .env.example
```

## Commits

| Commit | Description |
|--------|-------------|
| `chore: initial repository setup` | README, repo init |
| `chore: run stack fully local` | Infrastructure |
| `feat: initialize astro with tailwind` | Frontend framework |
| `feat: add layout and navigation` | Shared UI shell + routes |
| `feat: fetch and display posts from directus` | CMS integration |
| `feat: add form submission writing directly to postgresql` | Direct DB writes |
