import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer = require('autoprefixer')

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '~': '/node_modules'
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  plugins: [react()]
})
