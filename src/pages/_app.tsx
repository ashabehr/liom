import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import NotificationToast from "../../components/NotificationToast";

import { NewViewContextProvider } from "../../components/plasmic/liom_hamyar/PlasmicGlobalVariant__NewView";
export default function MyApp({ Component, pageProps }: AppProps) {
    const [newView, setNewView] = useState<"newView" | undefined>(undefined);
  const [modalData, setModalData] = useState<{
    title: string;
    body: string;
    action?: string | null;
  } | null>(null);

  // گرفتن کوکی
// گرفتن کوکی و برگرداندن اولین آیتم از JSON
function getCookie(name: string): any {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      try {
        return JSON.parse(value)[0]; // فقط آیتم اول
      } catch (err) {
        console.error("❌ خطا در پارس کوکی:", err);
        return null;
      }
    }
  }
  return "";
}

    
function sendTokenToServer(token: string, retryCount = 0) {
  const savedToken = window.localStorage.getItem("fcmToken");
  if (savedToken === token) return;

  const authToken = getCookie("token");
  if (!authToken) return;

  window.localStorage.setItem("fcmToken", token);

  fetch("https://n8n.staas.ir/webhook/rest/user/setFcm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authToken
    },
    body: JSON.stringify({ fcm: token })
  })
    .then((res) => {
      if (!res.ok) throw new Error("خطا در ارسال توکن");
      return res.json();
    })
    .then(() => console.log("✅ FCM token ثبت شد"))
    .catch((err) => {
      if (retryCount < 3) {
        const delay = (retryCount + 1) * 2000; // ۲s, ۴s, ۶s
        console.warn(`❌ خطا در ارسال توکن، تلاش مجدد در ${delay / 1000} ثانیه...`);
        setTimeout(() => sendTokenToServer(token, retryCount + 1), delay);
      } else {
        console.error("❌ ارسال توکن بعد از چند بار تلاش ناموفق بود:", err);
      }
    });
}
  useEffect(() => {

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        let hasV2 = false;
    
        registrations.forEach((registration) => {
          if (registration.active && registration.active.scriptURL.includes("firebase-messaging-swV2.js")) {
            // اگر همین ورکر رجیستر شده بود
            hasV2 = true;
          } else {
            // هر ورکر دیگه‌ای پاک بشه
            registration.unregister();
          }
        });
    
        if (!hasV2) {
          // فقط اگر ورکر V2 وجود نداشت رجیستر می‌کنیم
          navigator.serviceWorker
            .register("/firebase-messaging-swV2.js")
            .then(() => console.log("Service Worker V2 registered"))
            .catch(console.error);
        }
      });
    }

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("newView");
      if (saved === "true") {
        setNewView("newView"); // مقداردهی به Context
      } else {
        setNewView(undefined);
      }
    }
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {

      import("../firebase/fcm").then(
        ({ requestPermission, onMessageListener }) => {
          requestPermission().then((token) => {
            if (token) {
              sendTokenToServer(token);
              console.log("✅ ذخیره شد FCM Token:", token);
            }
          });

          onMessageListener((payload) => {
            console.log("📩 پیام Foreground -app:", payload);

            if (payload.notification?.title) {
              setModalData({
                title: payload.notification.title,
                body: payload.notification.body || "",
                action: payload.data?.action || null,
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
        <NewViewContextProvider value={newView}>
          <Component {...pageProps} />
          {modalData && (
            <NotificationToast
              title={modalData.title}
              body={modalData.body}
              action={modalData.action}
              icon="/icons/favicon.ico"
              onClose={() => setModalData(null)}
            />
          )}
        </NewViewContextProvider>
      </PlasmicRootProvider>
    </>
  );
}
