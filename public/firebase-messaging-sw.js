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
  
  // بستن نوتیفیکیشن
  event.notification.close();
  event.preventDefault();

  // فقط صفحه پیش‌فرض
  const targetUrl = 'https://apps.liom.app/login';
  console.log("targetUrl", targetUrl);

  event.waitUntil(clients.openWindow(targetUrl));
});


