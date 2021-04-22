import styled from "styled-components";

export const MiniPortifolioContainer = styled.section`
  height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .infos {
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    p {
      color: var(--slate);
      /* font-family: "Open Sans", sans-serif; */
      line-height: 1.5rem;
      width: 70%;
    }
    a {
      color: var(--green);
      transition: all 0.4s;

      &:hover {
        filter: brightness(60%);
      }
    }
  }

  .projetos {
    flex: 1;
    width: 100%;
    overflow: hidden;
    position: relative;

    .controls {
      button {
        position: absolute;
        top: 50%;

        padding: 1.5rem;
        background-color: transparent;
        border: 1px solid var(--slate);
        color: var(--slate);
        border-radius: 50%;
        transition: all 0.4s;

        display: block;
        z-index: 1000;

        i {
          transform: scale(1.4);
          transition: all 0.4s;
        }

        &:hover {
          cursor: pointer;
          background-color: var(--green);
          border: 1px solid var(--green);

          i {
            color: var(--dark-navy);
          }
        }

        &[disabled] {
          /* cursor: not-allowed; */
          opacity: 0.1;
        }
      }

      .prev {
        left: 0;
        /* cursor: pointer; */
      }

      .next {
        right: 0;
      }
    }
  }
`;
