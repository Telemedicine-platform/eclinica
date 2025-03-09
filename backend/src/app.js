// Importa o módulo express, que é um framework para construir aplicações web em Node.js
const express = require('express');

// Importa o módulo dotenv, que carrega variáveis de ambiente de um arquivo .env para process.env
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Cria uma instância do aplicativo express
const app = express();

// Define a porta em que o servidor irá escutar, usando a variável de ambiente PORT ou 3001 como padrão
const PORT = process.env.PORT;

// Inicia o servidor e faz com que ele escute na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando`);
});
