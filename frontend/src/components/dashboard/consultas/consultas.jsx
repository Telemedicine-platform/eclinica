import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../cards/index";
import "./consultas.css";

function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [error, setError] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Usuário não autenticado.");
      setIsCardVisible(true);
      return;
    }

    axios
      .get("http://localhost:3001/api/appointments/doctor", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setConsultas(response.data))
      .catch(() => {
        setError("Erro ao buscar consultas.");
        setIsCardVisible(true);
      });
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
        setIsCardVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="conteiner_consultas">
      {isCardVisible && error && (
        <Card type="error" message={error} subMessage="Tente novamente." />
      )}
      <div className="conteiner_informacoes">
        <div className="conteiner_grafico">
          <table className="tabela_pacientes">
            <thead className="cabecalho_tabela">
              <tr className="linha_cabecalho">
                <th className="coluna_cabecalho">#</th>
                <th className="coluna_cabecalho">Data</th>
                <th className="coluna_cabecalho">Hora</th>
                <th className="coluna_cabecalho">Paciente</th>
                <th className="coluna_cabecalho">Status</th>
              </tr>
            </thead>
            <tbody className="corpo_tabela">
              {consultas.map((consulta, index) => (
                <tr key={consulta.id} className="linha_tabela">
                  <td className="coluna_tabela">{index + 1}</td>
                  <td className="coluna_tabela">{consulta.data}</td>
                  <td className="coluna_tabela">{consulta.hora}</td>
                  <td className="coluna_tabela">{consulta.paciente}</td>
                  <td className="coluna_tabela">
                    {consulta.status === "pendente" && (
                      <span style={{ color: "White" }}>Pendente</span>
                    )}
                    {consulta.status === "confirmada" && (
                      <span style={{ color: "White" }}>Confirmada</span>
                    )}
                    {consulta.status === "cancelada" && (
                      <span style={{ color: "White" }}>Cancelada</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Consultas;
