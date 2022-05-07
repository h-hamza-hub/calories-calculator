// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// todo: use .env
const firebaseConfig = {
    apiKey: "AIzaSyAQ9eKbj5HkX-aR6HVI_CsrQPZPtf-JlwU",
    authDomain: "calories-tracker-97418.firebaseapp.com",
    projectId: "calories-tracker-97418",
    storageBucket: "calories-tracker-97418.appspot.com",
    messagingSenderId: "1001498706771",
    appId: "1:1001498706771:web:8246a9bc72d94e6cf357a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleSignin = async () => {
    try {
        const gUser = await signInWithPopup(auth, provider);

        console.log(gUser);
    } catch(e) {
        console.log("Google auth failed" , e);
    }
}

const googleSignout = async () => {
    try {
        const gUser = await signOut(auth);

        console.log(gUser);
    } catch(e) {
        console.log("Google auth signout failed" , e);
    }
}

export {
    app,
    auth,
    googleSignin,
    googleSignout,
}