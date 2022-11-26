import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3-hHALm7tbsoL3ezF_VSEMHbMLfshqpM",
  authDomain: "calcumacros.firebaseapp.com",
  projectId: "calcumacros",
  storageBucket: "calcumacros.appspot.com",
  messagingSenderId: "553792717547",
  appId: "1:553792717547:web:b2a48b5437f8e673efb4ae",
  measurementId: "G-SNK456MCHX"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();