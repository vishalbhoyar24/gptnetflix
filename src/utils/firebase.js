// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeRmicI-f3rcms15wRqplN-k--zQ8Npqo",
  authDomain: "netflixgpt-f9f14.firebaseapp.com",
  projectId: "netflixgpt-f9f14",
  storageBucket: "netflixgpt-f9f14.appspot.com",
  messagingSenderId: "191297798735",
  appId: "1:191297798735:web:d328ee3cd8b816f531603a",
  measurementId: "G-W4T7L2Y58T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
