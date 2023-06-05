
import { db } from "@/firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { verify } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';


function getCantRespuestas(idPre) {
    return new Promise((resolve, reject) => {
      getDoc(doc(db, "Preguntas", idPre)).then((docSnap) => {
        if (docSnap.exists()) {
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

export default function sendQuestion(req, res) {
    const { TecOverFlowT } = req.cookies
    const user = verify(TecOverFlowT, 'secretkey')
    console.log('entro')
    const id = uuidv4();
    const { idPre, contenidoPre } = req.body;

    let respuestas = 0;
    getCantRespuestas(idPre).then((cantRespuestas) => {
        if (isNaN(cantRespuestas)) {
            cantRespuestas = 0;
        }
        cantRespuestas = cantRespuestas + 1;
        const preguntaRef = doc(db, "Preguntas", idPre);
        updateDoc(preguntaRef, {
            cantRespuestas: cantRespuestas,
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
    });


    /* if (isNaN(cantRespuestas)) {
        cantRespuestas = 0;
    } */
   /*  cantRespuestas = cantRespuestas * 1;
    cantRespuestas = cantRespuestas + 1;

    console.log('cantRespuestas', cantRespuestas)
    console.log(typeof cantRespuestas) 

    const preguntaRef = doc(db, "Preguntas", idPre);
    updateDoc(preguntaRef, {
        cantRespuestas: cantRespuestas,
    }); */

/* 
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
    } */
} 