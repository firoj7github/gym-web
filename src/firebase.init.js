// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoDndX1QM_tEAUp2cywx0j7FJC9WBVzfs",
  authDomain: "manufecture-web.firebaseapp.com",
  projectId: "manufecture-web",
  storageBucket: "manufecture-web.appspot.com",
  messagingSenderId: "552259364141",
  appId: "1:552259364141:web:afc8b0bf6346ce82169fa4",
  measurementId: "G-SMK3K4R3ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth(app);
export default auth;