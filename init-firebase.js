// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Euds4TQGcDRm9kkmpXnHq0pCMDQWyjg",
  authDomain: "waiting-list-7256a.firebaseapp.com",
  projectId: "waiting-list-7256a",
  storageBucket: "waiting-list-7256a.appspot.com",
  messagingSenderId: "592190998097",
  appId: "1:592190998097:web:1a675c98f18478fa635a70",
  measurementId: "G-92D79GVRDL",
  databaseURL:
    "https://waiting-list-7256a-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
