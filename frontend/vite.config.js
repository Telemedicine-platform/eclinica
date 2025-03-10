import { defineConfig } from 'vite'; // Importa a função defineConfig do Vite
import react from '@vitejs/plugin-react'; // Importa o plugin React para Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Adiciona o plugin React à configuração do Vite
  server: {
    open: true, // Abre o navegador automaticamente quando o servidor é iniciado
    port: 3000, // Define a porta na qual o servidor de desenvolvimento irá rodar
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Define o alvo do proxy para redirecionar as requisições para o backend
        changeOrigin: true, // Altera a origem da requisição para corresponder ao alvo
        secure: false, // Desativa a verificação de certificados SSL
        rewrite: (path) => path.replace(/^\/api/, '') // Reescreve o caminho da requisição, removendo o prefixo /api
      }
    }
  }
});