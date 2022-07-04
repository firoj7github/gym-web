// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeTaWKbCa0gvxbg5YbCK83AAtYZvapxgM",
  authDomain: "gym-web-a0522.firebaseapp.com",
  projectId: "gym-web-a0522",
  storageBucket: "gym-web-a0522.appspot.com",
  messagingSenderId: "685497741893",
  appId: "1:685497741893:web:17a60fa0d0aca09469692c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;