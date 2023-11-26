import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/estaticos/footer/Footer";
import Home from "./components/pages/home/HomeContents";
import NavbarSimples from "./components/estaticos/navbar/Navbar";
import Biblioteca from "./components/pages/biblioteca/BibliotecaContents";
import Perguntas from "./components/pages/perguntas/PerguntaComponents";
import DetalhesPergunta from './components/pages/perguntasDetalhes/PerguntasDetalhesComponents';



function App() {
  return (
    <Router>
      <NavbarSimples/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Biblioteca" element={<Biblioteca />} />
          <Route path="/Perguntas" element={<Perguntas />} />
          <Route path="/pergunta/:id" element={<DetalhesPergunta />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
