import Modal from 'react-modal'

import { Container } from './style'
import { useStateContext } from '../../context/StateContext'

import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'

export const CartModal = ({isOpen, onRequestClose}) => {
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext()



  return (

      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <Container>


        <AiOutlineShopping size={50} />
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div key={item._id}>
              <h5>{item.name}</h5>
              <h4>£{item.price}</h4>
            </div>
          ))}
            <button
            >
              Checkout
            </button>
        </Container>
      </Modal>

  )
}
