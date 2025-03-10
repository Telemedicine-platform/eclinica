// Importa o módulo jsonwebtoken para trabalhar com tokens JWT
const jwt = require("jsonwebtoken");

// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Define a chave secreta para assinar os tokens JWT, carregada das variáveis de ambiente
const JWT_SECRET = process.env.JWT_SECRET;

// Define o tempo de expiração dos tokens JWT, carregado das variáveis de ambiente ou definido como "1h" por padrão
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

// Função para gerar um token JWT
const generateToken = (payload) => {
  // Assina o token com o payload fornecido, usando a chave secreta e o tempo de expiração
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// Função para verificar um token JWT
const verifyToken = (token) => {
  try {
    // Verifica o token usando a chave secreta
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    // Retorna false se a verificação falhar
    return false;
  }
};

// Exporta as funções generateToken e verifyToken, e a constante JWT_SECRET para uso em outros módulos
module.exports = { generateToken, verifyToken, JWT_SECRET };
