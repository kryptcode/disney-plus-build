import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSEViWwGmunsmQE1djcBBCozWU2ewDQ2I",
  authDomain: "disney-plus-b2a7d.firebaseapp.com",
  projectId: "disney-plus-b2a7d",
  storageBucket: "disney-plus-b2a7d.appspot.com",
  messagingSenderId: "87893282538",
  appId: "1:87893282538:web:c65cc23a8a5f019cda9193"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };