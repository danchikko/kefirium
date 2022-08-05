// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoinYPQWNOuxgztVvEuZQFqFbmSgboiNI",
  authDomain: "auth-development-718fc.firebaseapp.com",
  projectId: "auth-development-718fc",
  storageBucket: "auth-development-718fc.appspot.com",
  messagingSenderId: "1020950913601",
  appId: "1:1020950913601:web:23a5870412d851a716dcc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app