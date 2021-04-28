import React, { useState } from "react";
import { CardContainer } from "./CardStyle";
import imageSobre from "../../../../assets/image_sobre.jpg";
import Rocket from "../../../../assets/rocket.gif";

const Card = ({ isRotate }) => {
  return (
    <CardContainer className="card">
      <div
        className="flip"
        style={{ transform: `rotateY(${isRotate ? 180 : 0}deg)` }}
      >
        <div className="item_flip">
          <img src={imageSobre} />
        </div>
        <div className="item_flip">
          <img src={Rocket} />
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
