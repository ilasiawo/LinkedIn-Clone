import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ3SHks90IhndXR_gsZ0du4OAv--kAxb8",
    authDomain: "linkedin-clone-878c1.firebaseapp.com",
    projectId: "linkedin-clone-878c1",
    storageBucket: "linkedin-clone-878c1.appspot.com",
    messagingSenderId: "105158209384",
    appId: "1:105158209384:web:c981ce4b4497c2ae7770dd",
    measurementId: "G-FYG92SWVQZ"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();

export{ db,auth };