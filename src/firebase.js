// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5aId7dPPbyCrhF2ycJiAfxwiu7NwJU6I",
  authDomain: "login-signup-90d18.firebaseapp.com",
  projectId: "login-signup-90d18",
  storageBucket: "login-signup-90d18.appspot.com",
  messagingSenderId: "627663652924",
  appId: "1:627663652924:web:0b40a3daaa216092e31b39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Google Sign-In
// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info
//       const user = result.user;
//       console.log(token, user);
//     })
//     .catch((error) => {
//       // Handle errors here
//       console.error(error);
//     });
// };

export default app;
