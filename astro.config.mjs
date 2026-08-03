import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
import icon from "astro-icon";

// Official Astro Vercel Integration Configuration
// https://docs.astro.build/en/guides/integrations-guide/vercel/
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), tailwind(), icon()]
});
