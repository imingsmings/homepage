import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as autoprefixer from 'autoprefixer';

export default defineConfig({
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [react()]
})
