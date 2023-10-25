import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBq6xGZo-HvYItF8VA1uTVNlTHKuDUVg9M",
  authDomain: "pc-api-7080245489316919201-923.firebaseapp.com",
  projectId: "pc-api-7080245489316919201-923",
  storageBucket: "pc-api-7080245489316919201-923.appspot.com",
  messagingSenderId: "756260526043",
  appId: "1:756260526043:web:172bc2b4b7494ba3eef9fe",
  measurementId: "G-LSN2MT8E4M"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const gProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
