import { Container } from "./CartStyles";

import {
  AiOutlineShopping,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";

export const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, onRemove, onAdd } =
    useStateContext();

  const itemCount = (id) => {
    return cartItems.reduce((total, item) => {
      if (item.id === id) {
        return total + item.quantity;
      }
      return total;
    }, 0);
  };

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
            <div>
              <AiOutlineMinusCircle
                size={30}
                color="gold"
                onClick={() => onRemove(item)}
              ></AiOutlineMinusCircle>

              <AiOutlinePlusCircle
                size={30}
                color="gold"
                onClick={() => onAdd(item)}
              ></AiOutlinePlusCircle>
            </div>
            <span>
              Qty:<span>{itemCount(item.id)}</span>{" "}
            </span>
          </div>
          <button className="remove" onClick={() => onRemove(item)}>
            <TiDeleteOutline size={30} />
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
