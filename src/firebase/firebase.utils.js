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

//export and save user into our firstore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //Get auth snapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //if snapshot does not exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error in creating user", error.message);
    }
  }
  return userRef;
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
