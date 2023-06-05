
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";


export default async function DeleteQuestion(req, res) {
    const { id } = req.query;
    console.log('entro', id)
    await deleteDoc(doc(db, "Preguntas", id));
    res.status(200).json({ message: "Question deleted successfully" });
}