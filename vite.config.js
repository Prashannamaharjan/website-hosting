import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/website-hosting/", // 👈 repo name
  build: {
    rollupOptions: {
      // force GitHub Pages fallback
      output: {
        manualChunks: undefined,
      },
    },
  },
})
