import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_WlLmnkKSFdFlhRf2sbV03NBiu-BlYHs",
  authDomain: "house-market-place-e19b5.firebaseapp.com",
  projectId: "house-market-place-e19b5",
  storageBucket: "house-market-place-e19b5.appspot.com",
  messagingSenderId: "519429402441",
  appId: "1:519429402441:web:ef3917a13d972021277498"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()