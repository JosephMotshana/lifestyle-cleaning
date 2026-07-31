import { defineConfig } from 'vite'
import react from '@vitejs.plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://lifestylecleaning.co.za',
      // Add any specific sub-routes/pages your app has here:
      dynamicRoutes: [
        '/',
        '/services',
        '/about',
        '/contact',
        '/quote'
      ]
    })
  ]
})