
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider

const firebaseConfig = {
    apiKey: "AIzaSyCdWhvQR8iw5Hxo-motB7fyRpBuvK5sztg",
    authDomain: "ecommercelogin-19fbf.firebaseapp.com",
    projectId: "ecommercelogin-19fbf",
    storageBucket: "ecommercelogin-19fbf.appspot.com",
    messagingSenderId: "737177233235",
    measurementId: "G-C06S0MKM61",
    appId: "1:737177233235:web:c03cd1a164e8dc826be3a6",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleAuthProvider = new GoogleAuthProvider(); // Export Google Auth Provider
