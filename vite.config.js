// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // pastikan output ke folder dist
  },
  publicDir: 'public', // folder public tetap di-copy
});