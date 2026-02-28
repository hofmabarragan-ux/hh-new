// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hofmanbarragan.com', // Sørg for at dette matcher dit live domæne
  integrations: [sitemap()],
});