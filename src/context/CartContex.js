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
    const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);

    if (existingItem && existingItem.quantity > 1) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== itemId)
      );
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
