const express = require("express");
const authController = require("../controllers/authController");
const { validateRegister, validateLogin } = require("../middlewares/validateMiddleware");

const router = express.Router();

// Define a rota para registrar um novo usuário com validação
router.post("/register", validateRegister, authController.registerUser);

// Define a rota para fazer login de um usuário com validação
router.post("/login", validateLogin, authController.loginUser);

// Define a rota para atualizar um usuário (paciente ou médico)
router.put("/update", authController.updateUser);

// Define a rota para deletar um usuário (paciente ou médico)
router.delete("/delete", authController.deleteUser);

module.exports = router;