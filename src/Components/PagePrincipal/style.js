import styled, { keyframes } from "styled-components";

const animateLetter = keyframes`
    from {
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }

  30% {
    -webkit-transform: scale3d(2.25, 1.75, 2);
    transform: scale3d(2.25, 1.75, 2);
  }

  40% {
    -webkit-transform: scale3d(1.75, 2.25, 2);
    transform: scale3d(1.75, 2.25, 2);
  }

  50% {
    -webkit-transform: scale3d(2.15, 1.85, 2);
    transform: scale3d(2.15, 1.85, 2);
  }

  65% {
    -webkit-transform: scale3d(1.95, 2.05, 2);
    transform: scale3d(1.95, 2.05, 2);
  }

  75% {
    -webkit-transform: scale3d(2.05, 1.95, 2);
    transform: scale3d(2.05, 1.95, 2);
  }

  to {
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }

`;

export const PagePrincipalContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  user-select: none;

  .apresentation {
    width: 100%;
    position: relative;

    div.linha {
      display: flex;
      width: 70%;
      position: relative;
      span {
        font-size: 3rem;
        font-weight: bold;
        transform: scale(2);
        color: var(--slate);
        transition: all 0.4s;
        padding-left: 4px;
        position: relative;
        margin: 10px 5px;
        display: block;

        &:hover {
          cursor: pointer;
          color: var(--green);
          animation: ${animateLetter} 1s;
        }

        &.hover {
          animation: fadeIn 0.4s;
        }

        &.space-letter {
          margin: 0 15px;
        }

        @media (max-width: 1080px) {
          font-size: 2rem;
        }
      }

      & + div.linha {
        margin-top: 20px;
      }
    }
  }

  button {
    position: relative;
    margin-top: 30px;
    transform: translateX(-200%);
    animation: fadeInLeft 0.5s 2.5s forwards;
  }
`;
