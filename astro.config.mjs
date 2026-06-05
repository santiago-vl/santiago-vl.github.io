import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://santiagovillaviciosa.dev',
  // The site is fully static: no client framework, no runtime JS beyond a few
  // progressively-enhanced scripts. Astro ships zero JS by default.
  build: {
    inlineStylesheets: 'auto',
  },
});
