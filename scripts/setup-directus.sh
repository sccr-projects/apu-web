#!/bin/bash
# Setup Directus collection and sample post via REST API
# Run after: docker compose up -d

set -e

BASE="http://localhost:8055"
EMAIL="admin@kimiclaw.local"
PASSWORD="admin12345"

echo "=== Authenticating with Directus ==="
AUTH=$(curl -s -X POST "$BASE/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}")
TOKEN=$(echo "$AUTH" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['access_token'])" 2>/dev/null || echo "")

if [ -z "$TOKEN" ]; then
  echo "Failed to authenticate. Is Directus running?"
  exit 1
fi

echo "=== Creating 'posts' collection ==="
curl -s -X POST "$BASE/collections" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "collection": "posts",
    "meta": { "icon": "article", "note": "Blog posts" },
    "schema": { "name": "posts" }
  }' | python3 -m json.tool

echo "=== Creating fields ==="
# id (auto-created) + title, slug, excerpt, content, published_date, status
FIELDS='[
  {"collection":"posts","field":"title","type":"string","meta":{"required":true,"interface":"input","options":{"trim":true}}},
  {"collection":"posts","field":"slug","type":"string","meta":{"required":true,"interface":"input","options":{"trim":true},"readonly":false},"schema":{"is_unique":true}},
  {"collection":"posts","field":"excerpt","type":"text","meta":{"interface":"input","options":{"trim":true}}},
  {"collection":"posts","field":"content","type":"text","meta":{"interface":"wysiwyg"}},
  {"collection":"posts","field":"published_date","type":"dateTime","meta":{"interface":"datetime"}},
  {"collection":"posts","field":"status","type":"string","meta":{"required":true,"interface":"select-dropdown","options":{"choices":[{"text":"Draft","value":"draft"},{"text":"Published","value":"published"}]}}}
]'

echo "$FIELDS" | python3 -c "
import sys, json
fields = json.load(sys.stdin)
for f in fields:
    import subprocess, json as j
    subprocess.run([
        'curl', '-s', '-X', 'POST', '$BASE/fields/posts',
        '-H', 'Authorization: Bearer $TOKEN',
        '-H', 'Content-Type: application/json',
        '-d', j.dumps(f)
    ])
    print(f\"Created field: {f['field']}\")
"

echo "=== Setting public read permissions for published posts ==="
curl -s -X POST "$BASE/permissions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "collection": "posts",
    "action": "read",
    "role": null,
    "permissions": { "_and": [{ "status": { "_eq": "published" } }] }
  }' | python3 -m json.tool

echo "=== Creating sample post ==="
curl -s -X POST "$BASE/items/posts" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Welcome to Kimi Claw",
    "slug": "welcome-to-kimi-claw",
    "excerpt": "Our first post from Directus.",
    "content": "<p>This is the inaugural post for the Kimi Claw project, built with Astro, Directus, and PostgreSQL.</p>",
    "published_date": "2026-05-20T00:00:00",
    "status": "published"
  }' | python3 -m json.tool

echo "=== Setup complete ==="
echo "Verify: curl http://localhost:8055/items/posts"
