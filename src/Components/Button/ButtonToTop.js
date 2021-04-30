import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from "styled-components";

const linkSobre = keyframes`
  0%, 100%{
    transform: translateY(-5px);
  }

  50% {
    transform: translateY(5px);
  }
`;

const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 80px;

  background-color: var(--dark-navy);
  border: 1px solid var(--slate);
  padding: 20px;
  border-radius: 40%;
  color: var(--slate);

  cursor: pointer;

  transition: all 0.4s;

  z-index: 1000;

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
`;

const ButtonToTop = () => {
  const [top, setTop] = useState(false);

  window.addEventListener("scroll", (e) => {
    window.pageYOffset > 1000 ? setTop(true) : setTop(false);
  });

  if (!top) return null;
  else
    return (
      <Button onClick={() => scroll.scrollToTop()}>
        <p>↑</p>
      </Button>
    );
};

export default ButtonToTop;
