import React from "react"
import { Container, Content } from "./styles"



import imgCard2 from '../../assets/pizza2.jpg'
import imgCard3 from '../../assets/pizza3.jpg'
import imgCard4 from '../../assets/pizza4.jpg'
import imgCard5 from '../../assets/pizza5.jpg'
import imgCard6 from '../../assets/pizza6.jpg'
import imgCard7 from '../../assets/pizza7.jpg'
import { PizzaCard } from '../Card'


export const  Menu = () => {
  return (
    <Container id='menu'>
      <div>
        <h3>Menu</h3>
      </div>
      <Content >
          <PizzaCard

            image={imgCard7}
            title="Chicken & Cheese"

            />
          <PizzaCard
            image={imgCard6}
            title="Olives & Cheese"

            />

          <PizzaCard
            image={imgCard5}
            title="Portugal Pizza"

            />

          <PizzaCard
            image={imgCard4}
            title="Four Cheese"
            />

          <PizzaCard
            image={imgCard3}
            title="Hawai"
            />

          <PizzaCard
            image={imgCard2}
            title="Peperoni"
            />
      </Content>
    </Container>
  )
}