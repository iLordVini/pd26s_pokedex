//import firebase from 'firebase'
import { initializeApp, apps, lenght } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue, set, update, remove} from "firebase/database";
//import { getDatabase, ref, onValue, set, update, remove} from "firebase/database";
//import { getDatabase } from "firebase/database";
//import auth from 'firebase/auth';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { defineAnimation } from "react-native-reanimated";


const firebaseConfig = {
  apiKey: "AIzaSyCT_vv_83jJsFNVIunbrP0_6WLKJSBF4aY",
  authDomain: "pokedex-bd-6ada7.firebaseapp.com",
  databaseURL: "https://pokedex-bd-6ada7-default-rtdb.firebaseio.com",
  projectId: "pokedex-bd-6ada7",
  storageBucket: "pokedex-bd-6ada7.appspot.com",
  messagingSenderId: "415517418778",
  appId: "1:415517418778:web:460f331b0f9de979ecb8a3"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebase_db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp)


/*
//=================================================
const starCountRef = ref(firebase_db, 'email/' );
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data[1])
  console.log(snapshot[1])
});
//=================================================
set(ref(firebase_db, 'users/' + 1), {
  username: 'teste',
  email: 'email',
  profile_picture : 'imageUrl'
});
//=================================================
signInWithEmailAndPassword(auth, 'gasl2801@gmail.com', '28012003')
  .then((userCredential) => {
    const user = userCredential.user
    console.log(user)
  }).catch(() =>{
    alert('invalido')
    return
  })
//=================================================
*/
export {firebase_db, auth}





