import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGqsJ2JeemDBje7t1uHcnhG9aMIhG3I0s",
  authDomain: "book-branch.firebaseapp.com",
  projectId: "book-branch",
  storageBucket: "book-branch.firebasestorage.app",
  messagingSenderId: "654504112586",
  appId: "1:654504112586:web:588509fef5461baecf5f33"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
