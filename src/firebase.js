
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD0g0JlTS1hfhzPIcRnQd6K9Qn-VHpe34c",
  authDomain: "eshop-3145b.firebaseapp.com",
  projectId: "eshop-3145b",
  storageBucket: "eshop-3145b.firebasestorage.app",
  messagingSenderId: "348245430024",
  appId: "1:348245430024:web:b890fdd25a4ae4e909a6bd",
  measurementId: "G-FK8RM8XM6H"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
