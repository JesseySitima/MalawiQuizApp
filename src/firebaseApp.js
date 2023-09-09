import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCiHydkCuG1LJxjnPjLuHya7JwcKqvqDqE",
    authDomain: "quizapp-e45ec.firebaseapp.com",
    projectId: "quizapp-e45ec",
    storageBucket: "quizapp-e45ec.appspot.com",
    messagingSenderId: "201115800467",
    appId: "1:201115800467:web:97e5e430f625a2b680ce66",
    measurementId: "G-2Z6PDBPCP9"
  };

 // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { firebaseApp, database };
