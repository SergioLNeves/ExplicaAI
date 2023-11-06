import React from "react";
import CaixaDePergunta from "../../../functions/forms/CaixaDePergunta";

function Grid1Home() {


  return (
    <div>
      <div className="grid content-center min-w-full min-h-screen">
        <div className="mx-7 mt-20 sm:mx-28 lg:mx-44 xl:mx-60 ">
          <p className="font-black text-zinc-950 text-start text-4xl sm:text-5xl md:text-6xl ">
            Tire suas dúvidas com a comunidade
          </p>
        </div>
        <div className="mx-7 mt-3 sm:mx-28 sm:mt-6 lg:mx-44 xl:mx-60 ">
          <p className="font-normal text-zinc-900 text-sm text-start sm:text-lg md:text-xl ">
          <span className="font-medium text-indigo-950">EXPLICA.AI </span>é uma comunidade de compartilhamento de conhecimento onde
            diversos estudantes e especialistas colaboram para solucionar e
            explicar as tarefas escolares mais desafiadoras.
          </p>
        </div>
        <div className="mx-7 mt-5 sm:mx-28 sm:mt-6 lg:mx-44 xl:mx-60  justify-center">
          <CaixaDePergunta />
        </div>
      </div>
    </div>
  );
}
export default Grid1Home;
