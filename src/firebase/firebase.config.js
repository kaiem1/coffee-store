// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoDsZ0Z_J5NidPlzAR1DEmlWzfPfK8oG8",
  authDomain: "coffee-store-b211a.firebaseapp.com",
  projectId: "coffee-store-b211a",
  storageBucket: "coffee-store-b211a.firebasestorage.app",
  messagingSenderId: "775884341595",
  appId: "1:775884341595:web:c799d784cea31c2d1c5a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;