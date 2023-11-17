import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // agregamos el BASE para el gh-pages
  base: '/EcommerceReact-Final'
})
