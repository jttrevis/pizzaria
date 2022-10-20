import React from 'react'
import { Head } from '../components/Head'
import { PizzaCard } from '../components/Card'
import { Footer } from '../components/Footer'
import imgCard7 from '../assets/pizza7.jpg'
import imgCard2 from '../assets/pizza2.jpg'
import imgCard3 from '../assets/pizza3.jpg'
import imgCard4 from '../assets/pizza4.jpg'
import imgCard5 from '../assets/pizza5.jpg'
import imgCard6 from '../assets/pizza6.jpg'

import refri1 from '../assets/refri1.jpg'
import refri2 from '../assets/refri2.jpg'
import refri3 from '../assets/refri3.jpg'
import refri4 from '../assets/refri4.jpg'
import beer1 from '../assets/beer1.jpg'
import beer2 from '../assets/beer2.jpg'

import fries1 from '../assets/fries1.jpg'
import fries2 from '../assets/fries2.jpg'
import wings1 from '../assets/wings1.jpg'
import wings2 from '../assets/wings2.jpg'
import wings3 from '../assets/wings3.jpg'
import nachos from '../assets/nachos.jpg'

import { Content, Container } from './Menu.style'



export const MenuPage = () => {
  return (
    <Container>
      <Head/>
      <section>
      <Content>
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
      </section>

      <section>
        <Content>

          <PizzaCard
          image={fries1}
          title="Fries"
          />
          <PizzaCard
          image={fries2}
          title="Fries with cheese"
          />
          <PizzaCard
          image={wings1}
          title="Wings"
          />
          <PizzaCard
          image={wings2}
          title="Wings BBQ"
          />
          <PizzaCard
          image={wings3}
          title="Fried Wings"
          />
          <PizzaCard
          image={nachos}
          title="Nachos"
          />
        </Content>
      </section>





      <section>
        <Content>
          <PizzaCard
          image={refri1}
          title="Pepsi"
          />
          <PizzaCard
          image={refri4}
          title="Dr Peper"
          />
          <PizzaCard
          image={refri2}
          title="Coca Cola 500ml"
          />
          <PizzaCard
          image={refri3}
          title="Coca Cola 300ml"
          />
          <PizzaCard
          image={beer2}
          title="Budweiser"
          />
          <PizzaCard
          image={beer1}
          title="Henekein"
          />
        </Content>
      </section>

      <Footer/>
    </Container>
  )
}
