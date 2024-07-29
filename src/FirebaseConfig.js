// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyBwyWhqM7ZBUq-ZWXYErMciJMRLoIlVrH0",
  authDomain: "casadomo-92522.firebaseapp.com",
  projectId: "casadomo-92522",
  storageBucket: "casadomo-92522.appspot.com",
  messagingSenderId: "362981896417",
  appId: "1:362981896417:web:e650d493394e778f5f47a0"
};


// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}