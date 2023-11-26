import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const ListarPerguntas = async () => {
  try {
    const q = collection(db, "pergunta");
    const querySnapshot = await getDocs(q);

    const pergunta = [];

    querySnapshot.forEach((doc) => {
      const post = {
        id: doc.id,
        ...doc.data(),
      };
      pergunta.push(post);
    });

    return pergunta;
  } catch (error) {
    console.error("Erro ao listar os pergunta:", error);
    return [];
  }
};
