import firebase from 'firebase/app';
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCW025Yj15RELYkf-7jRmkk46MuS5YTNnI",
    authDomain: "vue-blog-system-a7db9.firebaseapp.com",
    projectId: "vue-blog-system-a7db9",
    storageBucket: "vue-blog-system-a7db9.appspot.com",
    messagingSenderId: "1056985294640",
    appId: "1:1056985294640:web:0e0d588ad44add153e4af5"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{db,timestamp,auth};
