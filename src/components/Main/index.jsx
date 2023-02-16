import React from "react";
import { Container, Content } from "./styles";
import pizzaMain from "../../assets/pizza2.png";
import { Link } from "react-router-dom";
import InViewSection from "../inViewSection/inViewSection";

export const Main = () => {
  return (
    <Container>
      <Content>
        <InViewSection>
          {/* <img alt="pizzaphoto" src={pizzaMain}></img> */}
        </InViewSection>
        <InViewSection>
          <div id="main">
            <span>Only Today!</span>
            <p>Large Pizza + Coke for only:</p>
            <span>£9.99</span>
            <Link to="/menu">
              <button>Order Now!</button>
            </Link>
          </div>
        </InViewSection>
      </Content>
    </Container>
  );
};
