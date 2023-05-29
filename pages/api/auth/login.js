import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { db } from "@/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function loginHandler(req, res) {
  const { displayName, email, photoURL, uid } = req.body;
  const currentDate = new Date();
  try {
    getDoc(doc(db, "Usuarios", uid)).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("se encontro el usuario");
      } else {
        console.log("No such Usuario!");
        try {
          const docRef = setDoc(doc(db, "Usuarios", uid), {
            Nombre: displayName,
            Email: email,
            Foto: photoURL,
            FechaRegistro: currentDate,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    });
  } catch (e) {
    console.error("Error getting document: ", e);
  }

  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      Email: email,
      NomCompleto: displayName,
      Foto: photoURL,
      Id: uid,
    },
    "secretkey"
  ); // el secretkey debe ser una variable de entorno

  const serializedToken = serialize("TecOverFlowT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
    path: "/",
  });

  res.setHeader("Set-Cookie", serializedToken);
  return res.status(200).json(displayName);
}
