import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    svgLoader(),
    vue()
  ],
  server: {
    port: 1_79_97,
    strictPort: true
  }
})