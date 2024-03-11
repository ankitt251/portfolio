import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ankit_portfolio/",
  build: {
    chunkSizeWarningLimit: 1000 // Set the chunk size warning limit to 1 MB (1000 kB)
  },
  
  plugins: [react()],
})
