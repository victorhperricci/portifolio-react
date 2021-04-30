import React from "react";
import styled from "styled-components";
import Titulo from "../../../Titulo/Titulo";

const ContatoOcntainer = styled.section`
  width: 100%;
  height: 50vh;
  padding: 100px 0 70px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    align-self: flex-start;
  }

  .info {
    align-self: flex-start;

    p {
      margin-top: 20px;
      color: var(--slate);
    }
  }

  .redes-sociais {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    h2 {
      font-size: max(1.5rem, 1vw);
      color: var(--green);
      margin-bottom: 3rem;
    }

    ul {
      display: flex;
      justify-content: space-between;
      width: 60%;
      a {
        color: var(--slate);
        padding: 0px;
        cursor: pointer;

        transition: all 0.4s;

        i {
          transform: scale(4);
        }

        &:hover {
          color: var(--green);
        }
      }
    }

    @media (max-width: 750px) {
      width: 80%;
    }
    @media (max-width: 550px) {
      width: 100%;
    }

    @media (max-width: 450px) {
      width: 100vw;
    }
  }
`;

const Contato = () => {
  return (
    <ContatoOcntainer className="section contato">
      <div className="info">
        <Titulo texto="Contato" />
        <p className="p" data-aos="fade-down">
          Caso queira entrar em contato, segue abaixo minhas redes sociais
        </p>
      </div>
      <div className="redes-sociais">
        <h2 data-aos="fade-down">Redes Sociais</h2>

        <ul data-aos="fade-up" className="social-medias">
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
      </div>
    </ContatoOcntainer>
  );
};

export default Contato;
