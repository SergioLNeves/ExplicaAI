import { collection, addDoc, getDocs, orderBy, limit, query } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const adicionarPost = async (title, image, materia, link) => {
  try {
    // Obter os posts ordenados por ID em ordem decrescente (para obter o último ID)
    const q = query(collection(db, "biblioteca"), orderBy("id", "desc"), limit(1));
    const querySnapshot = await getDocs(q);

    let lastId = 0;

    // Se houver algum post, obter o último ID
    if (querySnapshot.size > 0) {
      querySnapshot.forEach((doc) => {
        lastId = doc.data().id;
      });
    }

    const newId = lastId + 1;

    const docRef = await addDoc(collection(db, "biblioteca"), {
      id: newId,
      title,
      image,
      materia,
      link,
    });

    console.log("Post adicionado com sucesso. Novo ID:", newId);
  } catch (error) {
    console.error("Erro ao adicionar o post:", error);
  }
};
