import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY ,
  authDomain: process.env.REACT_APP_AUTHDOMAIN ,
  databaseURL: process.env.REACT_APP_DATABASEURL ,
  projectId: process.env.REACT_APP_PROJECTID ,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
  appId: process.env.REACT_APP_APPID ,
}

// const firebaseConfig = {
//   apiKey: "AIzaSyBTMFV6yfxdMLjfPMu1whdOXvPijEU8dBM",
//   authDomain: "react-cursos-eaa92.firebaseapp.com",
//   databaseURL: "https://react-cursos-eaa92.firebaseio.com",
//   projectId: "react-cursos-eaa92",
//   storageBucket: "react-cursos-eaa92.appspot.com",
//   messagingSenderId: "145065784530",
//   appId: "1:145065784530:web:b7771fcd11c613f71de90b",
// };

// // const firebaseConfigTesting = {
// //   apiKey: "AIzaSyAGhDL5r0KRhI5yBMdBSbiz7KJTr5VMwjE",
// //   authDomain: "ssfb-a2e50.firebaseapp.com",
// //   databaseURL: "https://ssfb-a2e50.firebaseio.com",
// //   projectId: "ssfb-a2e50",
// //   storageBucket: "ssfb-a2e50.appspot.com",
// //   messagingSenderId: "1086206824124",
// //   appId: "1:1086206824124:web:4fd4b6bf8f6ad60ecdcab9",
// // };

// // if (process.env.NODE_ENV === "test") {
// //   // testing
// //   firebase.initializeApp(firebaseConfigTesting);
// // } else {
// //   // develop
// //   firebase.initializeApp(firebaseConfig);
// // }

// grabar info

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
