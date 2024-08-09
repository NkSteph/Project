

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOi9tUJ1CzzbK0TX9FDWBzWWV46UzU-DQ",
  authDomain: "login-43cfb.firebaseapp.com",
  projectId: "login-43cfb",
  storageBucket: "login-43cfb.appspot.com",
  messagingSenderId: "693485979181",
  appId: "1:693485979181:web:2ae50d8f1567b83bb21aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const login = document.getElementById("submit");

login.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);
    } )