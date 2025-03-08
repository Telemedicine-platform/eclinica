import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Redefinir from "../components/loginEcadastro_components/redefinir_senha_components/redefinir";

function Redefinir_senha () {
    return (
        <div>
            <>
                <Header />
                <Redefinir />   
                <Footer /> 
            </>
        </div>
    );
}

export default Redefinir_senha;