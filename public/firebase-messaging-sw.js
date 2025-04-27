// ایمپورت اسکریپت‌های firebase
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// پیکربندی Firebase
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

// مقداردهی Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// دریافت پیام در پس‌زمینه
messaging.onBackgroundMessage(async (payload) => {
  console.log('📩 پیام پس‌زمینه دریافت شد: ', payload);

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

// مدیریت کلیک روی نوتیفیکیشن با استفاده از switch
self.addEventListener('notificationclick', (event) => {
  const notification = event.notification;
  const action = notification.data?.action;
  notification.close();

  let targetUrl = '/'; // مسیر پیش‌فرض

  if (action) {
    const pureAction = action.replace('#', '').split('-')[0];
    const actionParam = action.split('-')[1];

    switch (pureAction) {
      case 'healthSubscription':
        targetUrl = `/shop`;
        break;
      case 'profileSettings':
        targetUrl = `/profile/settings`;
        break;
      case 'specialOffer':
        targetUrl = `/offers/special`;
        break;
      case 'orderStatus':
        targetUrl = `/orders/status/`;
        break;
      case 'newFeature':
        targetUrl = `/features/new`;
        break;
      default:
        targetUrl = '/login';
        break;
    }
  }

  event.waitUntil(
    clients.openWindow(targetUrl)
  );
});
