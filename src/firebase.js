// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-fea0c.firebaseapp.com",
  projectId: "real-estate-fea0c",
  storageBucket: "real-estate-fea0c.appspot.com",
  messagingSenderId: "783458333337",
  appId: "1:783458333337:web:384b71876902f02f483e08",
  measurementId: "G-68FVD3ENG7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);