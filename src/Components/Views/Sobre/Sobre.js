import React, { useContext, useEffect, useRef, useState } from "react";
import { UserStorage } from "../../../Context/UserContext";
import { SobreContainer, MainContainer } from "./style";
import TextContainerAbout from "./TextContainerAbout";
import ImageContainer from "./ImageContainer";

import { Link } from "react-router-dom";
import Aos from "aos";
import Experience from "../Experiencia/Experience";

const Sobre = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { animationRoutes } = useContext(UserStorage);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <MainContainer>
      <SobreContainer
        className="section"
        variants={animationRoutes}
        animate="mostrar"
        initial="inicial"
        exit="esconder"
        hovered={isHovered}
      >
        <div className="container-texts">
          <TextContainerAbout />
          <Link className="link" to="/contato">
            <div className="bgc"></div>
            <p>Entre em Contato !</p>
          </Link>
        </div>
      </SobreContainer>
      <ImageContainer isRotate={isRotate} setIsHovered={setIsHovered} />
      <Experience setIsRotate={setIsRotate} />
    </MainContainer>
  );
};

export default Sobre;
