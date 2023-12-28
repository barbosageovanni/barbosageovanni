import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_7zrPL1ggr02wPG5_VtVmMufZzSK8sEc",
  authDomain: "basico-management.firebaseapp.com",
  projectId: "basico-management",
  storageBucket: "basico-management.appspot.com",
  messagingSenderId: "743750152721",
  appId: "1:743750152721:web:d19c395e54d92ab56d37b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
