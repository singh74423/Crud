import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // relative paths for assets, fixes 404 on Vercel
  build: {
    chunkSizeWarningLimit: 2000, // optional: ignore >500 kB warning
  },
})
