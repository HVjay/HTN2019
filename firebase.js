import firebase from 'firebase';
import "firbase/firestore"


firebaseConfig = {
  apiKey: "AIzaSyC10Wu72kfUuPMi87QWfGn2qf60A6Eic7k",
  authDomain: "dermacare-91524.firebaseapp.com",
  databaseURL: "https://dermacare-91524.firebaseio.com",
  projectId: "dermacare-91524",
  storageBucket: "dermacare-91524.appspot.com",
  messagingSenderId: "415489878037",
  appId: "1:415489878037:web:ff9b4d0e135bce0780061c"
};


firebase.initializeApp(firebaseConfig);
expert const firestore=firebase.firestore()
export default firebase
