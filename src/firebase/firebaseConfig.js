// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_rRmBhVPpA1oeZwgYFAYnwbQTHeUgJto",
  authDomain: "proyecto-final-react-ch-dg.firebaseapp.com",
  projectId: "proyecto-final-react-ch-dg",
  storageBucket: "proyecto-final-react-ch-dg.appspot.com",
  messagingSenderId: "463618604333",
  appId: "1:463618604333:web:aaa30638a090093f2ae7a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);