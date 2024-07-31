import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/chiharu0321.github.io/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        page2: './page2.html',
        page3: './page3.html',
        page4: './page4.html'
      }
    }
  }
})
