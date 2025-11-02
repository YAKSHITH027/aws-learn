import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*
...existing code...
*/

// Use NEXT_PUBLIC_* env vars so values are available in the browser
const getFirebaseConfig = () => {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  return config;
};

// Only initialize Firebase on the client (avoid SSR issues)
let app;
if (typeof window !== "undefined") {
  const firebaseConfig = getFirebaseConfig();
  app = initializeApp(firebaseConfig);
}

export const auth =
  typeof window !== "undefined" && app ? getAuth(app) : undefined;
export const db =
  typeof window !== "undefined" && app ? getFirestore(app) : undefined;
export const storage =
  typeof window !== "undefined" && app ? getStorage(app) : undefined;

export default app;
