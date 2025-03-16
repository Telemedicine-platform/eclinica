import React from "react";
import Header from "../components/header/header";
import Header_login from "../components/header/header_login";
import Footer from "../components/footer/footer";
import Info_sobre from "../components/sobre_components/info_sobre";
import { isAuthenticated } from "../services/authService";

function Sobre() {
  const isAuth = isAuthenticated();

  return (
    <div>
      <>
        {isAuth ? <Header_login /> : <Header />}
        <Info_sobre />
        <Footer />
      </>
    </div>
  );
}

export default Sobre;