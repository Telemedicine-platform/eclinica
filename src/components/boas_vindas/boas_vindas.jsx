import React from "react";
import "./boas_vindas.css";

function Boas_vindas() {
  return (
    <div className="conteiner_boas_vindas">
      <h1 className="titulo_boas_vindas">
        Bem-vindo ao seu consultório <br /> Virtual
      </h1>
      <div className="conteiner_paragrafo_boas_vindas">
        <p className="paragrafo_boas_vindas">
          A Plataforma de Saúde Digital{" "}
          <strong className="strong_collor">eClínica</strong> é uma solução
          completa para a gestão da saúde à distância, oferecendo muito mais do
          que apenas consultas online. Nossa plataforma integra funcionalidades
          avançadas como <strong className="strong_collor">Telemedicina</strong>
          , <strong className="strong_collor">Agendamento Online</strong>,{" "}
          <strong className="strong_collor">Pagamento Digital</strong>, e muito
          mais. Tudo isso com a{" "}
          <strong className="strong_collor">praticidade</strong> e{" "}
          <strong className="strong_collor">segurança</strong> necessárias para
          conectar médicos, pacientes e instituições de saúde de forma{" "}
          <strong className="strong_collor">eficiente</strong> e{" "}
          <strong className="strong_collor">integrada</strong>.
        </p>
      </div>

      <div className="footer_boas_vindas">
        <h1>Conheça os recursos da Plataforma de Saúde Digital</h1>
      </div>
    </div>
  );
}
export default Boas_vindas;
