const connection = require('../config/db');

// Função para criar um novo agendamento
const createAppointment = (pacienteId, medicoId, data, hora, status = "pendente", callback) => {
  const query = `
    INSERT INTO consultas (paciente_id, medico_id, data, hora, status, created_at) 
    VALUES (?, ?, ?, ?, ?, NOW())
  `;
  connection.query(query, [pacienteId, medicoId, data, hora, status], callback);
};

// Função para buscar agendamentos por usuário
const findAppointmentsByUserId = (userId, callback) => {
  const query = `
    SELECT 
      consultas.id, 
      DATE_FORMAT(consultas.data, '%d/%m/%Y') AS data, 
      TIME_FORMAT(consultas.hora, '%H:%i') AS hora, 
      consultas.status, 
      medicos.nome_completo AS medico, 
      especialidades.nome AS especialidade
    FROM consultas
    JOIN medicos ON consultas.medico_id = medicos.id
    JOIN especialidades ON medicos.especialidade_id = especialidades.id
    WHERE consultas.paciente_id = ?
  `;
  connection.query(query, [userId], callback);
};

// Função para buscar consultas agendadas de um médico específico
const findAppointmentsByDoctorId = (doctorId, callback) => {
  const query = `
    SELECT 
      consultas.id, 
      DATE_FORMAT(consultas.data, '%d/%m/%Y') AS data, 
      TIME_FORMAT(consultas.hora, '%H:%i') AS hora, 
      consultas.status, 
      pacientes.nome_completo AS paciente
    FROM consultas
    JOIN pacientes ON consultas.paciente_id = pacientes.id
    WHERE consultas.medico_id = ?
  `;
  connection.query(query, [doctorId], callback);
};

// Função para cancelar um agendamento
const cancelAppointment = (consultaId, callback) => {
  const query = 'DELETE FROM consultas WHERE id = ?';
  connection.query(query, [consultaId], callback);
};

// Função para concluir um agendamento
const completeAppointment = (consultaId, callback) => {
  const query = 'UPDATE consultas SET status = "concluída" WHERE id = ?';
  connection.query(query, [consultaId], callback);
};

// Função para atualizar o status de pagamento de uma consulta
const updatePaymentStatus = (appointmentId, status, callback) => {
  const query = `
    UPDATE consultas 
    SET status = ? 
    WHERE id = ?
  `;
  connection.query(query, [status, appointmentId], (err, results) => {
    if (err) {
      console.error("Erro ao atualizar status de pagamento:", err);
      return callback(err, null);
    }
    if (results.affectedRows === 0) {
      return callback(new Error("Consulta não encontrada."), null);
    }
    callback(null, results);
  });
};

module.exports = { createAppointment, findAppointmentsByUserId, findAppointmentsByDoctorId, cancelAppointment, completeAppointment, updatePaymentStatus };
