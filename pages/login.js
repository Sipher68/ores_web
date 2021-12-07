// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../service/firebase";

// // Configure Firebase.
// const config = {
//   apiKey: "AIzaSyAIPG7e4pQnyxXGNGyj2VYceteBSXTh5DY",
//   authDomain: "ores-web-app.firebaseapp.com",
//   databaseURL:
//     "https://ores-web-app-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "ores-web-app",
//   storageBucket: "ores-web-app.appspot.com",
//   messagingSenderId: "109552986072",
//   appId: "1:109552986072:web:1c652e78e2ad666868b4ad",
//   measurementId: "G-RQ5JSJEY8S",
// };
// firebase.initializeApp(config);

// Config FirebaseUI.
const uiConfig = {
  // Redirect to / after sign-in is succesful. Can provide callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  //Auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>ORES Login</h1>
      <p>Please sign-in</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
