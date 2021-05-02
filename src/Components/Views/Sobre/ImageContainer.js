import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "./Card/Card";

const DivImage = styled(motion.div)`
  animation: fadeInRight 1s forwards;
  transform: translateX(-10000%);
  animation-delay: 2s;

  grid-column: 2;
  grid-row: 1 / -1;

  div.box-photo {
    width: 90%;
    height: 35%;

    position: relative;
    transition: all 0.4s;
    overflow: hidden;
    border-radius: 4rem;

    position: sticky;
    top: 10%;

    &:hover {
      box-shadow: 0px 0px 0px 0px var(--dark-navy), 0px 0px 0px 0px var(--green),
        0px 0px 0px 0px var(--dark-navy), 0px 0px 0px 0px var(--green);
    }

    @media (max-width: 1300px) {
      height: 30%;
      top: 20%;
    }
    @media (max-width: 1000px) {
      height: 20%;
      top: 30%;
    }
  }
`;

const ImageContainer = ({ isRotate }) => {
  return (
    <DivImage className="image_about">
      <motion.div className="box-photo">
        <Card isRotate={isRotate} />
      </motion.div>
    </DivImage>
  );
};

export default ImageContainer;
