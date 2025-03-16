import React from "react";
import "./consultas_paciente.css";

function Consultas_paciente() {
  const consultas = [
    // Dados de exemplo das consultas do paciente
    // Apenas um teste de tabela, os dados devem vir do banco de dados
    {
      id: 1,
      data: "2025-03-16",
      horario: "14:30",
      medico: "Dr. Juarez",
      especialidade: "Cardiologista",
    },
    {
      id: 2,
      data: "2025-03-17",
      horario: "10:00",
      medico: "Dra. Maria",
      especialidade: "Dermatologista",
    },
  ];

  return (
    <div className="conteiner_consultas_paciente">
      <div className="conteiner_informacoes_paciente">

        <div className="conteiner_grafico_paciente">
          <table className="tabela_consultas_paciente">
            <thead className="cabecalho_tabela_paciente">
              <tr className="linha_cabecalho_paciente">
                <th className="coluna_cabecalho_paciente">#</th>
                <th className="coluna_cabecalho_paciente">Data</th>
                <th className="coluna_cabecalho_paciente">Horário</th>
                <th className="coluna_cabecalho_paciente">Médico</th>
                <th className="coluna_cabecalho_paciente">Especialidade</th>
              </tr>
            </thead>
            <tbody className="corpo_tabela_paciente">
              {consultas.map((consulta) => (
                <tr key={consulta.id} className="linha_tabela_paciente">
                  <td className="coluna_tabela_paciente">{consulta.id}</td>
                  <td className="coluna_tabela_paciente">{consulta.data}</td>
                  <td className="coluna_tabela_paciente">{consulta.horario}</td>
                  <td className="coluna_tabela_paciente">{consulta.medico}</td>
                  <td className="coluna_tabela_paciente">{consulta.especialidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Consultas_paciente;