import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsTRwCD-_ifUnxVneNWvo0vAOYLMbhiuY",
    authDomain: "ciem-58bd7.firebaseapp.com",
    projectId: "ciem-58bd7",
    storageBucket: "ciem-58bd7.appspot.com",
    messagingSenderId: "271239075100",
    appId: "1:271239075100:web:5428cb0055e95448a816d9",
    measurementId: "G-40T04ZHKPN"
  };

  const fb = firebase.initializeapp(firebaseConfig);

//CON
export const db = fb.firestore();