// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzifQI46N0J0UdWzTFIEHr_jJwiUJGtgg",
  authDomain: "auth-project-72366.firebaseapp.com",
  projectId: "auth-project-72366",
  storageBucket: "auth-project-72366.appspot.com",
  messagingSenderId: "237197556869",
  appId: "1:237197556869:web:ed05ccc8e61dae99b83dec",
  measurementId: "G-ZSPVFLVZ3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const fireStoreCore = firebase.firestore();
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };