// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9UyrydjgiGT6c6m4ZpViXnQYQl4gYfPA",
  authDomain: "doctors-appoinment-61772.firebaseapp.com",
  projectId: "doctors-appoinment-61772",
  storageBucket: "doctors-appoinment-61772.appspot.com",
  messagingSenderId: "531659495305",
  appId: "1:531659495305:web:b2b79df65b525be65c3358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
