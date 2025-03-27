import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../cards/index";
import "./pagamentos.css";

function Pagamento() {
  const { state } = useLocation(); // Obtém os dados da consulta da navegação
  const { medicoId, data, hora } = state || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const navigate = useNavigate();

  const [pixCode, setPixCode] = useState("");
  const [amount, setAmount] = useState("250"); // Valor padrão de 250

  // Função para gerar o código PIX
  const generatePix = (valor) => {
    const fakePixCode = `00020126330014BR.GOV.BCB.PIX0114+558199999999952040000530398654061.00${valor}5802BR5923eClínica LTDA6009SaoPaulo62070503***6304ABCD`;
    setPixCode(fakePixCode);
  };

  // Gera o QR Code automaticamente ao carregar o componente
  useEffect(() => {
    generatePix(amount);
  }, [amount]);

  useEffect(() => {
    if (error || successMessage) {
      setIsCardVisible(true);
      const timer = setTimeout(() => {
        setError("");
        setSuccessMessage("");
        setIsCardVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, successMessage]);

  const handleConfirmPayment = () => {
    if (!medicoId || !data || !hora) {
      setError("Dados da consulta estão incompletos.");
      return;
    }

    setLoading(true);
    setError("");

    // Atualiza o status para "confirmada" e cria o agendamento
    axios
      .post(
        "http://localhost:3001/api/appointments/create",
        { medicoId, data, hora, status: "confirmada" },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        setSuccessMessage("Pagamento confirmado e consulta agendada com sucesso!");
        setTimeout(() => navigate("/dashboard-paciente"), 3000);
      })
      .catch(() => setError("Erro ao confirmar pagamento e criar agendamento."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="conteiner_pagamento">
      {isCardVisible && error && (
        <Card type="error" message={error} subMessage="Tente novamente." />
      )}
      {isCardVisible && successMessage && (
        <Card
          type="success"
          message={successMessage}
          subMessage="Você será redirecionado."
        />
      )}
      <div className="container_pix">
        {pixCode && (
          <div className="box_pix">
            <div className="box_qrcode">
              <QRCodeCanvas
                value={pixCode}
                size={200}
                level="H"
                includeMargin
                renderAs="svg"
                bgColor="#dddcdc"
              />
              <p className="text_qrcode">
                Acesse seu APP de pagamentos e faça a leitura do QR Code ao lado
                para efetuar o pagamento.
              </p>
            </div>
            <div className="box_amount">
              <div className="box_pix_code">
                <h3 className="title_pix">Código Copia e Cola</h3>
                <textarea value={pixCode} readOnly className="input_pix" />
              </div>
            </div>
          </div>
        )}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="box_buttons">

      <button
        onClick={() => navigator.clipboard.writeText(pixCode)}
        className="botao_pix"
      >
        Copiar Código
      </button>
      <button
        onClick={handleConfirmPayment}
        disabled={loading}
        className="botao_confirmar"
      >
        Confirmar Pagamento
      </button>
      </div>
    </div>
  );
}

export default Pagamento;
