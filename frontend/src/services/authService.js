import axios from "axios"; // Importa o módulo axios para fazer requisições HTTP

const API_URL = "http://localhost:3001/api/auth"; // Define a URL base da API de autenticação

// Função para registrar um novo usuário
export const register = async (name, email, password) => {
  try {
    // Faz uma requisição POST para a rota /register com os dados do usuário
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    throw error.response.data; // Lança um erro com os dados da resposta de erro
  }
};

// Função para fazer login de um usuário
export const login = async (email, password) => {
  try {
    // Faz uma requisição POST para a rota /login com os dados do usuário
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    throw error.response.data; // Lança um erro com os dados da resposta de erro
  }
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  // Verifica se há um token armazenado no localStorage
  return localStorage.getItem("token") !== null;
};