import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKq27ScSQUEqZhs79XwfB7qVas-N3eoRU",
    authDomain: "netflix-clone-da4cb.firebaseapp.com",
    projectId: "netflix-clone-da4cb",
    storageBucket: "netflix-clone-da4cb.appspot.com",
    messagingSenderId: "655400702637",
    appId: "1:655400702637:web:3be121f9f4a7f88b7f2c24"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth }
export default db;