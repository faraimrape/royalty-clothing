import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBWDKv6g3dmp_fXJe8oOzC0yEl4nTeTmo8",
  authDomain: "royalty-clothing.firebaseapp.com",
  databaseURL: "https://royalty-clothing.firebaseio.com",
  projectId: "royalty-clothing",
  storageBucket: "royalty-clothing.appspot.com",
  messagingSenderId: "963116456143",
  appId: "1:963116456143:web:2b634ed45a82de8c3f3fba",
  measurementId: "G-E3HTY016G5",
};

firebase.initializeApp(config);

//export firebase providers that we have imported to the application
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//initialize sign in with google screen
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//use popup method of signing in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
