
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBN6huAj_txCAIHxATOrv6445MG4IKcqHo",
  authDomain: "authentication-d0601.firebaseapp.com",
  projectId: "authentication-d0601",
  storageBucket: "authentication-d0601.appspot.com",
  messagingSenderId: "78952046984",
  appId: "1:78952046984:web:efc046095979627fec1a3d"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export default app;