import React from "react";
import { Container, Content } from "./styles";
import pizzaMain from "../../assets/pizza2.jpg";
import { Link } from "react-router-dom";
import InViewSection from "../inViewSection/inViewSection";

export const Main = () => {
  return (
    <Container>
      <Content>
        <InViewSection>
          <img alt="pizzaphoto" src={pizzaMain}></img>
        </InViewSection>
        <InViewSection>
          <div id="main">
            <span>Only Today!</span>
            <p>Large Pizza + 2lt Coca-Cola for only:</p>
            <span>£19.99</span>
            <Link to="/menu">
              <button>Order Now!</button>
            </Link>
          </div>
        </InViewSection>
      </Content>
    </Container>
  );
};
