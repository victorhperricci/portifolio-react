import styled from "styled-components";

export const ContainerCanvas = styled.canvas`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 99vh;
  padding-left: 150px;

  @media (max-width: 920px) {
    padding-left: 0px;

    height: 84vh;
  }
`;
