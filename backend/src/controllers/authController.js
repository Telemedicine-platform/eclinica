// Importa os módulos necessários
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');
const connection = require('../config/db');

// Define o controlador de autenticação
const authController = {
  // Função para registrar um novo usuário
  registerUser: (req, res) => {
    const { email, password } = req.body; // Obtém o email e a senha do corpo da requisição
    bcrypt.hash(password, 10, (err, hash) => { // Criptografa a senha com um salt de 10 rounds
      if (err) {
        return res.status(500).json({ message: 'Erro ao criptografar a senha' }); // Retorna um erro se a criptografia falhar
      }

      const query = 'INSERT INTO users (email, password) VALUES (?, ?)'; // Query SQL para inserir um novo usuário
      connection.query(query, [email, hash], (err, results) => { // Executa a query com o email e a senha criptografada
        if (err) {
          return res.status(500).json({ message: 'Erro ao criar o usuário' }); // Retorna um erro se a inserção falhar
        }
        res.status(201).json({ message: 'Usuário criado com sucesso!' }); // Retorna uma mensagem de sucesso se o usuário for criado
      });
    });
  },

  // Função para fazer login de um usuário
  loginUser: (req, res) => {
    const { email, password } = req.body; // Obtém o email e a senha do corpo da requisição
    const query = 'SELECT * FROM users WHERE email = ?'; // Query SQL para buscar o usuário pelo email
    connection.query(query, [email], (err, results) => { // Executa a query com o email
      if (err || results.length === 0) {
        return res.status(401).json({ message: 'Usuário não encontrado' }); // Retorna um erro se o usuário não for encontrado
      }

      const user = results[0]; // Obtém o primeiro resultado da query (usuário encontrado)
      bcrypt.compare(password, user.password, (err, isMatch) => { // Compara a senha fornecida com a senha armazenada
        if (!isMatch) {
          return res.status(401).json({ message: 'Senha incorreta' }); // Retorna um erro se as senhas não coincidirem
        }

        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' }); // Gera um token JWT com o ID do usuário e uma expiração de 1 hora
        res.json({ token }); // Retorna o token JWT
      });
    });
  }
};

// Exporta o controlador de autenticação para que possa ser utilizado em outros módulos
module.exports = authController;
