import styled from "styled-components";

export const ExperienceContainer = styled.section`
  height: auto;
  grid-column: 1;
  grid-row: 2;
  padding: 0px 0px 0px 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .container-experience {
    position: relative;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .item_experience {
      font-size: 1.5rem;
      color: var(--green);
      margin: 0.9rem 0;

      i {
        transform: rotate(90deg);
        font-size: 0.8rem;
      }
    }
  }

  p {
    color: var(--slate);
    width: 80%;
    line-height: 1.5rem;
    /* margin: 1rem 0; */
    a {
      color: var(--green);
      transition: all 0.4s;

      &:hover {
        filter: brightness(60%);
      }
    }
  }

  .tec-container {
    width: 80%;
    .tec-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 1.5rem;

      p.tec_item {
        width: 100%;
        display: flex;
        transition: all 0.4s;
        align-items: center;

        i {
          margin-left: 1rem;
          color: var(--green);
          transition: all 0.4s;
        }

        &::before {
          content: "";
          display: block;
          background-color: var(--green);
          width: 10px;
          height: 2px;
          margin-right: 0.5rem;
          transition: all 0.4s;
        }

        &:hover {
          color: var(--green);

          i {
            color: var(--slate);
          }

          &::before {
            background-color: var(--slate);
          }
        }
      }
    }
  }

  .exp-profissional {
    h2 {
      color: var(--green);
    }
    .empregos {
      margin: 1rem 0;
      .card_emprego {
        width: 50%;
        border: 1px solid var(--slate);
        border-radius: 0.425rem;
        padding: 1rem;
        background-color: var(--green-tint);

        h3 {
          color: var(--green);
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .nome_empresa {
          font-weight: bold;
          letter-spacing: 2px;
          color: var(--lightest-slate);
        }

        .tempo {
          margin: 10px 0;
          p {
            font-size: 0.8rem;
            color: var(--light-slate);
          }
        }
      }
    }
  }
`;
