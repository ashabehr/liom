// firebase.ts
import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBVtKyIzcD0xVEMOjeMYjDdNRozFVVrmRo",
  authDomain: "liom-31952.firebaseapp.com",
  databaseURL: "https://liom-31952.firebaseio.com",
  projectId: "liom-31952",
  storageBucket: "liom-31952.firebasestorage.app",
  messagingSenderId: "518322220404",
  appId: "1:518322220404:web:09527c8a42f2f017d89021",
  measurementId: "G-TVWYWYEH1D",
};

// اطمینان از اینکه app فقط یک بار initialize شود
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// فقط در مرورگر messaging رو ست می‌کنیم
let messaging: firebase.messaging.Messaging | null = null;
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  messaging = firebase.messaging();
}

export { firebase, messaging };
