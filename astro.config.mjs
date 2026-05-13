import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mnichovice.invbuild.cz', // change once domain is decided
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  image: {
    // We'll add @astrojs/image or use built-in <Image> later when real photos arrive
  },
});
