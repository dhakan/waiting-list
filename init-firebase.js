// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqvPv_3zag5Kz085JiMc8zbU9GgnIREcs",
  authDomain: "waiting-list-7f994.firebaseapp.com",
  databaseURL:
    "https://waiting-list-7f994-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "waiting-list-7f994",
  storageBucket: "waiting-list-7f994.appspot.com",
  messagingSenderId: "962130298723",
  appId: "1:962130298723:web:ffee41c3ac9dc03a857556",
  measurementId: "G-PPSYVGNFDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
