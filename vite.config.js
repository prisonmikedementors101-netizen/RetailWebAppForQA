import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base for GitHub Pages hosting under a repository path
export default defineConfig({
  base: '/RetailWebAppForQA/',
  plugins: [react()],
})
