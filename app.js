//impotando modulo express
const express = require('express');

//Importando modulo mysql2
const mysql = require('mysql2');

//Configuração de conexão
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ton040922$',
    database:'eclinica'
});

//teste de conexão 
conexao.connect(function(erro){
    if(erro) throw erro
    console.log('Conexão efetuada com sucesso');
})
//app
const app = express();

//Rota teste
app.get('/', function(req, res){
    res.write('Utilizando nodemon');
    res.end();
});

//Servidor
app.listen(8080);