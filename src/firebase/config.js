import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb15crWeJgNBrZ_YehnIWy3W00CLY09zc",
  authDomain: "react-ecommerce-60030.firebaseapp.com",
  projectId: "react-ecommerce-60030",
  storageBucket: "react-ecommerce-60030.appspot.com",
  messagingSenderId: "867319808418",
  appId: "1:867319808418:web:ef9a3e3cbd1e5b15ba32fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializamos la base de datos
export const db = getFirestore(app);