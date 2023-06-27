import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    
  },
  // server: {
  //   proxy: {
  //     '/backApi': 'http://demo-api.now.sh',
  //     '/api': {
  //       target: 'http://demo-api.now.sh',
  //       changeOrigin: true,
  //       secure: false, 
  //     },
  //   },
  // },
  
})
