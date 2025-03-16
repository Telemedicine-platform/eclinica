// Importa o modelo Appointment
const Appointment = require('../models/Appointment');

// Define o controlador de agendamentos
const appointmentController = {
  // Função para criar um novo agendamento
  createAppointment: (req, res) => {
    // Extrai os dados do corpo da requisição
    const { pacienteId, medicoId, data, hora } = req.body;

    // Chama a função createAppointment do modelo Appointment
    Appointment.createAppointment(pacienteId, medicoId, data, hora, (err, results) => {
      if (err) {
        // Se houver um erro, loga o erro e retorna uma resposta de erro
        console.error('Erro ao criar agendamento:', err);
        return res.status(500).json({ message: 'Erro ao criar agendamento' });
      }
      // Se o agendamento for criado com sucesso, retorna uma resposta de sucesso
      res.status(201).json({ message: 'Agendamento criado com sucesso!' });
    });
  },

  // Função para cancelar um agendamento
  cancelAppointment: (req, res) => {
    // Extrai o ID da consulta do corpo da requisição
    const { consultaId } = req.body;

    // Chama a função cancelAppointment do modelo Appointment
    Appointment.cancelAppointment(consultaId, (err, results) => {
      if (err) {
        // Se houver um erro, loga o erro e retorna uma resposta de erro
        console.error('Erro ao cancelar agendamento:', err);
        return res.status(500).json({ message: 'Erro ao cancelar agendamento' });
      }
      // Se o agendamento for cancelado com sucesso, retorna uma resposta de sucesso
      res.status(200).json({ message: 'Agendamento cancelado com sucesso!' });
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
  }
};

// Exporta o controlador de agendamentos
module.exports = appointmentController;