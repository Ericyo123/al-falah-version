import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBWQFnX10MskUr6IuS-spai0aQ1Dgaeyw",
  authDomain: "al-falah-c72fc.firebaseapp.com",
  projectId: "al-falah-c72fc",
  storageBucket: "al-falah-c72fc.firebasestorage.app",
  messagingSenderId: "248185896286",
  appId: "1:248185896286:web:cf75faa16100d0395223cf",
};

// Prevent re-initialization in development (hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
