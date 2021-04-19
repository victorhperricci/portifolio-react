import React from "react";
import { NavLink } from "react-router-dom";

import { HeaderContainer } from "./HeaderStyle";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
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
          <NavLink to="/trabalho">Trabalho</NavLink>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
