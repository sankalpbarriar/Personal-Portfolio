
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0sx8RgPrtozcIXGKngz8sjSj8ZQF5jsM",
  authDomain: "react-portfolio-sankalp.firebaseapp.com",
  projectId: "react-portfolio-sankalp",
  storageBucket: "react-portfolio-sankalp.appspot.com",
  messagingSenderId: "19105191238",
  appId: "1:19105191238:web:ef18951c37b0c968a44147",
  measurementId: "G-T7ZHRRG7CB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore()
export const database = getDatabase(app);
