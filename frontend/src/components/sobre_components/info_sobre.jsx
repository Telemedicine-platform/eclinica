import React from "react";
import "./info_sobre.css";
import Logo from "../../assets/eClinica.svg";

function Info_sobre() {
  return (
    <div className="conteiner_info_sobre">
      <img src={Logo} alt="clinica" className="icone_clinica" />
      <p className="paragrafo_info_sobre">
        A eClinica é uma inovadora empresa de telemedicina comprometida em
        transformar a maneira como as pessoas acessam cuidados de saúde. Fundada
        com a visão de oferecer serviços médicos de alta qualidade e de forma
        acessível, a eClinica combina tecnologia avançada com uma equipe de
        profissionais de saúde dedicados, garantindo que os pacientes recebam o
        melhor atendimento, independentemente de sua localização. Nosso objetivo
        é tornar o atendimento médico conveniente e eficiente. Com a eClinica,
        você pode agendar e participar de consultas médicas online, conversar
        com especialistas em diversas áreas da saúde, e obter receitas médicas
        eletrônicas diretamente pela nossa plataforma. Nossa interface segura e
        fácil de usar permite que você receba orientação de saúde personalizada
        sem precisar sair de casa. Na eClinica, a qualidade do atendimento é
        nossa prioridade. Nossa equipe de médicos altamente qualificados está
        dedicada ao seu bem-estar e comprometida em fornecer o melhor cuidado
        possível. Entendemos que a saúde é um bem precioso e que cada paciente
        merece um atendimento atencioso e eficaz. Estamos sempre em busca de
        novas maneiras de melhorar nossos serviços e tornar o atendimento médico
        mais acessível para todos. Acreditamos que a telemedicina é o futuro dos
        cuidados de saúde e estamos orgulhosos de estar na vanguarda dessa
        transformação. Na eClinica, cuidamos da sua saúde de maneira simples,
        rápida e segura, construindo juntos um futuro mais saudável e conectado.
      </p>
    </div>
  );
}

export default Info_sobre;
