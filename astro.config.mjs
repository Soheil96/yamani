// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://soheil96.github.io/yamani',
  base: '/yamani/',
  integrations: [mdx()],
});