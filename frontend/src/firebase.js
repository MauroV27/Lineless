// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Ihyo8qQThbIUFpv4Cf3DMIc36QsWThw",
  authDomain: "lineless-argo.firebaseapp.com",
  databaseURL: "https://lineless-argo-default-rtdb.firebaseio.com",
  projectId: "lineless-argo",
  storageBucket: "lineless-argo.appspot.com",
  messagingSenderId: "563270321497",
  appId: "1:563270321497:web:2812f588d40c44f6d9f848",
  measurementId: "G-DZH600RWCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);