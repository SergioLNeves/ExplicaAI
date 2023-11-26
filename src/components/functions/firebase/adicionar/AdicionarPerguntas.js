import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";


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
