// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdzPmCerRCf-e2CfvP6Mut7Fcf2J8-91Y",
  authDomain: "netflixgpt-d143e.firebaseapp.com",
  projectId: "netflixgpt-d143e",
  storageBucket: "netflixgpt-d143e.appspot.com",
  messagingSenderId: "258045545999",
  appId: "1:258045545999:web:56330f66b96185a1741d7a",
  measurementId: "G-N583WGCP95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
