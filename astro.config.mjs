import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://osamabg1999.github.io',
  base: '/site',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
