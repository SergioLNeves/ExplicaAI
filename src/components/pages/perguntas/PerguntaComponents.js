import React from "react";
import Grid1Perguntas from "./GridsPerguntas/Grid1Perguntas";
import Grid2Perguntas from "./GridsPerguntas/Grid2Perguntas";

function Perguntas() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 mt-32 min-w-full min-h-screen">
        <div><Grid1Perguntas /></div>
        <div className="mt-5 md:mt-0">
          <Grid2Perguntas/>
          </div>
      </div>
    </div>
  );
}

export default Perguntas;
