// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB50vq8Qvag97xLVhkCEKYEyqz0kuR-_Uo",
    authDomain: "contactapp-a6c6e.firebaseapp.com",
    projectId: "contactapp-a6c6e",
    storageBucket: "contactapp-a6c6e.appspot.com",
    messagingSenderId: "902643457792",
    appId: "1:902643457792:web:e12c0c42715000d9699de5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);