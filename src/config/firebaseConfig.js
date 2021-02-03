  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB_FgFoPBTNm_L5KGIdRjlnWJHR5hYMPhk",
    authDomain: "marioplanreact-5cb77.firebaseapp.com",
    projectId: "marioplanreact-5cb77",
    storageBucket: "marioplanreact-5cb77.appspot.com",
    messagingSenderId: "768963200473",
    appId: "1:768963200473:web:672dd5213331f463b445c8",
    measurementId: "G-H52KXM5XBF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;