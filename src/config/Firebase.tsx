import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyD92CoJfCUugqNxcLhG8_bKuHJaJFyoohU",
    authDomain: "otp-auth-bfdd7.firebaseapp.com",
    projectId: "otp-auth-bfdd7",
    storageBucket: "otp-auth-bfdd7.appspot.com",
    messagingSenderId: "961545990293",
    appId: "1:961545990293:web:8b8fd24beee9911e856b9c",
    measurementId: "G-CCGDZDZ1DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)