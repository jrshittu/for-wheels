// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDHr7BGNRhgK44vd-x8FiQpWtDLTtEwVo",
  authDomain: "parkease-b118c.firebaseapp.com",
  projectId: "parkease-b118c",
  storageBucket: "parkease-b118c.appspot.com",
  messagingSenderId: "250980111221",
  appId: "1:250980111221:web:1ae8b71b42fa732e0c393c",
  measurementId: "G-9P8GG1G4MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
