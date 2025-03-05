import React from "react";
import "./recursos.css";
import AgendamentoIcon from "../../../assets/agendamentoIcon.svg";
import FrequenciaIcon from "../../../assets/frequenciaIcon.svg";
import CifraoIcon from "../../../assets/cifraoIcon.svg";
import ListaIcon from "../../../assets/listaIcon.svg";
import DocIcon from "../../../assets/docIcon.svg";
import UploadIcon from "../../../assets/uploadIcon.svg";

function Recursos() {
  return (
    <section className="conteiner_recursos">
      <h1 className="titulo_recursos">Conheça os recursos da Plataforma de Saúde Digital
      </h1>
      <div className="container_cards_recursos">
        <div className="card_recursos">
          <span className="span_header_grupo">
            <img
              src={AgendamentoIcon}
              alt="agendamento ícone"
              className="icon_header_grupo"
            />
            <p className="title_header_grupo">Agendamento</p>
          </span>
          <p className="textos_recursos">
            O profissional disponibiliza os horários de atendimentos via
            Telemedicina e seu paciente pode marcar a própria consulta.
          </p>
        </div>
        <div className="card_recursos">
          <span className="span_header_grupo">
            <img
              src={FrequenciaIcon}
              alt="evolucao medica ícone"
              className="icon_header_grupo"
            />
            <p className="title_header_grupo">Evolução médica</p>
          </span>
          <p className="textos_recursos">
            Todo histórico do seu paciente fica salvo na Plataforma, independente
            do profissional que o atendeu.
          </p>
        </div>
        <div className="card_recursos">
          <span className="span_header_grupo">
            <img
              src={CifraoIcon}
              alt="pagamento online ícone"
              className="icon_header_grupo"
            />
            <p className="title_header_grupo">Pagamento online</p>
          </span>
          <p className="textos_recursos">
            A plataforma oferece pagamentos por PIX, garantindo agilidade e
            segurança no processo. Simplifique seu pagamento e aproveite a rapidez
            e eficiência do PIX!
          </p>
        </div>
        <div className="card_recursos">
          <span className="span_header_grupo">
            <img
              src={ListaIcon}
              alt="Pronto Atendimento ícone"
              className="icon_header_grupo"
            />
            <p className="title_header_grupo">Pronto Atendimento</p>
          </span>
          <p className="textos_recursos">
            Caso a instituição utilize a Telemedicina em Pronto Atendimento, os
            pacientes serão atendidos por ordem de acesso.
          </p>
        </div>
        <div className="card_recursos">
          <span className="span_header_grupo">
            <img
              src={DocIcon}
              alt="Prontuário Digital ícone"
              className="icon_header_grupo"
            />
            <p className="title_header_grupo">Prontuário Digital</p>
          </span>
          <p className="textos_recursos">
            Pacientes e médicos têm acesso às anotações feitas durante a consulta
            a qualquer momento via Internet. Além disso, as anotações são
            armazenadas com segurança, garantindo que todas as informações estão
            protegidas e acessíveis quando necessário.
          </p>
        </div>
        <div className="card_recursos">
          <span className="span_header_grupo">
            <img
              src={UploadIcon}
              alt="Upload de documentos ícone"
              className="icon_header_grupo"
            />
            <p className="title_header_grupo">Upload de Documentos</p>
          </span>
          <p className="textos_recursos">
            Durante a consulta, o paciente pode anexar ao sistema, laudos e exames
            anteriores para auxiliar o médico no diagnóstico.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Recursos;
