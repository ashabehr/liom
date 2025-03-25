import { Helmet } from 'react-helmet';

const PWAMetaTags = () => {
  return (
    <Helmet>
      <link rel="apple-touch-icon" href="https://site-assets.plasmic.app/1efb20da13dc901df2ae2f3b7a43de6e.ico" sizes="180x180" />
      <meta name="theme-color" content="#7444BC" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="لیوم" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default PWAMetaTags;
