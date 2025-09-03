/* public/firebase-messaging-sw.js */
// توجه: از نسخه‌های compat در SW استفاده می‌کنیم
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

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
// const firebaseConfig = {
//   apiKey: "AIzaSyBVtKyIzcD0xVEMOjeMYjDdNRozFVVrmRo",
//   authDomain: "liom-31952.firebaseapp.com",
//   databaseURL: "https://liom-31952.firebaseio.com",
//   projectId: "liom-31952",
//   storageBucket: "liom-31952.appspot.com",
//   messagingSenderId: "518322220404",
//   appId: "1:518322220404:web:09527c8a42f2f017d89021",
//   measurementId: "G-TVWYWYEH1D"
// };


const messaging = firebase.messaging();

// وقتی پیام بک‌گراند data-only دریافت می‌شود
messaging.onBackgroundMessage((payload) => {
  // اگر سرور با کلید "notification" فرستاده باشد، خود مرورگر نمایش می‌دهد؛
  // پس فقط وقتی notification نداریم خودمان نمایش می‌دهیم.
  if (!payload.notification) {
    // const title = payload.data?.title || "New message";
    // const body  = payload.data?.body || "";
    // const icon  = payload.data?.icon || "/icon-192.png";
    // const url   = payload.data?.click_action || "/";

    // self.registration.showNotification(title, {
    //   body,
    //   icon,
    //   data: { url },
    // });
  }
});

// کلیک روی نوتیف
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(windowClients => {
    // اگر تب باز است، همان را فوکوس کن
    for (const client of windowClients) {
      if ("focus" in client) return client.focus();
    }
    // وگرنه تب جدید باز کن
    if (clients.openWindow) return clients.openWindow(url);
  }));
});

