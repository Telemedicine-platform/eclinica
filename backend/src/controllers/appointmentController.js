const Appointment = require('../models/Appointment');

const appointmentController = {
  createAppointment: (req, res) => {
    const { pacienteId, medicoId, data, hora } = req.body;

    Appointment.createAppointment(pacienteId, medicoId, data, hora, (err, results) => {
      if (err) {
        console.error('Erro ao criar agendamento:', err);
        return res.status(500).json({ message: 'Erro ao criar agendamento' });
      }
      res.status(201).json({ message: 'Agendamento criado com sucesso!' });
    });
  },

  cancelAppointment: (req, res) => {
    const { consultaId } = req.body;

    Appointment.cancelAppointment(consultaId, (err, results) => {
      if (err) {
        console.error('Erro ao cancelar agendamento:', err);
        return res.status(500).json({ message: 'Erro ao cancelar agendamento' });
      }
      res.status(200).json({ message: 'Agendamento cancelado com sucesso!' });
    });
  },

  completeAppointment: (req, res) => {
    const { consultaId } = req.body;

    Appointment.completeAppointment(consultaId, (err, results) => {
      if (err) {
        console.error('Erro ao concluir agendamento:', err);
        return res.status(500).json({ message: 'Erro ao concluir agendamento' });
      }
      res.status(200).json({ message: 'Agendamento concluído com sucesso!' });
    });
  },

  getAppointmentsByUser: (req, res) => {
    const userId = req.user.userId;

    Appointment.findAppointmentsByUserId(userId, (err, appointments) => {
      if (err) {
        console.error('Erro ao buscar agendamentos:', err);
        return res.status(500).json({ message: 'Erro ao buscar agendamentos' });
      }
      res.json(appointments);
    });
  }
};

module.exports = appointmentController;
