// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgHuP-Yy-T-yvHAxWVhNhuPauBYZwRjy0",
    authDomain: "product-inventory-f466c.firebaseapp.com",
    projectId: "product-inventory-f466c",
    storageBucket: "product-inventory-f466c.appspot.com",
    messagingSenderId: "537570905709",
    appId: "1:537570905709:web:47eba02b45a537db3cf964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;