
import { db } from "@/firebase";
import { data } from "autoprefixer";
import axios from "axios";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { verify } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

function getCantRespuestas(idPre) {
    return new Promise((resolve, reject) => {
      getDoc(doc(db, "Preguntas", idPre)).then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const data = docSnap.data();
          const cantRespuestas = data.cantRespuestas;
          resolve(cantRespuestas);
        } else {
          console.log("No such document!");
          reject(new Error("No such document!"));
        }
      });
    });
  }


export default function PostQuestion(req, res) {
    const { titulo, materia, contenido, id } = req.body;
    const { TecOverFlowT } = req.cookies
    const user = verify(TecOverFlowT, 'secretkey')

    getCantRespuestas(id).then((cantRespuestas) => {
        const currentDate = new Date();
        try {
            const docRef = setDoc(doc(db, "Preguntas", id), {
                id: id,
                titulo: titulo,
                materia: materia,
                contenido: contenido,
                fecha: currentDate,
                usuario: user.Id,
                nombreUsuario: user.NomCompleto,
                photoURL: user.Foto,
                cantRespuestas: cantRespuestas,
            });
            console.log("Document written with ID: ", docRef.id);
            return res.status(200).json({ message: 'Pregunta publicada' })
          } catch (e) {
            console.error("Error adding document: ", e);
        }
    });
    // Datos del usuario
   /* 
    console.log(id)
    const { TecOverFlowT } = req.cookies
    const user = verify(TecOverFlowT, 'secretkey')
    // Datos de la pregunta
    const currentDate = new Date();
    try {
        const docRef = setDoc(doc(db, "Preguntas", id), {
            id: id,
            titulo: titulo,
            materia: materia,
            contenido: contenido,
            fecha: currentDate,
            usuario: user.Id,
            nombreUsuario: user.NomCompleto,
            photoURL: user.Foto,
            cantRespuestas: cantidadRespuestas,
        });
        console.log("Document written with ID: ", docRef.id);
        return res.status(200).json({ message: 'Pregunta publicada' })
      } catch (e) {
        console.error("Error adding document: ", e);
    } */
}

