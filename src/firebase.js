// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import { fireEvent } from '@testing-library/react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu6RCFc7cLt2fIJ-LUl_X9_VjoQr57N78",
    authDomain: "memesocial-5c04d.firebaseapp.com",
    projectId: "memesocial-5c04d",
    storageBucket: "memesocial-5c04d.appspot.com",
    messagingSenderId: "403752547018",
    appId: "1:403752547018:web:6a6c2e0a16ed1ec658ba33"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    posts: firestore.collection('posts'),
    comments: firestore.collection('comments'),
    getTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();