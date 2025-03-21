import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./loginEcadastro.css";
import PreviewIcon from "../../assets/preview.svg";
import NoPreviewIcon from "../../assets/noPreview.svg";
import axios from "axios";
import Card from "../cards/index";

export default function LoginECadastro({ onLoginSuccess }) {
  const [isActive, setIsActive] = useState(false);
  const [showPasswordCadastro, setShowPasswordCadastro] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleForm = (status) => {
    setIsActive(status);
    setErrorMessage("");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmSenha("");
    setLoginEmail("");
    setLoginSenha("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (senha.length < 6) {
      setErrorMessage("Senha deve ter no mínimo 6 caracteres");
      setIsCardVisible(true);
      return;
    }
    if (senha !== confirmSenha) {
      setErrorMessage("As senhas não coincidem");
      setIsCardVisible(true);
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        nome: nome,
        email: email,
        senha: senha,
      });
      setSuccessMessage("Conta criada com sucesso");
      setIsCardVisible(true);
      setTimeout(() => {
        toggleForm(false);
      }, 3000);
    } catch (err) {
      setErrorMessage("Erro ao criar conta");
      setIsCardVisible(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errorMessage || successMessage) {
      setIsCardVisible(true);
      const timer = setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
        setIsCardVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, successMessage]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email: loginEmail,
          senha: loginSenha,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userType", response.data.tipo); // Armazena o tipo de usuário
      setSuccessMessage("Login realizado com sucesso!");
      setIsCardVisible(true);
      setTimeout(() => {
        onLoginSuccess();
      }, 3000);
    } catch (err) {
      setErrorMessage("Erro ao fazer login. Verifique seus dados.");
      setIsCardVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container_login_cadastro">
      {isCardVisible && errorMessage && (
        <Card
          type="error"
          message={errorMessage}
          subMessage="Tente novamente"
        />
      )}
      {isCardVisible && successMessage && (
        <Card
          type="success"
          message={successMessage}
          subMessage="Você será redirecionado"
        />
      )}
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form className="form_login_cadastro" onSubmit={handleRegister}>
            <h1 className="title_login_cadastro">Cadastre-se</h1>
            <input
              type="text"
              placeholder="Nome Completo"
              className="input_login"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input_login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password_container">
              <input
                type={showPasswordCadastro ? "text" : "password"}
                placeholder="Senha"
                className="input_login"
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
            <div className="password_container">
              <input
                type={showPasswordCadastro ? "text" : "password"}
                placeholder="Confirme sua senha"
                className="input_login"
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
            <a
              onClick={() => toggleForm(false)}
              className="link_login_cadastro"
            >
              Já tem conta?
            </a>
            <button
              type="submit"
              className="button_login_cadastro"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Criar conta"}
            </button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form className="form_login_cadastro" onSubmit={handleLogin}>
            <h1 className="title_login_cadastro">Login</h1>
            <input
              type="email"
              placeholder="Email"
              className="input_login"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <div className="password_container">
              <input
                type={showPasswordLogin ? "text" : "password"}
                placeholder="Senha"
                className="input_login"
                value={loginSenha}
                onChange={(e) => setLoginSenha(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                className="button_show_password"
              >
                <img
                  src={showPasswordLogin ? PreviewIcon : NoPreviewIcon}
                  alt="Mostrar senha"
                  className="icon_preview"
                />
              </button>
            </div>
            <Link to={"/recuperarSenha"} className="link_login_cadastro">
              Esqueceu sua senha?
            </Link>
            <button type="submit" className="button_login_cadastro">
              Entrar
            </button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className="title_toggle_login_cadastro">
                Seja bem vindo(a) de volta!
              </h1>
              <p className="text_toggle_login_cadastro">
                Insira seus dados pessoais para usar todos os recursos do site
              </p>
              <button
                className="hidden button_toggle_login_cadastro"
                id="login"
                type="button"
                onClick={() => toggleForm(false)}
              >
                Entrar na conta
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className="title_toggle_login_cadastro">
                Seja bem vindo(a)!
              </h1>
              <p className="text_toggle_login_cadastro">
                Cadastre-se com seus dados pessoais para usar todos os recursos
                do site
              </p>
              <button
                className="hidden button_toggle_login_cadastro"
                id="register"
                type="button"
                onClick={() => toggleForm(true)}
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}