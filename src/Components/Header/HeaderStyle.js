import styled from "styled-components";

export const HeaderContainer = styled.header`
  &.desktop {
    .hamburguer {
      display: none;
    }

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
  }

  &.mobile {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    position: sticky;
    top: 0;
    padding: 15px 25px;
    transform: ${(props) =>
      props.scroll ? "translateY(-110%)" : "translateY(0%)"};
    background-color: var(--dark-navy);
    z-index: 10000000;
    transition: all 0.6s;

    .list-menu {
      position: absolute;
      width: 100%;
      height: 90vh;
      left: 0;
      background-color: var(--dark-navy);
      top: 10vh;
      padding: 20px 0;
      transform: ${(props) =>
        props.menuHamburguer ? "translateX(0%)" : "translateX(-100%)"};
      transition: all 0.4s;

      ul {
        display: flex;
        flex-direction: column;

        a {
          padding: 30px 15px;
          text-align: center;
          border-top: 1px solid var(--green);
          color: var(--green);

          &:last-child {
            border-bottom: 1px solid var(--green);
          }
        }
      }
    }

    .logo {
      text-align: center;
      /* height: 80%; */

      img {
        height: 6vh;
      }

      a { 
        color: var(--green);
      }
    }

    .hamburguer {
      width: 40px;
      height: 30px;
      border: none;
      position: relative;
      background-color: transparent;
      div {
        height: 5px;
        width: 100%;
        background-color: var(--green);
        position: absolute;
        transition: all 0.4s;

        &[data-menu="1"] {
          top: ${(props) => (props.menuHamburguer ? "50%" : 0)};
          transform: ${(props) =>
            props.menuHamburguer ? "rotate(45deg)" : "rotate(0deg)"};
        }
        &[data-menu="2"] {
          top: 50%;
          opacity: ${(props) => (props.menuHamburguer ? 0 : 1)};
        }
        &[data-menu="3"] {
          top: ${(props) => (props.menuHamburguer ? "50%" : "100%")};
          transform: ${(props) =>
            props.menuHamburguer ? "rotate(-45deg)" : "rotate(0deg)"};
        }
      }
    }
  }
`;
