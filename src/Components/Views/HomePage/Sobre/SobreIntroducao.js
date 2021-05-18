import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Titulo from "../../../Titulo/Titulo";
import AnimationSobre from "./AnimationSobre";
import { SobreContainer } from "./style";

import Aos from "aos";
import "aos/dist/aos.css";

const SobreIntroducao = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <SobreContainer className="section" id="sobre">
      <div className="sobre">
        <div>
          <Titulo texto="O que estou fazendo?" />
        </div>
        <div className="texts">
          <p className="p" data-aos="fade-down">
            Bom, logo de começo a principal área que me chamou mais a atenção
            foi sem dúvidas o Front-End. Minha paixão começou quando dei 'play'
            em um video do Gustavo Guanabara, qual dev nunca fez isso? Hahahaha
          </p>

          <p className="p" data-aos="fade-down">
            Desde o começo estou tentando tirar o máximo de conhecimento em tudo
            que faço, tanto em projetos Freelancers quanto em Networks, por
            conta disso já conheci pessoas incríveis e que me deram a
            oportunidade de estar onde estou hoje.
          </p>

          <p className="p" data-aos="fade-down">
            Sigo estudando as stacks de front end, mas agora dei um passo a
            frente e tomei a decisão de me aprofundar no React JS, venho fazendo projetos e
            cursos onlines para obter o melhor conhecimento
          </p>

          <p className="p" data-aos="fade-down">
            Mais sobre minha experiência e habilidades você pode encontrar em{" "}
            <Link to="/sobre">Sobre</Link> e{" "}
            <Link to="/habilidades">Habilidades</Link>{" "}
          </p>
        </div>
      </div>
      <AnimationSobre />
    </SobreContainer>
  );
};

export default SobreIntroducao;
