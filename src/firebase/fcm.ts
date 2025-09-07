import { initializeApp } from "firebase/app";
import { isSupported, getMessaging, getToken, onMessage } from "firebase/messaging";

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

const app = initializeApp(firebaseConfig);

export async function initFcm() {
  const supported = await isSupported();
  if (!supported) {
    console.warn("این مرورگر FCM Web رو ساپورت نمی‌کنه.");
    return;
  }

  // Service Worker رو دقیقاً از روت ثبت کن
  const swReg = await navigator.serviceWorker.register("/firebase-messaging-sw.js?v=4");

  const messaging = getMessaging(app);

  // گرفتن اجازه‌ی نوتیف
  const perm = await Notification.requestPermission();
  if (perm !== "granted") {
    console.warn("اجازه‌ی نوتیف داده نشد.");
    return;
  }

  // حتماً vapidKey (Public) رو از کنسول بردار
  const token = await getToken(messaging, {
    vapidKey: "BDroVn6KRs9iN1laogFt-J47xc9WsWIfblgIBCi2QllonFT-PAu9up26gRlL-9uL7R1FSllN7I13eTR6IZiH72g",
    serviceWorkerRegistration: swReg
  });

  console.log("FCM token:", token);
  sendTokenToServer(token);
  // برای پیام‌های فورگراند (وقتی تب فعاله) فقط لاگ بگیر
  onMessage(messaging, (payload) => {
    console.log("Foreground message:", payload);
  });
}



// گرفتن کوکی
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") {
    console.log("[FCM] Document not available (SSR).");
    return null;
  }
  const cookies = document.cookie.split("; ");
  console.log("[FCM] All cookies:", cookies);
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      try {
        const parsed = JSON.parse(value)[0];
        console.log(`[FCM] Cookie ${name} parsed:`, parsed);
        return parsed;
      } catch {
        console.log(`[FCM] Cookie ${name} raw:`, value);
        return value;
      }
    }
  }
  console.log(`[FCM] Cookie ${name} not found.`);
  return null;
};

// ارسال توکن به سرور
const sendTokenToServer = async (token: string) => {
  console.log("[FCM] Sending token to server:", token);
  const authToken = getCookie("token");
  console.log("[FCM] Auth token from cookie:", authToken);

  if (!authToken) {
    console.warn("[FCM] No auth token found, skipping send.");
    return;
  }

  try {
    const res = await fetch("https://n8n.staas.ir/webhook/rest/user/setFcm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fcm: token, Authorization: authToken }),
    });
    console.log("[FCM] Server response status:", res.status);
    if (!res.ok) throw new Error("خطا در ارسال توکن FCM");
    localStorage.setItem("fcmToken", token);
    console.log("[FCM] Token saved to localStorage.");
  } catch (err) {
    console.error("[FCM] Error sending token to server:", err);
  }
};
