import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Configuración de Firebase (reemplaza con tus propias credenciales)
  apiKey: '...',
  authDomain: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...',
};

firebase.initializeApp(firebaseConfig);

export default firebase;