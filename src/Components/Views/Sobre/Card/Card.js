import React from "react";
import { CardContainer } from "./CardStyle";
import ImageSobre from "../ImageSobre/ImageSobre";
import ImageRocket from "../ImageRocket/ImageRocket";

const Card = ({ isRotate }) => {
  return (
    <CardContainer className="card">
      <div
        className="flip"
        style={{ transform: `rotateY(${isRotate ? 180 : 0}deg)` }}
      >
        <ImageSobre />
        <ImageRocket />
      </div>
    </CardContainer>
  );
};

export default Card;
