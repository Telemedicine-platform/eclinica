const connection = require('../config/db');

// Função para criar um novo agendamento
const createAppointment = (pacienteId, medicoId, dataHora, callback) => {
  const query = 'INSERT INTO consultas (paciente_id, medico_id, data_hora, status, created_at) VALUES (?, ?, ?, "agendada", ?, NOW())';
  connection.query(query, [pacienteId, medicoId, dataHora], callback);
};

// Função para buscar agendamentos por usuário
const findAppointmentsByUserId = (userId, callback) => {
  const query = 'SELECT * FROM consultas WHERE paciente_id = ? OR medico_id = ?';
  connection.query(query, [userId, userId], callback);
};

// Função para cancelar um agendamento
const cancelAppointment = (consultaId, callback) => {
  const query = 'UPDATE consultas SET status = "cancelada" WHERE id = ?';
  connection.query(query, [consultaId], callback);
};

// Função para concluir um agendamento
const completeAppointment = (consultaId, callback) => {
  const query = 'UPDATE consultas SET status = "concluída" WHERE id = ?';
  connection.query(query, [consultaId], callback);
};

module.exports = { createAppointment, findAppointmentsByUserId, cancelAppointment, completeAppointment };
