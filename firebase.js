import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUQZjzwSPMCPZkwTsh5RDwPyD9UmYi5sA",
    authDomain: "clone-71978.firebaseapp.com",
    projectId: "clone-71978",
    storageBucket: "clone-71978.appspot.com",
    messagingSenderId: "46809259949",
    appId: "1:46809259949:web:2f37bea70f4ebb074e0b24",
    measurementId: "G-WCM9NQ5VWS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};