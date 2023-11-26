// ListarDetalhesPergunta.js
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const ListarDetalhesPerguntas = async (perguntaId) => {
  try {
    const perguntaRef = doc(db, "pergunta", perguntaId);
    const perguntaSnapshot = await getDoc(perguntaRef);

    if (perguntaSnapshot.exists()) {
      return {
        id: perguntaSnapshot.data().id,
        materia: perguntaSnapshot.data().materia,
        pergunta: perguntaSnapshot.data().pergunta,
      };
    } else {
      throw new Error("Pergunta não encontrada");
    }
  } catch (error) {
    throw new Error(`Erro ao listar detalhes da pergunta: ${error.message}`);
  }
};
