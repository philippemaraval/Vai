# Vai

WebApp mobile PWA pour cartographier et référencer des tiers-lieux, restaurants et bars à Marseille.

## Stack

- Frontend PWA et back-office: React, TypeScript, Vite, Leaflet, Supabase Auth, Cloudflare Pages.
- API backend: Node.js, Express, TypeScript, Render.
- Base de données: Supabase PostgreSQL avec PostGIS.

## Démarrage

```bash
npm install
cp apps/mobile/.env.example apps/mobile/.env.local
cp apps/api/.env.example apps/api/.env
npm run dev
```

API locale:

```bash
npm run dev:api
```

SQL d'initialisation: `supabase/init.sql`.
