// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhpCTgV_rokFmMYzpaLybRlPen1wdudrA",
    authDomain: "twitter-profile-images.firebaseapp.com",
    projectId: "twitter-profile-images",
    storageBucket: "twitter-profile-images.appspot.com",
    messagingSenderId: "216208027974",
    appId: "1:216208027974:web:17074021aa1e494082b547",
    measurementId: "G-TJX5QZE8DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;