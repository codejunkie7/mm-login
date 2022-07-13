// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtyGCBwxPRSleOJw_XazpwVM0lge_G6Lk",
  authDomain: "mm-login-3bbf6.firebaseapp.com",
  projectId: "mm-login-3bbf6",
  storageBucket: "mm-login-3bbf6.appspot.com",
  messagingSenderId: "141832861456",
  appId: "1:141832861456:web:d48c379dd83f09ea891795",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app)

// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);

export { auth, db }; 
