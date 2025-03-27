import React from "react";
import "./menu_esquerda_paciente.css";

function Menu_consulta_paciente({ onShowForm, onCancelConsultation, onViewConsultations, onShowSettings }) {
  return (
    <div className="menu_conteiner_paciente">
      <div className="box_menu_paciente">
        <h1 className="titulo_menu_paciente">Paciente</h1>
        <p className="button_menu_paciente" onClick={onViewConsultations}>
          Ver Consultas
        </p>
        <p className="button_menu_paciente" onClick={() => onShowForm(true)}>
          Agendar Consulta
        </p>
        <p className="button_menu_paciente" onClick={onCancelConsultation}>
          Cancelar Consultas
        </p>
        <p className="button_menu_paciente" onClick={onShowSettings}>
          Configurações
        </p>
        <p className="button_menu_paciente">Acessar Suporte</p>
      </div>
    </div>
  );
}

export default Menu_consulta_paciente;