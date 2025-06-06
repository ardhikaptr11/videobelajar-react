import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "videobelajar-14040.firebaseapp.com",
	projectId: "videobelajar-14040",
	storageBucket: "videobelajar-14040.firebasestorage.app",
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

import.meta.env.VITE_DEV === "true" && connectFirestoreEmulator(db, "127.0.0.1", 8080);

export { app, db };
