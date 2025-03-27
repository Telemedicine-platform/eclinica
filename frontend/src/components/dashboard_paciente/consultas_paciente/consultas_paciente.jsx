import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../../cards/index";
import "./consultas_paciente.css";

function Consultas_paciente({ showForm, cancelMode }) {
  const [consultas, setConsultas] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [especialidades, setEspecialidades] = useState([]);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [dataConsulta, setDataConsulta] = useState("");
  const [horaConsulta, setHoraConsulta] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showForm) {
      setLoading(true);

      axios
        .get("http://localhost:3001/api/user/especialidades", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          const especialidadesData = response.data;
          setEspecialidades(especialidadesData);

          return axios.get("http://localhost:3001/api/user/doctors", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });
        })
        .then((response) => {
          const medicosComEspecialidade = response.data.map((medico) => {
            const especialidade = especialidades.find(
              (esp) => esp.id === medico.especialidade_id
            );
            return { ...medico, especialidade: especialidade?.nome || "N/A" };
          });
          setMedicos(medicosComEspecialidade);
        })
        .catch(() => {
          setError("Erro ao carregar dados");
          setIsCardVisible(true);
        })
        .finally(() => setLoading(false));
    }
  }, [showForm]);

  useEffect(() => {
    if (!showForm) {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Usuário não autenticado.");
        setIsCardVisible(true);
        setLoading(false);
        return;
      }

      axios
        .get("http://localhost:3001/api/appointments/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const consultasFormatadas = response.data.map((consulta) => ({
            id: consulta.id,
            data: consulta.data,
            hora: consulta.hora,
            medico: consulta.medico,
            especialidade: consulta.especialidade,
            status: consulta.status,
          }));
          setConsultas(consultasFormatadas);
        })
        .catch((err) => {
          if (err.response && err.response.status === 403) {
            setError("Acesso negado. Faça login novamente.");
          } else {
            setError("Erro ao buscar consultas.");
          }
          setIsCardVisible(true);
        })
        .finally(() => setLoading(false));
    }
  }, [showForm]);

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

  const handleAgendarConsulta = (e) => {
    e.preventDefault();
    setError("");

    if (!selectedMedico) {
      setError("Selecione um médico antes de agendar.");
      setIsCardVisible(true);
      return;
    }

    navigate(`/pagamento`, {
      state: {
        medicoId: selectedMedico.id,
        data: dataConsulta,
        hora: horaConsulta,
      },
    });
  };

  const handleCancel = (consultaId) => {
    const token = localStorage.getItem("token");
    setLoading(true);

    axios
      .post(
        "http://localhost:3001/api/appointments/cancel",
        { consultaId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setSuccessMessage("Consulta cancelada e removida com sucesso!");
        setConsultas((prev) =>
          prev.filter((consulta) => consulta.id !== consultaId)
        );
      })
      .catch(() => {
        setError("Erro ao cancelar consulta.");
        setIsCardVisible(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="conteiner_consultas_paciente">
      {isCardVisible && error && (
        <Card type="error" message={error} subMessage="Tente novamente." />
      )}
      {isCardVisible && successMessage && (
        <Card
          type="success"
          message={successMessage}
          subMessage="Operação concluída com sucesso."
        />
      )}
      <div className="conteiner_informacoes_paciente">
        {loading && <p>Carregando...</p>}
        {!showForm ? (
          <div className="conteiner_grafico_paciente">
            <table className="tabela_consultas_paciente">
              <thead className="cabecalho_tabela_paciente">
                <tr className="linha_cabecalho_paciente">
                  <th className="coluna_cabecalho_paciente">#</th>
                  <th className="coluna_cabecalho_paciente">Data</th>
                  <th className="coluna_cabecalho_paciente">Horário</th>
                  <th className="coluna_cabecalho_paciente">Médico</th>
                  <th className="coluna_cabecalho_paciente">Especialidade</th>
                  <th className="coluna_cabecalho_paciente">Status</th>
                  {cancelMode && (
                    <th className="coluna_cabecalho_paciente">Ações</th>
                  )}
                </tr>
              </thead>
              <tbody className="corpo_tabela_paciente">
                {consultas.map((consulta, index) => (
                  <tr key={index} className="linha_tabela_paciente">
                    <td className="coluna_tabela_paciente">{index + 1}</td>
                    <td className="coluna_tabela_paciente">{consulta.data}</td>
                    <td className="coluna_tabela_paciente">{consulta.hora}</td>
                    <td className="coluna_tabela_paciente">{consulta.medico}</td>
                    <td className="coluna_tabela_paciente">{consulta.especialidade}</td>
                    <td className="coluna_tabela_paciente">
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
                    {cancelMode && (
                      <td className="coluna_tabela_paciente">
                        <button
                          onClick={() => handleCancel(consulta.id)}
                          className="botao_cancelar_consulta"
                        >
                          Cancelar
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <form onSubmit={handleAgendarConsulta} className="form_agendar_consulta">
            <h3 className="title_agendar_consulta">Agendar Consulta</h3>
            <label className="label_agendar_consulta">
              Médico:
              <select
                className="select_agendar_consulta"
                value={selectedMedico ? selectedMedico.id : ""}
                onChange={(e) => {
                  const medicoSelecionado = medicos.find(
                    (medico) => medico.id === parseInt(e.target.value)
                  );
                  setSelectedMedico(medicoSelecionado || null);
                }}
                required
              >
                <option value="">Selecione um médico</option>
                {medicos.map((medico) => (
                  <option key={medico.id} value={medico.id}>
                    {medico.nome}
                  </option>
                ))}
              </select>
            </label>

            <label className="label_agendar_consulta">
              Data:
              <input
                className="input_agendar_consulta"
                type="date"
                value={dataConsulta}
                onChange={(e) => setDataConsulta(e.target.value)}
                required
              />
            </label>
            <label className="label_agendar_consulta">
              Hora:
              <input
                className="input_agendar_consulta"
                type="time"
                value={horaConsulta}
                onChange={(e) => setHoraConsulta(e.target.value)}
                required
              />
            </label>
            <div className="box_buttons_agendar_consulta">
              <button type="submit" className="botao_agendar_consulta">Confirmar</button>
              <button type="button" className="botao_agendar_consulta" onClick={() => setSelectedMedico(null)}>
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Consultas_paciente;
