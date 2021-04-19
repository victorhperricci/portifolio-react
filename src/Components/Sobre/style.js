import styled from "styled-components";

export const SobreContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding: 50px 0;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;

  .animation-container {
    width: 50%;
    height: 100%;
    pointer-events: none;

    .animation {
      object-fit: cover;
      width: 100%;
    }
  }
`;
