import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/jlllopez-portfolio-v1/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  }
})
