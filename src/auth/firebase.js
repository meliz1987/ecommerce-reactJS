// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv2Ocy-FZnWP-EI8yQVjC8nWBGHljVsYM",
  authDomain: "e-commerce-aa2a9.firebaseapp.com",
  projectId: "e-commerce-aa2a9",
  storageBucket: "e-commerce-aa2a9.firebasestorage.app",
  messagingSenderId: "5131918092",
  appId: "1:5131918092:web:c798fc5962c92644454729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//////////////////////////////////////////////////sign up user////////////////////////////////////
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function createUser(email, password){
    return(
        new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                console.log("Credenciales", userCredential)
                const user = userCredential.user;
                console.log(user)
                res(user)
                // ...
            })
            .catch((error) => {
                console.log(error.code, error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error)
                // ..
            });
        })
    )
}

auth.useDeviceLanguage()
export function loginG(){
    return(
        new Promise((res, rej) => {
            signInWithPopup(auth, provider)
            .then((result) => {
                console.log("test", result)
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log("credenciales Googlr", credential)
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("User", user)
                res(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                console.log("test error", error )
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                rej()
                // ...
            });   
        })
    )

}

export function loginEmailPass(email, password){
    return(
        new Promise((res, rej) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log("Credenciales", userCredential)
                const user = userCredential.user;
                console.log(user)
                res(user)
            })
            .catch((error) => {
                console.log(error.code)
                const errorCode = error.code;
                const errorMessage = error.message;
                rej(error)
            });
        })
    )
}
