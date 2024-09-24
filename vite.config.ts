import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'components-lib-test',
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
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
