import React from "react";
import "./recursos.css";
import agendamento from "../../assets/agendamento.svg";
import evolucao_medica from "../../assets/evolucao_medica.svg";
import pagamento_online from "../../assets/pagamento_online.svg";
import pronto_atendimento from "../../assets/pronto_atendimento.svg";
import prontuario_digital from "../../assets/prontuario_digital.svg";
import upload_de_documentos from "../../assets/upload_de_documentos.svg";

function Recursos() {
  return (
    <div className="conteiner_logo_recursos">
      
      <div className="grupo_agendamento">
        <img src={agendamento} alt="agendamento" className="logo_agendamento" />
        <p className="textos_recursos">
          O profissional disponibiliza os horários de atendimentos via
          Telemedicina e seu paciente pode marcar a própria consulta.
        </p>
      </div>

      <div className="grupo_evolucao">
        <img
          src={evolucao_medica}
          alt="evolucao_medica"
          className="logo_evolucao_medica"
        />
        <p className="textos_recursos">
          Todo histórico do seu paciente fica salvo na Plataforma, independente
          do profissional que o atendeu.
        </p>
      </div>

      <div className="grupo_pagamento">
        <img
          src={pagamento_online}
          alt="pagamento_online"
          className="logo_pagamento_online"
        />
        <p className="textos_recursos">
          A plataforma oferece pagamentos por PIX, garantindo agilidade e
          segurança no processo. Simplifique seu pagamento e aproveite a rapidez
          e eficiência do PIX!
        </p>
      </div>

      <div className="grupo_atendimento">
        <img
          src={pronto_atendimento}
          alt="pronto_atendimento"
          className="logo_pronto_atendimento"
        />
        <p className="textos_recursos">
          Caso a instituição utilize a Telemedicina em Pronto Atendimento, os
          pacientes serão atendidos por ordem de acesso.
        </p>
      </div>

      <div className="grupo_prontuario">
        <img
          src={prontuario_digital}
          alt="prontuario_digital"
          className="logo_prontuario_digital"
        />
        <p className="textos_recursos">
          Pacientes e médicos têm acesso às anotações feitas durante a consulta
          a qualquer momento via Internet. Além disso, as anotações são
          armazenadas com segurança, garantindo que todas as informações estão
          protegidas e acessíveis quando necessário.
        </p>
      </div>

      <div className="grupo_upload">
        <img src={upload_de_documentos}
        alt="upload_de_documentos" className="logo_upload_de_documentos" />
        <p className="textos_recursos">
          Durante a consulta, o paciente pode anexar ao sistema, laudos e exames
          anteriores para auxiliar o médico no diagnóstico.
        </p>
      </div>

    </div>
  );
}

export default Recursos;
