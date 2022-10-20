import React from 'react'
import logoImg from '../../assets/logo-no-background.png'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export const Head = () => {
  return (
    <Container>
    <nav>
      <div>
        <Link to="/" >< img className="logo" src={logoImg} alt="pizzaria logo" /></Link>
      </div>
    </nav>
  </Container>
  )
}
