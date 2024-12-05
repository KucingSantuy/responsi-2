// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzE5_l8puNuK6O0FBlBwzhIUTgSGzxdBU",
    authDomain: "vue-firebase-53457.firebaseapp.com",
    projectId: "vue-firebase-53457",
    storageBucket: "vue-firebase-53457.firebasestorage.app",
    messagingSenderId: "155277307836",
    appId: "1:155277307836:web:24cff410ca496c4e8e85b9"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };