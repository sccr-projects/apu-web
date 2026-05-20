# Kimi Claw

A minimal Astro + Directus + PostgreSQL stack.

## Architecture

```
Astro (localhost:4321)  ← REST →  Directus (localhost:8055)  ← SQL →  PostgreSQL (localhost:5432)
```

- **Content (Pattern A):** Directus owns the `posts` table. Authors write in the Directus dashboard. Astro fetches via REST API.
- **Forms (Pattern B):** Astro API endpoint writes directly to PostgreSQL `submissions` table using Drizzle ORM.

## Prerequisites

- Docker & Docker Compose
- Node.js 20+

## Quick Start

### 1. Start Infrastructure

```bash
docker compose up -d
```

Verify:
- PostgreSQL: `docker exec -it kimi-claw-db psql -U directus -d kimi_claw -c "\dt"`
- Directus: open http://localhost:8055/admin (login: `admin@kimiclaw.local` / `admin12345`)

### 2. Configure Directus

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

### 3. Run Application

```bash
# Copy environment variables
cp .env.example .env

# Run migrations (requires PostgreSQL running)
npx drizzle-kit migrate

# Start dev server
npm run dev
```

Visit http://localhost:4321

### 4. Verify

- **Posts:** http://localhost:4321/blog — pulls from Directus
- **Form:** http://localhost:4321/form — writes to PostgreSQL directly
- **Database:** `docker exec -it kimi-claw-db psql -U directus -d kimi_claw -c "SELECT * FROM submissions;"`

## Project Structure

```
kimi-claw/
├── docker-compose.yml          # PostgreSQL + Directus
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
| `feat: add docker compose for local postgres and directus` | Infrastructure |
| `feat: initialize astro with tailwind` | Frontend framework |
| `feat: add layout and navigation` | Shared UI shell + routes |
| `feat: fetch and display posts from directus` | CMS integration |
| `feat: add form submission writing directly to postgresql` | Direct DB writes |
