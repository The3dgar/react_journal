import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTMFV6yfxdMLjfPMu1whdOXvPijEU8dBM",
  authDomain: "react-cursos-eaa92.firebaseapp.com",
  databaseURL: "https://react-cursos-eaa92.firebaseio.com",
  projectId: "react-cursos-eaa92",
  storageBucket: "react-cursos-eaa92.appspot.com",
  messagingSenderId: "145065784530",
  appId: "1:145065784530:web:b7771fcd11c613f71de90b",
};

firebase.initializeApp(firebaseConfig);

// grabar info

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase
}