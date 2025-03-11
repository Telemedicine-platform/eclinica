const express = require("express"); // Importa o módulo express
const authController = require("../controllers/authController"); // Importa o controlador de autenticação
const { validateRegister, validateLogin } = require("../middlewares/validateMiddleware"); // Importa os middlewares de validação

const router = express.Router(); // Cria um novo roteador

// Define a rota para registrar um novo usuário com validação
router.post("/register", validateRegister, authController.registerUser);

// Define a rota para fazer login de um usuário com validação
router.post("/login", validateLogin, authController.loginUser);

module.exports = router; // Exporta o roteador