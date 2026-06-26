# Déploiement

## Cloudflare Pages

- Root directory: `apps/mobile`
- Build command: `npm install && npm run build`
- Build output: `dist`
- Variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_API_BASE_URL`

## Render

Le fichier `render.yaml` déclare le service API. Définir `CORS_ORIGINS` avec les domaines autorisés, séparés par des virgules:

```text
https://vai.pages.dev,https://vai.fr,http://localhost:5173
```

## Supabase

Exécuter `supabase/init.sql` dans le SQL editor Supabase. Activer Google et Apple dans Authentication > Providers, puis configurer les redirect URLs:

```text
http://localhost:5173/auth/callback
https://vai.pages.dev/auth/callback
```
