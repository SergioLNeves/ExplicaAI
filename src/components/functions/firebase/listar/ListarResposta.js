import { collection, getDocs, doc, query } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const ListarRespostas = async (perguntaId) => {
  try {
    const perguntaRef = doc(db, "pergunta", perguntaId);
    const respostasQuery = query(collection(perguntaRef, "respostas"));
    
    const respostasSnapshot = await getDocs(respostasQuery);

    const respostas = [];

    respostasSnapshot.forEach((doc) => {
      const resposta = {
        id: doc.id,
        ...doc.data(),
      };
      respostas.push(resposta);
    });

    return respostas;
  } catch (error) {
    console.error("Erro ao listar as respostas:", error);
    return [];
  }
};
