import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://www.francescoarata.com',

  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Inter",
    cssVariable: "--font-inter",
  }],

});
