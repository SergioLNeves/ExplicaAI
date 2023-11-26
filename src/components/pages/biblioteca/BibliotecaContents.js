import React from "react";
import Grid1Biblioteca from "./gridsBiblioteca/Grid1Biblioteca";
import BotaoComModal from "../../functions/forms/modalBiblioteca/ButtonModalBiblioteca";

function Biblioteca() {
  return (
    <div className="container mx-auto">
      <button className="bg-black hover:bg-zinc-900 text-indigo-300 text-xl mt-40 p-3 px-5 rounded-full flex justify-end ">
        <BotaoComModal />
      </button>
      <Grid1Biblioteca />
    </div>
  );
}

export default Biblioteca;
