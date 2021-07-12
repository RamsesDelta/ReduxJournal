import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdpFnUmksU47AYsv46el35GxHXr3nmy1A",
    authDomain: "journal-26367.firebaseapp.com",
    projectId: "journal-26367",
    storageBucket: "journal-26367.appspot.com",
    messagingSenderId: "574398458660",
    appId: "1:574398458660:web:1dbb6b01bf9801a480a1b1"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googelAuthProvider = new firebase.auth.GoogleAuthProvider()

  export{
      db,
      googelAuthProvider,
      firebase
  }