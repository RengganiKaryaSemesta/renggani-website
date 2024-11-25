import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// import node from '@astrojs/node';

import vercel from '@astrojs/vercel/serverless';

import icon from "astro-icon";
// // default
// // https://astro.build/config
// export default defineConfig({
//   integrations: [react(), tailwind(), icon()],
//   outDir:'./dist'
// });
// vercel
// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: 'server',
  adapter: vercel(),
  outDir:'./dist'
});
// vps
// export default defineConfig({
//   output: 'server',
//   integrations: [react(), tailwind(), icon()],
//   adapter: node({
//     mode: 'standalone',
//   }),
//   outDir:'./dist'
// });