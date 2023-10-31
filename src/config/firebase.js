// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDCyv03DQtWAVXHSWgfgCe76oFCbeCvcE",
  authDomain: "vite-contact-61e74.firebaseapp.com",
  projectId: "vite-contact-61e74",
  storageBucket: "vite-contact-61e74.appspot.com",
  messagingSenderId: "5121702334",
  appId: "1:5121702334:web:6cf19e5fdd71076d52a1ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);