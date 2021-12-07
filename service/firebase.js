import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIPG7e4pQnyxXGNGyj2VYceteBSXTh5DY",
  authDomain: "ores-web-app.firebaseapp.com",
  databaseURL:
    "https://ores-web-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ores-web-app",
  storageBucket: "ores-web-app.appspot.com",
  messagingSenderId: "109552986072",
  appId: "1:109552986072:web:1c652e78e2ad666868b4ad",
  measurementId: "G-RQ5JSJEY8S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
