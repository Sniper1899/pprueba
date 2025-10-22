// Importa los scripts de Firebase (versión 10+, compatible con tu index.html)
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// IMPORTANTE: Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDkshwefxgtpWmm6_-uQQ5P3cx23UWxAzA",
    authDomain: "smart-495ba.firebaseapp.com",
    projectId: "smart-495ba",
    storageBucket: "smart-495ba.firebasestorage.app",
    messagingSenderId: "417939342341",
    appId: "1:417939342341:web:a746f90bc19fe4b535c86c"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene la instancia de Messaging
const messaging = firebase.messaging();

// Manejador de mensajes en segundo plano (opcional pero recomendado)
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Mensaje recibido en segundo plano: ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico' // Puedes cambiar esto a un ícono que tengas
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});