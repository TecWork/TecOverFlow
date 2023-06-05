
import { db } from "@/firebase";
import axios from "axios";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { verify } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';


export default function PostQuestion(req, res) {
    // Datos del usuario
    const { TecOverFlowT } = req.cookies
    const user = verify(TecOverFlowT, 'secretkey')
    // Datos de la pregunta
    const id = uuidv4();
    const { titulo, materia, contenido } = req.body;
    const currentDate = new Date();
    const data = {

        titulo: titulo,
        materia: materia,
        contenido: contenido,
        fecha: currentDate,
        usuario: user.Id
    };
    try {
        const docRef = setDoc(doc(db, "Preguntas", id), {
            id: id,
            titulo: titulo,
            materia: materia,
            contenido: contenido,
            fecha: currentDate,
            usuario: user.Id,
            nombreUsuario: user.NomCompleto,
        });
        console.log("Document written with ID: ", docRef.id);
        return res.status(200).json({ message: 'Pregunta publicada' })
      } catch (e) {
        console.error("Error adding document: ", e);
    }
}

