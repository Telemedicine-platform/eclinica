import React, { useState } from "react";
import "./estilização_paciente.css";
import Consultas_paciente from "../consultas_paciente/consultas_paciente";
import Menu_consulta_paciente from "../menu_esquerda_paciente/menu_esquerda_paciente";
import Configuracoes from "../../configuracoes/configuracoes";

function Estilização_paciente() {
  const [showForm, setShowForm] = useState(false);
  const [cancelMode, setCancelMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleCancelConsultation = () => {
    setCancelMode(true);
    setShowForm(false);
    setShowSettings(false);
  };

  const handleViewConsultations = () => {
    setCancelMode(false);
    setShowForm(false);
    setShowSettings(false);
  };

  const handleShowForm = () => {
    setCancelMode(false);
    setShowForm(true);
    setShowSettings(false);
  };

  const handleShowSettings = () => {
    setCancelMode(false);
    setShowForm(false);
    setShowSettings(true);
  };

  return (
    <div className="estilo_conteiner_paciente">
      <Menu_consulta_paciente
        onShowForm={handleShowForm}
        onCancelConsultation={handleCancelConsultation}
        onViewConsultations={handleViewConsultations}
        onShowSettings={handleShowSettings}
      />
      {showSettings ? (
        <Configuracoes />
      ) : (
        <Consultas_paciente showForm={showForm} cancelMode={cancelMode} />
      )}
    </div>
  );
}

export default Estilização_paciente;