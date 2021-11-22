import { initializeApp } from 'firebase/app';

import firebaseConfig from "./firebase.Config";
// return an instance of application
const firebase = initializeApp(firebaseConfig);
export default firebase;