const { body, validationResult } = require('express-validator'); // Importa funções do express-validator

// Middleware para validar o registro de um novo usuário
const validateRegister = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'), // Valida se o nome não está vazio
  body('email').isEmail().withMessage('Email inválido'), // Valida se o email é válido
  body('senha').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'), // Valida se a senha tem no mínimo 6 caracteres
  (req, res, next) => {
    const errors = validationResult(req); // Obtém os erros de validação
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Retorna os erros se houver
    }
    next(); // Chama o próximo middleware
  }
];

// Middleware para validar o login de um usuário
const validateLogin = [
  body('email').isEmail().withMessage('Email inválido'), // Valida se o email é válido
  body('senha').notEmpty().withMessage('Senha é obrigatória'), // Valida se a senha não está vazia
  (req, res, next) => {
    const errors = validationResult(req); // Obtém os erros de validação
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Retorna os erros se houver
    }
    next(); // Chama o próximo middleware
  }
];

module.exports = { validateRegister, validateLogin }; // Exporta os middlewares de validação