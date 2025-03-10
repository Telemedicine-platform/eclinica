import React from "react";
import "./redefinir.css";

function Redefinir() {
  return (
    <div className="container_redefinir">
      <div className="box_redefinir">
        <div className="textos_redefinir">
          <h2 className="title_redefinir">Redefinir Senha</h2>

          <p className="text_redefinir">
            Preencha os dados abaixo para solicitar a recuperação de senha.
          </p>
          <input type="email" placeholder="Email" className="email_redefinir" />
          <button type="button" className="botao_redefinir">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Redefinir;
