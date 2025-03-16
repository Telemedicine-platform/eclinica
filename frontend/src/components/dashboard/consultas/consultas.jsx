import React from "react";
import "./consultas.css";

function Consultas() {
  const pacientes = [
    // Apenas um teste de tabela, os dados devem vir do banco de dados
    {
      id: 1,
      nomeCompleto: "João Silva",
      apelido: "João",
      idade: 30,
      dataNascimento: "01-01-1995",
      tipoConsulta: "Teleconsulta Geral",
    },
    {
      id: 2,
      nomeCompleto: "Maria Oliveira Dos Santos da Silva",
      apelido: "Maria",
      idade: 25,
      dataNascimento: "15-05-2000",
      tipoConsulta: "Telepsiquiatria",
    },
    {
      id: 3,
      nomeCompleto: "Joaquin Silva da Silva da Silva",
      apelido: "Joaquin",
      idade: 70,
      dataNascimento: "01-01-1980",
      tipoConsulta: "Telepsiquiatria",
    },
  ];

  return (
    <div className="conteiner_consultas">
      <div className="conteiner_informacoes">
        <div className="quadros">
          <div className="box_informacoes">
            <h3 className="titulo_informacoes">Nº de Clientes semanal</h3>
            <h3 className="numero_maior">10</h3>
          </div>

          <div className="box_informacoes">
            <h3 className="titulo_informacoes">Nº de Agendamentos</h3>
            <h3 className="numero_maior">5</h3>
          </div>

          <div className="box_informacoes">
            <h3 className="titulo_informacoes">Nº de Consultas Concluidas</h3>
            <h3 className="numero_maior">8</h3>
          </div>
        </div>

        <div className="conteiner_grafico">
          <table className="tabela_pacientes">
            <thead className="cabecalho_tabela">
              <tr className="linha_cabecalho">
                <th className="coluna_cabecalho">#</th>
                <th className="coluna_cabecalho">Nome Completo</th>
                <th className="coluna_cabecalho">Apelido</th>
                <th className="coluna_cabecalho">Idade</th>
                <th className="coluna_cabecalho">Data de Nascimento</th>
                <th className="coluna_cabecalho">Tipo de Consulta</th>
              </tr>
            </thead>
            <tbody className="corpo_tabela">
              {pacientes.map((paciente) => (
                <tr key={paciente.id} className="linha_tabela">
                  <td className="coluna_tabela">{paciente.id}</td>
                  <td className="coluna_tabela">{paciente.nomeCompleto}</td>
                  <td className="coluna_tabela">{paciente.apelido}</td>
                  <td className="coluna_tabela">{paciente.idade}</td>
                  <td className="coluna_tabela">{paciente.dataNascimento}</td>
                  <td className="coluna_tabela">{paciente.tipoConsulta}</td>
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
