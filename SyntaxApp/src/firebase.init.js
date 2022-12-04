// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLbNAYmmnfaqTHccdeR3xkpgPj6zWRK1Q",
  authDomain: "syntax-2e386.firebaseapp.com",
  projectId: "syntax-2e386",
  storageBucket: "syntax-2e386.appspot.com",
  messagingSenderId: "953292305264",
  appId: "1:953292305264:web:715e1f31ebd3e96978d5b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
