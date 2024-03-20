// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCvzQZb5glO2zUKpBepIQxt0_5XTXSOILU',
    authDomain: 'miniext-challenge-b3b05.firebaseapp.com',
    projectId: 'miniext-challenge-b3b05',
    storageBucket: 'miniext-challenge-b3b05.appspot.com',
    messagingSenderId: '232334190227',
    appId: '1:232334190227:web:88f7f9d0c795601cb20f66',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'miniext-challenge-b3b05.appspot.com';

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
