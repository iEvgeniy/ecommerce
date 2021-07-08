import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDo0MyOQYwZ3VS6MXHFQxLux-8uvRMMhYE",
    authDomain: "crown-db-792d5.firebaseapp.com",
    projectId: "crown-db-792d5",
    storageBucket: "crown-db-792d5.appspot.com",
    messagingSenderId: "792452063692",
    appId: "1:792452063692:web:a5c46abefa9d81e4fd3d69",
    measurementId: "G-7ZF26528GP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;