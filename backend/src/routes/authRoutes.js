const express = require("express");
const authController = require("../controllers/authController");
const { validateRegister, validateLogin } = require("../middlewares/validateMiddleware");

const router = express.Router();

// Define a rota para registrar um novo usuário com validação
router.post("/register", validateRegister, authController.registerUser);

// Define a rota para fazer login de um usuário com validação
router.post("/login", validateLogin, authController.loginUser);

module.exports = router;