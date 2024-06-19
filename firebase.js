// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app'
import { getDatabase, ref, onValue, update } from "firebase/database";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAvMjwtUA5pQSNHtqI1yvkypm4aszUlVz4",
  authDomain: "skycastt-556fc.firebaseapp.com",
  projectId: "skycastt-556fc",
  storageBucket: "skycastt-556fc.appspot.com",
  messagingSenderId: "514441176878",
  appId: "1:514441176878:web:1903c85031cd4a45bc3cbf",
  measurementId: "G-42ECLMPK5Q",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase();
export { db, ref, onValue, update, app };
// const firebaseConfig = {
//   apiKey: "AIzaSyDY6xOdrukZcDz16201DnMfqBH200UUVjE",
//   authDomain: "skycast-dd495.firebaseapp.com",
//   projectId: "skycast-dd495",
//   storageBucket: "skycast-dd495.appspot.com",
//   messagingSenderId: "998726300237",
//   appId: "1:998726300237:web:3f5dd31373bccffe7c2204",
// };
// const app = initializeApp(firebaseConfig);

// sau