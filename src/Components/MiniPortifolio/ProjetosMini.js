import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import MouseOver from "../../assets/mouseover2.png";
import { ProjetosMiniContainer } from "./ProjetosMiniContainer";



const ProjetosMini = () => {
  const [slidesFetch, setSlidesFetch] = useState(null)
  const [slide, setSlide] = useState(0);
  const wrapper = useRef();

  
  useEffect( async () => {
    const options = {
      headers: {
        Accept: 'application/json'
      }
    }
    const slides = await ( await fetch('/projetosSlide.json', options)).json();
    setSlidesFetch(slides)

    const slideItens = [...wrapper.current.children];
    function slideActive() {
      wrapper.current.style.transform = `translateX(-${slide * 100}%)`;
      slideItens.forEach((slide) => slide.classList.remove("active"));
      slideItens[slide].classList.add("active");
    }
    slideActive(); 

  }, [slide])


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
        {slidesFetch && slidesFetch.map((slide, index) => (
           <div key={`slide${index}`}>
            <img className="img-film" src={slide.imgFilme} />
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
               <a href={slide.link} target="_blank">{slide.link}</a>
             </div>
           </div>
         </div>
        ))}
      </ProjetosMiniContainer>
    </>
  );
};

export default ProjetosMini;
