import React from "react";
import Header from "../components/header/header";
import Header_login from "../components/header/header_login";
import Footer from "../components/footer/footer";
import Redefinir from "../components/loginEcadastro_components/redefinir_senha_components/redefinir";
import { isAuthenticated } from "../services/authService";

function Redefinir_senha() {
  const isAuth = isAuthenticated();

  return (
    <div>
      <>
        {isAuth ? <Header_login /> : <Header />}
        <Redefinir />
        <Footer />
      </>
    </div>
  );
}

export default Redefinir_senha;