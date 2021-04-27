import React, { useContext, useState } from "react";
import { UserStorage } from "../../../Context/UserContext";
import { SobreContainer } from "./style";
import { motion } from "framer-motion";
import Titulo from "../../Titulo/Titulo";
import imageSobre from "../../../assets/image_sobre.jpg";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

const ImageContainer = ({ setIsHovered }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, x: -30, y: -20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.5 }}
      transition={{ delay: 0.1 }}
      className="image_about"
    >
      <div className="box-photo">
        <img src={imageSobre} />
        <motion.div className="background_green"></motion.div>
      </div>
    </motion.div>
  );
};

const TextContainerAbout = () => {
  return (
    <div className="text_about div">
      <Titulo texto="Sobre Mim" />
      <p className="p">
        Sou Desenvolvedor Front End localizado em Santo André - SP. Tenho uma
        séria paixão por UI/UX, animações e uma criação intuitiva e dinâmica
        para o usuário
      </p>
      <p className="p">
        Sou uma pessoa organizada, busco resolver os problemas o mais rápido
        possível, autodidata, proativo, e buscando aprender e adquirir
        experiência sempre!
      </p>
      <p className="p">
        Se caso ficou interessado. peço que por favor entre em{" "}
        <Link to="/contato">Contato</Link> comigo para podermos transformar sua
        ideia em realidade!
      </p>
    </div>
  );
};

const Sobre = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { animationRoutes } = useContext(UserStorage);

  return (
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
      </div>
      <ImageContainer setIsHovered={setIsHovered} />
    </SobreContainer>
  );
};

export default Sobre;
