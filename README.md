# M Trading — Next.js (Vercel-ready)

## What you get
- Professional, responsive website using **Next.js App Router + JavaScript + Tailwind**
- Brand colors matched from your logo (navy + gold)
- Dynamic services:
  - `/services` list page
  - `/services/[slug]` dynamic details pages
- Contact form with a Vercel-ready API route (`/api/contact`) — easy to plug into Resend later

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this folder to GitHub
2. Import the repo in Vercel
3. Build command: `next build` (auto)
4. Output: auto

## Customize
- Update company contact info: `lib/site.ts`
- Update service content: `data/services.ts`
- Hero is gradient-based (no stock image needed).
- Replace logo: `public/logo.png`

## Environment
Set this in Vercel (recommended):
- `NEXT_PUBLIC_SITE_URL` = your domain (e.g. https://mtrading.com)

## Notes
- OpenGraph image is generated at `/opengraph-image` (no external image fetch).
- `twitter-image` route removed to avoid prerender issues on some deployments.
