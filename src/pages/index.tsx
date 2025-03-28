import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/todo_mvc_app/PlasmicGlobalContextsProvider";
import { PlasmicHomePage } from "../../components/plasmic/liom_hamyar/PlasmicHomePage";
import NotificationComponent from '../../components/Notification/NotificationComponent';
import { useRouter } from "next/router";
import Head from "next/head";


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('PWA Service Worker registered with scope:', registration.scope);
    })
    .catch((err) => {
      console.log('PWA Service Worker registration failed:', err);
    });
}

// ثبت Service Worker برای Firebase Messaging
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Firebase Messaging Service Worker registered with scope:', registration.scope);
    })
    .catch((err) => {
      console.log('Firebase Messaging Service Worker registration failed:', err);
    });
}



function usePWAStatus() {
  const [pwaStatus, setPwaStatus] = React.useState<'installed' | 'browser'>('browser');

  React.useEffect(() => {
    // بررسی وجود window برای جلوگیری از خطا در سمت سرور
    if (typeof window !== 'undefined') {
      const isStandalone = 
        ('standalone' in window.navigator && window.navigator['standalone']) ||
        window.matchMedia('(display-mode: standalone)').matches;
      
      setPwaStatus(isStandalone ? 'installed' : 'browser');
    }
  }, []);

  return pwaStatus;
}

function HomePage() {
  const router = useRouter();
  const pwaStatus = usePWAStatus();

  return (
    <>
      <NotificationComponent />
      <Head>
        <title>ایوم | liom</title>
        <meta name="description" content="برنامه مدیریت دوره قاعدگی و بارداری" />
        <meta name="application-name" content="لیوم" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="لیوم" />
        <meta name="theme-color" content="#7444BC" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta property="og:title" content="لیوم" />
        <meta property="og:description" content="برنامه مدیریت دوره قاعدگی و بارداری" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apps.liom.app/" />
        <meta property="og:image" content="/icons/icon-512x512.png" />
      </Head>

      <GlobalContextsProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicHomePage>
          {/* محتوای slot برای نمایش وضعیت PWA */}
          <div className="pwa-status" style={{ display: 'none' }}>
            {pwaStatus}
          </div>
        </PlasmicHomePage>
      </PageParamsProvider__>
    </GlobalContextsProvider>
    </>
  );
}

export default HomePage;
