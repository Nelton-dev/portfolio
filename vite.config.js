import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative base so built assets load correctly when served from a subpath
  // (works for GitHub Pages under /portfolio/ and also local file previews).
  base: './',
})