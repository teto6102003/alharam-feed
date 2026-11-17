import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project sites need a repository-name prefix (for example,
// /alharam-feed-catalog/). Set VITE_BASE_PATH in the deployment workflow.
// For local development and custom domains, the default '/' is correct.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
});
