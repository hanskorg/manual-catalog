import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    // strategies: 'injectManifest',
    devOptions: {
      enabled: true,
    },
    // injectManifest: {
    //   injectionPoint: undefined
    // },
    workbox: {
      navigateFallbackDenylist: [/^\/rust-reference/,/^\/rust-book/,/^\/rust-nomicon/]
    },
    // srcDir: 'src',
    // filename: 'my-sw.js',
    manifest: {
      name: 'Manual',
      short_name: 'Manual',
      description: 'Manuals for Rust',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'book.svg',
          sizes: '192x192',
          type: 'image/svg+xml'
        },
        {
          src: 'book.svg',
          sizes: '180x180',
          type: 'image/svg+xml'
        },
        {
          src: 'book.svg',
          sizes: '512x512',
          type: 'image/svg+xml'
        }
      ]
    }
  })],
})
