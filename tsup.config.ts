import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.banner = {
      js: `/**
 * @your-org/design-system
 * A modern, accessible design system built with TypeScript, React, and CSS Modules
 * 
 * @license MIT
 * @copyright Your Organization
 */`,
    };
  },
  treeshake: true,
});
