import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import NotificationToast from "../../components/NotificationToast";
import { initFcm } from "../firebase/fcm";
import moment from "jalali-moment";

import React from "react";

class ErrorCatcher extends React.Component<{children:any}> {
  componentDidCatch(error:any, info:any) {
    console.error("💥 Error caught by boundary:", error, info);
    
    // 🟢 لاگ فرستادن به سرور
    fetch("https://n7n.staas.ir/webhook/error/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msg: error.message,
        stack: error.stack,
        info
      })
    });
  }

  render() {
    return this.props.children;
  }
}

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
      
    // window.onerror send to bot
    
    if (typeof window !== "undefined") {
      window.moment = moment;
    }
    if (typeof window !== "undefined") {
        window.onerror = (msg, src, line, col, err) => {
          console.error("🔥 Global error:", msg, src, line, col, err);
          fetch("https://n7n.staas.ir/webhook/error/log", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              msg,
              src,
              line,
              col,
              stack: err?.stack
            })
          });
        };
    }
      
    if (typeof window !== "undefined") {
          const exists = document.cookie.includes("newView=");
          if (exists) {
            localStorage.setItem("newView","true");
            setNewView("newView");
          } else {
            setNewView(undefined);
          }
        
        if (document.cookie.includes("loading=true")) {
            const hideLoading = () => {
              document.cookie = "loading=false; path=/; domain=.liom.app; secure; SameSite=Lax";
            };
        
            if (document.readyState !== "complete") {
              window.addEventListener("load", hideLoading, { once: true });
            } else {
              hideLoading();
            }
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
         <ErrorCatcher>
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
         </ErrorCatcher>
        </NewViewContextProvider>
      </PlasmicRootProvider>
    </>
  );
}
