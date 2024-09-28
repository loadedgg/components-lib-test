import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import fs from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const distFiles = [
  {
    name: 'tailwind.config.js',
    src: 'tailwind.config.js',
  },
]

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'umd'],
      name: 'Components Lib Test',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    dts(
      { insertTypesEntry: true },
    ),
    {
      name: 'export-dist-files',
      writeBundle() {
        distFiles.forEach((file) => {
          const source = resolve(__dirname, file.name)
          const destination = resolve(__dirname, 'dist', file.src)
          fs.copyFileSync(source, destination)
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
