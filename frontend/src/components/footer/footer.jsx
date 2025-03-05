import React from "react";
import "./footer.css";
import Uninassau from "../../assets/footer_logos.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="conteiner_footer">
      <div className="box_footer">
        <div className="navegation">
          <h3 className="title_footer">Navegação Rápida</h3>
          <ul className="list_footer">
            <li className="li_footer">
              <Link to="/" className="link_footer">
                Home
              </Link>
            </li>
            <li className="li_footer">
              <Link to="/cadastroMedico" className="link_footer">
                Cadastro Médico
              </Link>
            </li>
            <li className="li_footer">
              <Link to={"/sobre"} className="link_footer">
                Sobre
              </Link>
            </li>
            <li className="li_footer">
              <Link to="/contato" className="link_footer">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact_info">
          <h3 className="title_footer">Informações de Contato</h3>
          <ul className="list_footer">
            <li className="li_footer">
              <a href="tel:+5511999999999" className="link_footer">
                +55 (11) 99999_9999
              </a>
            </li>
            <li className="li_footer">
              <a
                href="mailto:eclinica@gmail.com"
                className="link_footer"
              >
                Email: eclinica@gmail.com
              </a>
            </li>
            <li className="li_footer">
              <a href="#" className="link_footer">
                Rua Monteiro Lobato, 123
              </a>
            </li>
          </ul>
        </div>
        <div className="policies">
          <h3 className="title_footer">Políticas</h3>
          <ul className="list_footer">
            <li className="li_footer">
              <a href="#" className="link_footer">
                Políticas de devolução
              </a>
            </li>
            <li className="li_footer">
              <a href="#" className="link_footer">
                Política de privacidade
              </a>
            </li>
            <li className="li_footer">
              <a href="#" className="link_footer">
                Termos e condições
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="box_imagem_footer">
        <img src={Uninassau} alt="logos" className="footer_logos" />
      </div>
    </footer>
  );
}
export default Footer;
