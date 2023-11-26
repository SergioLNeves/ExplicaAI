import React, { useState } from "react";

const CustomModal = ({ isOpen, onClose, adicionarPost }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [materia, setMateria] = useState("");
  const [link, setLink] = useState("");

  const handleAddPost = () => {
    adicionarPost(title, image, materia, link);
    onClose();
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? "flex" : "hidden"} mt-20 items-center justify-center`}>
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg p-6 z-10">
        <h2 className="text-2xl mb-4">Adicionar Post</h2>
        <label className="block mb-2">Titulo</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-4 text-center"
        />
        <label className="block mb-2">Imagem</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 mb-4 text-center"
        />
        <label className="block mb-2">Matéria</label>
        <input
          type="text"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          className="w-full border p-2 mb-4 text-center"
        />
        <label className="block mb-2">Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border p-2 mb-4 text-center"
        />
        <button
          onClick={handleAddPost}
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-blue-600"
        >
          Adicionar Post
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
