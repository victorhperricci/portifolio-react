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

const linkSobre = keyframes`
  0%, 100%{
    transform: translateY(-5px);
  }

  50% {
    transform: translateY(5px);
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
        font-size: max(1rem, 3vw);
        font-weight: bold;
        transform: scale(2);
        color: var(--slate);
        transition: all 0.4s;
        padding-left: 4px;
        position: relative;
        margin: 10px 8px;
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

  .link-sobre {
    position: absolute;
    bottom: 5rem;
    left: 50%;

    background-color: transparent;
    border: 1px solid var(--slate);
    padding: 20px;
    border-radius: 40%;
    color: var(--slate);

    cursor: pointer;

    transition: all 0.4s;

    p {
      animation: ${linkSobre} 0.6s infinite;
      transition: all 0.4s;
    }

    &:hover {
      background-color: var(--green);

      p {
        color: var(--dark-navy);
      }
    }
  }

  a.link {
    animation: fadeInLeft 1s forwards;
    transform: translateX(-300%);
    animation-delay: 2s;
  }
`;
