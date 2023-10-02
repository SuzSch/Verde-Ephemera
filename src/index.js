import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

const firebaseApp = initializeApp({

  apiKey: "AIzaSyB1iQOQlhcfFzuRYUcWR1Gjhv8SdvACtXs",
  authDomain: "verdeephemera.firebaseapp.com",
  projectId: "verdeephemera",
  storageBucket: "verdeephemera.appspot.com",
  messagingSenderId: "872360875942",
  appId: "1:872360875942:web:45f582c6588199ed3ea167",
  measurementId: "G-38LNS1N94J"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
