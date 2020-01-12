import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY2YK2kTZoDI9n2VkSkM__U_pUd_jjaqs",
  authDomain: "cloth-shop-f4a50.firebaseapp.com",
  databaseURL: "https://cloth-shop-f4a50.firebaseio.com",
  projectId: "cloth-shop-f4a50",
  storageBucket: "cloth-shop-f4a50.appspot.com",
  messagingSenderId: "684101040043",
  appId: "1:684101040043:web:15e13ba7542e039bd784ee",
  measurementId: "G-YZXGQXKG55"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_acoount"
});
export const siginInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
