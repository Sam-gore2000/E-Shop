// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
  apiKey: "AIzaSyCk8bPgdXWe9DKdas2qwZC3wl_vetauOZs",
  authDomain: "e-shop-e8e32.firebaseapp.com",
  projectId: "e-shop-e8e32",
  storageBucket: "e-shop-e8e32.appspot.com",
  messagingSenderId: "848239786064",
  appId: "1:848239786064:web:16caedbc6fb1ea5136b955"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;