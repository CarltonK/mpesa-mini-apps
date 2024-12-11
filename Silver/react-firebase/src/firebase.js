// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwh2s8sojsJd6OkHdO-8Ou5iR-s0eST1c",
  authDomain: "miniapps-db10b.firebaseapp.com",
  projectId: "miniapps-db10b",
  storageBucket: "miniapps-db10b.firebasestorage.app",
  messagingSenderId: "749670047100",
  appId: "1:749670047100:web:8c379eda01b35ebffd58f9",
  measurementId: "G-0KLNV62B7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };