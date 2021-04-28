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

    div:nth-child(1) {
      background-color: red;
      box-shadow: 5px 5px 0px 5px var(--dark-navy),
        10px 10px 0px 5px var(--green), 20px 20px 0px 5px var(--dark-navy),
        25px 25px 0px 5px var(--green);
      overflow: hidden;

      img {
        max-width: 100%;
        height: 100%;
        border-radius: 4rem;
        transition: all 0.4s;
        object-fit: cover;
      }

      &::before {
        content: "";
        display: block;
        width: 200%;
        height: 200%;
        background-color: var(--green);
        filter: brightness(30%);
        opacity: 0.5;
        position: absolute;
        transition: all 0.5s;
        transition-delay: 0.2s;
        clip-path: polygon(0 0, 0% 100%, 100% 0);
      }

      &:hover {
        box-shadow: 0px 0px 0px 0px var(--dark-navy),
          0px 0px 0px 0px var(--green), 0px 0px 0px 0px var(--dark-navy),
          0px 0px 0px 0px var(--green);

        &::before {
          opacity: 0;
          width: 0%;
          height: 0%;
        }
      }
    }

    div:nth-child(2) {
      box-shadow: none;
      transform: rotateY(180deg);

      img {
        height: 100%;
        max-width: 100%;
        border-radius: 4rem;
      }
    }
  }
`;
