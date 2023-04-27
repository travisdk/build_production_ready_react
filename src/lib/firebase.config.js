// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGzBoCZ75xKqPF392h4uRicQTgTMmm7wM",
  authDomain: "firestock-66bdc.firebaseapp.com",
  projectId: "firestock-66bdc",
  storageBucket: "firestock-66bdc.appspot.com",
  messagingSenderId: "1062161305725",
  appId: "1:1062161305725:web:baeb6a462f5816dabe6114",
};

// Initialize Firebase
const app = () => {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw Error("No firebase configuration object provided / Add your web apps configuration object to firebase-config.js");
  } else {
    console.log("Firebase initialized");
  }
  return initializeApp(firebaseConfig);
};
export default app;
