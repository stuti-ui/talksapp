// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDopH5579hFc-IrjeMzUR5uFJRr6VE4kME",
    authDomain: "talksapp-9e67c.firebaseapp.com",
    projectId: "talksapp-9e67c",
    storageBucket: "talksapp-9e67c.appspot.com",
    messagingSenderId: "178748544432",
    appId: "1:178748544432:web:9963b38650933f1f5c3275",
    measurementId: "G-CGZW4GTFT9"
  };

const firebaseapp= firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;