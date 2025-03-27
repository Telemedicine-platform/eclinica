import React, { useState, useEffect } from "react";
import "./configuracoes_medico.css";
import Card from "../cards/index";
import axios from "axios";

function ConfiguracoesMedico({ onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [crm, setCrm] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3001/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNome(response.data.nome_completo);
        setEmail(response.data.email);
        setTelefone(response.data.telefone);
        setCrm(response.data.crm_numero);
      } catch (err) {
        setErrorMessage("Erro ao carregar os dados do médico.");
        setIsCardVisible(true);
      }
    };

    fetchDoctorData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (senha !== confirmSenha) {
      setErrorMessage("As senhas não coincidem.");
      setIsCardVisible(true);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:3001/api/auth/update",
        { nome, telefone, crm, senha },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccessMessage("Dados atualizados com sucesso!");
      setIsCardVisible(true);
    } catch (err) {
      setErrorMessage("Erro ao atualizar os dados.");
      setIsCardVisible(true);
    }
  };

  return (
    <div className="container_configuracoes_medico">
      {isCardVisible && errorMessage && (
        <Card type="error" message={errorMessage} subMessage="Tente novamente." />
      )}
      {isCardVisible && successMessage && (
        <Card type="success" message={successMessage} subMessage="Operação concluída." />
      )}
      <form className="form_configuracoes_medico" onSubmit={handleUpdate}>
        <h2 className="title_configuracoes_medico">Configurações</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="input_configuracoes_medico"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          readOnly
          className="input_configuracoes_medico"
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="input_configuracoes_medico"
        />
        <input
          type="text"
          placeholder="CRM"
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
          className="input_configuracoes_medico"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input_configuracoes_medico"
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          className="input_configuracoes_medico"
        />
        <div className="buttons_configuracoes_medico">
          <button type="submit" className="button_configuracoes_medico">
            Atualizar
          </button>
          <button type="button" className="button_configuracoes_medico" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfiguracoesMedico;
