import {useState} from 'react'
import logoImg from '../../assets/logo-no-background.png'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { CartModal } from '../CartModal'
import cart from '../../assets/cart.png'

export const Head = () => {

  const [isCartModalOpen, setIsCartModalOpen] = useState(false)


  function hanldeOpenCartModal() {
    setIsCartModalOpen(true)
  }

  function hanldeCloseCartModal() {
    setIsCartModalOpen(false)
  }

  return (
    <Container>
      <div className='logo-container' >
        <Link to="/" >< img className="logo" src={logoImg} alt="pizzaria logo" /></Link>
      </div>
      <div className='cart-container'>
        <a onClick={hanldeOpenCartModal} ><img src={cart} alt="logo cart" ></img></a>
      </div>
    <CartModal
        isOpen={isCartModalOpen}
        onRequestClose={hanldeCloseCartModal}
        />
  </Container>
  )
}
