// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 //apiKey: "AIzaSyBvP98u92AOPIAaknTtYWv4iYPcQylm34E",
   //apiKey: import.meta.env.VITE_API_KEY,
const firebaseConfig = {
  apiKey:"AIzaSyBvP98u92AOPIAaknTtYWv4iYPcQylm34E",
  authDomain: "coder-flex-81680.firebaseapp.com",
  projectId: "coder-flex-81680",
  storageBucket: "coder-flex-81680.firebasestorage.app",
  messagingSenderId: "55182236724",
  appId: "1:55182236724:web:bbc0680879a5abc4e63e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)