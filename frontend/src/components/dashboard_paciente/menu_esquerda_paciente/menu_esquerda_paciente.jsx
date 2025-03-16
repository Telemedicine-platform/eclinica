import React from "react";
import "./menu_esquerda_paciente.css";


function Menu_consulta_paciente() {
    return (
        <div className="menu_conteiner_paciente">
      <div className="box_menu_paciente">
        <h1 className="titulo_menu_paciente">Paciente</h1>
        <p className="button_menu_paciente">Ver Consultas</p>
        <p className="button_menu_paciente">Agendar consulta</p>
        <p className="button_menu_paciente">Cancelar consultas</p>
        <p className="button_menu_paciente">Configurações</p>
        <p className="button_menu_paciente">Acessar Suporte</p>
      </div>
    </div>
    );
}

export default Menu_consulta_paciente;