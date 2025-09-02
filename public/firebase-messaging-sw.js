// ---------------------------
// 🔹 ۱. Import Firebase
// ---------------------------
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// ---------------------------
// 🔹 ۲. Firebase Config
// ---------------------------
const firebaseConfig = {
  apiKey: "AIzaSyBVtKyIzcD0xVEMOjeMYjDdNRozFVVrmRo",
  authDomain: "liom-31952.firebaseapp.com",
  databaseURL: "https://liom-31952.firebaseio.com",
  projectId: "liom-31952",
  storageBucket: "liom-31952.appspot.com",
  messagingSenderId: "518322220404",
  appId: "1:518322220404:web:09527c8a42f2f017d89021",
  measurementId: "G-TVWYWYEH1D"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ---------------------------
// 🔹 ۳. Background Messaging
// ---------------------------
messaging.onBackgroundMessage(async (payload) => {
  console.log('📩 پیام پس‌زمینه دریافت شد: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.data?.image || "/icons/favicon.ico",
    image: payload.data?.image,
    data: {
      action: payload.data?.action || null
    }
  };

  try {
    await self.registration.showNotification(notificationTitle, notificationOptions);
  } catch (error) {
    console.error("❗️ خطا در نمایش نوتیفیکیشن:", error);
  }
});

// ---------------------------
// 🔹 ۴. Handle Notification Click
// ---------------------------
self.addEventListener('notificationclick', (event) => {
  const notification = event.notification;
  const action = notification.data?.action;
  notification.close();

  let targetUrl = '/'; // پیش‌فرض

  if (action) {
    const pureAction = action.replace('#', '').split('-')[0];
    const actionParam = action.replace('#', '').split('-').slice(1).join('-');

    switch (pureAction) {
      case 'healthSubscription':
        targetUrl = `https://apps.liom.app/shop`;
        break;
      case 'calendar':
        targetUrl = `https://apps.liom.app/shop`;
        break;
      case 'maincalendar':
        targetUrl = `https://apps.liom.app/calendar`;
        break;
      case 'specialOffer':
        targetUrl = `/offers/special`;
        break;
      case 'orderStatus':
        targetUrl = `/orders/status/${actionParam}`;
        break;
      case 'newFeature':
        targetUrl = `/features/new`;
        break;
      case 'post':
        targetUrl = `https://old.liom.app/social/?post=${actionParam}`;
        break;
      default:
        targetUrl = 'https://apps.liom.app/login';
        break;
    }
  }

  event.waitUntil(
    clients.openWindow(targetUrl)
  );
});

// ---------------------------
// 🔹 ۵. PWA Cache Settings
// ---------------------------
const CACHE_NAME = 'liom-cache-v2';
const PRECACHE_URLS = [
  '/', // صفحه اصلی
  '/icons/favicon.ico',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// نصب Service Worker و کش اولیه
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// فعال‌سازی Service Worker و پاک کردن کش قدیمی
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

// ---------------------------
// 🔹 ۶. هندل کردن fetch برای PWA
// ---------------------------
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // برای فایل‌های GET کش کن
            if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        }).catch(() => {
          // هندل کردن حالت آفلاین (مثلاً صفحه‌ی fallback)
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        })
      );
    })
  );
});  
