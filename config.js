import * as firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyAvyycLCKtLw-QUyNg3mNPxud2x2nUBOd4",
    authDomain: "wily-5717c.firebaseapp.com",
    databaseURL: "https://wily-5717c.firebaseio.com",
    projectId: "wily-5717c",
    storageBucket: "wily-5717c.appspot.com",
    messagingSenderId: "719257967478",
    appId: "1:719257967478:web:9d8a6650da3f49d294b857"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();