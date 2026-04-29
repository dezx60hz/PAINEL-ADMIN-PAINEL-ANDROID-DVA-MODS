// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC__Hsq2YIMgfYpMU58D7-HdgMZ9NzTZ8s",
  authDomain: "painel-admin-painelandroid.firebaseapp.com",
  databaseURL: "https://painel-admin-painelandroid-default-rtdb.firebaseio.com",
  projectId: "painel-admin-painelandroid",
  storageBucket: "painel-admin-painelandroid.firebasestorage.app",
  messagingSenderId: "697862549657",
  appId: "1:697862549657:web:a2847c4a6711dfd3820808",
  measurementId: "G-2EZ9YPZ3JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };