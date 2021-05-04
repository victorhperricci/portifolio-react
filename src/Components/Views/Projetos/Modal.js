import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { UserStorage } from "../../../Context/UserContext";

const animateLink = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 50px 0;
  background-color: rgba(56, 70, 99, 0.8);
  z-index: 10000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${(props) => (props.isModalOpen ? "scale(1)" : "scale(0)")};
  transition: all 0.5s;

  .modal {
    height: ${(props) => (props.retrato ? "auto" : "80vh")};
    width: 80%;
    background-color: #ffff;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;
    transition: all 0.3s;
    transition-delay: 0.3s;

    &::-webkit-scrollbar {
      width: 10px; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: var(--dark-navy); /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--green);
      opacity: 0.7; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .modal.active {
    opacity: 1;
  }

  a {
    background-color: var(--green);
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    padding: 20px;
    bottom: 0;
    opacity: 0;
    color: var(--dark-navy);
    transition: all 0.6s;

    &:hover {
      background-color: var(--dark-navy);
      color: var(--green);
    }
  }

  a.active {
    animation: ${animateLink} 0.5s forwards;
    animation-delay: 0.6s;
  }

  @media (max-width: 920px) {
    .modal {
      transform: translateY(-30px);
    }
  }
  @media (max-width: 650px) {
    .modal {
      width: 90%;
      display: flex;
      justify-content: flex-start;
     
      img {
        width: 100%;
        height: ${(props) => (props.retrato ? "auto" : "200vh")};
        object-fit: fill;
      }
    }
  }
`;

const Modal = ({ body, dadosProject, setIsModalOpen, isModalOpen }) => {
  const {setMenuHamburguerVaiPraCima} = useContext(UserStorage);

  function outSideClick({ currentTarget, target }) {
    if (target === currentTarget) {
      setIsModalOpen(false);
      setMenuHamburguerVaiPraCima(false)
      body.classList.remove('inative')
    }
  }

  if (dadosProject) {
    return (
      <ModalContainer
        retrato={dadosProject.retrato}
        onClick={outSideClick}
        isModalOpen={isModalOpen}
        className="modal-container"
      >
        <div className={`${isModalOpen ? "active" : ""} modal`}>
          <img src={dadosProject.imgModal} />
        </div>

        <a
          className={isModalOpen ? "active" : ""}
          target="_blank"
          href={dadosProject.link}
        >
          {dadosProject.link}
        </a>
      </ModalContainer>
    );
  } else return null;
};

export default Modal;
