import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
  apiKey: "AIzaSyCxwEKFxGe84HDB_bXUOJPiodonv9aCryc",
  authDomain: "complaint-forum-99c87.firebaseapp.com",
  projectId: "complaint-forum-99c87",
  storageBucket: "complaint-forum-99c87.appspot.com",
  messagingSenderId: "998127985728",
  appId: "1:998127985728:web:a38e76ad43cd1529c3aba5"
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

