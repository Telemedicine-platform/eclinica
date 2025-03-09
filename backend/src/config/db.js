// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa o módulo mysql2, que permite a conexão com um banco de dados MySQL
const mysql = require("mysql2");

// Configuração de conexão usando as variáveis de ambiente carregadas pelo dotenv
const conexao = mysql.createConnection({
  host: process.env.DB_HOST,       // Endereço do servidor do banco de dados
  user: process.env.DB_USER,       // Nome de usuário para autenticação
  password: process.env.DB_PASSWORD, // Senha para autenticação
  database: process.env.DB_NAME,   // Nome do banco de dados a ser utilizado
  port: process.env.DB_PORT,       // Porta do servidor do banco de dados
});

// Teste de conexão ao banco de dados
conexao.connect(function (erro) {
  if (erro) {
    // Se houver um erro na conexão, exibe a mensagem de erro no console
    console.error('Erro ao conectar ao banco de dados:', erro.message);
    return;
  }
  // Se a conexão for bem-sucedida, exibe uma mensagem de sucesso no console
  console.log('Conexão efetuada com sucesso');
});

// Exporta a conexão para que possa ser utilizada em outros módulos
module.exports = conexao;