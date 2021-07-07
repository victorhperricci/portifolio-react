import styled from "styled-components";

export const ContainerContato = styled.section`
  height: 95vh;
  padding: 5% 0px 5% 200px;
  width: 100%;
  display: flex;
  /* flex-direction: column; */

  & > article {
    flex: 1;

    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .info {
    h1 {
      margin-bottom: 2rem;
    }

    p {
      color: var(--slate);
    }
  }

  .contact {
    display: flex;
    margin-top: 3rem;
    flex: 1;

    form {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto 1fr;
      gap: 1rem;
      /* height: 100%; */

      .contact__item {
        position: relative;

        &.textarea,
        &.subject {
          grid-column: 1 / -1;
        }

        &:focus-within:after {
          width: 100%;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 0%;
          height: 4px;
          background-color: var(--green);
          transition: all 0.4s;
        }
      }

      input,
      textarea,
      button {
        width: 100%;
        border-radius: 0.25rem;
        border: none;
        color: var(--slate);
        font-size: 1.5rem;
        outline: none;
        transition: all 0.4s;
        position: relative;

        &:focus ~ .contact__item::after {
          display: none;
        }

        &::placeholder {
          font-size: 1.5rem;
          color: var(--light-slate);
          opacity: 0.6;
        }
      }

      input,
      textarea {
        background-color: var(--dark-navy-secondary);
        cursor: pointer;
      }

      button {
        background-color: var(--green);
        color: var(--dark-navy-secondary);
        transition: 0.4s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      input,
      button {
        padding: 20px;
      }

      textarea {
        resize: none;
        height: 100%;
        padding: 10px 15px;
      }
    }
  }

  .gif__contact {
    margin: 0px 10px;
    height: 100%;
  }
`;
