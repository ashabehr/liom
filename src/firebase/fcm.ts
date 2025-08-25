// firebase/fcm.ts
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

/**
 * درخواست مجوز نوتیفیکیشن و گرفتن FCM Token
 */
export const requestPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const currentToken = await getToken(messaging, {
        vapidKey:
          "BDroVn6KRs9iN1laogFt-J47xc9WsWIfblgIBCi2QllonFT-PAu9up26gRlL-9uL7R1FSllN7I13eTR6IZiH72g",
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

/**
 * گوش دادن به پیام‌های Foreground
 */
export const onMessageListener = (): Promise<any> =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("📩 پیام Foreground دریافت شد:", payload);

      const notificationTitle = payload.notification?.title || "پیام جدید";
      const action = payload.data?.action || null;

      const notificationOptions: NotificationOptions = {
        body: payload.notification?.body,
        icon: payload.data?.image || "/icons/icon-192x192.png",
        data: { action },
      };

      // نمایش نوتیفیکیشن در حالت Foreground
      const notification = new Notification(notificationTitle, notificationOptions);

      // مدیریت کلیک روی نوتیفیکیشن
      notification.onclick = (event) => {
        event.preventDefault();
        handleNotificationClick(action);
      };

      resolve(payload);
    });
  });

/**
 * مدیریت مسیر کلیک روی نوتیفیکیشن
 */
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
