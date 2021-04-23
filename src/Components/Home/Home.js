import React from "react";
import Canvas from "../Canvas/Canvas";
import Contato from "../Contato/Contato";
import MiniPortifolio from "../MiniPortifolio/MiniPortifolio";
import PagePrincipal from "../PagePrincipal/PagePrincipal";
import SobreIntroducao from "../Sobre/SobreIntroducao";

import { ContainerHome } from "./HomeStyle";

export const Home = () => {
  return (
    <ContainerHome>
      <section className="principal">
        <Canvas />
        <PagePrincipal />
      </section>
      <SobreIntroducao />
      <MiniPortifolio />
      <Contato />
    </ContainerHome>
  );
};

export default Home;
