import axios from "axios"; // Importa o módulo axios para fazer requisições HTTP

// Define a URL base da API de autenticação
const API_URL = import.meta.env.REACT_APP_API_URL; 

// Função para registrar um novo usuário
export const register = async (nome, email, senha) => {
  try {
    // Faz uma requisição POST para a rota /register com os dados do usuário
    const response = await axios.post(`${API_URL}/register`, { nome, email, senha });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    throw error.response.data; // Lança um erro com os dados da resposta de erro
  }
};

// Função para fazer login de um usuário
export const login = async (email, senha) => {
  try {
    // Faz uma requisição POST para a rota /login com os dados do usuário
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    return response.data; // Retorna os dados da resposta, incluindo o tipo de usuário
  } catch (error) {
    throw error.response.data; // Lança um erro com os dados da resposta de erro
  }
};

// Função para fazer logout do usuário
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userType");
  window.location.href = "/";
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  // Verifica se há um token armazenado no localStorage
  return localStorage.getItem("token") !== null;
};

// Função para redirecionar o usuário para o dashboard apropriado
export const redirectToDashboard = () => {
  const userType = localStorage.getItem("userType");
  if (userType === "medico") {
    window.location.href = "/dashboard";
  } else {
    window.location.href = "/dashboard-paciente";
  }
};