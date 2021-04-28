import React from "react";
import { Link } from "react-router-dom";
import Titulo from "../../Titulo/Titulo";

const TextContainerAbout = () => {
  return (
    <div className="text_about div">
      <Titulo texto="Sobre Mim" />
      <p className="p" data-aos="fade-down" data-aos-delay="300">
        Sou Desenvolvedor Front End localizado em Santo André - SP. Tenho uma
        séria paixão por UI/UX, animações e uma criação intuitiva e dinâmica
        para o usuário
      </p>
      <p className="p" data-aos="fade-down" data-aos-delay="600">
        Sou uma pessoa organizada, busco resolver os problemas o mais rápido
        possível, autodidata, proativo, e buscando aprender e adquirir
        experiência sempre!
      </p>
      <p className="p" data-aos="fade-down" data-aos-delay="900">
        Se caso ficou interessado. peço que por favor entre em{" "}
        <Link to="/contato">Contato</Link> comigo para podermos transformar sua
        ideia em realidade!
      </p>
    </div>
  );
};

export default TextContainerAbout;
