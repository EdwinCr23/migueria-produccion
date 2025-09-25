import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgFX0rYYIo5FW4qorlzIHaANA3AD889sU",
    authDomain: "la-migueria-c4c1b.firebaseapp.com",
    projectId: "la-migueria-c4c1b",
    storageBucket: "la-migueria-c4c1b.firebasestorage.app",
    messagingSenderId: "301588459771",
    appId: "1:301588459771:web:843afbcb3fc0be6c43c05e",
    measurementId: "G-23M33YKF0Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
