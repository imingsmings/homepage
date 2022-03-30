import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 项目根目录
  root: './',
  // 开发或生产环境服务的公共基础路径
  base: '/',
  mode: 'production',
  resolve: {
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: 'imings_[local]_[hash:base64:5]',
      hashPrefix: 'imings'
    }
  },
  json: {
    namedExports: true,
    stringify: true
  },
  logLevel: 'info',
  clearScreen: false,
  envDir: 'env',
  envPrefix: 'IMINGS_',
  // 插件
  plugins: [react()],
  // 打包配置
  build: {
    target: 'esnext',
    outDir: './dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: 'chrome61',
    sourcemap: true,
    rollupOptions: {},
    manifest: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500
  }
})
