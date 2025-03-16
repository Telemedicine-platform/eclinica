import React from "react";
import Header from "../components/header/header";
import Header_login from "../components/header/header_login";
import Footer from "../components/footer/footer";
import Cadastro_medico_component from "../components/cadastro_component";
import { isAuthenticated } from "../services/authService";

export default function Cadastro_Medico() {
  const isAuth = isAuthenticated();

  return (
    <div>
      {isAuth ? <Header_login /> : <Header />}
      <Cadastro_medico_component />
      <Footer />
    </div>
  );
}