import React from "react";
import { Link } from "react-router-dom";  
import Header_login from "../components/header/header_login";
import Estilização_paciente from "../components/dashboard_paciente/estilização_paciente/estilização_paciente";


function Teste_paciente() {
    return (
        <div>
            <Header_login />
            <Estilização_paciente />
            
        </div>
    );
}

export default Teste_paciente;