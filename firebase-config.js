// ════════════════════════════════════════════════════════════
//  CONFIGURACIÓN FIREBASE
//  Reemplaza CADA valor con los de tu proyecto en:
//  https://console.firebase.google.com → Tu proyecto → Configuración → General
// ════════════════════════════════════════════════════════════
const firebaseConfig = {
  apiKey:            "AIzaSyD7KHc9vHcsQXxvAgTKDdFzV3L_9lW_nzc",
  authDomain:        "norman-web-741f7.firebaseapp.com",
  projectId:         "norman-web-741f7",
  storageBucket:     "norman-web-741f7.firebasestorage.app",
  messagingSenderId: "558025635301",
  appId:             "1:558025635301:web:cfc92fed91a604042d2b0c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
