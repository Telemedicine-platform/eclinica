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