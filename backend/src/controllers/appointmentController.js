// Importa o modelo Appointment
const Appointment = require('../models/Appointment');

// Define o controlador de agendamentos
const appointmentController = {
  // Função para criar um novo agendamento
  createAppointment: (req, res) => {
    const { medicoId, data, hora, status = "pendente" } = req.body;
    const pacienteId = req.user.userId; // Obtém o ID do paciente autenticado

    Appointment.createAppointment(pacienteId, medicoId, data, hora, status, (err, results) => {
      if (err) {
        console.error("Erro ao criar agendamento:", err);
        return res.status(500).json({ message: "Erro ao criar agendamento" });
      }
      res.status(201).json({ message: "Agendamento criado com sucesso!", id: results.insertId });
    });
  },

  // Função para cancelar um agendamento
  cancelAppointment: (req, res) => {
    const { consultaId } = req.body;

    Appointment.cancelAppointment(consultaId, (err, results) => {
      if (err) {
        console.error('Erro ao cancelar agendamento:', err);
        return res.status(500).json({ message: 'Erro ao cancelar agendamento' });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Consulta não encontrada' });
      }
      res.status(200).json({ message: 'Consulta cancelada e removida com sucesso!' });
    });
  },

  // Função para concluir um agendamento
  completeAppointment: (req, res) => {
    // Extrai o ID da consulta do corpo da requisição
    const { consultaId } = req.body;

    // Chama a função completeAppointment do modelo Appointment
    Appointment.completeAppointment(consultaId, (err, results) => {
      if (err) {
        // Se houver um erro, loga o erro e retorna uma resposta de erro
        console.error('Erro ao concluir agendamento:', err);
        return res.status(500).json({ message: 'Erro ao concluir agendamento' });
      }
      // Se o agendamento for concluído com sucesso, retorna uma resposta de sucesso
      res.status(200).json({ message: 'Agendamento concluído com sucesso!' });
    });
  },

  // Função para atualizar o status de pagamento de uma consulta
  updatePaymentStatus: (req, res) => {
    const { appointmentId, status } = req.body;

    if (!appointmentId || !status) {
      return res.status(400).json({ message: "Dados inválidos. Verifique o ID da consulta e o status." });
    }

    Appointment.updatePaymentStatus(appointmentId, status, (err, results) => {
      if (err) {
        console.error("Erro ao atualizar status de pagamento:", err.message);
        if (err.message === "Consulta não encontrada.") {
          return res.status(404).json({ message: "Consulta não encontrada." });
        }
        return res.status(500).json({ message: "Erro ao atualizar status de pagamento." });
      }
      res.status(200).json({ message: "Status de pagamento atualizado com sucesso!" });
    });
  },

  // Função para obter agendamentos por usuário
  getAppointmentsByUser: (req, res) => {
    // Obtém o ID do usuário a partir do objeto de usuário autenticado
    const userId = req.user.userId;

    // Chama a função findAppointmentsByUserId do modelo Appointment
    Appointment.findAppointmentsByUserId(userId, (err, appointments) => {
      if (err) {
        // Se houver um erro, loga o erro e retorna uma resposta de erro
        console.error('Erro ao buscar agendamentos:', err);
        return res.status(500).json({ message: 'Erro ao buscar agendamentos' });
      }
      // Se os agendamentos forem encontrados com sucesso, retorna os agendamentos
      res.json(appointments);
    });
  },

  // Função para obter agendamentos por médico
  getAppointmentsByDoctor: (req, res) => {
    const doctorId = req.user.userId; // Obtém o ID do médico autenticado

    Appointment.findAppointmentsByDoctorId(doctorId, (err, appointments) => {
      if (err) {
        console.error('Erro ao buscar agendamentos do médico:', err);
        return res.status(500).json({ message: 'Erro ao buscar agendamentos' });
      }
      res.json(appointments);
    });
  }
};

// Exporta o controlador de agendamentos
module.exports = appointmentController;