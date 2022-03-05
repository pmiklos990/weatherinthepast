import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLv3Vuo9wQNW3QknmhCbyL-XDBTwv7BsE",
  authDomain: "eghadatsorok.firebaseapp.com",
  databaseURL: "https://eghadatsorok-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eghadatsorok",
  storageBucket: "eghadatsorok.appspot.com",
  messagingSenderId: "900185423506",
  appId: "1:900185423506:web:67ec8b70c26d2f34f2f04b",
  measurementId: "G-8D1WX0008R"

};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();

    export {database as default}
