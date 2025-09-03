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
  storageBucket: "liom-31952.appspot.com",
  messagingSenderId: "518322220404",
  appId: "1:518322220404:web:09527c8a42f2f017d89021",
  measurementId: "G-TVWYWYEH1D"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 4) هندل پیام‌های پس‌زمینه با onBackgroundMessage (در compat)
messaging.onBackgroundMessage((payload) => {
  console.log('📩 پیام پس‌زمینه دریافت شد:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.data?.image || "/icons/favicon.ico", // اگر تصویر داشت
    image: payload.data?.image, // تصویر اصلی نوتیفیکیشن (درصورت پشتیبانی مرورگر)
    data: {
      action: payload.data?.action || null // ذخیره کردن action برای کلیک بعدی
    }
  };

  try {
    await self.registration.showNotification(notificationTitle, notificationOptions);
  } catch (error) {
    console.error("❗️خطا در نمایش نوتیفیکیشن:", error);
  }
});

// 5) کلیک روی نوتیفیکیشن
self.addEventListener('notificationclick', (event) => {
  const notification = event.notification;
  const action = notification.data?.action;
  notification.close();

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
        targetUrl = '/orders/status/'+${actionParam};
        break;
      case 'newFeature':
        targetUrl = '/features/new';
        break;
      case 'post':
        targetUrl = 'https://old.liom.app/social/?post='+${actionParam};
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

// 7) fetch هندل نمی‌شود (بدون کش)
