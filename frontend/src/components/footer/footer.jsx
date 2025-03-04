import React from "react";
import "./footer.css";
import Uninassau from "../../assets/footer_logos.svg";

function Footer() {
  return (
    <footer className="conteiner_footer">
      <div className="box_texto_footer">
        <p className="texto_desenvolvimento_footer">
          Site desenvolvido por estudantes de <br /> Ciências da computação Uninassau,
          Campus Aracaju-SE.
        </p>
      </div>

      <div className="box_imagem_footer">
        <img src={Uninassau} alt="logos" className="footer_logos" />
      </div>
    </footer>
  );
}
export default Footer;
