import React from "react";
import Header from "../components/header/header";
import Header_login from "../components/header/header_login";
import Banner from "../components/home_components/banner/banner";
import Boas_vindas from "../components/home_components/boas_vindas/boas_vindas";
import Recursos from "../components/home_components/recursos_eClinica/recursos";
import Footer from "../components/footer/footer";
import { isAuthenticated } from "../services/authService";

function Home() {
  const isAuth = isAuthenticated();

  return (
    <>
      {isAuth ? <Header_login /> : <Header />}
      <Banner />
      <Boas_vindas />
      <Recursos />
      <Footer />
    </>
  );
}

export default Home;
