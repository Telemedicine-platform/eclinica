import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginEcadastro.css";
import PreviewIcon from "../../assets/preview.svg";
import NoPreviewIcon from "../../assets/noPreview.svg";
import axios from "axios";

export default function LoginECadastro() {
  const [isActive, setIsActive] = useState(false);
  const [showPasswordCadastro, setShowPasswordCadastro] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleForm = (status) => {
    setIsActive(status);
    setErrorMessage("");
    setNome("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        nome: nome,
        email: email,
        password: password,
      });
      alert("Conta criada com sucesso");
      toggleForm(false);
    } catch (err) {
      alert("Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      localStorage.setItem("token", response.data.token);
      alert("Login realizado com sucesso!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Erro ao fazer login. Verifique seus dados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container_login_cadastro">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
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
