import React, { useState } from "react";
import PreviewIcon from "../../assets/preview.svg";
import NoPreviewIcon from "../../assets/noPreview.svg";
import "./cadastro_medico.css";

const states = [
  { value: "AC", label: "Acre (AC)" },
  { value: "AL", label: "Alagoas (AL)" },
  { value: "AP", label: "Amapá (AP)" },
  { value: "AM", label: "Amazonas (AM)" },
  { value: "BA", label: "Bahia (BA)" },
  { value: "CE", label: "Ceará (CE)" },
  { value: "DF", label: "Distrito Federal (DF)" },
  { value: "ES", label: "Espírito Santo (ES)" },
  { value: "GO", label: "Goiás (GO)" },
  { value: "MA", label: "Maranhão (MA)" },
  { value: "MT", label: "Mato Grosso (MT)" },
  { value: "MS", label: "Mato Grosso do Sul (MS)" },
  { value: "MG", label: "Minas Gerais (MG)" },
  { value: "PA", label: "Pará (PA)" },
  { value: "PB", label: "Paraíba (PB)" },
  { value: "PR", label: "Paraná (PR)" },
  { value: "PE", label: "Pernambuco (PE)" },
  { value: "PI", label: "Piauí (PI)" },
  { value: "RJ", label: "Rio de Janeiro (RJ)" },
  { value: "RN", label: "Rio Grande do Norte (RN)" },
  { value: "RS", label: "Rio Grande do Sul (RS)" },
  { value: "RO", label: "Rondônia (RO)" },
  { value: "RR", label: "Roraima (RR)" },
  { value: "SC", label: "Santa Catarina (SC)" },
  { value: "SP", label: "São Paulo (SP)" },
  { value: "SE", label: "Sergipe (SE)" },
  { value: "TO", label: "Tocantins (TO)" },
];

export default function Cadastro_medico_component() {
  const [showPasswordCadastro, setShowPasswordCadastro] = useState(false);
  const [selectedState, setSelectedState] = useState("Selecione um estado");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (state) => {
    setSelectedState(state.label);
    setIsOpen(false);
  };

  return (
    <div className="container_cadastro_medico">
      <div className="box_cadastro_medico">
        <div className="form_container_cadastro_medico">
          <form className="form_cadastro_medico">
            <h1 className="title_cadastro_medico">Formulário de Cadastro Médico</h1>
            <input
              type="text"
              placeholder="Nome Completo"
              className="input_cadastro_medico"
            />
            <input
              type="email"
              placeholder="Email"
              className="input_cadastro_medico"
            />
            <input
              type="tel"
              placeholder="Telefone (com DDD)"
              className="input_cadastro_medico"
            />
            <input
              type="text"
              placeholder="CRM"
              className="input_cadastro_medico"
            />
            <div
              className={`crm_state_container ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <label htmlFor="crmState" className="label_crm">
                Estado do CRM
              </label>
              <div className="dropdown_crm">
                <div className="dropdown_button">{selectedState}</div>
                {isOpen && (
                  <ul className="dropdown_list">
                    {states.map((state) => (
                      <li
                        key={state.value}
                        className="options_crm"
                        onClick={() => handleSelect(state)}
                      >
                        {state.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <input
              type="text"
              placeholder="Especialidade"
              className="input_cadastro_medico"
            />
            <div className="password_container_cadastro">
              <input
                type={showPasswordCadastro ? "text" : "password"}
                placeholder="Senha"
                className="input_cadastro_medico"
              />
              <button
                type="button"
                onClick={() => setShowPasswordCadastro(!showPasswordCadastro)}
                className="button_show_password"
              >
                <img
                  src={showPasswordCadastro ? PreviewIcon : NoPreviewIcon}
                  alt="Mostrar senha"
                  className="icon_preview"
                />
              </button>
            </div>
            <div className="password_container_cadastro">
              <input
                type={showPasswordCadastro ? "text" : "password"}
                placeholder="Confirme sua senha"
                className="input_cadastro_medico"
              />
              <button
                type="button"
                onClick={() => setShowPasswordCadastro(!showPasswordCadastro)}
                className="button_show_password"
              >
                <img
                  src={showPasswordCadastro ? PreviewIcon : NoPreviewIcon}
                  alt="Mostrar senha"
                  className="icon_preview"
                />
              </button>
            </div>
            <a href="/login" className="link_login_cadastro">
              Já tem conta?
            </a>

            <button type="button" className="button_login_cadastro">
              Criar conta
            </button>
          </form>
        </div>
        <div className="toggle_container_cadastro">
          <div className="toggle_cadastro">
            <div className="toggle_panel_cadastro">
              <h1 className="title_toggle_cadastro">
                Bem-vindo ao Cadastro de Médico!
              </h1>
              <div className="box_text_toggle_cadastro">
                <p className="text_toggle_cadastro">
                  Estamos felizes por tê-lo conosco. Para começar, basta
                  preencher os campos abaixo com suas informações profissionais
                  e de contato. Essas informações são essenciais para que
                  possamos garantir um atendimento médico de qualidade e seguro.
                </p>
                <p className="text_toggle_cadastro">Passos para completar seu cadastro:</p>
                <ol className="list_toggle_cadastro">
                  <li className="li_toggle_cadastro">Insira seus dados pessoais e profissionais.</li>
                  <li className="li_toggle_cadastro">Adicione suas credenciais e informações de contato.</li>
                  <li className="li_toggle_cadastro">Confirme e revise os dados antes de finalizar.</li>
                </ol>
                <p className="text_toggle_cadastro">
                  Após completar o cadastro, você poderá agendar consultas e
                  começar a oferecer seus serviços médicos por meio da nossa
                  plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
