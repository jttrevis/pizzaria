import {
  AiOutlineShopping,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";
import { Container } from "./CartStyles";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { motion } from "framer-motion";

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
    deleteFromCart,
  } = useContext(CartContext);

  const itemCount = (id) => {
    return cartItems.reduce((total, item) => {
      if (item.id === id) {
        return total + item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      animate={{
        y: "0",
      }}
    >
      <Container>
        <AiOutlineShopping size={50} />
        <h1>Your Cart</h1>
        {cartItems.map((item, index) => (
          <>
            <div className="item-container" key={index}>
              <div className="item-cart">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-text">
                <h3>{item.name}</h3>
                <h4>{formatter.format(item.price)}</h4>
                <div className="quantity">
                  <AiOutlineMinusCircle
                    size={30}
                    color="gold"
                    onClick={() => removeFromCart(item.id)}
                  ></AiOutlineMinusCircle>

                  <span>{itemCount(item.id)}</span>
                  <AiOutlinePlusCircle
                    size={30}
                    color="gold"
                    onClick={() => addToCart(item)}
                  ></AiOutlinePlusCircle>
                </div>
              </div>
              <button
                className="remove"
                onClick={() => deleteFromCart(item.id)}
              >
                <TiDeleteOutline color="red" size={30} />
              </button>
            </div>
          </>
        ))}
        <div className="total">
          <h4>Qty: ({totalItems})</h4>
        </div>
        <div className="total">
          <h3>Subtotal:({formatter.format(totalPrice)})</h3>
        </div>
        <button className="btn-checkout">Checkout</button>
      </Container>
    </motion.div>
  );
};
