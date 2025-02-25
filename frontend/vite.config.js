// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    historyApiFallback: true, 
    proxy: {
      '/api': {
        target: 'https://todo-webapp-51i9.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
