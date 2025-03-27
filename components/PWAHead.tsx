// components/PWAHead.tsx
import Head from "next/head";

export default function PWAHead() {
  return (
    <Head>
      <meta name="application-name" content="لیوم" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="لیوم" />
      <meta name="description" content="تقویم قاعدگی و بارداری" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#7444BC" />
      
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="https://site-assets.plasmic.app/1efb20da13dc901df2ae2f3b7a43de6e.ico" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    </Head>
  );
}
