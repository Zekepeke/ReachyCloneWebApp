import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/mjpeg': { target: 'http://192.168.4.38:8000', changeOrigin: true },
    },
  },
})