import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimizaciones de build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
        },
      },
    },
    // Compresión básica sin opciones avanzadas
    minify: 'terser',
    // Límite de chunk warnings
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5174,
  },
  // Optimización de assets
  assetsInclude: ['**/*.webp', '**/*.mp4'],
})
