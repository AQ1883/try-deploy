import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // تأكد أن هذا هو المجلد الذي تستخدمه في gh-pages
  },
})
