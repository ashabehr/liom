// firebase-messaging-sw.js

// 1) نصب و فعال‌سازی سریع SW
self.addEventListener('install', () => self.skipWaiting());

// 2) Import های Firebase (compat برای v9.6.1)
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBVtKyIzcD0xVEMOjeMYjDdNRozFVVrmRo",
  authDomain: "liom-31952.firebaseapp.com",
  databaseURL: "https://liom-31952.firebaseio.com",
  projectId: "liom-31952",
  storageBucket: "liom-31952.firebasestorage.app",
  messagingSenderId: "518322220404",
  appId: "1:518322220404:web:09527c8a42f2f017d89021",
  measurementId: "G-TVWYWYEH1D"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 4) هندل پیام‌های پس‌زمینه با onBackgroundMessage (در compat)
messaging.onBackgroundMessage((payload) => {
  console.log('📩 پیام پس‌زمینه دریافت شد:', payload);

  const title =
    payload?.data?.title ||
    payload?.notification?.title ||
    'پیام جدید';

  const options = {
    body:
      payload?.data?.body ||
      payload?.notification?.body ||
      '',
    icon: payload?.data?.icon || '/icons/favicon.ico',
    image: payload?.data?.image,
    data: { action: payload?.data?.action || null }
  };

  return self.registration.showNotification(title, options);
});

// 5) کلیک روی نوتیفیکیشن
self.addEventListener('notificationclick', (event) => {
  const action = event.notification?.data?.action;
  event.notification.close();

  let targetUrl = '/';
  if (action) {
    const pureAction = action.replace('#', '').split('-')[0];
    const actionParam = action.replace('#', '').split('-').slice(1).join('-');

    switch (pureAction) {
      case 'healthSubscription':
      case 'calendar':
        targetUrl = 'https://apps.liom.app/shop';
        break;
      case 'maincalendar':
        targetUrl = 'https://apps.liom.app/calendar';
        break;
      case 'specialOffer':
        targetUrl = '/offers/special';
        break;
      case 'orderStatus':
        targetUrl = `/orders/status/${actionParam}`;
        break;
      case 'newFeature':
        targetUrl = '/features/new';
        break;
      case 'post':
        targetUrl = `https://old.liom.app/social/?post=${actionParam}`;
        break;
      default:
        targetUrl = 'https://apps.liom.app/login';
    }
  }

  event.waitUntil(clients.openWindow(targetUrl));
});

// 6) فعال‌سازی و claim کردن کلاینت‌ها
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// 7) fetch هندل نمی‌شود (بدون کش)
