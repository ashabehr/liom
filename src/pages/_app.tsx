import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // چک کنیم آیا Service Worker از قبل وجود داره یا نه
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        const alreadyRegistered = registrations.some((reg) =>
          reg.active?.scriptURL.includes("firebase-messaging-sw.js")
        );

        if (!alreadyRegistered) {
          navigator.serviceWorker
            .register("/firebase-messaging-sw.js")
            .then((registration) => {
              console.log("✅ Service Worker ثبت شد:", registration);
            })
            .catch((err) =>
              console.log("❌ خطا در ثبت Service Worker:", err)
            );
        } else {
          console.log("⚡ Service Worker از قبل وجود دارد");
        }
      });

      // 📌 Import دینامیک فایل notifications
      import("../firebase/fcm").then(
        ({ requestPermission, onMessageListener }) => {
          requestPermission().then((token) => {
            if (token) {
              localStorage.setItem("fcmToken", token);
              console.log("✅ ذخیره شد FCM Token:", token);
              // اینجا می‌تونی به سرور بفرستی
            }
          });

          onMessageListener((payload) => {
            console.log("📩 پیام Foreground:", payload);

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
