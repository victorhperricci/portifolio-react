import React, { useEffect, useRef } from "react";
import { PagePrincipalContainer } from "./style";

import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const PagePrincipal = () => {
  const linha1 = useRef();
  const linha2 = useRef();
  const linha3 = useRef();
  const separador = useRef();

  const linha1Texto = "Olá,".split("");
  const linha2Texto = "Meu nome é Victor Hugo".split("");
  const linha3Texto = "Sou Desenvolvedor Web".split("");

  useEffect(() => {
    linha1Texto.forEach((letra, index) => {
      const span = document.createElement("span");
      span.classList.add("letter");

      span.innerHTML = letra;

      setTimeout(() => {
        linha1.current.append(span);
        span.classList.add("hover");
      }, 50 * index);
    });

    linha2Texto.forEach((letra, index) => {
      const span = document.createElement("span");

      if (letra == " ") span.classList.add("space-letter");

      span.innerHTML = letra;

      setTimeout(() => {
        setTimeout(() => {
          linha2.current.append(span);
          span.classList.add("hover");
        }, 50 * index);
      }, 200);
    });

    linha3Texto.forEach((letra, index) => {
      const span = document.createElement("span");

      if (letra == " ") span.classList.add("space-letter");

      span.innerHTML = letra;

      setTimeout(() => {
        setTimeout(() => {
          linha3.current.append(span);
          span.classList.add("hover");
        }, 50 * index);
      }, 24 * 50);
    });
  }, []);

  return (
    <PagePrincipalContainer>
      <h1 className="apresentation ">
        <div ref={linha1} className="linha"></div>
        <div ref={linha2} className="linha"></div>
        <div ref={linha3} className="linha"></div>
      </h1>

      <Link className="link" to="/contato" data-aos-anchor=".sobre">
        <div className="bgc"></div>
        <p>Me Contate !</p>
      </Link>

      <LinkScroll
        className="link-sobre"
        to="sobre"
        smooth={true}
        duration={1000}
      >
        <p>↓</p>
      </LinkScroll>
    </PagePrincipalContainer>
  );
};

export default PagePrincipal;
