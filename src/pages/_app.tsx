import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [modalData, setModalData] = useState<{
    title: string;
    body: string;
    action?: string | null;
  } | null>(null);

useEffect(() => {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-firebase.js")
      .then(async (registration) => {
        console.log("✅ Service Worker ثبت شد:", registration);

        // 🟢 پاک کردن subscription قدیمی
        try {
          const subscription = await registration.pushManager.getSubscription();
          if (subscription) {
            await subscription.unsubscribe();
            console.log("🗑️ Subscription قدیمی پاک شد");
          }
        } catch (err) {
          console.warn("⚠️ خطا در پاک کردن Subscription:", err);
        }

        // 🟢 گرفتن توکن جدید FCM بعد از پاکسازی
        try {
          const { requestPermission, onMessageListener } = await import("../firebase/fcm");

          const token = await requestPermission(registration); 
          if (token) {
            localStorage.setItem("fcmToken", token);
            console.log("✅ توکن جدید FCM ذخیره شد:", token);
          }

          // گوش دادن به پیام‌ها
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
        } catch (err) {
          console.error("❌ خطا در گرفتن توکن جدید:", err);
        }
      })
      .catch((err) =>
        console.log("❌ خطا در ثبت Service Worker:", err)
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

        {/* Modal داخلی */}
        {modalData && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
            onClick={() => setModalData(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "400px",
                textAlign: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{modalData.title}</h2>
              <p>{modalData.body}</p>
              <button
                onClick={() => {
                  if (modalData.action) window.location.href = modalData.action;
                  setModalData(null);
                }}
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                تایید
              </button>
            </div>
          </div>
        )}
      </PlasmicRootProvider>
    </>
  );
}
