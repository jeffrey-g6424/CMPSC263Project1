import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmEUYPmoupWamUJAZiPfJMYgpPxK0Votw",
  authDomain: "project1-a5d63.firebaseapp.com",
  projectId: "project1-a5d63",
  storageBucket: "project1-a5d63.firebasestorage.app",
  messagingSenderId: "452448420291",
  appId: "1:452448420291:web:808228336ef82d0a9abd76",
  measurementId: "G-NVS3END2XL"
};

// Initialize Firebase
// const analytics = getAnalytics(app);


// // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
// export const storage = getStorage(app);
 export const database = getFirestore(app);
// export const analytics = () => getAnalytics(app);

 export default app