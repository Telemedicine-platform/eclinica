const connection = require('../config/db'); // Importa a conexão com o banco de dados

// Função para obter o perfil do usuário
const getUserProfile = (userId, callback) => {
  const query = 'SELECT nome_completo, email, data_cadastro FROM usuario WHERE id = ?'; // Query SQL para buscar o perfil do usuário
  connection.query(query, [userId], (err, results) => {
    if (err) {
      return callback(err, null); // Retorna o erro se houver
    }
    if (results.length === 0) {
      return callback(null, null); // Retorna null se o usuário não for encontrado
    }
    return callback(null, results[0]); // Retorna o perfil do usuário
  });
};

module.exports = { getUserProfile }; // Exporta a função getUserProfile
