// firebase/fcm.ts
import { messaging } from "./firebase";

const VAPID_KEY =
  "BDroVn6KRs9iN1laogFt-J47xc9WsWIfblgIBCi2QllonFT-PAu9up26gRlL-9uL7R1FSllN7I13eTR6IZiH72g";

// گرفتن کوکی
const getCookie = (name: string): string | null => {
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

// درخواست مجوز و دریافت توکن (compat)
export const requestPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return null;

    const savedToken = localStorage.getItem("fcmToken");
    if (savedToken) {
      await sendTokenToServer(savedToken);
      return savedToken;
    }

    const currentToken = await messaging.getToken({ vapidKey: VAPID_KEY });
    if (currentToken) await sendTokenToServer(currentToken);
    return currentToken;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// Foreground messaging listener
export const onMessageListener = (callback: (payload: any) => void) => {
  messaging.onMessage((payload) => callback(payload));
};

// تابع کلیک روی Notification
export function handleNotificationClick(action: string | null) {
  let targetUrl = "/login";

  if (action) {
    const pureAction = action.replace("#", "").split("-")[0];
    const actionParam = action.replace("#", "").split("-").slice(1).join("-");
    switch (pureAction) {
      case "healthSubscription": targetUrl = "https://apps.liom.app/shop"; break;
      case "calendar":
      case "maincalendar": targetUrl = "https://apps.liom.app/main"; break;
      case "specialOffer": targetUrl = "/offers/special"; break;
      case "orderStatus": targetUrl = `/orders/status/${actionParam}`; break;
      case "newFeature": targetUrl = "/features/new"; break;
      case "post": targetUrl = `https://old.liom.app/social/?post=${actionParam}`; break;
      default: targetUrl = "https://apps.liom.app/login"; break;
    }
  }

  window.open(targetUrl, "_self");
}
