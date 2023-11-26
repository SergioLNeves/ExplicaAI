import React, { useState } from "react";
import CustomModal from "./ModalBiblioteca";
import { adicionarPost } from "../../firebase/adicionar/AdicionarLivros";


const BotaoComModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleButtonClick = () => {
    handleOpenModal();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Adicionar Livro</button>

      <CustomModal isOpen={modalIsOpen} onClose={handleCloseModal} adicionarPost={adicionarPost} />
    </div>
  );
};

export default BotaoComModal;
