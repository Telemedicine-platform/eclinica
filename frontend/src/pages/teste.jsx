import React from "react";
import { Link } from "react-router-dom";  
import Menu_consulta from "../components/dashboard/menu_esquerda/menu";
import Header from "../components/header/header";
import Estilo from "../components/dashboard/estilização/estilo";
import Header_login from "../components/header/header_login";


function Teste() {
    return (
        <div>
            <Header_login />
            <Estilo />
            
        </div>
    );
}

export default Teste;