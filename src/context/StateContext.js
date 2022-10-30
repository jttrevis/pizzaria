import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);

  const onAdd = (product) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);

    setCartItems([...cartItems, { ...product }]);
    setQty(cartItems.length + 1);
    toast(`1 ${product.name} added to the cart`, {
      icon: "✅",
    });
  };

  const onRemove = (productRemove) => {
    const newCartItems = cartItems.filter(
      (product) => product !== productRemove
    );

    setTotalPrice((prevTotalPrice) => prevTotalPrice - productRemove.price);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    setCartItems(newCartItems);
    setQty(cartItems.length - 1);
    if (cartItems.length === 0) {
      setTotalPrice(0);
    }
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
