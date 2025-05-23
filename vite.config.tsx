// Add proper MIME types for assets
export default defineConfig({
    plugins: [react()],
    build: {
      assetsInclude: ['**/*.woff', '**/*.woff2']
    },
    server: {
      headers: {
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin'
      },
      historyApiFallback: true, // Needed for SPA routing
    }
  });
