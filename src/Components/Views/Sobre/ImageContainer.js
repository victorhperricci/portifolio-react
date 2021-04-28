import React, { useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";
import Card from "./Card/Card";

const DivImage = styled(motion.div)`
  animation: fadeInRight 1s forwards;
  transform: translateX(-10000%);
  animation-delay: 2s;

  grid-column: 2;
  grid-row: 1 / -1;

  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
  /* padding-bottom: 150px; */

  div.box-photo {
    width: 90%;
    height: 40%;

    position: relative;
    transition: all 0.4s;
    overflow: hidden;
    border-radius: 4rem;

    position: sticky;
    top: 15%;

    &:hover {
      box-shadow: 0px 0px 0px 0px var(--dark-navy), 0px 0px 0px 0px var(--green),
        0px 0px 0px 0px var(--dark-navy), 0px 0px 0px 0px var(--green);

      /* .card {
        .flip {
          transform: rotateY(180deg);
        }
      } */
    }
  }
`;

const ImageContainer = ({ setIsHovered, isRotate }) => {
  console.log(isRotate);

  return (
    <DivImage
      // whileHover={{ scale: 1.1, x: -30, y: -20 }}
      // onHoverStart={() => setIsHovered(true)}
      // onHoverEnd={() => setIsHovered(false)}
      // whileTap={{ scale: 0.5 }}
      // transition={{ delay: 0.1 }}
      className="image_about"
    >
      <motion.div className="box-photo">
        <Card isRotate={isRotate} />
      </motion.div>
    </DivImage>
  );
};

export default ImageContainer;
