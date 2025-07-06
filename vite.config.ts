import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

// Use import.meta.env to access environment variables like:
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default defineConfig({
  plugins: [
    react(),
    // Only run TypeScript checking in development
    process.env.NODE_ENV === 'development'
      ? checker({ typescript: true })
      : undefined,
  ].filter(Boolean),
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    // Vercel-compatible output directory
    outDir: 'dist',

    // Continue building even with warnings
    rollupOptions: {
      onwarn: () => {},
    },

    // Clean output directory before build
    emptyOutDir: true,
  },
});
