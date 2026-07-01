import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://devtoolkit.pages.dev',
  integrations: [sitemap()],
  output: 'static',
});
