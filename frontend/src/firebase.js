import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// your config (same as yours)
const firebaseConfig = {
  apiKey: "AIzaSyBJw12KetC7XEIP9JymuL3PQe5R6Q5aJY0",
  authDomain: "astitva-d2bee.firebaseapp.com",
  projectId: "astitva-d2bee",
  storageBucket: "astitva-d2bee.firebasestorage.app",
  messagingSenderId: "745544066258",
  appId: "1:745544066258:web:d76ca401c0a1646422b90b",
};

// initialize app
const app = initializeApp(firebaseConfig);

// 🔥 CONNECT FIRESTORE DATABASE
export const db = getFirestore(app);