import React from "react"
import { Container, Content } from "./styles"



import { CardItem } from '../Card'
import { Link } from 'react-router-dom'


export const  Menu = () => {
  return (
    <Container id='menu'>
      <div className='text-mid'>
        <h3>Offers</h3>

      </div>
      <Content >
        <CardItem
         />
      </Content>

      <div >
       <h3 className='text-mid'>Check our <Link to="/menu">Menu</Link> </h3>
      </div>
    </Container>
  )
}