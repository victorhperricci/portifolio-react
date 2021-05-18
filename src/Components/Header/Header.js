import React, { useContext, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { HeaderContainer } from "./HeaderStyle";
import Logo from "../../assets/logo.png";
import useMedia from "../../Hooks/useMedia";
import useScroll from "../../Hooks/useScroll";
import { UserStorage } from "../../Context/UserContext";

const Header = () => {
  const { setMenuHamburguerOpen, menuHamburguerOpen } = useContext(UserStorage);
  const { pathname } = useLocation();

  const mobile = useMedia("(max-width: 920px)");
  const scroll = useScroll();
  const header = useRef();

  useEffect(() => {
    setMenuHamburguerOpen(false);
  }, [pathname]);

  const outSideClick = ({ target, currentTarget }) => {
    if (menuHamburguerOpen) {
      if (target !== currentTarget) setMenuHamburguerOpen(false);
    }
  };

  return (
    <HeaderContainer
      ref={header}
      menuHamburguer={menuHamburguerOpen}
      scroll={scroll}
      className={mobile ? "mobile" : "desktop"}
      onClick={outSideClick}
    >
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
          <p>Front-End</p>
        </NavLink>
      </div>

      <nav className="list-menu">
        <ul className="list-views">
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </ul>

        <ul className="list-socials">
          <a
            href="https://www.linkedin.com/in/victor-hugo-alves-perricci-1603/"
            target="_blank"
            className="media-item"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/VictorHAP1603"
            target="_blank"
            className="media-item"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5511970521612&amp;text=Ol%C3%A1!%20Olhei%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            className="media-item"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp-square"></i>
          </a>

          <a
            href="https://www.instagram.com/vitao_1603/"
            target="_blank"
            className="media-item"
            rel="noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
        </ul>
      </nav>

      <button
        className="hamburguer"
        onClick={() => setMenuHamburguerOpen(!menuHamburguerOpen)}
      >
        <div data-menu="1"></div>
        <div data-menu="2"></div>
        <div data-menu="3"></div>
      </button>
    </HeaderContainer>
  );
};

export default Header;
