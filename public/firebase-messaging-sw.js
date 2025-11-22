importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBVtKyIzcD0xVEMOjeMYjDdNRozFVVrmRo",
  authDomain: "liom-31952.firebaseapp.com",
  databaseURL: "https://liom-31952.firebaseio.com",
  projectId: "liom-31952",
  storageBucket: "liom-31952.appspot.com",
  messagingSenderId: "518322220404",
  appId: "1:518322220404:web:09527c8a42f2f017d89021",
  measurementId: "G-TVWYWYEH1D",
});

firebase.messaging();

self.addEventListener('notificationclick', function(event) {
  console.log("🔔 notificationclick event:", event);
  event.notification.close();
  event.preventDefault();

  // دریافت داده حتی اگر FCM آن را داخل notification نگذاشته باشد
  const data = event.data || {};
  const action = data.action;

  let targetUrl = 'https://apps.liom.app/login';

  if (action) {
    const pureAction = action.replace('#', '').split('-')[0];
    const actionParam = action.split('-')[1];

    switch (pureAction) {
      case 'healthSubscription': targetUrl = 'https://apps.liom.app/shop'; break;
      case 'calendar':
      case 'main':
      case 'maincalendar': targetUrl = 'https://apps.liom.app/main'; break;
      case 'hamyar': targetUrl = 'https://apps.liom.app/hamyar-add'; break;
      case 'specialOffer': targetUrl = 'https://apps.liom.app/offers/special'; break;
      case 'orderStatus': targetUrl = `https://apps.liom.app/orders/status/${actionParam}`; break;
      case 'newFeature': targetUrl = 'https://apps.liom.app/features/new'; break;
      case 'post': targetUrl = `https://old.liom.app/social/?post=${actionParam}`; break;
    }
  }
  console.log("targetUrl", targetUrl);
  event.waitUntil(clients.openWindow(targetUrl));
});

