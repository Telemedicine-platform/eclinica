import React from "react";
import "./menu.css";

function Menu_consulta() {
  return (
    <div className="menu_conteiner">
      <div className="box_menu">
        <h1 className="titulo_menu">Médico</h1>
        <p className="button_menu">Ver agendamento</p>
        <p className="button_menu">Adicionar consulta</p>
        <p className="button_menu">Cancelar consultas</p>
        <p className="button_menu">Configurações</p>
        <p className="button_menu">Acessar Suporte</p>
      </div>
    </div>
  );
}

export default Menu_consulta;
