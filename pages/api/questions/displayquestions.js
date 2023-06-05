import { collection,getDocs, getDoc, addDoc, setDoc, doc, Timestamp, updateDoc, runTransaction } from "firebase/firestore";
import { db } from "../../../firebase";

export default async function DisplayQuestions(req, res) {
    const preguntasRef = collection(db, "Preguntas");
    const preguntasSnapshot = await getDocs(preguntasRef);
    const preguntas = {};
    preguntasSnapshot.forEach((doc) => {
      preguntas[doc.id] = doc.data();
    });
    return res.json({preguntas});
  }