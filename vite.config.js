import { fileURLToPath, URL } from 'node:url'
import { setupBuild } from './build/index'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // github仓库名称
  plugins: [
    vue(),
  ],
  build: setupBuild(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
