import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import NotificationToast from "../../components/NotificationToast";
import { initFcm } from "../firebase/fcm";


import { NewViewContextProvider } from "../../components/plasmic/liom_hamyar/PlasmicGlobalVariant__NewView";
export default function MyApp({ Component, pageProps }: AppProps) {
    const [newView, setNewView] = useState<"newView" | undefined>(undefined);
  const [modalData, setModalData] = useState<{
    title: string;
    body: string;
    action?: string | null;
  } | null>(null);

  useEffect(() => {
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker.register("/firebase-messaging-sw.js").catch(console.error);
    // }
    initFcm();
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker.getRegistrations().then((registrations) => {
    //     let hasV3 = false;
    
    //     registrations.forEach((registration) => {
    //       if (registration.active && registration.active.scriptURL.includes("firebase-messaging-sw.js?v=2")) {
    //         // اگر همین ورکر رجیستر شده بود
    //         hasV3 = true;
    //       } else {
    //         // هر ورکر دیگه‌ای پاک بشه
    //         registration.unregister();
    //       }
    //     });
    
    //     if (!hasV3) {
    //       // فقط اگر ورکر V3 وجود نداشت رجیستر می‌کنیم
    //       navigator.serviceWorker
    //         .register("/firebase-messaging-sw.js?v=2")
    //         .then(() => console.log("Service Worker V3 registered"))
    //         .catch(console.error);
    //     }
    //   });
    // }

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("newView");
      if (saved === "true") {
        setNewView("newView"); // مقداردهی به Context
      } else {
        setNewView(undefined);
      }
    }
    // if (typeof window !== "undefined" && "serviceWorker" in navigator) {

    //   import("../firebase/fcm").then(
    //     ({ requestPermission, onMessageListener }) => {
    //         console.log("درخواست به FCM");
    //        requestPermission().then((token) => {
    //           if (token) {
    //             console.log("✅ FCM Token:", token);
    //           }
    //         });

    //       onMessageListener((payload) => {
    //         console.log("📩 پیام Foreground -app:", payload);

    //         if (payload.notification?.title) {
    //           setModalData({
    //             title: payload.notification.title,
    //             body: payload.notification.body || "",
    //             action: payload.data?.action || null,
    //           });
    //         }
    //       });
    //     }
    //   );
    // }
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
