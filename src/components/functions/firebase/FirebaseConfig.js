// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPQcZJol3qTArMWQTvn3zyA9sK2gEfmNY",
    authDomain: "uninterprojeto.firebaseapp.com",
    projectId: "uninterprojeto",
    storageBucket: "uninterprojeto.appspot.com",
    messagingSenderId: "239772128805",
    appId: "1:239772128805:web:b63702a84f6a98220291cc"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
