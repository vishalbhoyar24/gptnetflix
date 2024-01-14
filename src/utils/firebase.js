// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX4FMaZWRNihRw0vdctNygYB--yCVM8-M",
  authDomain: "gptnetflix-86945.firebaseapp.com",
  projectId: "gptnetflix-86945",
  storageBucket: "gptnetflix-86945.appspot.com",
  messagingSenderId: "215130055998",
  appId: "1:215130055998:web:c0b5487018db3168fab86f",
  measurementId: "G-LF7VZ2P1FW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
