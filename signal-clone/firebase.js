import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD6JXZsg7BJef4YxqcCJKItX_QO4KJ5Fv4',
  authDomain: 'signal-clone-898a3.firebaseapp.com',
  projectId: 'signal-clone-898a3',
  storageBucket: 'signal-clone-898a3.appspot.com',
  messagingSenderId: '1099150799875',
  appId: '1:1099150799875:web:86f0dc3de1e179e6f4ca36',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };