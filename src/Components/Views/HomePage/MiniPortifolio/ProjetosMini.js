import React, { useEffect, useRef, useState } from "react";

import MouseOver from "../../../../assets/mouseover2.png";
import { ProjetosMiniContainer } from "./ProjetosMiniContainer";
import useMedia from "../../../../Hooks/useMedia";

const ProjetosMini = () => {
  const [slidesFetch, setSlidesFetch] = useState(null);
  const media = useMedia("(max-width: 600px)");

  const [slide, setSlide] = useState(0);
  const wrapper = useRef();
  const controlsSelect = useRef();

  useEffect(async () => {
    const options = {
      headers: {
        Accept: "application/json",
      },
    };
    const slides = await (await fetch("/projetosSlide.json", options)).json();
    setSlidesFetch(slides);

    const slideItens = [...wrapper.current.children];
    const controlsItens = [...controlsSelect.current.children];

    function controlsItenActive() {
      controlsItens.forEach((c, index) => {
        c.classList.remove("active");
        c.addEventListener("click", (e) => {
          setSlide(index);
        });
      });
      controlsItens[slide].classList.add("active");
    }

    function slideActive() {
      wrapper.current.style.transform = `translateX(-${slide * 100}%)`;
      slideItens.forEach((slide) => slide.classList.remove("active"));
      slideItens[slide].classList.add("active");
    }
    slideActive();
    controlsItenActive();
  }, [slide]);

  function slidePrev() {
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
      <ProjetosMiniContainer
        className="slide"
        data-aos="fade"
        data-aos-delay="600"
        ref={wrapper}
      >
        {slidesFetch &&
          slidesFetch.map((slide, index) => (
            <div key={`slide${index}`}>
              <img
                className="img-film"
                src={slide.imgFilme}
                alt={slide.titulo}
              />
              <div className="img-over">
                <img src={MouseOver} />
              </div>

              <div className="info-project">
                <div className="text">
                  <h1 className="title">{slide.titulo}</h1>
                  <p className="description">{slide.description}</p>
                  <div className="tec-usadas">
                    <p className="title-tec-usadas">Tecnologias Usadas</p>
                    <div className="tec-item">
                      {slide.tecUsadas.map((tec, index) => (
                        <p key={index}>{tec}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="link">
                  <a href={slide.link} target="_blank">
                    {slide.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
      </ProjetosMiniContainer>

      <div className="controls">
        {!media && (
          <>
            <button
              className="prev"
              data-aos="fade-right"
              data-aos-delay="300"
              onClick={slidePrev}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="next"
              data-aos="fade-left"
              data-aos-delay="300"
              onClick={slideNext}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </>
        )}

        <div ref={controlsSelect} className="controls-select">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default ProjetosMini;
