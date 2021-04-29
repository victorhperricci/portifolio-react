import { useViewportScroll } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { UserStorage } from "../../../../Context/UserContext";
import Canvas from "../Canvas/Canvas";
import Contato from "../Contato/Contato";
import MiniPortifolio from "../MiniPortifolio/MiniPortifolio";
import PagePrincipal from "../PagePrincipal/PagePrincipal";
import SobreIntroducao from "../Sobre/SobreIntroducao";

import { ContainerHome } from "./HomeStyle";

export const Home = () => {
  const { animationRoutes } = useContext(UserStorage);

  return (
    <ContainerHome
      variants={animationRoutes}
      animate="mostrar"
      initial="inicial"
      exit="esconder"
    >
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
