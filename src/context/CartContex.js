import React, { useState, createContext } from "react";
import { toast } from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity++;
      setCartItems(newCartItems);
      toast(`${item.name} added to the cart`, {
        icon: "✅",
      });
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      toast(`${item.name} added to the cart`, {
        icon: "✅",
      });
    }

    setTotalItems(totalItems + 1);
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromCart = (itemId) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (existingItemIndex !== -1) {
      const existingItem = cartItems[existingItemIndex];

      if (existingItem.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
      } else {
        const newCartItems = [...cartItems];
        newCartItems[existingItemIndex].quantity--;
        setCartItems(newCartItems);
      }

      setTotalItems(totalItems - 1);
      setTotalPrice(totalPrice - existingItem.price);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
