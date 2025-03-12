import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';

// dotenv.config();

// Função principal de configuração do Vite
export default defineConfig({
  plugins: [react()], // Adiciona o plugin do React
  server: {
    open: true, // Abre o navegador automaticamente
    port: 3000, // Define a porta do servidor
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});