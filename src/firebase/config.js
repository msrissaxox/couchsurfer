// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsv2fQ7hwKOloqLo8dmQTEII3wY0sARwU",
    authDomain: "couch-surfer-new.firebaseapp.com",
    projectId: "couch-surfer-new",
    storageBucket: "couch-surfer-new.firebasestorage.app",
    messagingSenderId: "501160364958",
    appId: "1:501160364958:web:b2ece83d4545dcc8db648f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;