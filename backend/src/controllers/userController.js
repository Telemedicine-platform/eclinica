// Importa o modelo de usuário
const User = require('../models/User');

const userController = {
  // Função para obter o perfil do usuário
  getUserProfile: (req, res) => {
    // Obtém o ID do usuário da requisição (assumindo que o middleware de autenticação adiciona o usuário à requisição)
    const userId = req.user.userId;

    // Chama a função findUserById do modelo User para buscar o perfil do usuário pelo ID
    User.findUserById(userId, (err, userProfile) => {
      if (err) {
        // Se houver um erro ao buscar o perfil do usuário, loga o erro e retorna uma resposta de erro
        console.error('Erro ao buscar perfil do usuário:', err);
        return res.status(500).json({ message: 'Erro ao buscar perfil do usuário' });
      }

      if (!userProfile) {
        // Se o perfil do usuário não for encontrado, retorna uma resposta de erro
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      // Se o perfil do usuário for encontrado, retorna o perfil do usuário
      res.json(userProfile);
    });
  },
  getAllDoctors: (req, res) => {
    User.findAllDoctors((err, doctors) => {
      if (err) {
        console.error('Erro ao buscar médicos:', err);
        return res.status(500).json({ message: 'Erro ao buscar médicos' });
      }
      res.json(doctors);
    });
  },
  getAllEspecialidades: (req, res) => {
    User.findAllEspecialidades((err, especialidades) => {
      if (err) {
        console.error('Erro ao buscar especialidades:', err);
        return res.status(500).json({ message: 'Erro ao buscar especialidades' });
      }
      res.json(especialidades);
    });
  }
};

// Exporta o controlador de usuário
module.exports = userController;