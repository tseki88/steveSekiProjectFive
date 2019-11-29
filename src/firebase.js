import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDc29x3tdKHxQURl3f9mZhQgKFFpkW_R5s",
    authDomain: "juno-react-project.firebaseapp.com",
    databaseURL: "https://juno-react-project.firebaseio.com",
    projectId: "juno-react-project",
    storageBucket: "juno-react-project.appspot.com",
    messagingSenderId: "626440056280",
    appId: "1:626440056280:web:07c8d249dbbff3e61196ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;