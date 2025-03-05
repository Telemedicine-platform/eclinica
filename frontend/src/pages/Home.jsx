import React from "react";
import Header from "../components/header/header";
import Banner from "../components/home_components/banner/banner";
import Boas_vindas from "../components/home_components/boas_vindas/boas_vindas";
import Recursos from "../components/home_components/recursos_eClinica/recursos";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Boas_vindas />
      <Recursos />
      <Footer />
    </>
  );
}

export default Home;
