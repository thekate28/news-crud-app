import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/news-crud-app/',
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    }
  }
})