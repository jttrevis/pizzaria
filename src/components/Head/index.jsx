import { useState } from "react";
import logoImg from "../../assets/logo-no-background.png";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { CartModal } from "../CartModal";
import cart from "../../assets/cart.png";
import { useStateContext } from "../../context/StateContext";

export const Head = () => {
  const { qty, totalPrice } = useStateContext();

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  function hanldeOpenCartModal() {
    setIsCartModalOpen(true);
  }

  function hanldeCloseCartModal() {
    setIsCartModalOpen(false);
  }

  return (
    <>
      <Container>
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logoImg} alt="pizzaria logo" />
          </Link>
        </div>
        <div className="cart-container">
          <a href="#/cart" onClick={hanldeOpenCartModal}>
            <img className="cart-icon" src={cart} alt="logo cart"></img>
          </a>
          <span>Item(s) : {qty} </span>
          <span>
            Subtotal :{" "}
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(totalPrice)}
          </span>
        </div>
        <CartModal
          isOpen={isCartModalOpen}
          onRequestClose={hanldeCloseCartModal}
        />
      </Container>
    </>
  );
};
