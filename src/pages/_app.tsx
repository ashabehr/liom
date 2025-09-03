import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import NotificationToast from "@/components/NotificationToast";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [modalData, setModalData] = useState<{
    title: string;
    body: string;
    action?: string | null;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        const alreadyRegistered = registrations.some((reg) =>
          reg.active?.scriptURL.includes("firebase-messaging-sw.js")
        );

        navigator.serviceWorker
          .register("/firebase-messaging-sw.js")
          .then((registration) => {
            console.log("✅ Service Worker ثبت شد:", registration);
          })
          .catch((err) =>
            console.log("❌ خطا در ثبت Service Worker:", err)
          );
      });

      import("../firebase/fcm").then(
        ({ requestPermission, onMessageListener }) => {
          requestPermission().then((token) => {
            if (token) {
              localStorage.setItem("fcmToken", token);
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
      </PlasmicRootProvider>
    </>
  );
}
