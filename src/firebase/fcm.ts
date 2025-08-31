// firebase/fcm.ts
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

export const requestPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // ⬇️ اینجا مطمئن می‌شیم SW آماده است
      const registration = await navigator.serviceWorker.ready;

      const currentToken = await getToken(messaging, {
        vapidKey:
          "BDroVn6KRs9iN1laogFt-J47xc9WsWIfblgIBCi2QllonFT-PAu9up26gRlL-9uL7R1FSllN7I13eTR6IZiH72g",
        serviceWorkerRegistration: registration, // ⬅️ این مهمه
      });

      if (currentToken) {
        localStorage.setItem("fcmToken", currentToken);
        console.log("✅ Saved FCM Token:", currentToken);
        return currentToken;
      } else {
        console.warn("⚠️ هیچ توکنی دریافت نشد.");
        return null;
      }
    } else {
      console.log("❌ کاربر مجوز نداد.");
      return null;
    }
  } catch (err) {
    console.error("❌ خطا در گرفتن توکن:", err);
    return null;
  }
};

// تابع با callback برای Foreground
export const onMessageListener = (callback: (payload: any) => void) => {
  onMessage(messaging, (payload) => {
    console.log("📩 پیام Foreground دریافت شد:", payload);

    const notificationTitle = payload.notification?.title || "پیام جدید";
    const action = payload.data?.action || null;

    const notificationOptions: NotificationOptions = {
      body: payload.notification?.body,
      icon: payload.data?.image || "/icons/icon-192x192.png",
      data: { action },
    };

    const notification = new Notification(notificationTitle, notificationOptions);
    notification.onclick = (event) => {
      event.preventDefault();
      handleNotificationClick(action);
    };

    callback(payload);
  });
};

// هندل مسیر کلیک روی نوتیف
function handleNotificationClick(action: string | null) {
  let targetUrl = "/";

  if (action) {
    const pureAction = action.replace("#", "").split("-")[0];
    const actionParam = action.replace("#", "").split("-").slice(1).join("-");

    switch (pureAction) {
      case "healthSubscription":
        targetUrl = "https://apps.liom.app/shop";
        break;
      case "calendar":
        targetUrl = "https://apps.liom.app/shop";
        break;
      case "maincalendar":
        targetUrl = "https://apps.liom.app/calendar";
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
