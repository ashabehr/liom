// firebase/fcm.ts
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

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

// ارسال توکن به سرور فقط وقتی تغییر کرده
const sendTokenToServer = async (token: string) => {
  const savedToken = localStorage.getItem("fcmToken");
  if (savedToken === token) {
    console.log("✅ توکن قبلی هنوز معتبر است، ارسال به سرور لازم نیست.");
    return;
  }

  const authToken = getCookie("token");
  if (!authToken) {
    console.warn("❌ توکن کاربر موجود نیست، ارسال FCM لغو شد.");
    return;
  }

  try {
    const res = await fetch("https://n8n.staas.ir/webhook/rest/user/setFcm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fcm: token,
        Authorization: authToken,
      }),
    });

    if (!res.ok) throw new Error("خطا در ارسال توکن FCM");
    const data = await res.json();
    console.log("✅ توکن FCM با موفقیت به سرور ارسال شد:", data);

    // ذخیره در localStorage
    localStorage.setItem("fcmToken", token);
  } catch (err) {
    console.error("❌ خطا در ارسال توکن FCM:", err);
  }
};

// درخواست مجوز و دریافت توکن FCM
export const requestPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("❌ کاربر مجوز نداد.");
      return null;
    }

    const registration = await navigator.serviceWorker.ready;

    // بررسی localStorage قبل از گرفتن توکن جدید
    const savedToken = localStorage.getItem("fcmToken");
    if (savedToken) {
      console.log("استفاده از توکن قبلی:", savedToken);
      await sendTokenToServer(savedToken);
      return savedToken;
    }

    const currentToken = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (!currentToken) {
      console.warn("⚠️ هیچ توکنی دریافت نشد.");
      return null;
    }

    console.log("✅ توکن جدید دریافت شد:", currentToken);
    await sendTokenToServer(currentToken);
    return currentToken;
  } catch (err) {
    console.error("❌ خطا در گرفتن توکن:", err);
    return null;
  }
};

// تابع با callback برای Foreground
export const onMessageListener = (callback: (payload: any) => void) => {
  onMessage(messaging, (payload) => {
    callback(payload);
  });
};

// همان تابع کلیک روی Notification
export function handleNotificationClick(action: string | null) {
  let targetUrl = "/login";

  if (action) {
    const pureAction = action.replace("#", "").split("-")[0];
    const actionParam = action.replace("#", "").split("-").slice(1).join("-");

    switch (pureAction) {
      case "healthSubscription":
        targetUrl = "https://apps.liom.app/shop";
        break;
      case "calendar":
      case "maincalendar":
        targetUrl = "https://apps.liom.app/main";
        break;
      case "specialOffer":
        targetUrl = "/offers/special";
        break;
      case "orderStatus":
        targetUrl = `/orders/status/${actionParam}`;
        break;
      case "newFeature":
        targetUrl = "/features/new";
        break;
      case "post":
        targetUrl = `https://old.liom.app/social/?post=${actionParam}`;
        break;
      default:
        targetUrl = "https://apps.liom.app/login";
        break;
    }
  }

  window.open(targetUrl, "_self");
}
