import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDQhxZNDhmSwM1tT-VZ1v8ojfa6WVMKKEo",
    authDomain: "winemarchands.firebaseapp.com",
    databaseURL: "https://winemarchands.firebaseio.com",
    projectId: "winemarchands",
    storageBucket: "winemarchands.appspot.com",
    messagingSenderId: "567629765726",
    appId: "1:567629765726:web:36b8281fb81b607c2de8cf",
    measurementId: "G-L9G0RDN47V"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
