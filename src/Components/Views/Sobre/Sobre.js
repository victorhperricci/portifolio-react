import React, { useContext, useEffect, useRef, useState } from "react";
import { UserStorage } from "../../../Context/UserContext";
import useMedia from '../../../Hooks/useMedia'
import { SobreContainer, MainContainer } from "./style";
import TextContainerAbout from "./TextContainerAbout";
import ImageContainer from "./ImageContainer";

import { Link } from "react-router-dom";
import Aos from "aos";
import Experience from "../Experiencia/Experience";
import imageSobre from "../../../assets/image_sobre.jpg";
import ImageSobre from "./ImageSobre/ImageSobre";

const Sobre = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { animationRoutes } = useContext(UserStorage);

  const media = useMedia("(max-width:920px)")

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <MainContainer media={media} >
      <SobreContainer
        media={media}
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
          {/* {media && <ImageSobre  />} */}
        </div>
      </SobreContainer>
      {!media && <ImageContainer isRotate={isRotate} setIsHovered={setIsHovered} /> }
      <Experience setIsRotate={setIsRotate} />
    </MainContainer>
  );
};

export default Sobre;
