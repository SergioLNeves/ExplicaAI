import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const ListarBiblioteca = async () => {
  try {
    const q = collection(db, "biblioteca");
    const querySnapshot = await getDocs(q);

    const biblioteca = [];

    querySnapshot.forEach((doc) => {
      const post = {
        id: doc.id,
        ...doc.data(),
      };
      biblioteca.push(post);
    });

    return biblioteca;
  } catch (error) {
    console.error("Erro ao listar os biblioteca:", error);
    return [];
  }
};
