// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgmXlhDTspTYN39oz_7-l0m5yx8KDNNAI",
  authDomain: "producthunt-cabbe.firebaseapp.com",
  projectId: "producthunt-cabbe",
  storageBucket: "producthunt-cabbe.appspot.com",
  messagingSenderId: "88034095805",
  appId: "1:88034095805:web:54a1d813fd96e9edaa7dd4",
};

// Initialize Firebase
const AppFirebase = initializeApp(firebaseConfig);
export default AppFirebase;
