import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_TEST,
    authDomain: "super-fun-practice-app-5a95e.firebaseapp.com",
    databaseURL: "https://super-fun-practice-app-5a95e.firebaseio.com",
    projectId: "super-fun-practice-app-5a95e",
    storageBucket: "super-fun-practice-app-5a95e.appspot.com",
    messagingSenderId: "769252543566",
    appId: "1:769252543566:web:30d01d2f10d09e6a1c471f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;