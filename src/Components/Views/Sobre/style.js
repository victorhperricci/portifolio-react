import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const SobreContainer = styled(motion.main)`
  height: 100vh;
  padding: 0px 50px 0px 200px;
  width: 100%;
  display: flex;

  .container-texts {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin: 20px 0;
    }

    .text_about {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        width: 80%;
      }

      a {
        color: var(--green);
        transition: all 0.4s;

        &:hover {
          filter: brightness(50%);
        }
      }
    }
  }

  .image_about {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    div.box-photo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70%;
      position: relative;
      transition: all 0.4s;
      overflow: hidden;
      border-radius: 4rem;

      box-shadow: 5px 5px 0px 5px var(--dark-navy),
        10px 10px 0px 5px var(--green), 20px 20px 0px 5px var(--dark-navy),
        25px 25px 0px 5px var(--green);

      .background_green {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 4rem;

        background-color: var(--green);
        filter: brightness(30%);
        opacity: ${(props) => (props.hovered ? 0.5 : 0.5)};
        transform: ${(props) =>
          props.hovered
            ? "translate3d(-100%, -100%, 0)"
            : "translate3d(0, 0, 0)"};
        transition: all 0.4s;
      }

      img {
        max-width: 100%;
        height: 100%;
        border-radius: 4rem;
        transition: all 0.4s;
      }

      &:hover {
        box-shadow: 0px 0px 0px 0px var(--dark-navy),
          0px 0px 0px 0px var(--green), 0px 0px 0px 0px var(--dark-navy),
          0px 0px 0px 0px var(--green);
      }
    }
  }
`;
