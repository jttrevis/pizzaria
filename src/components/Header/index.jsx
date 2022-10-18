import React from "react"
import { Banner, Container, Content } from "./styles"

import {Link} from 'react-scroll'
import logoImg from '../../assets/logo-no-background.png'
import cart from '../../assets/cart.png'



export const  Header = () => {
  return (
    <Container>
      <Content>
        <ul>
          <li>
            <Link spy={true} smooth={true} offset={50} duration={500} to="home">Home</Link>
          </li>
          <li>
            <Link spy={true} smooth={true} offset={50} duration={500} to="menu">Menu</Link>
          </li>
          <img className="logo" src={logoImg} alt="pizzaria logo" ></img>
          <li>
            <Link spy={true} smooth={true} offset={50} duration={500} to="contact">Contact</Link>
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