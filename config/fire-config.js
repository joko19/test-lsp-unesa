// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2XwkoI0Z4KUXUFDAI6wtZIP9OM-DUGEg",
  authDomain: "lsp-unesa.firebaseapp.com",
  projectId: "lsp-unesa",
  storageBucket: "lsp-unesa.appspot.com",
  messagingSenderId: "126530028052",
  appId: "1:126530028052:web:c3a176a7877c400eab9d01",
  measurementId: "G-JZRY62K8FX"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)
// fireba
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const dbInstance = collection(database, 'history');
// const analytics = getAnalytics(app);