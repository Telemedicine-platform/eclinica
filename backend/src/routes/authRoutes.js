const express = require("express"); // Importa o módulo express
const authController = require("../controllers/authController"); // Importa o controlador de autenticação

const router = express.Router(); // Cria um novo roteador do Express

// Define a rota para registrar um novo usuário
// Quando uma requisição POST é feita para /register, a função registerUser do authController é chamada
router.post("/register", authController.registerUser);

// Define a rota para fazer login de um usuário
// Quando uma requisição POST é feita para /login, a função loginUser do authController é chamada
router.post("/login", authController.loginUser);

module.exports = router; // Exporta o roteador para que possa ser utilizado em outros módulos