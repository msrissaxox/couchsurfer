// src/firebase/config.js
// Firebase initialization and config.
// All Firebase credentials

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "couch-surfer-new.firebaseapp.com",
  projectId: "couch-surfer-new",
  storageBucket: "couch-surfer-new.firebasestorage.app",
  messagingSenderId: "501160364958",
  appId: "1:501160364958:web:b2ece83d4545dcc8db648f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
