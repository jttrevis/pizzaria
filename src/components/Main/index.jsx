import React from "react"
import { Container, Content } from "./styles"
import pizzaMain from '../../assets/pizza2.jpg'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <Container>
      <Content>
        <img alt="pizzaphoto" src={pizzaMain}></img>
        <div id='main'>
          <span>Only Today!</span>
          <p>Large Pizza + 2lt Coca-Cola</p>
          <p>for only:</p>
          <span>£19.99</span>
          <Link to="/menu"><button className='order-now-btn' >Order Now!</button></Link>
        </div>
      </Content>
    </Container>

  )
}