// fcm.ts
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
      resolve(payload);
    });
  });
