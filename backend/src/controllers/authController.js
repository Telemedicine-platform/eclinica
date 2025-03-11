const bcrypt = require('bcrypt'); // Importa o módulo bcrypt para criptografar senhas
const jwt = require('jsonwebtoken'); // Importa o módulo jsonwebtoken para trabalhar com tokens JWT
const { JWT_SECRET } = require('../config/jwt'); // Importa a chave secreta JWT do arquivo de configuração
const connection = require('../config/db'); // Importa a conexão com o banco de dados

const authController = {
  // Função para registrar um novo usuário
  registerUser: (req, res) => {
    const { nome, email, password } = req.body; // Obtém o nome, email e senha do corpo da requisição

    // Criptografa a senha
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error('Erro ao criptografar a senha:', err);
        return res.status(500).json({ message: 'Erro ao criptografar a senha' });
      }

      // Insere o usuário no banco de dados
      const query = 'INSERT INTO usuario (nome_completo, email, senha, data_cadastro) VALUES (?, ?, ?, NOW())';
      connection.query(query, [nome, email, hash], (err, results) => {
        if (err) {
          console.error('Erro ao criar o usuário:', err);
          return res.status(500).json({ message: 'Erro ao criar o usuário' });
        }
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
      });
    });
  },

  // Função para fazer login de um usuário
  loginUser: (req, res) => {
    const { email, password } = req.body; // Obtém o email e a senha do corpo da requisição

    const query = 'SELECT * FROM usuario WHERE email = ?'; // Query SQL para buscar o usuário pelo email
    connection.query(query, [email], (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }

      const user = results[0]; // Obtém o primeiro resultado da query (usuário encontrado)
      bcrypt.compare(password, user.senha, (err, isMatch) => { // Compara a senha fornecida com a senha armazenada
        if (!isMatch) {
          return res.status(401).json({ message: 'Senha incorreta' });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' }); // Gera um token JWT com o ID do usuário e uma expiração de 1 hora
        res.json({ token }); // Retorna o token JWT
      });
    });
  }
};

module.exports = authController; // Exporta o controlador de autenticação para que possa ser utilizado em outros módulos
