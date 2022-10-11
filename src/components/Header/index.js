import React from "react";
import { Banner, Container, Content } from "./styles";

import logoImg from '../../assets/logo-no-background.png';
import cart from '../../assets/cart.png';



export function Header() {
  return (
    <Container>
      <Content>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <img className="logo" src={logoImg} alt="pizzaria logo" ></img>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#cart"><img src={cart} alt="logo cart" ></img></a>
          </li>
        </ul>

        <Banner>
          <span>Stoned Baked Pizza</span>
          <h1>Pizzaria Trevisol</h1>
          <h2>120 years of experencie </h2>
        </Banner>
      </Content>
    </Container>
  )
}