// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDbtYY1Mn__56QwwDyZFTpU_zFoQj9TUmg",
  authDomain: "frontendtest-117b4.firebaseapp.com",
  projectId: "frontendtest-117b4",
  storageBucket: "frontendtest-117b4.appspot.com",
  messagingSenderId: "66859578142",
  appId: "1:66859578142:web:d6d49477e18c7189954f0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
