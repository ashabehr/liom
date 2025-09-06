// firebase/fcm.ts
import toast from "react-hot-toast";

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
  measurementId: "G-TVWYWYEH1D",
};

const VAPID_KEY =
  "BDroVn6KRs9iN1laogFt-J47xc9WsWIfblgIBCi2QllonFT-PAu9up26gRlL-9uL7R1FSllN7I13eTR6IZiH72g";

// Promise برای آماده شدن Messaging
let messagingReady: Promise<Messaging>;

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  console.log("[FCM] Initializing Firebase app...");
  const app = initializeApp(firebaseConfig);

  messagingReady = import("firebase/messaging").then(({ getMessaging }) => {
    const msg = getMessaging(app);
    console.log("[FCM] Messaging initialized:", msg);
    return msg;
  });
} else {
  messagingReady = Promise.reject("Not running in browser");
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

  // const savedToken = localStorage.getItem("fcmToken");
  // console.log("[FCM] Saved token in localStorage:", savedToken);

  // if (savedToken === token) {
  //   console.log("[FCM] Token already saved, skipping...");
  //   return;
  // }

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
    toast.success("توکن با موفقیت به سرور ارسال شد ✅");
    localStorage.setItem("fcmToken", token);
    console.log("[FCM] Token saved to localStorage.");
  } catch (err) {
    console.error("[FCM] Error sending token to server:", err);
  }
};

// درخواست مجوز و دریافت توکن
export const requestPermission = async (): Promise<string | null> => {
  try {
    const messaging = await messagingReady;
    console.log("[FCM] Messaging ready:", messaging);

    console.log("[FCM] Requesting notification permission...");
    const permission = await Notification.requestPermission();
    console.log("[FCM] Notification permission result:", permission);

    if (permission !== "granted") return null;

    const savedToken = localStorage.getItem("fcmToken");
    // if (savedToken) {
    //   console.log("[FCM] Using saved token:", savedToken);
    //   await sendTokenToServer(savedToken);
    //   return savedToken;
    // }

    const { getToken } = await import("firebase/messaging");
    console.log("[FCM] Getting new token...");
    const currentToken = await getToken(messaging, { vapidKey: VAPID_KEY });
    console.log("[FCM] New token received:", currentToken);

    if (currentToken) await sendTokenToServer(currentToken);
    return currentToken;
  } catch (err) {
    console.error("[FCM] Error in requestPermission:", err);
    return null;
  }
};

// Foreground messaging listener
export const onMessageListener = async (
  callback: (payload: any) => void
) => {
  try {
    const messaging = await messagingReady;
    console.log("[FCM] Setting up onMessage listener...");
    const { onMessage } = await import("firebase/messaging");
    onMessage(messaging, (payload) => {
      console.log("[FCM] Foreground message received:", payload);
      callback(payload);
    });
  } catch (err) {
    console.error("[FCM] Error setting onMessage listener:", err);
  }
};

// تابع کلیک روی Notification
export function handleNotificationClick(action: string | null) {
  console.log("[FCM] Handling notification click, action:", action);
  let targetUrl = "/login";

  if (action) {
    const pureAction = action.replace("#", "").split("-")[0];
    const actionParam = action.replace("#", "").split("-").slice(1).join("-");
    console.log("[FCM] Parsed action:", pureAction, "Param:", actionParam);

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

  console.log("[FCM] Redirecting to:", targetUrl);
  window.open(targetUrl, "_self");
}
