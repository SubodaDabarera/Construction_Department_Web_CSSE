// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgczhcGOY9hh_skJ18mJ8Sl79YiXEEK4g",
    authDomain: "csseconstruction.firebaseapp.com",
    projectId: "csseconstruction",
    storageBucket: "csseconstruction.appspot.com",
    messagingSenderId: "423293153513",
    appId: "1:423293153513:web:974d89d3fc1e0cc4f4c078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;
