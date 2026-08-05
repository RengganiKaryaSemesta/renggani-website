import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';
import icon from "astro-icon";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  ""
);

// Official Astro Vercel Integration Configuration
// https://docs.astro.build/en/guides/integrations-guide/vercel/
export default defineConfig({
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
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID || '4dg8jgb1',
      dataset: PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
    }),
  ],
});
