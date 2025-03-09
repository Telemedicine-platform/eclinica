const jwt = require("jsonwebtoken");
require("dotenv").config(); // Carrega as variáveis de ambiente do .env

const JWT_SECRET = process.env.JWT_SECRET || "chave-secreta-padrao"; // Usa um valor padrão caso não tenha um .env
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h"; // Tempo de expiração do token (1 hora por padrão)

/**
 * Gera um token JWT para autenticação do usuário
 * @param {Object} payload - Dados que serão incluídos no token (ex: { id: 1, role: 'user' })
 * @returns {String} Token JWT assinado
 */
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

/**
 * Verifica se um token JWT é válido
 * @param {String} token - Token JWT recebido no request
 * @returns {Object|Boolean} Retorna os dados do token se válido, ou false se inválido
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return false;
  }
};

module.exports = { generateToken, verifyToken };
