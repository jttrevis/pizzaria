import React from "react"
import { Container, Content } from "./styles"



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
         />
      </Content>

      <div >
       <h3 className='text-mid'>Check our <Link to="/menu">Menu</Link> </h3>
      </div>
    </Container>
  )
}