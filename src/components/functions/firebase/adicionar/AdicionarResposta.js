import { collection, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const getNextId = async (collectionName) => {
  const counterDocRef = doc(db, "counters", collectionName);
  const counterDocSnapshot = await getDoc(counterDocRef);

  let nextCount;

  if (counterDocSnapshot.exists()) {
    const currentCount = counterDocSnapshot.data().count;
    nextCount = currentCount + 1;
    await updateDoc(counterDocRef, {
      count: nextCount,
    });
  } else {
    nextCount = 1;
    await setDoc(counterDocRef, { count: nextCount });
  }

  // Convertendo para string após garantir que o próximo valor é um número inteiro
  return nextCount.toString();
};

export const adicionarRespostas = async (perguntaId, respostas) => {
  try {
    // Use collection() para referenciar a subcoleção "respostas" sob o documento "pergunta/4"
    const perguntaDocRef = doc(db, "pergunta", perguntaId);
    const respostasCollectionRef = collection(perguntaDocRef, "respostas");
    const nextId = await getNextId("respostas");

    // Adicione as respostas à subcoleção
    for (const resposta of respostas) {
      // Use setDoc() para especificar o ID do documento
      await setDoc(doc(respostasCollectionRef, nextId), { id: nextId, resposta });
    }

    console.log("Respostas adicionadas com sucesso!");
  } catch (err) {
    console.error("Erro ao adicionar respostas:", err);
  }
};
