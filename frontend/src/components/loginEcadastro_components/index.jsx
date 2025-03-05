import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginEcadastro.css";
import PreviewIcon from "../../assets/preview.svg";
import NoPreviewIcon from "../../assets/noPreview.svg";

export default function LoginECadastro() {
  const [isActive, setIsActive] = useState(false);
  const [showPasswordCadastro, setShowPasswordCadastro] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  return (
    <div className="container_login_cadastro">
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form className="form_login_cadastro">
            <h1 className="title_login_cadastro">Cadastre-se</h1>
            <input type="text" placeholder="Nome" className="input_login" />
            <input type="email" placeholder="Email" className="input_login" />
            <div className="password_container">
              <input
                type={showPasswordCadastro ? "text" : "password"}
                placeholder="Senha"
                className="input_login"
              />
              <button
                type="button"
                onClick={() => setShowPasswordCadastro(!showPasswordCadastro)}
                className="button_show_password"
              >
                <img src={showPasswordCadastro ? PreviewIcon : NoPreviewIcon} alt="Mostrar senha" className="icon_preview"/>
              </button>
            </div>
            <div className="password_container">
              <input
                type={showPasswordCadastro ? "text" : "password"}
                placeholder="Confirme sua senha"
                className="input_login"
              />
              <button
                type="button"
                onClick={() => setShowPasswordCadastro(!showPasswordCadastro)}
                className="button_show_password"
              >
                <img src={showPasswordCadastro ? PreviewIcon : NoPreviewIcon} alt="Mostrar senha" className="icon_preview"/>
              </button>
            </div>
            <a
              onClick={() => setIsActive(false)}
              className="link_login_cadastro"
            >
              Já tem conta?
            </a>

            <button type="button" className="button_login_cadastro">
              Criar conta
            </button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form className="form_login_cadastro">
            <h1 className="title_login_cadastro">Login</h1>

            <input type="email" placeholder="Email" className="input_login" />
            <div className="password_container">
              <input
                type={showPasswordLogin ? "text" : "password"}
                placeholder="Senha"
                className="input_login"
              />
              <button
                type="button"
                onClick={() => setShowPasswordLogin(!showPasswordLogin)}
                className="button_show_password"
              >
                <img src={showPasswordLogin ? PreviewIcon : NoPreviewIcon} alt="Mostrar senha" className="icon_preview"/>
              </button>
            </div>
            <Link to={"/recuperarSenha"} className="link_login_cadastro">
              Esqueceu sua senha?
            </Link>
            <button type="button" className="button_login_cadastro">
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
                onClick={() => setIsActive(false)}
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
                onClick={() => setIsActive(true)}
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
