const connection = require('../config/db');

// Função para criar um novo usuário
const createUser = (nome, email, senha, callback) => {
  const query = 'INSERT INTO pacientes (nome_completo, email, senha, created_at) VALUES (?, ?, ?, NOW())';
  connection.query(query, [nome, email, senha], callback);
};

// Função para criar um novo médico
const createDoctor = (nome, email, telefone, crm, estado, especialidadeId, senha, callback) => {
  const query = 'INSERT INTO medicos (nome_completo, email, telefone, crm_numero, crm_estado, especialidade_id, senha, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())';
  connection.query(query, [nome, email, telefone, crm, estado, especialidadeId, senha], callback);
};

// Função para buscar um usuário pelo email
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM pacientes WHERE email = ?';
  connection.query(query, [email], callback);
};

// Função para buscar um médico pelo email
const findDoctorByEmail = (email, callback) => {
  const query = 'SELECT * FROM medicos WHERE email = ?';
  connection.query(query, [email], callback);
};

// Função para buscar um usuário pelo ID
const findUserById = (userId, callback) => {
  const query = 'SELECT nome_completo, email, created_at FROM pacientes WHERE id = ?';
  connection.query(query, [userId], callback);
};

module.exports = { createUser, createDoctor, findUserByEmail, findDoctorByEmail, findUserById };
