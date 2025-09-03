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

  useEffect(() => {
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
    //       requestPermission().then((token) => {
    //         if (token) {
    //           localStorage.setItem("fcmToken", token);
    //           console.log("✅ ذخیره شد FCM Token:", token);
    //         }
    //       });

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
