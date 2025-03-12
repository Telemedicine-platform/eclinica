import React, { useState } from "react";
import PreviewIcon from "../../assets/preview.svg";
import NoPreviewIcon from "../../assets/noPreview.svg";
import "./cadastro_medico.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

const especialidades = [
  { value: 1, label: "Teleconsulta Geral" },
  { value: 2, label: "Telepsiquiatria" },
  { value: 3, label: "Teledermatologia" },
  { value: 4, label: "Telecardiologia" },
  { value: 5, label: "Telepediatria" },
  { value: 6, label: "Teleradiologia" },
  { value: 7, label: "Teleoftalmologia" },
  { value: 8, label: "Teleortopedia" },
  { value: 9, label: "Teleendocrinologia" },
  { value: 10, label: "Teleneurologia" },
  { value: 11, label: "Teleoncologia" },
  { value: 12, label: "Telereabilitação" },
  { value: 13, label: "Teleodontologia" },
  { value: 14, label: "Telegeriatria" },
  { value: 15, label: "Teleinfectologia" }
];

export default function Cadastro_medico_component() {
  const [showPasswordCadastro, setShowPasswordCadastro] = useState(false);
  const [selectedState, setSelectedState] = useState("Selecione um estado");
  const [selectedEspecialidade, setSelectedEspecialidade] = useState({ value: "", label: "Selecione uma especialidade" });
  const [statesIsOpen, statesSetIsOpen] = useState(false);
  const [especialidadesIsOpen, especialidadesSetIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [crm, setCrm] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (state) => {
    setSelectedState(state.label);
    statesSetIsOpen(false);
  };

  const handleSelectEspecialidade = (especialidade) => {
    setSelectedEspecialidade(especialidade);
    especialidadesSetIsOpen(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (senha.length < 6) {
      setErrorMessage("Senha deve ter no mínimo 6 caracteres");
      return;
    }
    if (senha !== confirmSenha) {
      setErrorMessage("As senhas não coincidem");
      return;
    }
    if (!selectedEspecialidade.value) {
      setErrorMessage("Por favor, selecione uma especialidade");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        nome,
        email,
        telefone,
        crm,
        estado: selectedState,
        especialidadeId: selectedEspecialidade.value, // Enviar o ID da especialidade
        senha,
      });
      alert("Conta criada com sucesso");
      navigate("/login");
    } catch (err) {
      setErrorMessage("Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container_cadastro_medico">
      <div className="box_cadastro_medico">
        <div className="form_container_cadastro_medico">
          <form className="form_cadastro_medico" onSubmit={handleRegister}>
            <h1 className="title_cadastro_medico">Formulário de Cadastro Médico</h1>
            <input
              type="text"
              placeholder="Nome Completo"
              className="input_cadastro_medico"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input_cadastro_medico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Telefone (com DDD)"
              className="input_cadastro_medico"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Número do CRM"
              className="input_cadastro_medico"
              maxLength={20}
              value={crm}
              onChange={(e) => setCrm(e.target.value)}
            />
            <div
              className={`select_container ${statesIsOpen ? "open" : ""}`}
              onClick={() => statesSetIsOpen(!statesIsOpen)}
            >
              <label htmlFor="crmState" className="label_crm">
                Estado de emissão do CRM
              </label>
              <div className="dropdown_select">
                <div className="dropdown_button">{selectedState}</div>
                {statesIsOpen && (
                  <ul className="dropdown_list">
                    {states.map((state) => (
                      <li
                        key={state.value}
                        className="options_select"
                        onClick={() => handleSelect(state)}
                      >
                        {state.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div
              className={`select_container ${especialidadesIsOpen ? "open" : ""}`}
              onClick={() => especialidadesSetIsOpen(!especialidadesIsOpen)}
            >
              <div className="dropdown_select">
                <div className="dropdown_button_especialidade">{selectedEspecialidade.label}</div>
                {especialidadesIsOpen && (
                  <ul className="dropdown_list">
                    {especialidades.map((especialidade) => (
                      <li
                        key={especialidade.value}
                        className="options_select"
                        onClick={() => handleSelectEspecialidade(especialidade)}
                      >
                        {especialidade.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="password_container_cadastro">
              <input
                type={showPasswordCadastro ? "text" : "password"}
                placeholder="Senha"
                className="input_cadastro_medico"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
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

            {errorMessage && <p className="error_message">{errorMessage}</p>}

            <Link to="/login" className="link_login_cadastro">
              Já tem conta?
            </Link>

            <button type="submit" className="button_login_cadastro" disabled={loading}>
              {loading ? "Carregando..." : "Criar conta"}
            </button>
          </form>

        </div>
        <div className="toggle_container_cadastro">
          <div className="toggle_cadastro">
            <div className="toggle_panel_cadastro">
              <h1 className="title_toggle_cadastro">
                Bem-vindo ao Cadastro Médico!
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