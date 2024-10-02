// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext in components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, action) => {
    const existingItemIndex = cart.findIndex(item => item.name === product.name);
    let newCart = [...cart];

    if (existingItemIndex > -1) {
      const existingItem = newCart[existingItemIndex];

      if (action === 1) {
        newCart[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
      } else if (action === 2) {
        if (existingItem.quantity > 1) {
          newCart[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
        } else {
          newCart = newCart.filter((_, index) => index !== existingItemIndex);
        }
      }
    } else if (action === 1) {
      newCart.push({ ...product, quantity: 1 });
    }
    
    setCart(newCart);
  };

  const decreaseQuantity = (product) => {
    addToCart(product, 2);
  };

  const emptyCart = ()=>{
  
      // Empty the cart
      setCart([]);
      return;
    
  } 

  const calculateCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, calculateCartTotal, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
