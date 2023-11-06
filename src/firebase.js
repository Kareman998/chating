

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6ydmxjAv_pUHnoeB49Wbg3bjMpwjtTcw",
  authDomain: "chatting-9af14.firebaseapp.com",
  projectId: "chatting-9af14",
  storageBucket: "chatting-9af14.appspot.com",
  messagingSenderId: "74990865763",
  appId: "1:74990865763:web:8057cca56e2476cd679756"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore()
