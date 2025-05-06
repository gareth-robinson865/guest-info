import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHDTzxl1lW-Dy6quu7hLPpNy4G9gs-4Pc",
    authDomain: "hester-wedding-site.firebaseapp.com",
    projectId: "hester-wedding-site",
    storageBucket: "hester-wedding-site.firebasestorage.app",
    messagingSenderId: "177717928785",
    appId: "1:177717928785:web:ef78e09b8b0f2dc003a970",
    measurementId: "G-VTTBY9N5RM"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init services
  const projectfirestore = firebase.firestore()

  export { projectfirestore };