// Importa os módulos necessários
const bcrypt = require('bcrypt'); // Módulo para criptografar senhas
const jwt = require('jsonwebtoken'); // Módulo para gerar tokens JWT
const { JWT_SECRET } = require('../config/jwt'); // Importa a chave secreta do JWT
const User = require('../models/User'); // Importa o modelo User

// Define o controlador de autenticação
const authController = {
  // Função para registrar um novo usuário
  registerUser: (req, res) => {
    // Extrai os dados do corpo da requisição
    const { nome, email, senha, telefone, crm, estado, especialidadeId } = req.body;

    // Criptografa a senha usando bcrypt
    bcrypt.hash(senha, 10, (err, hash) => {
      if (err) {
        // Se houver um erro ao criptografar a senha, loga o erro e retorna uma resposta de erro
        console.error('Erro ao criptografar a senha:', err);
        return res.status(500).json({ message: 'Erro ao criptografar a senha' });
      }

      // Verifica se o usuário é um médico (se o CRM está presente)
      if (crm) {
        // Cria um novo médico usando o modelo User
        User.createDoctor(nome, email, telefone, crm, estado, especialidadeId, hash, (err, results) => {
          if (err) {
            // Se houver um erro ao criar o médico, loga o erro e retorna uma resposta de erro
            console.error('Erro ao criar o médico:', err);
            return res.status(500).json({ message: 'Erro ao criar o médico' });
          }
          // Se o médico for criado com sucesso, retorna uma resposta de sucesso
          res.status(201).json({ message: 'Médico criado com sucesso!' });
        });
      } else {
        // Cria um novo usuário (paciente) usando o modelo User
        User.createUser(nome, email, hash, (err, results) => {
          if (err) {
            // Se houver um erro ao criar o usuário, loga o erro e retorna uma resposta de erro
            console.error('Erro ao criar o usuário:', err);
            return res.status(500).json({ message: 'Erro ao criar o usuário' });
          }
          // Se o usuário for criado com sucesso, retorna uma resposta de sucesso
          res.status(201).json({ message: 'Usuário criado com sucesso!' });
        });
      }
    });
  },

  // Função para fazer login de um usuário
  loginUser: (req, res) => {
    // Extrai os dados do corpo da requisição
    const { email, senha } = req.body;

    // Procura o usuário pelo email
    User.findUserByEmail(email, (err, results) => {
      if (err || results.length === 0) {
        // Se o usuário não for encontrado, procura o médico pelo email
        User.findDoctorByEmail(email, (err, results) => {
          if (err || results.length === 0) {
            // Se o médico não for encontrado, retorna uma resposta de erro
            return res.status(401).json({ message: 'Usuário não encontrado' });
          }

          // Verifica a senha do médico
          const doctor = results[0];
          bcrypt.compare(senha, doctor.senha, (err, isMatch) => {
            if (!isMatch) {
              // Se a senha estiver incorreta, retorna uma resposta de erro
              return res.status(401).json({ message: 'Senha incorreta' });
            }

            // Gera um token JWT para o médico
            const token = jwt.sign({ userId: doctor.id, tipo: 'medico' }, JWT_SECRET, { expiresIn: '1h' });
            // Retorna o token e o tipo de usuário
            res.json({ token, tipo: 'medico' });
          });
        });
      } else {
        // Verifica a senha do usuário (paciente)
        const user = results[0];
        bcrypt.compare(senha, user.senha, (err, isMatch) => {
          if (!isMatch) {
            // Se a senha estiver incorreta, retorna uma resposta de erro
            return res.status(401).json({ message: 'Senha incorreta' });
          }

          // Gera um token JWT para o paciente
          const token = jwt.sign({ userId: user.id, tipo: 'paciente' }, JWT_SECRET, { expiresIn: '1h' });
          // Retorna o token e o tipo de usuário
          res.json({ token, tipo: 'paciente' });
        });
      }
    });
  },

  // Função para atualizar um usuário (paciente ou médico)
  updateUser: (req, res) => {
    const { id, nome, email, telefone, crm, estado, especialidadeId, senha, tipo } = req.body;

    bcrypt.hash(senha, 10, (err, hash) => {
      if (err) {
        console.error('Erro ao criptografar a senha:', err);
        return res.status(500).json({ message: 'Erro ao criptografar a senha' });
      }

      if (tipo === 'medico') {
        // Atualiza um médico
        User.updateDoctor(id, nome, email, telefone, crm, estado, especialidadeId, hash, (err, results) => {
          if (err) {
            console.error('Erro ao atualizar médico:', err);
            return res.status(500).json({ message: 'Erro ao atualizar médico' });
          }
          res.status(200).json({ message: 'Médico atualizado com sucesso!' });
        });
      } else {
        // Atualiza um paciente
        User.updateUser(id, nome, email, hash, (err, results) => {
          if (err) {
            console.error('Erro ao atualizar paciente:', err);
            return res.status(500).json({ message: 'Erro ao atualizar paciente' });
          }
          res.status(200).json({ message: 'Paciente atualizado com sucesso!' });
        });
      }
    });
  },

  // Função para deletar um usuário (paciente ou médico)
  deleteUser: (req, res) => {
    const { crm, id, tipo } = req.body;

    if (tipo === 'medico') {
      // Deleta um médico
      User.deleteDoctor(crm, (err, results) => {
        if (err) {
          console.error('Erro ao deletar médico:', err);
          return res.status(500).json({ message: 'Erro ao deletar médico' });
        }
        res.status(200).json({ message: 'Médico deletado com sucesso!' });
      });
    } else {
      // Deleta um paciente
      User.deleteUser(id, (err, results) => {
        if (err) {
          console.error('Erro ao deletar paciente:', err);
          return res.status(500).json({ message: 'Erro ao deletar paciente' });
        }
        res.status(200).json({ message: 'Paciente deletado com sucesso!' });
      });
    }
  }
};

// Exporta o controlador de autenticação
module.exports = authController;