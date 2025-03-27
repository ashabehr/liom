import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/todo_mvc_app/PlasmicGlobalContextsProvider";
import { PlasmicHomePage } from "../../components/plasmic/liom_hamyar/PlasmicHomePage";
import { useRouter } from "next/router";
import PWAHead from "../../components/PWAHead"; // اضافه کردن کامپوننت هد

// ثبت سرویس ورکر (در useEffect)
const useRegisterSW = () => {
  React.useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('SW registered:', registration);
          })
          .catch(error => {
            console.log('SW registration failed:', error);
          });
      });
    }
  }, []);
};

function HomePage() {
  const router = useRouter();
  useRegisterSW(); // فعال کردن ثبت سرویس ورکر

  return (
    <>
      <PWAHead /> {/* اضافه کردن متا تگ‌های PWA */}
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={router?.pathname}
          params={router?.query}
          query={router?.query}
        >
          <PlasmicHomePage 
            // میتوانید پروپ‌های مربوط به PWA را اینجا منتقل کنید
            pwaStatus={navigator?.standalone ? 'installed' : 'browser'}
          />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </>
  );
}

export default HomePage;
