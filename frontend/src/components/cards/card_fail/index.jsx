import React from "react";
import "./card_fail.css";
import Error from "../../../assets/error.svg";
import Exit from "../../../assets/exit.svg";
import Done from "../../../assets/done.svg";

export default function CardFail() {
  return (
    <div className="container_card_fail">
      <div className="box_error">
        <img src={Error} alt="Erro" className="icon_error" />
      </div>
      <div className="box_text_error">
        <p className="text_error">Erro ao cadastrar</p>
        <p className="subtext_error">Tente novamente</p>
      </div>
      <div className="box_exit">
        <img src={Exit} alt="Exit icone" className="icon_exit" />
      </div>
    </div>
  );
}
