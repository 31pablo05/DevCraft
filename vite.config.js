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
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['lucide-react'],
        },
        // Optimizar nombres de archivos para mejor caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // CSS code splitting para no bloquear
    cssCodeSplit: true,
    // Compresión optimizada
    minify: 'terser',
    // Límite de chunk warnings
    chunkSizeWarningLimit: 1000,
    // Target moderno para mejor optimización
    target: 'es2015',
  },
  // Optimizar esbuild
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
  server: {
    port: 5174,
  },
  // Optimización de assets
  assetsInclude: ['**/*.webp', '**/*.mp4'],
})
