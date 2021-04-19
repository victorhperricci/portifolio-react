import React from "react";
import AnimationSobre from "./AnimationSobre";
import { SobreContainer } from "./style";

const Sobre = () => {
  return (
    <SobreContainer>
      <div className="sobre">
        <h1>Sobre Mim</h1>
      </div>
      <AnimationSobre />
    </SobreContainer>
  );
};

export default Sobre;
