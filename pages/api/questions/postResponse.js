
import { db } from "@/firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { verify } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

export default function sendQuestion(req, res) {
    const { TecOverFlowT } = req.cookies
    const user = verify(TecOverFlowT, 'secretkey')
    console.log('entro')
    const id = uuidv4();
    const { idPre, contenidoPre } = req.body;
    let { cantRespuestas } = req.body;
    let respuestas = 0;
    cantRespuestas = cantRespuestas * 1;
    respuestas = cantRespuestas + 1;
    console.log('cantRespuestas', respuestas)
    console.log(typeof respuestas) 
    const preguntaRef = doc(db, "Preguntas", idPre);
    
    updateDoc(preguntaRef, {
        cantRespuestas: respuestas
    });

    try {
        const docRef = setDoc(doc(db, "Respuestas", id), {
            usuario: user.Id,
            nombreUsuario: user.NomCompleto,
            contenido: contenidoPre,
            IdPregunta: idPre,
            photoURL: user.Foto,
        })
        console.log(' se mando ')
        console.log("Document written with ID: ", docRef.id);
        return res.status(200).json({ message: 'Pregunta publicada' })
        } catch (e) {
        console.error("Error adding document: ", e);
    } 
}