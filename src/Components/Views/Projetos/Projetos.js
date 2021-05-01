import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ProjetoItem from "./ProjetoItem";
import { ProjetosContainer } from "./ProjetosStyle";

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dadosProject, setDadosProject] = useState();

  useEffect(() => {
    fetch("./projetos.json")
      .then((r) => r.json())
      .then((projetos) => setProjetos(projetos));
  }, []);

  function openModal(project) {
    setIsModalOpen(true);
    setDadosProject(projetos[project]);
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
        dadosProject={dadosProject}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Projetos;
