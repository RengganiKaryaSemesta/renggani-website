import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
import icon from "astro-icon";

// Vercel Static Deployment Configuration (Fastest, Free CDN, Zero Cold Starts)
// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [react(), tailwind(), icon()],
  outDir: './dist'
});
