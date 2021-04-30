import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const animateTitleHover = keyframes`
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

`;

const Title = styled.h1`
  font-size: 2.5rem;

  span {
    display: inline-block;
    transition: all 0.4s;
    color: var(--green);
  }

  span.animateTitle {
    animation: rotateInDownLeft 0.4s forwards;
  }

  span.animateTitle:hover {
    animation: ${animateTitleHover} 0.4s forwards;
    cursor: pointer;
  }

  span.space-letter {
    margin: 0 10px;
  }

  @media (max-width: 550px) {
    margin: 30px 0;
  }
`;

const Titulo = ({ texto }) => {
  const titulo = useRef();

  useEffect(() => {
    const text = texto.split("");
    text.forEach((letter, index) => {
      setTimeout(() => {
        const span = document.createElement("span");
        span.append(letter);
        titulo.current.append(span);

        letter === " "
          ? span.classList.add("space-letter")
          : span.classList.add("animateTitle");
      }, index * 50);
    });
  }, []);

  return <Title data-aos="fade-right" className="h1" ref={titulo}></Title>;
};
// data-aos="fade-right"
export default Titulo;
