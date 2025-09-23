// src/firebaseConfig.js (Create this file)

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Realtime Database API

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // <--- Firebase Console-la irundhu eduthu replace pannu
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // <--- Firebase Console-la irundhu eduthu replace pannu
  databaseURL: "https://vital-e8117-default-rtdb.asia-southeast1.firebasedatabase.app"
, // <--- Idhu dhaan unga screenshot-la irukkura URL
  projectId: "YOUR_PROJECT_ID", // <--- Firebase Console-la irundhu eduthu replace pannu
  storageBucket: "YOUR_PROJECT_ID.appspot.com", // <--- Firebase Console-la irundhu eduthu replace pannu
  messagingSenderId: "YOUR_SENDER_ID", // <--- Firebase Console-la irundhu eduthu replace pannu
  appId: "YOUR_APP_ID" // <--- Firebase Console-la irundhu eduthu replace pannu
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// You don't need to explicitly export 'db' here unless you need it in many places.
// We get the database instance directly in the component using getDatabase(app).

export { app }; // Export the initialized Firebase app instance