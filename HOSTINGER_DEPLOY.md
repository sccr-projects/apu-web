# Deploy to Hostinger (Static Build)

This guide explains how to deploy the Astro frontend to Hostinger shared hosting using static generation.

## Quick Start

### 1. Set Environment Variables

Create a `.env` file with your **production** Directus URL:

```env
DIRECTUS_URL=https://your-directus-domain.com
```

Make sure Directus is publicly accessible and CORS is configured to allow your Hostinger domain.

### 2. Build for Hostinger

```bash
bun run build:hostinger
```

This creates a `dist/` folder with static HTML/CSS/JS files.

### 3. Upload to Hostinger

Upload the contents of the `dist/` folder to your Hostinger `public_html/` directory via:
- File Manager (drag & drop)
- FTP client (FileZilla, etc.)

### 4. Configure Formspree (Optional)

The contact form at `/form` uses Formspree for static hosting:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/pages/form.astro`
4. Rebuild and re-upload

## What's Different from Local Development?

| Feature | Local (SSR) | Hostinger (Static) |
|---------|-------------|-------------------|
| Output mode | `server` (Node.js) | `static` (HTML) |
| API routes | ✅ Works (`/api/submit`) | ❌ Not available |
| Form handling | PostgreSQL | Formspree (external) |
| Adapter | `@astrojs/node` | None |

## File Structure

```
apu-web/
├── astro.config.mjs           # Original SSR config (local dev)
├── astro.config.static.mjs    # Static config (Hostinger build)
├── package.json               # Contains build:hostinger script
└── src/
    └── pages/
        └── form.astro         # Updated for Formspree
```

## Troubleshooting

### Blog posts not showing
- Verify `DIRECTUS_URL` is correct and reachable
- Ensure posts have `status: 'published'` in Directus
- Check browser console for CORS errors

### Forms not working
- Replace `YOUR_FORM_ID` with actual Formspree ID
- Free tier: 50 submissions/month

### Styles not loading
- Ensure all `dist/` contents are uploaded, not just HTML files
- Check that `_astro/` folder is included
