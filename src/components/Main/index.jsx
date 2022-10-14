import React from "react";
import { Container, Content } from "./styles";
import pizzaMain from '../../assets/pizza2.jpg'

export function Main() {
  return (
    <Container>
      <Content>
        <img alt="pizzaphoto" src={pizzaMain}></img>
        <div>
          <span>Only Today!</span>
          <p>Large Pizza + 2lt Coca-Cola</p>
          <p>for only:</p>
          <span>£19.99</span>
          <button>Order Now!</button>
        </div>
      </Content>
    </Container>

  )
}