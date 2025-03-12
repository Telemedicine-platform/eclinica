import React from "react";
import "./consultas.css";

function Consultas() {
    return (
        <div className="conteiner_consultas">
            <div className="conteiner_informacoes"> 
                
                <div className="quadros"> 
                    <div className="box_informacoes">
                        <h3 id="titulo_informacoes">
                        Nº de Clientes semanal
                        </h3>
                        
                        <h3 id="numero_maior">
                            10
                        </h3>
                    </div>

                    <div className="box_informacoes">
                        <h3 id="titulo_informacoes">
                        Nº de Agendamentos
                        </h3>
                        <h3 id="numero_maior">
                            5
                        </h3>
                    </div>

                    <div className="box_informacoes">
                        <h3 id="titulo_informacoes">
                        Nº de Consultas Concluidas
                        </h3>
                        
                        <h3 id="numero_maior">
                            8
                        </h3>
                    </div>
                </div>

                <div className="conteiner_grafico">
                    <h2>
                    #
                    </h2>
                    <h2>
                    Nome Completo
                    </h2>
                    <h2>
                    Apelido
                    </h2>
                    <h2>
                    Idade
                    </h2>
                    <h2>
                    Data de Nascimento
                    </h2>
                    <h2>
                    TIpo de consulta
                    </h2>
                    <h2>
                    ...
                    </h2>
                </div>

                <div className="conteiner_grafico2">
                    <h2>
                    #
                    </h2>
                    <h2>
                    Nome Completo
                    </h2>
                    <h2>
                    Apelido
                    </h2>
                    <h2>
                    Idade
                    </h2>
                    <h2>
                    Data de Nascimento
                    </h2>
                    <h2>
                    TIpo de consulta
                    </h2>
                    <h2>
                    ...
                    </h2>
                </div>

                <div className="conteiner_grafico3">
                    <h2>
                    #
                    </h2>
                    <h2>
                    Nome Completo
                    </h2>
                    <h2>
                    Apelido
                    </h2>
                    <h2>
                    Idade
                    </h2>
                    <h2>
                    Data de Nascimento
                    </h2>
                    <h2>
                    TIpo de consulta
                    </h2>
                    <h2>
                    ...
                    </h2>
                </div>

            </div>  
        </div>
    );
}

export default Consultas;