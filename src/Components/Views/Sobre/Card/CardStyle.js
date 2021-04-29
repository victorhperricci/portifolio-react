import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;

  .flip {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;

    div {
      width: 90%;
      height: 90%;

      position: absolute;
      backface-visibility: hidden;
      text-align: center;
      border-radius: 4rem;

      transition: all 0.4s;
    }

  }
`;
