import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEPxVvHDAIjXHhHUfNeo7sGUSfNDr4Np0",
    authDomain: "react-authentication-432ed.firebaseapp.com",
    projectId: "react-authentication-432ed",
    storageBucket: "react-authentication-432ed.appspot.com",
    messagingSenderId: "432628438608",
    appId: "1:432628438608:web:9d50e88b87a6258161e355",
    measurementId: "G-0MXSNK6GXX"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};
