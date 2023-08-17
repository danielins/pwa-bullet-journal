import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "icon-256x256.png"],
  manifest: {
    name: "Bullet Journal App",
    short_name: "Bullet Journal",
    description: "A PWA for maintaning a Bullet Journal",
    icons: [
        {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
        },
        {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
        },
        {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
        }
    ],
    theme_color: "#ca9fa7",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
