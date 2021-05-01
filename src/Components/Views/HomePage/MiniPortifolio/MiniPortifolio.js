import React from "react";
import { MiniPortifolioContainer } from "./style";
import Titulo from "../../../Titulo/Titulo";
import { Link } from "react-router-dom";
import ProjetosMini from "./ProjetosMini";

const MiniPortifolio = () => {
  return (
    <MiniPortifolioContainer className="section mini-port">
      <div className="infos">
        <Titulo texto="Meu Portfólio" />
        <p className="p" data-aos="fade-down">
          Uma pequena galeria dos meus trabalhos recentes, todos eles fiz
          sozinho por questão de estudo e aprimoramento, se caso quiser ver
          mais, acesse minha página de <Link to="/projetos">Projetos</Link>
        </p>
      </div>
      <div className="projetos">
        <ProjetosMini />
      </div>
    </MiniPortifolioContainer>
  );
};

export default MiniPortifolio;
