import React from "react";
import Header_login from "../components/header/header_login";
import Estilização_paciente from "../components/dashboard_paciente/estilização_paciente/estilização_paciente";

function Dashboard_Paciente() {
  return (
    <div>
      <Header_login />
      <Estilização_paciente />
    </div>
  );
}

export default Dashboard_Paciente;