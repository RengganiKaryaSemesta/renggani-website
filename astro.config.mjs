import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import icon from "astro-icon";

// Vercel Serverless deployment configuration for Astro 4
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind(), icon()],
  outDir: './dist'
});
