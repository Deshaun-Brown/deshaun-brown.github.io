import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://deshaun-brown.github.io/my-final-app',
  plugins: [react()],
}) 