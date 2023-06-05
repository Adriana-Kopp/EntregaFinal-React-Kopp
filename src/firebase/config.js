import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADHmU_AXv3hVGnyx5Lumvd9mAt-QQsxL0",
  authDomain: "ecommerce-arte-y-mecha.firebaseapp.com",
  projectId: "ecommerce-arte-y-mecha",
  storageBucket: "ecommerce-arte-y-mecha.appspot.com",
  messagingSenderId: "202790295382",
  appId: "1:202790295382:web:86355df1dbe3cd3d17a8f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
