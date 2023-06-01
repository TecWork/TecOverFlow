import { collection, getDoc, addDoc, setDoc, doc, Timestamp, updateDoc, runTransaction } from "firebase/firestore";
import { db } from "../../../firebase";

export default function leerDoc(req,res)  {
    getDoc(doc(db, "Preguntas", "pregunta 2")).then(docSnap => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const data = docSnap.data();
          return res.json({data})
        } else {
          console.log("No such document!");
        }
    })
}


