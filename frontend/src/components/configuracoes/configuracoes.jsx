import React, { useState, useEffect } from "react";
import "./configuracoes.css";
import Card from "../cards/index";
import axios from "axios";

function Configuracoes() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3001/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNome(response.data.nome_completo);
        setEmail(response.data.email);
      } catch (err) {
        setErrorMessage("Erro ao carregar os dados do usuário.");
        setIsCardVisible(true);
      }
    };

    fetchUserData();
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
        { nome, senha },
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
    <div className="container_configuracoes">
      {isCardVisible && errorMessage && (
        <Card type="error" message={errorMessage} subMessage="Tente novamente." />
      )}
      {isCardVisible && successMessage && (
        <Card type="success" message={successMessage} subMessage="Operação concluída." />
      )}
      <form className="form_configuracoes" onSubmit={handleUpdate}>
        <h2 className="title_configuracoes">Configurações</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="input_configuracoes"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          readOnly // Torna o campo de email somente leitura
          className="input_configuracoes"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input_configuracoes"
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          className="input_configuracoes"
        />
        <button type="submit" className="button_configuracoes">
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default Configuracoes;
