import React from "react";
import "./consultas_paciente.css";

function Consultas_paciente() {
    return (
        <div className="conteiner_consultas_paciente">
            <div className="conteiner_informacoes_paciente"> 
                
                <div className="quadros_paciente"> 

                    <div className="box_informacoes_paciente">
                        <h3 id="titulo_informacoes_paciente">
                        Nº de Consultas semanais
                        </h3>
                        <h3 id="numero_maior_paciente">
                            5
                        </h3>
                    </div>

                    
                </div>

                <div className="conteiner_grafico_paciente1">
                   
                    <h2>
                    Consulta marcada para: 14:30h
                    </h2>
                    <h2>
                    Com medico Juarez
                    </h2>
                    <h2>
                    cardiologista
                    </h2>
                    
                    
                </div>

                <div className="conteiner_grafico_paciente2">
                <h2>
                    Consulta marcada para: 14:30h
                    </h2>
                    <h2>
                    Com medico Juarez
                    </h2>
                    <h2>
                    cardiologista
                    </h2>
                </div>

                <div className="conteiner_grafico_paciente3">
                <h2>
                    Consulta marcada para: 14:30h
                    </h2>
                    <h2>
                    Com medico Juarez
                    </h2>
                    <h2>
                    cardiologista
                    </h2>
                </div>

            </div>  
        </div>
    );
}

export default Consultas_paciente;