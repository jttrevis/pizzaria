import React from "react"
import { Container, Content } from "./styles"



import imgCard3 from '../../assets/pizza3.jpg'
import imgCard4 from '../../assets/pizza4.jpg'
import imgCard6 from '../../assets/pizza6.jpg'
import { PizzaCard } from '../Card'
import { Link } from 'react-router-dom'


export const  Menu = () => {
  return (
    <Container id='menu'>
      <div className='text-mid'>
        <h3>Offers</h3>

      </div>
      <Content >

          <PizzaCard
            image={imgCard6}
            title="Olives & Cheese"
            />
          <PizzaCard
            image={imgCard4}
            title="Four Cheese"
            />
          <PizzaCard
            image={imgCard3}
            title="Hawai"
            />

      </Content>

      <div >
       <h3 className='text-mid'>Check our <Link to="/menu">Menu</Link> </h3>
      </div>
    </Container>
  )
}