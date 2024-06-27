import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the directory where built files will be outputted
    outDir: 'dist',
    // Set to true to generate source maps for easier debugging
    sourcemap: true,
    // Minify the outputted CSS and JavaScript files
    minify: 'terser',
    // Ensure that CSS files are emitted correctly
    cssCodeSplit: true,
  },
  server: {
    port: 8000, // Set the port to whatever port your server is running on
    host: '0.0.0.0', // This makes your development server accessible over the network
  },
});
