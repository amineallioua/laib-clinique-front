// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Adjust the path if needed
import Home from './pages/home';
import Appointment from './pages/appointment';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      
      </Routes>
    </>
  );
};

export default App;
