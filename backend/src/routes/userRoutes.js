const express = require("express"); // Importa o módulo express
const userController = require("../controllers/userController"); // Importa o controlador de usuário
const authenticateToken = require("../middlewares/authMiddleware"); // Importa o middleware de autenticação

const router = express.Router(); // Cria um novo roteador

// Define uma rota protegida para obter informações do usuário
router.get("/profile", authenticateToken, userController.getUserProfile);
router.get("/doctors", authenticateToken, userController.getAllDoctors);
router.get("/especialidades", authenticateToken, userController.getAllEspecialidades);

module.exports = router; // Exporta o roteador
