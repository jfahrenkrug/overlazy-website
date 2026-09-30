// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://overlazy.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'pt-BR', 'fr', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});