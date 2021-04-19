import React from "react";
import Canvas from "../Canvas/Canvas";
import PagePrincipal from "../PagePrincipal/PagePrincipal";
import Sobre from "../Sobre/Sobre";

import { ContainerHome } from "./HomeStyle";

export const Home = () => {
  return (
    <ContainerHome>
      <section className="principal">
        <Canvas />
        <PagePrincipal />
      </section>

      <Sobre />
    </ContainerHome>
  );
};

export default Home;
