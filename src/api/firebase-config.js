// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArLSG2rE3096RCO7L9ld77vdbdN-U91Cg",
  authDomain: "crazee-burger-projet-c0eac.firebaseapp.com",
  projectId: "crazee-burger-projet-c0eac",
  storageBucket: "crazee-burger-projet-c0eac.appspot.com",
  messagingSenderId: "639567611082",
  appId: "1:639567611082:web:21031eb3c14ba512836033",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // pour se connecter à notre compte firebase
export const db = getFirestore(app); // pour se connecter à notre base de données firestore
