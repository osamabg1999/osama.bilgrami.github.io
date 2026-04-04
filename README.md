# site

Personal site (Astro + Tailwind). Content in `src/data/`. Static images live in **`public/images/`** (Astro copies them into the build).

```bash
npm install   # Node 20+
npm run dev   # open http://localhost:4321/site/
npm run build
```

GitHub Pages deploys from Actions on push to `main`. See `astro.config.mjs` for `site` and `base`.
