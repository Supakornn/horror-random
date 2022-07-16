import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHXIQO6EsKDTb1CP8z9aJSLFlL5LZqgVo",
  authDomain: "horror-random.firebaseapp.com",
  projectId: "horror-random",
  storageBucket: "horror-random.appspot.com",
  messagingSenderId: "956765426958",
  appId: "1:956765426958:web:96d67638ff0c39d910f35f"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export default db