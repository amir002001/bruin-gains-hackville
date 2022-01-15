// const firebaseConfig = {
//   apiKey: "AIzaSyBs_N5LgBMZddJVuLBQptewiQw0ErkclOo",
//   authDomain: "bruin-gains-hackville.firebaseapp.com",
//   projectId: "bruin-gains-hackville",
//   storageBucket: "bruin-gains-hackville.appspot.com",
//   messagingSenderId: "439984054314",
//   appId: "1:439984054314:web:dbb250ad185dc7017b6353"
// };

// export default firebaseConfig


   
import * as firebase from "firebase/app"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth"
import Firestore from 'firebase/database';
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; 
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBs_N5LgBMZddJVuLBQptewiQw0ErkclOo",
  authDomain: "bruin-gains-hackville.firebaseapp.com",
  projectId: "bruin-gains-hackville",
  storageBucket: "bruin-gains-hackville.appspot.com",
  messagingSenderId: "439984054314",
  appId: "1:439984054314:web:dbb250ad185dc7017b6353"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth;
const db = getFirestore(firebaseApp)
export {signInWithEmailAndPassword}
export {getAuth, onAuthStateChanged}
export {createUserWithEmailAndPassword}
export {db}
export {doc, setDoc,  getDoc, updateDoc }