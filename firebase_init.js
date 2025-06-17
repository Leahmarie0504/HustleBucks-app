import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

const firebaseConfig = {
      apiKey: "AIzaSyBaZ_1aTTKuYMFR1wKnCvUYkJJr-qMuABk",
      authDomain: "hustle-bucks-app.firebaseapp.com",
      projectId: "hustle-bucks-app",
      storageBucket: "hustle-bucks-app.appspot.com",
      messagingSenderId: "415465909598",
      appId: "1:415465909598:web:c04dc3db303496d9dbf3cf"
};

const app = initializeApp(firebaseConfig);
export default app;