// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAq5SpI383_boM8qgNB0GNJx-3PEc9DPeU",
    authDomain: "finalfullstackproject2.firebaseapp.com",
    projectId: "finalfullstackproject2",
    storageBucket: "finalfullstackproject2.appspot.com",
    messagingSenderId: "641535507281",
    appId: "1:641535507281:web:035f594a0748c70815b170"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};