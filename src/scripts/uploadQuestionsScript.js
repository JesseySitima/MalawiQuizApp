// uploadQuestions.js
const fs = require('fs'); // Import the fs module
const firebase = require('firebase/compat/app');
require('firebase/compat/database');

// Initialize Firebase with your Firebase config
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
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

// Read the JSON file containing questions
const questionsData = JSON.parse(fs.readFileSync('questions.json', 'utf8'));

// Function to upload questions to Firebase Realtime Database
const uploadQuestions = () => {
  try {
    // Upload the questions data to a specific path in your Firebase database
    database.ref('questions').set(questionsData, (error) => {
      if (error) {
        console.error('Error uploading data:', error);
      } else {
        console.log('Data uploaded successfully!');
      }
    });
  } catch (err) {
    console.error('Error:', err);
  }
};

// Call the function to upload the questions
uploadQuestions();
