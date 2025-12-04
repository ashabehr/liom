import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import NotificationToast from "../../components/NotificationToast";
import { initFcm } from "../firebase/fcm";

import React from "react";
import { NewViewContextProvider } from "../../components/plasmic/liom_hamyar/PlasmicGlobalVariant__NewView";

// تابع کمکی برای ارسال امن ارور
const sendErrorLog = (error: any, extra?: any) => {
  const payload = {
    msg: error?.message || String(error) || "خطای نامشخص",
    stack: error?.stack || null,
    ...extra
  };
  
  fetch("https://n7n.staas.ir/webhook/error/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(console.error);
};

// کامپوننت Error Boundary
class ErrorCatcher extends React.Component<{children:any}> {
  componentDidCatch(error: any, info: any) {
    console.error("💥 Error caught by boundary:", error, info);
    sendErrorLog(error, {
      componentStack: info?.componentStack || null
    });
  }

  render() {
    return this.props.children;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [newView, setNewView] = useState<"newView" | undefined>(undefined);
  const [modalData, setModalData] = useState<{
    title: string;
    body: string;
    action?: string | null;
  } | null>(null);

  useEffect(() => {
    initFcm();

    // بررسی کوکی و تعیین newView
    if (typeof window !== "undefined") {
      const exists = document.cookie.includes("newView=");
      if (exists) {
        localStorage.setItem("newView","true");
        setNewView("newView");
      } else {
        setNewView(undefined);
      }

      // مخفی کردن loading
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

    // Global window.onerror
    if (typeof window !== "undefined") {
      window.onerror = (msg, src, line, col, err) => {
        console.error("🔥 Global error:", msg, src, line, col, err);
        sendErrorLog(err || msg, { src, line: line || null, col: col || null });
      };

      // unhandled promise rejections
      window.addEventListener("unhandledrejection", (event) => {
        console.error("❌ Unhandled Promise Rejection:", event.reason);
        sendErrorLog(event.reason);
      });
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
