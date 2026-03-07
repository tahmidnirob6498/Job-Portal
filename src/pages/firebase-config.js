// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKaST1lj42IMgqqT7ErsI3MQS8IuwkK2U",
  authDomain: "job-finder-44dbd.firebaseapp.com",
  projectId: "job-finder-44dbd",
  storageBucket: "job-finder-44dbd.firebasestorage.app",
  messagingSenderId: "797509040331",
  appId: "1:797509040331:web:f80ffb786ef1697833c34e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);