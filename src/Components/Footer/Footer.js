import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--green);
  margin-top: 0px;
  padding: 20px 20px 20px 200px;
  font-size: min(1rem, 3vw);

  @media (max-width: 920px) {
    padding: 20px 20px 20px 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      Victor Hugo © 2020 - Todos os direitos reservados
    </FooterContainer>
  );
};

export default Footer;
