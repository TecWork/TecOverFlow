import { collection,query, where, getDoc, addDoc, setDoc, doc, Timestamp, updateDoc, runTransaction } from "firebase/firestore";
import { db } from "../../../firebase";

export default  async function leerDoc(req,res)  {
  const { id } = req.query;

  getDoc(doc(db, "Preguntas", id )).then(docSnap => {
      if (docSnap.exists()) {
        /* console.log("Document data:", docSnap.data()); */
        const data = docSnap.data();
        return res.json({data})
      } else {
        console.log("No such document!");
      }
  })
}
