import React, { useState } from "react";
import "./estilização_medico.css";
import Menu_medico from "../menu_esquerda/menu";
import ConfiguracoesMedico from "../configuracoes_medico/configuracoes_medico";

function Estilização_medico() {
  const [showSettings, setShowSettings] = useState(false);

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const handleHideSettings = () => {
    setShowSettings(false);
  };

  return (
    <div className="estilo_conteiner_medico">
      <Menu_medico onShowSettings={handleShowSettings} />
      {showSettings ? (
        <ConfiguracoesMedico onClose={handleHideSettings} />
      ) : (
        <div className="conteudo_dashboard_medico">
          {/* Adicione aqui o conteúdo padrão do dashboard do médico */}
          <h2>Bem-vindo ao Dashboard do Médico</h2>
        </div>
      )}
    </div>
  );
}

export default Estilização_medico;
