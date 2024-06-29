import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
  build: {
    outDir: 'public/dist', // Konfigurasi output direktori sesuai dengan Laravel
    manifest: true, // Generate manifest.json
    rollupOptions: {
      input: ['resources/js/app.js'],
    },
  },
});
