import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://brunonra-dev.github.io/',
  base: '/',
  build: {
    format: 'file'
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  }
});
