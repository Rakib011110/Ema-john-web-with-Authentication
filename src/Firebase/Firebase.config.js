// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-YJFnmbNyiLSHYMLSgC06JK7OH7ajNPQ",
    authDomain: "ema-john-with-auth-f8e54.firebaseapp.com",
    projectId: "ema-john-with-auth-f8e54",
    storageBucket: "ema-john-with-auth-f8e54.appspot.com",
    messagingSenderId: "345505513357",
    appId: "1:345505513357:web:3e2ac8834c7ed51f9187c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app