//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {getAuth } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js"

/*"firebase/auth", "firebase/app"*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAtRGwpzoccAON8lgcZAha8i0N2MtJxFI",
  authDomain: "sportlink-nutrition.firebaseapp.com",
  projectId: "sportlink-nutrition",
  storageBucket: "sportlink-nutrition.appspot.com",
  messagingSenderId: "880144340004",
  appId: "1:880144340004:web:c38fe413554929bc1d34b1"
};



try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//console.log (app)
const auth = getAuth (app)
export  {auth};

const db = getFirestore(app);
export {db};