import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDm3OYtS4ngKO955JpisXCJnszqi2klotc",
  authDomain: "props-state-firebase.firebaseapp.com",
  projectId: "props-state-firebase",
  storageBucket: "props-state-firebase.appspot.com",
  messagingSenderId: "436500817074",
  appId: "1:436500817074:web:51682d2c471fe20ea695ab",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
