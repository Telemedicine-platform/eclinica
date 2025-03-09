//impotando modulo express
const express = require("express");
require('dotenv').config();

//Importando modulo mysql2
const mysql = require("mysql2");

//Configuração de conexão usando Dotenv
const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

//teste de conexão
conexao.connect(function (erro) {
  if (erro) throw erro;
  console.log("Conexão efetuada com sucesso");
});
//app
const app = express();

//Rota teste
app.get("/", function (req, res) {
  res.write("Utilizando nodemon");
  res.end();
});

//Servidor
app.listen(8080);
