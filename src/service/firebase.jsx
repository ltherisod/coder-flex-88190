// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcPQTGacRbI4_gKfcrL6L6uEYgrgTn2oI",
  authDomain: "coder-flex-88190.firebaseapp.com",
  projectId: "coder-flex-88190",
  storageBucket: "coder-flex-88190.firebasestorage.app",
  messagingSenderId: "521389436294",
  appId: "1:521389436294:web:790bb089f182ffc1825007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)