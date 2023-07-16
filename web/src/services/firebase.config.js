import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1EQ9EHJi1tHjg7-NOle6wJ9qvcQECQC8",
    authDomain: "new-kaams.firebaseapp.com",
    projectId: "new-kaams",
    storageBucket: "new-kaams.appspot.com",
    messagingSenderId: "850365748320",
    appId: "1:850365748320:web:7a743ef995f61e0da29f05"  
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)