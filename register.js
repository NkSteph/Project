import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVO2PGQFYUunYc6QeTSckrZD0sNy1pcc8",
    authDomain: "register-56323.firebaseapp.com",
    projectId: "register-56323",
    storageBucket: "register-56323.appspot.com",
    messagingSenderId: "717246498078",
    appId: "1:717246498078:web:4109ec4938f8beacc5750f"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analyitcs = getAnalytics(app);
const register = document.getElementById("submit");
const auth = getAuth();

register.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
     
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("success")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode)
    console.log(errorMessage)
    // ..
  });

  console.log(email,password);
window.location.href = "portfolio.html"
} )