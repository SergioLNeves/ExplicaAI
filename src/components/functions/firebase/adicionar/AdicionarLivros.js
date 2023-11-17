// Se você estiver usando a versão mais recente do Firebase (v9+)
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const adicionarPost = async (title, image, materia, link) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title,
      image,
      materia,
      link,
    });

    console.log("Livro adicionado com sucesso", docRef.id);
  } catch (error) {
    console.error("Erro ao adicionar o livro:", error);
  }
};
