import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  /* width: auto; */
  border: none;
  padding: 1.5rem 4rem;
  background-color: ${(props) => props.bgcColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 1rem;
  z-index: 1;
  /* position: relative; */

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background-color: ${(props) => props.hover};
    clip-path: polygon(0 0, 100% 0%, 84% 100%, 0 100%);

    transition: all 0.4s;
  }

  &:hover {
    color: black;

    &::before {
      width: 130%;
    }
  }

  p {
    z-index: 10000;
  }
`;

export default Button;
