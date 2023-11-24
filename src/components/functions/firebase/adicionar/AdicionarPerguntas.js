import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

// export const adicionarPergunta = async (materia, pergunta) => {
//   try {
//     // Obter os documentos ordenados por ID em ordem decrescente (para obter o último ID)
//     const q = query(collection(db, "pergunta"), orderBy("id", "desc"), limit(1));
//     const querySnapshot = await getDocs(q);

//     let newId;

//     // Se houver algum documento, obter o último ID e incrementá-lo
//     if (querySnapshot.size > 0) {
//       newId = querySnapshot.docs[0].data().id + 1;
//     } else {
//       // Se não houver documentos, começar com o ID 1
//       newId = 1;
//     }

//     // Adicionar um novo documento com o ID sequencial
//     const docRef = await addDoc(collection(db, "pergunta"), {
//       id: newId,
//       materia,
//       pergunta,
//     });

//     console.log("Pergunta adicionada com sucesso. Novo ID:", newId);
//   } catch (error) {
//     console.error("Erro ao adicionar a pergunta:", error);
//   }
// };

const getNextId = async (collectionName) => {
  const counterDocRef = doc(db, "counters", collectionName);
  const counterDocSnapshot = await getDoc(counterDocRef);

  if (counterDocSnapshot.exists()) {
    const currentCount = counterDocSnapshot.data().count;
    const nextCount = currentCount + 1;
    await updateDoc(counterDocRef, {
      count: nextCount,
    });
    return nextCount;
  } else {
    await setDoc(counterDocRef, { count: 1 });
    return 1;
  }
};

export const adicionarPergunta = async (materia, pergunta) => {
  const nextId = await getNextId("pergunta");
  const docRef = doc(db, "pergunta", nextId.toString());
  let data = {
    id: nextId,
    materia: materia,
    pergunta: pergunta,
  };
  try {
    await setDoc(docRef, data);
  } catch (err) {
    console.log(err);
  }
};
