import firebase from "firebase"

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBs_N5LgBMZddJVuLBQptewiQw0ErkclOo",
  authDomain: "bruin-gains-hackville.firebaseapp.com",
  projectId: "bruin-gains-hackville",
  storageBucket: "bruin-gains-hackville.appspot.com",
  messagingSenderId: "439984054314",
  appId: "1:439984054314:web:dbb250ad185dc7017b6353"
};

firebase.initializeApp(firebaseConfig);
export firebase 