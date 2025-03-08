import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Cadastro_medico_component from "../components/cadastro_component";

export default function Cadastro_Medico() {
    return (
        <div>
            <Header />
            <Cadastro_medico_component />
            <Footer />
        </div>
    );
}