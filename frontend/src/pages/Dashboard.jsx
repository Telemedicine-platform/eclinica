import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import Menu_consulta from "../components/dashboard/consultas/consultas";
import Consultas from "../components/dashboard/consultas/consultas";

const Dashboard = () => {
  const navigate = useNavigate();

  // Hook de efeito para verificar a autenticação do usuário
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login"); // Redireciona para a página de login se não estiver autenticado
    }
  }, []);

  return (
    <div>
      <Menu_consulta /> {/* Componente do menu de consultas */}
      <Consultas /> {/* Componente de consultas */}
    </div>
  );
};

export default Dashboard;
