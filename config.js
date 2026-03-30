import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging.js";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Ask permission
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    console.log("✅ Permission granted");

    getToken(messaging, {
      vapidKey: "BMT-EaZtNroZ5fF_Eitxq5Le4ZewSCxkxhNGJwwOhmo4fTrRbIv0V2rltEZvv-leeIwinM6PmiV069srU7avy8o"
    }).then((currentToken) => {
      if (currentToken) {
        console.log("🔥 FCM TOKEN:", currentToken);
      } else {
        console.log("❌ No token");
      }
    });
  }
});

// Foreground messages
onMessage(messaging, (payload) => {
  console.log("📩 Foreground message:", payload);

  new Notification(payload.data.title, {
    body: payload.data.body
  });
});
window.TM_CONFIG = {
  geminiKey: "AIzaSyA2xadXtxqW1qe6zTIa4xJNiJChjqi0nMQ",
  vapidKey: "BMT-EaZtNroZ5fF_Eitxq5Le4ZewSCxkxhNGJwwOhmo4fTrRbIv0V2rltEZvv-leeIwinM6PmiV069srU7avy8o",
  firebaseConfig: {
    apiKey: "AIzaSyBg4lX_8ZMKSjdbzdV5dI1_dZOipJ56MK0",
    authDomain: "teachmate12.firebaseapp.com",
    databaseURL: "https://teachmate12-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "teachmate12",
    storageBucket: "teachmate12.firebasestorage.app",
    messagingSenderId: "216135007161",
    appId: "1:216135007161:web:d00a41bfca86b776e41468"
  }
};
