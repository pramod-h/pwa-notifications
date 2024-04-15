/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAtM63TXfe9ZdWyOLL0R9s718dEHYpspeU",
  authDomain: "dark-screen-production.firebaseapp.com",
  projectId: "dark-screen-production",
  storageBucket: "dark-screen-production.appspot.com",
  messagingSenderId: "286983670949",
  appId: "1:286983670949:web:12fe9ae2114aba508c114c",
  measurementId: "G-Y88CC53501",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(payload, "background message");
  const notificationTitle = payload?.notification?.title;
  const notificationOptions = {
    body: payload?.notification?.body,
    icon: payload?.notification?.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
