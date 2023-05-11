// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvkSJgIRWNGMa6JSNikG79I-PKJz3A8KI",
  authDomain: "tecoverflow-71224.firebaseapp.com",
  projectId: "tecoverflow-71224",
  storageBucket: "tecoverflow-71224.appspot.com",
  messagingSenderId: "714621120634",
  appId: "1:714621120634:web:a339b3e20772bbc7c84bc3",
  measurementId: "G-ZKK94FXSMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();