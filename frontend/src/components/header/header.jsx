import "./header.css";
import Logo from "../../assets/eClinica.svg";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/" className="conteiner_logo">
        <img src={Logo} alt="logo" className="logo" />
      </Link>

      <nav className="navbar">
        <ul className="navegacao">
          <li className="li_navebar">
            <Link to="/" className="link_navebar">
              Home
            </Link>
          </li>
          <li className="li_navebar">
            <Link to="/cadastro-medico" className="link_navebar">
              Cadastro Médico
            </Link>
          </li>
          <li className="li_navebar">
            <Link to="/Sobre" className="link_navebar">
              Sobre
            </Link>
          </li>
          <li className="li_navebar">
            <a href="#contato" className="link_navebar">
              Contato
            </a>
          </li>
        </ul>
        <button className="botao_login">
          <Link to="/login" className="link_botao">
            Login
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
