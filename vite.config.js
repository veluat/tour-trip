import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './src',
  base: '/',
  publicDir: '../public',
  server: {
    open: true,
    port: 5173,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@js': path.resolve(__dirname, './src/js'),
      '@modules': path.resolve(__dirname, './src/js/modules'),
      '@scss': path.resolve(__dirname, './src/scss'),
    },
    extensions: ['.js', '.scss', '.svg']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@scss/abstracts/variables" as *;
        @use "@scss/abstracts/mixins" as *;
      `
      }
    }
  },
  optimizeDeps: {
    include: ['flatpickr'],
  },
})