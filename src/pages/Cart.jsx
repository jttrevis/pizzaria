import { Container } from "./CartStyles";

import { AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";

export const Cart = ({ item, isOpen, onRequestClose }) => {
  const { totalPrice, totalQuantities, cartItems, onRemove } =
    useStateContext();

  return (
    <Container>
      <AiOutlineShopping size={50} />
      <h1>Your Cart</h1>
      {cartItems.map((item, index) => (
        <div className="item-container" key={index}>
          <div className="item-cart">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="item-text">
            <h3>{item.name}</h3>
            <h4>£{item.price}</h4>
            <span>Qty: 1x </span>
          </div>
          <button className="remove" onClick={() => onRemove(item)}>
            <TiDeleteOutline size={25} />
          </button>
        </div>
      ))}
      <div className="total">
        <h4>Qty: ({totalQuantities})</h4>
      </div>
      <div className="total">
        <h3>
          Subtotal:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP",
          }).format(totalPrice)}
        </h3>
      </div>
      <button className="btn-checkout">Checkout</button>
    </Container>
  );
};
