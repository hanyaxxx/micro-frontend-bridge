import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const glob = require('glob')

const vue3Entries = glob.sync(`${__dirname}/src/bridgeComponent/*.js`).reduce((entries, file) => {
  const name = path.basename(file, '.js')
  entries[name] = path.resolve(file)
  return entries
}, {})

export default defineConfig({
  plugins: [vue()],
  build: {
    watch: {},
    outDir: path.resolve(__dirname, '../../src/vue3bridgeComponent'),
    sourcemap: false,
    // emptyOutDir: true, // 使用 emptyOutDir 替代 clean
    lib: {
      entry: vue3Entries,
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      // external: ['vue'], // 排除 vue 不打包
      treeshake: false, // 禁用 tree shaking
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].[hash].js',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor' // 所有 node_modules 的依赖打包到 vendor
          }
        }
      }
    },
    minify: true
  }
})
