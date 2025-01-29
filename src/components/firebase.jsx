import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCJZfBYVJUWrwf85gkW9Tvy-q95jdNkKWg",
    authDomain: "taskmanagement-1c2ae.firebaseapp.com",
    projectId: "taskmanagement-1c2ae",
    storageBucket: "taskmanagement-1c2ae.firebasestorage.app",
    messagingSenderId: "649994879794",
    appId: "1:649994879794:web:2245f72bd22f3817b78d2b",
    measurementId: "G-2SVP2TR4SS"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth =   getAuth(app)

// google sig_in
  const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () =>{
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user
    } catch (error) {
        console.error('Google sigin-Error', error);
        throw error;
    }
}


//Sign-out

const logOut = async()=>{
    try {
        await signOut(auth)
        console.log('user sign out');
        
    } catch (error) {
        console.error("Sign-out Error", error)
    }
}


export {auth, signInWithGoogle, logOut}