import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseConfig, vapidKey } from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    await getToken(messaging, {
      vapidKey: vapidKey,
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          return currentToken;
        } else {
          console.log("Token generation failed");
        }
      })
      .catch((error) => {
        console.log("An error occurred when requesting the token", error);
      });
  } else {
    console.log("Permission denied");
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
