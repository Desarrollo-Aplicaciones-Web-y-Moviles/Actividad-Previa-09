import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig as defineTestConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: defineTestConfig({
    environment: 'jsdom',
  })
})
