import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signInWithCustomToken,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: "prime0f.firebaseapp.com",
  projectId: "prime0f",
  storageBucket: "prime0f.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// Matheus do futuro lembra de usar a lib
// https://github.com/csfrequency/react-firebase-hooks/tree/master/auth
export {
  app,
  auth,
  provider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  deleteUser,
  signInWithCustomToken,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
};
