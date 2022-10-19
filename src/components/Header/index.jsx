import React from "react"
import { Banner, Container, Content } from "./styles"

import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo-no-background.png'
import cart from '../../assets/cart.png'



export const  Header = () => {
  return (
    <Container>
      <Content className='content'>
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link  to="/menu">Menu</Link>
          </li>
          <div>
             <img className="logo" src={logoImg} alt="pizzaria logo" ></img>
          </div>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to='#cart' ><img src={cart} alt="logo cart" ></img></Link>
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