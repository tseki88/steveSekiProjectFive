import React from 'react'

import firebase from 'firebase'
import FirebaseAuth from 'react-firebaseui'

// import firebase from 'firebase/app';
// import 'firebase/database';

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

function FirebaseAuthComponent() {
    
    // export default firebase;
    
    // / Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ]
    };


    return (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    )
}

// function FirebaseAuth() {
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');


// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// // ui.start('#firebaseui-auth-container', {
// //     signInOptions: [
// //         {
// //             provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
// //             signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
// //             forceSameDevice: false,

// //         },
// //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// //     ],
// //     // Other config options...

// // });

// // // Is there an email link sign-in?
// // if (ui.isPendingRedirect()) {
// //     ui.start('#firebaseui-auth-container', uiConfig);
// // }
// // // This can also be done via:
// // if ((firebase.auth().isSignInWithEmailLink(window.location.href)) {
// //     ui.start('#firebaseui-auth-container', uiConfig);
// // }   

// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return true;
//         },
//         uiShown: function () {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         // firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
// };

// ui.start('#firebaseui-auth-container', uiConfig);


//     return (
//         <div>
//             {/* <h1>Welcome to My Awesome App</h1> */}
//             <div id="firebaseui-auth-container"></div>
//             <div id="loader">Loading...</div>
//         </div>
//     )
// }

export default FirebaseAuthComponent


