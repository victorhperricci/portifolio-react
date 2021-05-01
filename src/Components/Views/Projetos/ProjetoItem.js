import React, { memo } from "react";

const ProjetoItem = ({ projeto, openModal, index }) => {
  return (
    <div onClick={() => openModal(index)} className="project_item">
      <button>
        <p>Ver Projeto</p>
      </button>
      <div className="bgc_black"></div>
      <img src={projeto.imgMini} />
    </div>
  );
};

export default memo(ProjetoItem);
