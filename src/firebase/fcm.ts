// firebase/fcm.ts
import { initializeApp } from "firebase/app";
import type { Messaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBVtKyIzcD0xVEMOjeMYjDdNRozFVVrmRo",
  authDomain: "liom-31952.firebaseapp.com",
  databaseURL: "https://liom-31952.firebaseio.com",
  projectId: "liom-31952",
  storageBucket: "liom-31952.firebasestorage.app",
  messagingSenderId: "518322220404",
  appId: "1:518322220404:web:09527c8a42f2f017d89021",
  measurementId: "G-TVWYWYEH1D"
};

const VAPID_KEY =
  "BDroVn6KRs9iN1laogFt-J47xc9WsWIfblgIBCi2QllonFT-PAu9up26gRlL-9uL7R1FSllN7I13eTR6IZiH72g";

// مقدار messaging رو فقط در مرورگر ست می‌کنیم
let messaging: Messaging | null = null;
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  const app = initializeApp(firebaseConfig);
  // dynamic import → باعث میشه SSR کرش نکنه
  import("firebase/messaging").then(({ getMessaging }) => {
    messaging = getMessaging(app);
  });
}

// گرفتن کوکی
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return JSON.parse(value)[0];
  }
  return null;
};

// ارسال توکن به سرور
const sendTokenToServer = async (token: string) => {
  const savedToken = localStorage.getItem("fcmToken");
  if (savedToken === token) return;

  const authToken = getCookie("token");
  if (!authToken) return;

  try {
    const res = await fetch("https://n8n.staas.ir/webhook/rest/user/setFcm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fcm: token, Authorization: authToken }),
    });
    if (!res.ok) throw new Error("خطا در ارسال توکن FCM");
    localStorage.setItem("fcmToken", token);
  } catch (err) {
    console.error(err);
  }
};

// درخواست مجوز و دریافت توکن
export const requestPermission = async (): Promise<string | null> => {
  if (!messaging) return null;

  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return null;

    const savedToken = localStorage.getItem("fcmToken");
    if (savedToken) {
      await sendTokenToServer(savedToken);
      return savedToken;
    }

    const { getToken } = await import("firebase/messaging");
    const currentToken = await getToken(messaging, { vapidKey: VAPID_KEY });
    if (currentToken) await sendTokenToServer(currentToken);
    return currentToken;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// Foreground messaging listener
export const onMessageListener = (callback: (payload: any) => void) => {
  if (!messaging) return;
  import("firebase/messaging").then(({ onMessage }) => {
    onMessage(messaging!, (payload) => callback(payload));
  });
};

// تابع کلیک روی Notification
export function handleNotificationClick(action: string | null) {
  let targetUrl = "/login";

  if (action) {
    const pureAction = action.replace("#", "").split("-")[0];
    const actionParam = action.replace("#", "").split("-").slice(1).join("-");
    switch (pureAction) {
      case "healthSubscription":
        targetUrl = "https://apps.liom.app/shop"; break;
      case "calendar":
      case "maincalendar":
        targetUrl = "https://apps.liom.app/main"; break;
      case "specialOffer":
        targetUrl = "/offers/special"; break;
      case "orderStatus":
        targetUrl = `/orders/status/${actionParam}`; break;
      case "newFeature":
        targetUrl = "/features/new"; break;
      case "post":
        targetUrl = `https://old.liom.app/social/?post=${actionParam}`; break;
      default:
        targetUrl = "https://apps.liom.app/login"; break;
    }
  }

  window.open(targetUrl, "_self");
}
