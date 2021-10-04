import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnM1zqGK8Fcb3uQ0BOWr0x7OE3z0KSU7w",
  authDomain: "vicalbiter-blog.firebaseapp.com",
  projectId: "vicalbiter-blog",
  storageBucket: "vicalbiter-blog.appspot.com",
  messagingSenderId: "583977690363",
  appId: "1:583977690363:web:8ed83eeb4b8c1b9e59bc5e"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()