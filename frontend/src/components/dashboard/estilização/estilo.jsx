import React from "react";
import "./estilo.css";
import Consultas from "../consultas/consultas";
import Menu_consulta from "../menu_esquerda/menu";

function Estilo() {
    return (
        <div className="estilo_conteiner">
            <Menu_consulta />
            <Consultas />
        </div>
    )    
}

export default Estilo;