// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Adjust the path if needed
import Home from './pages/home';
import Appointment from './pages/appointment';
import Store from './pages/store';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/store" element={<Store />} />
      
      </Routes>
    </>
  );
};

export default App;
