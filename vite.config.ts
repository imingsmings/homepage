import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 项目根目录
  root: './',
  // 开发或生产环境服务的公共基础路径
  base: '/',
  // 模式
  mode: 'development',
  // 静态资源文件夹
  publicDir: 'public',
  // vite缓存目录
  cacheDir: 'node_modules/.vite',
  resolve: {
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: 'music_[local]_[hash:base64:5]',
      hashPrefix: 'music'
    }
  },
  json: {
    namedExports: true,
    stringify: true
  },
  logLevel: 'info',
  clearScreen: false,
  envDir: 'env',
  envPrefix: 'MUSIC_',
  // 插件
  plugins: [react()],
  // 开发服务器
  server: {
    host: '0.0.0.0',
    port: 4000,
    strictPort: true,
    https: false,
    open: false,
    watch: {
      ignored: ['.git/', 'node_modules/', '.husky/']
    },
    // middlewareMode: 'html'
    origin: 'http://127.0.0.1:4000/',
    cors: true
    // force: true
  },
  // 打包配置
  build: {
    target: 'esnext',
    outDir: './dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: 'chrome61',
    sourcemap: true,
    rollupOptions: {
    },
    manifest: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500
  }
})
