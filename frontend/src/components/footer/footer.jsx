import React from "react";
import "./footer.css";
import Uninassau from "../../assets/footer_logos.svg";



function Footer() {
    return (
        <div className="conteiner_footer_principal">
            <div className="texto_footer_principal">
                <p className="texto_desenvolvimento">
                Site desenvolvido por estudantes de Ciências da computação 
                Uninassau, Campus Aracaju-SE.
                </p>
            </div>
                
            <div className="imagem_footer_principal">
                <img src={Uninassau} alt="logos" className="footer_logos" />
            </div>
        </div>
    );
}
export default Footer