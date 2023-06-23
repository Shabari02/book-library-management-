// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL4baMie7eMD7AXCxMcwlvroNeKvW9btk",
  authDomain: "library-management-b63f0.firebaseapp.com",
  projectId: "library-management-b63f0",
  storageBucket: "library-management-b63f0.appspot.com",
  messagingSenderId: "418795201239",
  appId: "1:418795201239:web:51af80a83fd2429de3c692",
  measurementId: "G-PBFLXBH192",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
