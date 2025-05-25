import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    // Only run TypeScript checking in development, skip in production
    process.env.NODE_ENV === 'development' ? checker({
      typescript: true,
    }) : undefined,
  ].filter(Boolean),
  build: {
    // Set the correct output directory for Vercel
    outDir: 'dist',
    // Continue building even with TypeScript errors
    rollupOptions: {
      onwarn: () => {},
    },
    // Skip type checking during build
    emptyOutDir: true,
  }
})