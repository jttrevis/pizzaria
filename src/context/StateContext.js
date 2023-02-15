import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);

  const onAdd = (product) => {
    const { price, id, name } = product;

    const existingProduct = cartItems.find((item) => item.id === id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCartItems);
      setQty((qty) => qty + 1);

      toast(`1 ${name} added to the cart`, {
        icon: "✅",
      });
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setQty((qty) => qty + 1);

      toast(`1 ${name} added to the cart`, {
        icon: "✅",
      });
    }

    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
  };

  const onRemove = (productRemove) => {
    const existingProduct = cartItems.find(
      (item) => item.id === productRemove.id
    );

    if (existingProduct.quantity === 1) {
      const newCartItems = cartItems.filter(
        (product) => product !== productRemove
      );
      setCartItems(newCartItems);
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === productRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItems(updatedCartItems);
    }

    setTotalPrice((prevTotalPrice) => prevTotalPrice - productRemove.price);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    setQty((prevQty) => prevQty - 1);
  };

  const getItemQty = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
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
        getItemQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
