import styled from "styled-components";

export const ProjetosContainer = styled.section`
  padding: 0px 0px 0px 150px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div.project_item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .bgc_black {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #000;
      opacity: 0.5;
      z-index: 10;
      transition: all 0.4s;
    }

    button {
      transform: scale(0);
      z-index: 100;
      padding: 30px 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      clip-path: circle(33.9% at 50% 51%);
      background-color: var(--green);
      color: var(--dark-navy);

      transition: all 0.4s;
      p {
        width: 60%;
        font-size: 1rem;
        font-weight: bold;
      }

      &:hover {
        filter: brightness(70%);
      }
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    &:hover {
      .bgc_black {
        opacity: 0.8;
      }

      button {
        transform: scale(1);
      }
    }
  }

  @media (max-width: 920px) {
    padding: 0px 0px 0px 0px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    div.project_item {
      height: 200px;
    }
  }
`;
