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
        <ul>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
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
