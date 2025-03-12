const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');
const User = require('../models/User');

const authController = {
  registerUser: (req, res) => {
    const { nome, email, senha, telefone, crm, estado, especialidadeId } = req.body;

    bcrypt.hash(senha, 10, (err, hash) => {
      if (err) {
        console.error('Erro ao criptografar a senha:', err);
        return res.status(500).json({ message: 'Erro ao criptografar a senha' });
      }

      if (crm) {
        User.createDoctor(nome, email, telefone, crm, estado, especialidadeId, hash, (err, results) => {
          if (err) {
            console.error('Erro ao criar o médico:', err);
            return res.status(500).json({ message: 'Erro ao criar o médico' });
          }
          res.status(201).json({ message: 'Médico criado com sucesso!' });
        });
      } else {
        User.createUser(nome, email, hash, (err, results) => {
          if (err) {
            console.error('Erro ao criar o usuário:', err);
            return res.status(500).json({ message: 'Erro ao criar o usuário' });
          }
          res.status(201).json({ message: 'Usuário criado com sucesso!' });
        });
      }
    });
  },

  loginUser: (req, res) => {
    const { email, senha } = req.body;

    User.findUserByEmail(email, (err, results) => {
      if (err || results.length === 0) {
        User.findDoctorByEmail(email, (err, results) => {
          if (err || results.length === 0) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
          }

          const doctor = results[0];
          bcrypt.compare(senha, doctor.senha, (err, isMatch) => {
            if (!isMatch) {
              return res.status(401).json({ message: 'Senha incorreta' });
            }

            const token = jwt.sign({ userId: doctor.id, tipo: 'medico' }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
          });
        });
      } else {
        const user = results[0];
        bcrypt.compare(senha, user.senha, (err, isMatch) => {
          if (!isMatch) {
            return res.status(401).json({ message: 'Senha incorreta' });
          }

          const token = jwt.sign({ userId: user.id, tipo: 'paciente' }, JWT_SECRET, { expiresIn: '1h' });
          res.json({ token });
        });
      }
    });
  }
};

module.exports = authController;