import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio (CH12 LAB)/distribution/my-final-app/',
  plugins: [react()],
}) 