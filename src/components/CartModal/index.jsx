import Modal from 'react-modal'

import { Container } from './style'
import { useStateContext } from '../../context/StateContext'

import {AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'

export const CartModal = ({item, isOpen, onRequestClose}) => {
  const { totalPrice, totalQuantities, cartItems, onRemove} = useStateContext()



  return (

    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <Container>


        <AiOutlineShopping size={50} />
          <h1>Your Cart</h1>
          {cartItems.map((item, index) => (
          <div className='item-container' key={index}>
            <div className='item-cart' >
              <img src={item.image} />
            </div>
            <div className='item-text'>
              <h3>{item.name}</h3>
              <h4>£{item.price}</h4>
              <span>Qty: ( 1x )  </span>
            </div>
            <button className='remove' onClick={() => onRemove(item)}><TiDeleteOutline size={25}/></button>
          </div>

          ))}
            <div className='total'>
                <h4>Qty: ({totalQuantities})</h4>
            </div>
            <div className='total'>
              <h3>Total:{new Intl.NumberFormat('en-GB', {
                          style: 'currency',
                          currency: 'GBP'
                      }).format(totalPrice)}</h3>
            </div>
          <button className='btn-checkout'>
            Checkout
          </button>


      </Container>
    </Modal>

  )
}
