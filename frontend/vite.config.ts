import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // proxy: {
    //   '/api': {
    //     target: 'http://backend:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '/api/v1')
    //   }
    // }
  }
});
