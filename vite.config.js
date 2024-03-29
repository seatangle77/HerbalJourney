import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/HerbalJourney/', // github仓库名称
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
      // 配置多页面
      input: {
        index: './index.html',
        disease: './disease.html',
        herb: './herb.html',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
