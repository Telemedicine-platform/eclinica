import React from "react";
import "./banner.css";
import Celular from "../../assets/celular2.svg";

function Banner() {
  return (
    <div className="conteiner_banner">
      
      
      <div className="conteiner_titulos_banner">
        <h1 className="titulo_banner">Plataforma de Saúde <br />Digital</h1>
            <p className="subtitulo_banner">
            Conectamos pacientes, médicos e instituições de saúde com
            tecnologia simples e segura, por meio de Teleconsultas,
            Teleinterconsultas e Teletriagem
            </p>
      </div>

      <div className="celular_banner">
        <img src={Celular} alt="banner" className="celular" />
      </div>

    </div>
  );
}

export default Banner;
