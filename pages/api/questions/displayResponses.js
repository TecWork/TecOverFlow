import { collection,getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export default async function DisplayResponses(req, res) {
    const { Id } = req.query;
    /* const respuestasRef = collection(db, "Respuestas");
    const respuestasSnapshot = await getDocs(respuestasRef);
    const respuestas = {};
    respuestasSnapshot.forEach((doc) => {
      respuestas[doc.id] = doc.data();
    });
    console.log()
    return res.json({respuestas}); */
    const respuestasRef = collection(db, "Respuestas");
    const q = query(respuestasRef, where("IdPregunta", "==", Id));
    const querySnapshot = await getDocs(q);
    const respuestas = {};
    querySnapshot.forEach((doc) => {
      respuestas[doc.id] = doc.data();
    }
    );
    return res.json({respuestas});
  }