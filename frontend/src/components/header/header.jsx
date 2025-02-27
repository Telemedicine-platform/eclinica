
import "./header.css";
import Logo from "../../assets/eClinica.svg";
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${hasShadow ? 'header-shadow' : ''}`}>
      <div className="conteiner_logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <nav className="navbar">
        <ul className="navegacao">
          <li className="li_navebar">
            <a href="#" className="link_navebar">
              Home
            </a>
          </li>
          <li className="li_navebar">
            <a href="#" className="link_navebar">
            Cadastro Médico
            </a>
          </li>
          <li className="li_navebar">
            <a href="#" className="link_navebar">
              Sobre 
            </a>
          </li>
          <li className="li_navebar">
            <a href="#" className="link_navebar">
              Contato
            </a>
          </li>
        </ul>
        <button className="botao_login">
          <a href="#" className="link_botao">
            Login
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
