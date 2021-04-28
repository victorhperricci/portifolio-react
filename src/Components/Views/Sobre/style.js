import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.main)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const SobreContainer = styled(motion.section)`
  height: 100vh;
  padding: 0px 0px 0px 200px;
  width: 100%;
  display: flex;

  h1 {
    margin: 40px 0;
    font-size: 3rem;
  }

  .container-texts {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text_about {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        width: 80%;
        color: var(--slate);
        font-size: 1.2rem;
        line-height: 2rem;
      }

      a {
        color: var(--green);
        transition: all 0.4s;

        &:hover {
          filter: brightness(50%);
        }
      }
    }

    a.link {
      animation: fadeInLeft 1s forwards;
      transform: translateX(-300%);
      animation-delay: 1.4s;
    }
  }
`;
