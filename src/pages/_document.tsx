// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fa-IR" dir="rtl"> {/* برای زبان فارسی + راست‌به‌چپ */}
      <Head>
        {/* === متا تگ‌های عمومی === */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#7444BC" /> {/* رنگ تم PWA */}

        {/* === متا تگ‌های مخصوص iOS === */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="لیوم" />
        
        {/* آیکون برای نصب روی صفحه اصلی آیفون */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        {/* اسپلش اسکرین برای دستگاه‌های مختلف iOS */}
        {/* آیفون 13 پرو مکس (رزولوشن 1284‌×‌2778) */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone_13_pro_max.png"
          media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)"
        />
        {/* آیفون 12/13 پرو (رزولوشن 1170‌×‌2532) */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone_13_pro.png"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
        />
      </Head>

      <body>
        <Main /> {/* محتوای اصلی Next.js */}
        <NextScript /> {/* اسکریپت‌های مورد نیاز Next.js */}
      </body>
    </Html>
  );
}
