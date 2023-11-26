import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const deletarResposta = async (perguntaId, respostaId) => {
  try {
    const perguntaIdString = String(perguntaId)
    const respostasCollectionRef = collection(db, "pergunta", perguntaIdString, "respostas");
    // const respostaIdString = "2"
    const respostaDocRef = doc(respostasCollectionRef, respostaId);
    await deleteDoc(respostaDocRef);
  } catch (err) {
    console.error("Erro ao deletar resposta:", err);
  }
};
