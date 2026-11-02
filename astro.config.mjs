import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  ""
);

// Official Astro Vercel Integration Configuration
// https://docs.astro.build/en/guides/integrations-guide/vercel/
export default defineConfig({
  site: 'https://rengganikaryasemesta.com',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'tap',
  },
  adapter: vercel(),
  image: {
    dangerouslyProcessSVG: true,
  },
  vite: {
    customLogger: {
      warn(msg, options) {
        if (typeof msg === 'string' && (msg.includes('deprecated') || msg.includes('esbuildOptions'))) return;
        console.warn(msg, options);
      },
      warnOnce(msg, options) {
        if (typeof msg === 'string' && (msg.includes('deprecated') || msg.includes('esbuildOptions'))) return;
        console.warn(msg, options);
      },
      error(msg, options) { console.error(msg, options); },
      info() {},
      clearScreen() {},
      hasErrorLogged() { return false; },
      hasWarned: false,
    },
  },
  integrations: [
    react(),
    tailwind(),
    icon(),
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/privacy-policy'),
      serialize(item) {
        const url = item.url;
        if (url === 'https://rengganikaryasemesta.com/' || url === 'https://rengganikaryasemesta.com') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          url.includes('/services') ||
          url.includes('/bukubatik') ||
          url.includes('/rksworkmate')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/blogs')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (url.includes('/about-us')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID || '4dg8jgb1',
      dataset: PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
    }),
  ],
});
