importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBg4lX_8ZMKSjdbzdV5dI1_dZOipJ56MK0",
  authDomain: "teachmate12.firebaseapp.com",
  projectId: "teachmate12",
  storageBucket: "teachmate12.firebasestorage.app",
  messagingSenderId: "216135007161",
  appId: "1:216135007161:web:d00a41bfca86b776e41468"
});

const messaging = firebase.messaging();

// 🔥 BACKGROUND NOTIFICATIONS (THIS WAS MISSING)
messaging.onBackgroundMessage(function(payload) {
  console.log("🔥 Background message received:", payload);

  const title = payload.data?.title || "TeachMate";
  const options = {
    body: payload.data?.body || "",
    icon: "teachmate-icon.png"
  };

  self.registration.showNotification(title, options);
});
