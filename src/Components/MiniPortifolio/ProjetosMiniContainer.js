import styled from "styled-components";

export const ProjetosMiniContainer = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: flex;

  transition: all 0.6s;
  transition-delay: 0.3s;

  & > div {
    margin: 0 10%;
    width: 80%;
    height: 100%;
    flex-shrink: 0;
    opacity: 0.3;
    transform: scale(0.7);
    transition: all 0.6s;
    border-radius: 0.8rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.8rem;
      user-select: none;
    }

    .img-over  {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(240, 240, 240, 0.1);
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.5s;

      img {
        width: 50%;
        height: 50%;
        opacity: 0.1;
      }
    }

    .info-project {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        opacity: 1;
        z-index: 10;
        transition: all .5s;

        display: flex;
        align-items: center;
        justify-content: center;

        .link {
          position: absolute;
          height: auto;
          padding: 15px 0;
          background-color: var(--green);
          width: 100%;
          bottom: 0;
          border-radius: 0.45rem 0.45rem 0 0;

          transform: translateY(100%);

          text-align: center;
          transition: all .5s;
          transition-delay: 0.5s;

            a {
                color: var(--dark-navy);
            }
        }
        .text {
            height: 90%;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            transition: all .5s;
            transition-delay: 0.5s;

            transform: scale(0);

            h1 {
                text-align: center;
                color: var(--green);
                font-size: 2.5rem;
                margin-bottom: 2rem;
            }

            .description {
                text-align: center;
                color: var(--slate);
                line-height: 1.5rem;
            }
            .tec-usadas {
                text-align: center;
                margin-top: 1rem;

                .title-tec-usadas {
                    font-size: 2rem;
                    color: var(--green);
                }

                .tec-item {
                    margin-top: 1rem;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    p {
                        color: var(--slate);
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50%;

                        &:before {
                            content:'';
                            display: block;
                            width: 15px;
                            height: 2px;
                            background-color: var(--green);
                            margin-right: 1rem;
                        }
                    }

                    p + p {
                        margin-top: 0.8rem;
                    }
                }
            }

        }
    }

    .img-film {
      transition: all .4s;
    }

    &.active {
      opacity: 1;
      transform: scale(1);
      transition: all 0.6s;
      z-index: 0;

      &:hover {
        .img-over {
          opacity: 0;
        }
        .info-project {
          opacity: 1;
          .link {
            transform: translateY(0%);
          }

          .text {
              transform: scale(1);
          }
        }

        .img-film {
          opacity: 0.2;
        }
      }
    }
  }
`;