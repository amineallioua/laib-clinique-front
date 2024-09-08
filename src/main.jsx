// src/main.jsx (for Vite) or src/index.js (for Create React App)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice 'client' here for createRoot
import './index.css';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
