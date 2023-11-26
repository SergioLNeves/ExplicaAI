import { doc, deleteDoc, collection, getDocs, query,} from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const deletarPergunta = async (perguntaId) => {
  try {
    // Deletar documentos da subcoleção 'respostas'
    const respostasQuery = query(collection(db, "pergunta", perguntaId.toString(), "respostas"));
    const respostasDocs = await getDocs(respostasQuery);
        respostasDocs.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    // Deletar a pergunta principal
    const perguntaRef = doc(db, "pergunta", perguntaId.toString());
    await deleteDoc(perguntaRef);
    console.log(`Pergunta com ID ${perguntaId} e subcoleção 'respostas' deletadas com sucesso!`);
  } catch (error) {
    console.error("Erro ao deletar pergunta:", error);
    throw error;
  }
};
