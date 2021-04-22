import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import MarvelFilme from "../../assets/filmeMarvell.png";

const ProjetosMiniContainer = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: flex;

  transition: all 0.6s;
  transition-delay: 0.3s;

  div {
    margin: 0 10%;
    width: 80%;
    height: 100%;
    flex-shrink: 0;
    opacity: 0.3;
    transform: scale(0.7);
    transition: all 0.6s;
    border-radius: 0.8rem;
    position: relative;

    &:nth-child(even) {
      background-color: #fff;
    }
    &:nth-child(odd) {
      background-color: red;
    }

    img {
      width: 100%;
      height: 100;
      border-radius: 0.8rem;
      user-select: none;
    }

    &.active {
      opacity: 0.7;
      transform: scale(1);
      transition: all 0.6s;
      z-index: 0;

      &:hover {
        opacity: 1;
      }

      .info-project {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        z-index: 10;

        background-color: #fff;
      }
    }
  }
`;

const ProjetosMini = () => {
  const [slide, setSlide] = useState(0);
  const wrapper = useRef();

  useEffect(() => {
    const slideItens = [...wrapper.current.children];

    function slideActive() {
      wrapper.current.style.transform = `translateX(-${slide * 100}%)`;
      slideItens.forEach((slide) => slide.classList.remove("active"));
      slideItens[slide].classList.add("active");
    }

    slideActive();
  }, [slide]);

  function slidePrev() {
    console.log(slide);

    setSlide(slide - 1);
    if (slide <= 0) {
      setSlide(3);
    }
  }

  function slideNext() {
    // clearInterval(interval);
    setSlide(slide + 1);
    if (slide >= 3) {
      setSlide(0);
    }
  }

  return (
    <>
      <div className="controls">
        <button className="prev" onClick={slidePrev}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="next" onClick={slideNext}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <ProjetosMiniContainer ref={wrapper}>
        <div>
          <img src={MarvelFilme} />
          <div className="info-project"></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </ProjetosMiniContainer>
    </>
  );
};

export default ProjetosMini;
