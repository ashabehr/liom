import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// تایپ‌های اضافی برای Service Worker
declare global {
  interface Window {
    __WB_MANIFEST: Array<{ url: string; revision: string }>;
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration: ServiceWorkerRegistration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error: Error) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
