import React from "react";
import "./boas_vindas.css";

function Boas_vindas() {
  return (
    <div className="conteiner_boas_vindas">
      <h1 className="titulo_boas_vindas">
        Bem-vindo ao seu consultório virtual
      </h1>
      <div className="conteiner_paragrafo_boas_vindas">
        <p className="paragrafo_boas_vindas">
          A Plataforma de Saúde Digital
          <span className="strong_color"> eClínica</span> é uma solução completa
          para a gestão da saúde à distância, oferecendo muito mais do que
          apenas consultas online. Nossa plataforma integra funcionalidades
          avançadas, como <span className="strong_color">Telemedicina</span>,
          <span className="strong_color"> Agendamento Online</span>,
          <span className="strong_color"> Pagamento Digital</span> e muito mais.
          Tudo isso com a<span className="strong_color"> praticidade</span> e
          <span className="strong_color"> segurança</span> necessárias para
          conectar médicos, pacientes e instituições de saúde de forma
          <span className="strong_color"> eficiente</span> e
          <span className="strong_color"> integrada</span>.
        </p>
      </div>
    </div>
  );
}
export default Boas_vindas;
