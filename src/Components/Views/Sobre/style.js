import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.main)`
  display: grid;
  grid-template-columns: ${(props) => (props.$media ? "1fr" : "2fr 1fr")};
  grid-template-rows: auto auto;
`;

export const SobreContainer = styled(motion.section)`
  height: 100vh;
  padding: 5% 0px 5% 200px;
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    margin: 20px 0;
    font-size: min(3rem, 10vw);
  }
  .container-texts {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => (props.$media ? "center" : "flex-start")};

    .text_about {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        width: 90%;
        color: var(--slate);
        font-size: min(1rem, 4vw);
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
      align-self: flex-start;
    }
  }

  @media (max-width: 920px) {
    padding: 10% 25px 5% 25px;
    height: auto;
    align-items: center;

    .container-texts {
      height: auto;
      .text_about {
        p {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 530px) {
    padding: 3% 25px 3% 25px;

    .container-texts {
      .text_about {
        p {
          width: 100%;
          line-height: 1.7rem;
        }
      }
    }

    a.link {
      margin-top: 0px !important;
      margin: 10px 0 !important;
    }
  }

  @media (max-width: 370px) {
    &::after {
      margin-top: 10px;
    }
  }
`;
