import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAidiORyP8cX4QNkfjhZw2QqrhKuu5ZDSo",
  authDomain: "bluegc.firebaseapp.com",
  projectId: "bluegc",
  storageBucket: "bluegc.appspot.com",
  messagingSenderId: "454596258400",
  appId: "1:454596258400:web:6d3b5c34368ffb1cd73105",
  measurementId: "G-P2B5ZJ12DV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const messageDiv = document.getElementById('message');
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = 'login.html';
      messageDiv.textContent ="Logging In...";
      messageDiv.style.color = "black";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      messageDiv.textContent ="Please check your email & password.";
      messageDiv.style.color = "red";
    });
})