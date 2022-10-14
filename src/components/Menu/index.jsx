import React from "react";
import { Container, Content } from "./styles";



import imgCard2 from '../../assets/pizza2.jpg';
import imgCard3 from '../../assets/pizza3.jpg';
import imgCard4 from '../../assets/pizza4.jpg';
import imgCard5 from '../../assets/pizza5.jpg';
import imgCard6 from '../../assets/pizza6.jpg';
import imgCard7 from '../../assets/pizza7.jpg';


export function Menu() {
  return (
    <Container>
      <div>
        <h3>Menu</h3>
      </div>
      <Content>
        <div>
          <img src={imgCard7} alt="pizzaCard" />
        </div>
        <div>
          <img src={imgCard2} alt="pizzaCard" />
        </div>
        <div>
          <img src={imgCard3} alt="pizzaCard" />
        </div>
        <div >
          <img src={imgCard4} alt="pizzaCard" />
        </div>
        <div >
          <img src={imgCard5} alt="pizzaCard" />
        </div>
        <div >
          <img src={imgCard6} alt="pizzaCard" />
        </div>

      </Content>
    </Container>
  )
}