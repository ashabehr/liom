import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
            if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/firebase-messaging-sw.js")
          .then((registration) => {
            console.log("✅ Service Worker ثبت شد:", registration);
          })
          .catch((err) =>
            console.log("❌ خطا در ثبت Service Worker:", err)
          );
      }
      // 📌 Import دینامیک فایل notifications
      import("../firebase/fcm").then(
        ({ requestPermission, onMessageListener }) => {
          // گرفتن اجازه و دریافت توکن
          requestPermission().then((token) => {
            if (token) {
              localStorage.setItem("fcmToken", token);
              console.log("✅ ذخیره شد FCM Token:", token);

              // اینجا می‌تونی توکن رو به سرور هم بفرستی
              // fetch("/api/save-token", { method: "POST", body: JSON.stringify({ token }) });
            }
          });

          onMessageListener((payload) => {
            console.log("📩 پیام Foreground:", payload);

            // نمایش نوتیف ساده
            if (payload.notification?.title) {
              new Notification(payload.notification.title, {
                body: payload.notification.body,
                icon:
                  payload.notification.image ||
                  "/icons/icon-192x192.png",
              });
            }
          });
        }
      );

      // 📌 ثبت Service Worker برای Background Messages

    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />

      </Head>
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </>
  );
}
