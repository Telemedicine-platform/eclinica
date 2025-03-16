import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import Estilo from "../components/dashboard/estilização/estilo";
import Estilização_paciente from "../components/dashboard_paciente/estilização_paciente/estilização_paciente";
import Header_login from "../components/header/header_login";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    } else {
      const userType = localStorage.getItem("userType");
      if (userType === "medico") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard-paciente");
      }
    }
  }, [navigate]);

  return (
    <>
      <Header_login />
      {localStorage.getItem("userType") === "medico" ? <Estilo /> : <Estilização_paciente />}
    </>
  );
};

export default Dashboard;