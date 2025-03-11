const userService = require('../services/userService'); // Importa o serviço de usuário

const userController = {
  // Função para obter o perfil do usuário
  getUserProfile: (req, res) => {
    const userId = req.user.userId; // Obtém o ID do usuário da requisição

    userService.getUserProfile(userId, (err, userProfile) => {
      if (err) {
        console.error('Erro ao buscar perfil do usuário:', err);
        return res.status(500).json({ message: 'Erro ao buscar perfil do usuário' }); // Retorna erro se houver
      }

      if (!userProfile) {
        return res.status(404).json({ message: 'Usuário não encontrado' }); // Retorna erro se o usuário não for encontrado
      }

      res.json(userProfile); // Retorna o perfil do usuário
    });
  }
};

module.exports = userController; // Exporta o controlador de usuário