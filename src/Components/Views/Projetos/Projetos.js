import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import ProjetoItem from "./ProjetoItem";
import { ProjetosContainer } from "./ProjetosStyle";
import { UserStorage } from '../../../Context/UserContext'

const Projetos = () => {
  const {setMenuHamburguerVaiPraCima} = useContext(UserStorage);
  const [projetos, setProjetos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dadosProject, setDadosProject] = useState();

  const body = document.querySelector('body')


  useEffect(() => {
    fetch("./projetos.json")
      .then((r) => r.json())
      .then((projetos) => setProjetos(projetos));
  }, []);

  function openModal(project) {
    setIsModalOpen(true);
    setDadosProject(projetos[project]);
    setMenuHamburguerVaiPraCima(true)
    body.classList.add('inative')
  }

  return (
    <>
      <ProjetosContainer>
        {projetos.map((projeto, index) => (
          <ProjetoItem
            key={`projeto${index}`}
            openModal={openModal}
            projeto={projeto}
            index={index}
          />
        ))}
      </ProjetosContainer>
      <Modal
        body={body}
        dadosProject={dadosProject}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Projetos;
