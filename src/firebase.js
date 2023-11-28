// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp3N79n9oHTNRIlNZ5xZigJQ_OEApsaJA",
  authDomain: "durgeshsolanki-01.firebaseapp.com",
  projectId: "durgeshsolanki-01",
  storageBucket: "durgeshsolanki-01.appspot.com",
  messagingSenderId: "244177050561",
  appId: "1:244177050561:web:618454ee521df35e6f2d40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
