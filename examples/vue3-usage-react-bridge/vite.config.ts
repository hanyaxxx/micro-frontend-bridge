import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 1004,
    open: true,
    fs: {
      strict: false
    }
  },
  build: {
    outDir: path.resolve('../../dist/e4'),
    assetsDir: './',
    sourcemap: true
  }
})
