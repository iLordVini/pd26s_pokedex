import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import {getAuth} from 'firebase/auth';

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

export {firebase_db, auth}





