import React from "react";
import "./estilização_paciente.css";
import Consultas_paciente from "../consultas_paciente/consultas_paciente";
import Menu_consulta_paciente from "../menu_esquerda_paciente/menu_esquerda_paciente";

function Estilização_paciente() {
    return (
        <div className="estilo_conteiner_paciente">
            <Menu_consulta_paciente />
            <Consultas_paciente />
        </div>
    )    
}

export default Estilização_paciente;