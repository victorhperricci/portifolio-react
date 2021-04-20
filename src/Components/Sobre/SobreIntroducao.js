import React from "react";
import { Link } from "react-router-dom";
import Titulo from "../Titulo/Titulo";
import AnimationSobre from "./AnimationSobre";
import { SobreContainer } from "./style";

const SobreIntroducao = () => {
  return (
    <SobreContainer className="section">
      <div className="sobre">
        <div>
          <Titulo texto="O que estou fazendo?" />
        </div>
        <div className="texts">
          <p className="p">
            Bom, logo de começo a principal área que me chamou mais a atenção
            foi sem dúvidas o Front-End. Minha paixão começou quando dei 'play'
            em um video do Gustavo Guanabara, qual dev nunca fez isso? Hahahaha
          </p>

          <p className="p">
            Desde o começo estou tentato tirar o máximo de conhecimento em tudo
            que faço, tanto em projetos Freelancers quanto em Networks, por
            conta disso já conheci pessoas incríveis e que me deram a
            oortunidade de estar onde estou hoje.
          </p>

          <p className="p">
            Sigo estudando as stacks de front end, mas agora dei um passo a
            frente e decidir me aprofundar no React JS, venho fazendo projetos e
            cursos onlines para obter o melhor conhecimento
          </p>

          <p className="p">
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
