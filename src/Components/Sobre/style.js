import styled from "styled-components";

export const SobreContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding: 50px 0;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;

  .sobre {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      width: 100%;
      margin-bottom: 2rem;

      font-size: clamp(1.5rem, 1.8rem, 2.5rem);

      /* @media (max-width: 1080px) {
        font-size: 1.8rem;
      } */
    }

    .texts {
      display: flex;
      flex-direction: column;
      width: 100%;
      p {
        color: var(--slate);
        /* font-family: "Open Sans", sans-serif; */
        line-height: 1.5rem;
      }

      a {
        color: var(--green);
        transition: all 0.4s;

        &:hover {
          filter: brightness(60%);
        }
      }

      /* p + p {
        margin-top: 1.5rem;
      } */
    }
  }

  .animation-container {
    max-width: 100%;
    pointer-events: none;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      object-fit: cover;
      max-width: 100%;
      height: initial !important;
    }
  }
`;
