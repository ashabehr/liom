import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/todo_mvc_app/PlasmicGlobalContextsProvider";
import { PlasmicMain } from "../../components/plasmic/liom_hamyar/PlasmicMain";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Main() {
  const router = useRouter();

  useEffect(() => {
    const addMetaTags = () => {
      // ایجاد یا به‌روزرسانی تگ manifest
      let manifestLink = document.querySelector('link[rel="manifest"]');
      if (!manifestLink) {
        manifestLink = document.createElement('link');
        manifestLink.setAttribute('rel', 'manifest');
        document.head.appendChild(manifestLink);
      }
      manifestLink.setAttribute('href', '/manifest.json');

      // تگ theme-color
      let themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (!themeColorMeta) {
        themeColorMeta = document.createElement('meta');
        themeColorMeta.setAttribute('name', 'theme-color');
        document.head.appendChild(themeColorMeta);
      }
      themeColorMeta.setAttribute('content', '#7444BC');

      // متا تگ‌های iOS
      const iosMetaTags = [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'لیوم' }
      ];

      iosMetaTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', tag.name);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', tag.content);
      });

      // آیکون iOS
      let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
      if (!appleTouchIcon) {
        appleTouchIcon = document.createElement('link');
        appleTouchIcon.setAttribute('rel', 'apple-touch-icon');
        document.head.appendChild(appleTouchIcon);
      }
      appleTouchIcon.setAttribute('href', '/icons/icon-192x192.png');
    };

    // ثبت Service Worker
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker با موفقیت ثبت شد:', registration);
          })
          .catch(error => {
            console.log('خطا در ثبت Service Worker:', error);
          });
      }
    };

    addMetaTags();
    registerServiceWorker();
  }, []);

  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicMain />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default Main;
