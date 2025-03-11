const express = require('express'); // Importa o módulo express
const dotenv = require('dotenv'); // Importa o módulo dotenv para carregar variáveis de ambiente
const cors = require('cors'); // Importa o módulo cors para permitir requisições de diferentes origens
const authRoutes = require('./routes/authRoutes'); // Importa as rotas de autenticação
const userRoutes = require('./routes/userRoutes'); // Importa as rotas de usuário

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express(); // Cria uma nova aplicação Express

app.use(cors()); // Adiciona o middleware CORS para permitir requisições de diferentes origens
app.use(express.json()); // Adiciona o middleware para parsear JSON no corpo das requisições

const PORT = process.env.PORT || 3001; // Define a porta na qual o servidor irá rodar, usando a variável de ambiente PORT ou 3001 por padrão

// Define as rotas de autenticação
// Todas as requisições para /api/auth serão tratadas pelas rotas definidas em authRoutes
app.use('/api/auth', authRoutes);

// Define as rotas de usuário
// Todas as requisições para /api/user serão tratadas pelas rotas definidas em userRoutes
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); // Inicia o servidor e exibe uma mensagem no console indicando a porta na qual o servidor está rodando
});