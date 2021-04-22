import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--dark-navy-secondary);
  height: 100vh;
  width: auto;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  /* border-radius: 0px 40px 0 40px; */
  z-index: 100;

  .logo {
    position: relative;
    padding: 10px 20px;
    top: 0;
    border-bottom: 1px solid var(--green);

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p {
      color: var(--green);
      text-transform: uppercase;
      font-family: var(--font);
      margin: 10px 0;
      letter-spacing: 3px;
    }
  }

  .list-menu {
    /* flex: 1; */
    height: 70%;
    display: flex;

    ul {
      display: flex;
      height: 20%;
      width: 100%;
      flex-direction: column;
      /* background-color: #fff; */
      align-self: center;

      a {
        text-align: center;
        padding: 10px 20px;
        color: var(--slate);
        transition: all 0.4s;
        border-bottom: 1px solid var(--slate);
        border-top: 1px solid var(--slate);

        &:hover {
          color: var(--green);
          border-bottom: 1px solid var(--green);
          border-top: 1px solid var(--green);
        }

        & + a {
          margin-top: 10px;
        }
      }
    }
  }
`;
