import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const listarPerguntas = async () => {
  try {
    const q = collection(db, "perguntas");
    const querySnapshot = await getDocs(q);

    const perguntas = [];

    querySnapshot.forEach((doc) => {
      const post = {
        id: doc.id,
        ...doc.data(),
      };
      perguntas.push(post);
    });

    return perguntas;
  } catch (error) {
    console.error("Erro ao listar os perguntas:", error);
    return [];
  }
};
