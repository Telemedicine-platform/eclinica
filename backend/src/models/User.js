const connection = require("../config/db");

// Função para criar um novo usuário
const createUser = (nome, email, senha, callback) => {
  const query =
    "INSERT INTO pacientes (nome_completo, email, senha, created_at) VALUES (?, ?, ?, NOW())";
  connection.query(query, [nome, email, senha], callback);
};

// Função para atualizar usuário
const updateUser = (id, nome, email, senha, callback) => {
  const query =
    "UPDATE pacientes SET nome_completo = ?, email = ?, senha = ? WHERE id = ?";
  connection.query(query, [nome, email, senha, id], callback);
};

// Função para deletar um usuário
const deleteUser = (id, callback) => {
  const query = "DELETE FROM pacientes WHERE id = ?";
  connection.query(query, [id], callback);
};

// Função para criar um novo médico
const createDoctor = (
  nome,
  email,
  telefone,
  crm,
  estado,
  especialidadeId,
  senha,
  callback
) => {
  const query =
    "INSERT INTO medicos (nome_completo, email, telefone, crm_numero, crm_estado, especialidade_id, senha, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";
  connection.query(
    query,
    [nome, email, telefone, crm, estado, especialidadeId, senha],
    callback
  );
};

// Função para Atualizar um médico
const updateDoctor = (
  id,
  nome,
  email,
  telefone,
  crm,
  estado,
  especialidadeId,
  senha,
  callback
) => {
  const query = `
    UPDATE medicos 
    SET nome_completo = ?, email = ?, telefone = ?, crm_numero = ?, crm_estado = ?, especialidade_id = ?, senha = ?
    WHERE id = ?
  `;
  connection.query(
    query,
    [nome, email, telefone, crm, estado, especialidadeId, senha, id],
    callback
  );
};

// Função para Deletar um médico
const deleteDoctor = (crm, callback) => {
  const query = "DELETE FROM medicos WHERE crm_numero = ?";
  connection.query(query, [crm], callback);
};

// Função para buscar um usuário pelo email
const findUserByEmail = (email, callback) => {
  const query = "SELECT * FROM pacientes WHERE email = ?";
  connection.query(query, [email], callback);
};

// Função para buscar um médico pelo email
const findDoctorByEmail = (email, callback) => {
  const query = "SELECT * FROM medicos WHERE email = ?";
  connection.query(query, [email], callback);
};

const findAllDoctors = (callback) => {
  const query = `
    SELECT 
      medicos.id, 
      medicos.nome_completo AS nome, 
      medicos.email, 
      medicos.telefone, 
      medicos.crm_numero AS crm, 
      medicos.crm_estado AS estado, 
      especialidades.nome AS especialidade
    FROM medicos
    JOIN especialidades ON medicos.especialidade_id = especialidades.id
  `;
  connection.query(query, callback);
};

// Função para buscar um usuário pelo ID
const findUserById = (userId, callback) => {
  const query =
    "SELECT nome_completo, email, created_at FROM pacientes WHERE id = ?";
  connection.query(query, [userId], callback);
};

const findAllEspecialidades = (callback) => {
  const query = "SELECT id, nome FROM especialidades";
  connection.query(query, callback);
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  findUserByEmail,
  findDoctorByEmail,
  findUserById,
  findAllDoctors,
  findAllEspecialidades,
};
