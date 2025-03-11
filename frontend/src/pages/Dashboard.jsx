import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import Menu_consulta from "../components/dashboard/consultas/consultas";
import Consultas from "../components/dashboard/consultas/consultas";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, []);

  return (

    <div>
      <Menu_consulta />
      <Consultas />
    </div>

  );
};

export default Dashboard;
