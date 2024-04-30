import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000, // Set the port to whatever port your server is running on
    host: '0.0.0.0', // This makes your development server accessible over the network
  },
})
