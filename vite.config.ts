import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

export default defineConfig({
  plugins: [react()],
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
