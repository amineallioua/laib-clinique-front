import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar'; // Adjust the path if needed
import Home from './pages/home';
import Appointment from './pages/appointment';
import Store from './pages/store';
import Details from './pages/details';
import Cart from './components/cart'; // Assuming you have a Cart component
import Footer from './components/footer';
import { CartProvider } from './components/cartcontext';

const App = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is either "/details/:id" or "/store"
  const showCart = location.pathname.includes("/details") || location.pathname === "/Store";

  return (
    <>
      <CartProvider>
        <Navbar />
        {/* This will now render the cart correctly whenever the route changes */}
        {showCart && <Cart />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/store" element={<Store />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
};

export default App;
