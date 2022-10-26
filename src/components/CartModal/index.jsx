import Modal from 'react-modal'

import { Container } from './style'
import { useStateContext } from '../../context/StateContext'

import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'

export const CartModal = ({item, isOpen, onRequestClose}) => {
  const { totalPrice, totalQuantities, cartItems} = useStateContext()



  return (

      <Modal

        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <Container

        >


        <AiOutlineShopping size={50} />

          <h1>Your Cart</h1>
          {cartItems.map((item) => (
            <div className='item-container' key={item.name}>
              <div className='item-cart' >
                <img src={item.image} />
                <h5>{item.name}</h5>
                <h4>£{item.price}</h4>
              </div>
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
            <button
            >
              Checkout
            </button>
        </Container>
      </Modal>

  )
}
