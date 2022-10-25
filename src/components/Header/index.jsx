import React, { useState } from "react"
import { Banner, Container, Content } from "./styles"
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom'
import { CartModal } from '../CartModal'

import logoImg from '../../assets/logo-no-background.png'





export const  Header = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false)


  function hanldeOpenCartModal() {
    setIsCartModalOpen(true)
  }

  function hanldeCloseCartModal() {
    setIsCartModalOpen(false)
  }

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
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link onClick={hanldeOpenCartModal} ><img src={cart} alt="logo cart" ></img></Link>

          </li>
        </ul>

        <Banner>
          <span>Stoned Baked Pizza</span>
          <h1>Pizzaria Trevisol</h1>
          <h2>120 years of experencie </h2>
        </Banner>
        <CartModal
        ariaHideApp={false}
        isOpen={isCartModalOpen}
        onRequestClose={hanldeCloseCartModal}
        />
      </Content>
    </Container>
  )
}