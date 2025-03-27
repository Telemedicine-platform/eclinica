const jwt = require('jsonwebtoken'); // Importa o módulo jsonwebtoken
const { JWT_SECRET } = require('../config/jwt'); // Importa a chave secreta JWT

// Middleware para autenticar o token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Obtém o cabeçalho de autorização
  const token = authHeader && authHeader.split(' ')[1]; // Obtém o token do cabeçalho
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' }); // Retorna erro se o token não for fornecido
  }

  jwt.verify(token, JWT_SECRET, (err, user) => { // Verifica o token
    if (err) {
      return res.status(403).json({ message: 'Token inválido ou expirado.' }); // Retorna erro se o token for inválido ou expirado
    }
    req.user = user; // Define o usuário na requisição
    next(); // Chama o próximo middleware
  });
};

module.exports = authenticateToken; // Exporta o middleware de autenticação