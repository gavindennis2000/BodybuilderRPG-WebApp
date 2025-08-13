import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173, // optional, your dev port
    proxy: {
      '^/weatherforecast': {
        target: 'https://localhost:7196', // only if you run a local ASP.NET backend
        secure: false,
      },
    },
  },
});
