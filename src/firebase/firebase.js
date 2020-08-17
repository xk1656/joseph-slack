import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCifoJ6znAg7_9VLPvpGUlfEXI5b_3dBGI",
  authDomain: "slack-bd629.firebaseapp.com",
  databaseURL: "https://slack-bd629.firebaseio.com",
  projectId: "slack-bd629",
  storageBucket: "slack-bd629.appspot.com",
  messagingSenderId: "103795273091",
  appId: "1:103795273091:web:64dba74c08a48b6a469ab6",
  measurementId: "G-HJBSBKGZJL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
